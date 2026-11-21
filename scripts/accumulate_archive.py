#!/usr/bin/env python3
"""Accumulate only explicit task records already present in status.json.
No Slack access, semantic inference, timestamps inferred from commits, or source writes.
"""
import argparse,copy,json,subprocess
from pathlib import Path

DONE={'completed','closed','done'}
def normalize(value, room='', source=''):
    value={'title':value,'status':'completed'} if isinstance(value,str) else value
    if not isinstance(value,dict) or not isinstance(value.get('title'),str) or not value['title'].strip():
        return None
    item=copy.deepcopy(value)
    item['title']=item['title'].strip()
    item['room']=item.get('room') or room
    item['id']=item.get('id') or json.dumps([item['room'],item['title']],ensure_ascii=False,separators=(',',':'))
    if not isinstance(item['id'],str) or not isinstance(item['room'],str):
        raise ValueError('task id/room must be strings')
    item['source']=item.get('source') or source
    return item

def collect(status):
    out=[]
    for room,report in status.get('reports',{}).items():
        if not isinstance(report,dict):continue
        for value in report.get('done',[]):
            item=normalize(value,room,'status.json reports.'+room+'.done')
            if item:out.append(item)
    for value in status.get('tasks',[]):
        item=normalize(value,source='status.json tasks')
        if item:out.append(item)
    for value in status.get('chief',{}).get('items',[]):
        if not isinstance(value,dict):continue
        if value.get('status') in DONE or (value.get('id') and value.get('status')):
            item=normalize(value,value.get('room',''),'status.json chief.items')
            if item:out.append(item)
    return out

def merge(archive,status,revision):
    result=copy.deepcopy(archive)
    records={it['id']:it for it in result.get('records',[])}
    history=result.setdefault('history',[])
    changed=0
    for item in collect(status):
        old=records.get(item['id'])
        if old==item:continue
        if old is not None:
            history.append({'task_id':item['id'],'replaced_at_source_commit':revision,'record':old})
        records[item['id']]=item;changed+=1
    result['schema_version']=1
    result['records']=list(records.values())
    result['last_processed_status_commit']=revision
    return result,changed

def git(*args):
    return subprocess.check_output(['git',*args],text=True).strip()

def accumulate(root):
    path=Path(root)/'task-records.json'
    archive=json.loads(path.read_text()) if path.exists() else {'schema_version':1,'records':[]}
    cursor=archive.get('last_processed_status_commit')
    head=git('rev-parse','HEAD')
    if cursor:
        subprocess.run(['git','merge-base','--is-ancestor',cursor,head],check=True,capture_output=True)
        revisions=git('log','--reverse','--format=%H',cursor+'..'+head,'--','status.json').splitlines()
    else:
        revisions=[head]
    total=0
    for revision in revisions:
        status=json.loads(git('show',revision+':status.json'))
        archive,count=merge(archive,status,revision);total+=count
    encoded=json.dumps(archive,ensure_ascii=False,indent=2)+'\n'
    if not path.exists() or path.read_text()!=encoded:
        path.write_text(encoded)
    print(json.dumps({'processed_status_revisions':len(revisions),'changed_records':total,'preserved_records':len(archive['records']),'history_revisions':len(archive.get('history',[]))}))
    return archive

if __name__=='__main__':
    parser=argparse.ArgumentParser();parser.add_argument('--root',default='.');args=parser.parse_args()
    accumulate(args.root)
