#!/usr/bin/env python3
"""Run after the existing status sync, also on no-change cycles.
Owns only task-records.json. Uses explicit structured source records, never Slack.
"""
import argparse,base64,glob,json,time,urllib.error,urllib.parse,urllib.request
from pathlib import Path
from accumulate_archive import merge

REPO='shgmlwhd03-commits/-'

def main():
    parser=argparse.ArgumentParser();parser.add_argument('--token-path');parser.add_argument('--branches',nargs='+',default=['main','gh-pages']);parser.add_argument('--dry',action='store_true');args=parser.parse_args()
    if any(b not in ('main','gh-pages') and not b.startswith('archive-test/') for b in args.branches):raise SystemExit('Branch outside archive scope')
    matches=glob.glob('/home/sandbox/.vault/github-shgmlwhd03-commits-token-*/password')
    token=Path(args.token_path or matches[0]).read_text().strip()
    def api(method,path,body=None):
        request=urllib.request.Request('https://api.github.com/repos/'+REPO+path,method=method,data=json.dumps(body).encode() if body is not None else None,headers={'Authorization':'Bearer '+token,'Accept':'application/vnd.github+json','Content-Type':'application/json','User-Agent':'task-archive-sync'})
        with urllib.request.urlopen(request,timeout=30) as response:return json.load(response)
    def content(path,ref):
        item=api('GET','/contents/'+path+'?ref='+urllib.parse.quote(ref,safe=''))
        return item,json.loads(base64.b64decode(item['content']))
    for branch in args.branches:
        for attempt in range(3):
            file,archive=content('task-records.json',branch)
            cursor=archive.get('last_processed_status_commit')
            revisions=[];found=not bool(cursor)
            # Keep bounded API work. If cursor is not recovered, stop rather than skip history.
            for page in range(1,11):
                entries=api('GET','/commits?sha='+urllib.parse.quote(branch,safe='')+'&path=status.json&per_page=100&page='+str(page))
                for entry in entries:
                    if entry['sha']==cursor:found=True;break
                    revisions.append(entry['sha'])
                    if not cursor:break
                if found or len(entries)<100:break
            if not found:raise SystemExit('Archive source cursor not found; preserve existing records and ask owner to review history')
            changed=0
            for revision in reversed(revisions):
                _,status=content('status.json',revision)
                archive,n=merge(archive,status,revision);changed+=n
            # No new source revision means no write, including no heartbeat timestamp.
            if not revisions:
                print(json.dumps({'branch':branch,'status':'no_change','preserved_records':len(archive.get('records',[]))}));break
            if args.dry:
                print(json.dumps({'branch':branch,'status':'dry','processed_source_revisions':len(revisions),'changed_records':changed,'preserved_records':len(archive['records'])}));break
            try:
                result=api('PUT','/contents/task-records.json',{'message':'archive: preserve source task record revisions','content':base64.b64encode((json.dumps(archive,ensure_ascii=False,indent=2)+'\n').encode()).decode(),'sha':file['sha'],'branch':branch})
            except urllib.error.HTTPError as error:
                if error.code in (409,422) and attempt<2:time.sleep(1);continue
                raise
            print(json.dumps({'branch':branch,'status':'committed','processed_source_revisions':len(revisions),'changed_records':changed,'preserved_records':len(archive['records']),'commit_url':result['commit']['html_url']}))
            break
        else:raise SystemExit('Archive write retries exhausted')

if __name__=='__main__':main()
