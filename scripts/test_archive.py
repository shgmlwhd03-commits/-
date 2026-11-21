#!/usr/bin/env python3
import importlib.util,json,subprocess,tempfile,unittest
from pathlib import Path
spec=importlib.util.spec_from_file_location('accumulator',Path(__file__).with_name('accumulate_archive.py'));a=importlib.util.module_from_spec(spec);spec.loader.exec_module(a)

class PreservationTests(unittest.TestCase):
    def test_new_reopen_remove_and_repeat(self):
        archive={'records':[]}
        task={'id':'synthetic-task-1','room':'test','title':'Synthetic completion','status':'completed','completed_at':'2026-11-20T12:00:00+09:00'}
        archive,n=a.merge(archive,{'tasks':[task]},'synthetic-1');self.assertEqual(n,1)
        repeated,n=a.merge(archive,{'tasks':[task]},'synthetic-1');self.assertEqual(n,0);self.assertEqual(len(repeated['records']),1)
        reopened={**task,'status':'reopened'}
        archive,n=a.merge(archive,{'tasks':[reopened]},'synthetic-2');self.assertEqual(archive['records'][0]['status'],'reopened');self.assertEqual(len(archive['history']),1)
        archive,n=a.merge(archive,{'tasks':[]},'synthetic-3');self.assertEqual(len(archive['records']),1);self.assertEqual(archive['records'][0]['status'],'reopened')
        self.assertEqual(archive['history'][0]['record']['status'],'completed')
    def test_waiting_and_local_approval_are_not_completion(self):
        items=a.collect({'test':{'status':'idle'},'chief':{'items':[{'title':'Approval pending','lane':'blue'}]},'local_approval':True})
        self.assertEqual(items,[])
    def test_unknown_time_and_separate_ids(self):
        archive,n=a.merge({'records':[]},{'reports':{'test':{'done':['Synthetic unknown completion']}},'tasks':[{'id':'repeat-1','room':'test','title':'same title','status':'completed'},{'id':'repeat-2','room':'test','title':'same title','status':'completed'}]},'synthetic')
        self.assertEqual(len(archive['records']),3);self.assertNotIn('completed_at',archive['records'][0])
    def test_chief_explicit_reopen(self):
        self.assertEqual(a.collect({'chief':{'items':[{'id':'chief-1','title':'Synthetic','status':'reopened'}]}})[0]['status'],'reopened')
    def test_ordered_git_replay_preserves_transient_completion(self):
        with tempfile.TemporaryDirectory() as directory:
            root=Path(directory)
            def run(*args):return subprocess.check_output(args,cwd=root,text=True).strip()
            run('git','init','-q');run('git','config','user.name','Synthetic test');run('git','config','user.email','test@example.invalid')
            def commit(status,label):
                (root/'status.json').write_text(json.dumps(status));run('git','add','.');run('git','commit','-qm',label);return run('git','rev-parse','HEAD')
            first=commit({'tasks':[]},'baseline')
            (root/'task-records.json').write_text(json.dumps({'records':[],'last_processed_status_commit':first}))
            task={'id':'transient','title':'Synthetic transient','status':'completed','completed_at':'2026-11-20T12:00:00Z'}
            commit({'tasks':[task]},'completion');commit({'tasks':[{**task,'status':'reopened'}]},'reopen');commit({'tasks':[]},'source removed')
            result=run('python3',str(Path(__file__).with_name('accumulate_archive.py').resolve()))
            archive=json.loads((root/'task-records.json').read_text())
            self.assertEqual(archive['records'][0]['status'],'reopened');self.assertEqual(archive['history'][0]['record']['status'],'completed');self.assertEqual(json.loads(result)['processed_status_revisions'],3)
            before=(root/'task-records.json').read_bytes();run('python3',str(Path(__file__).with_name('accumulate_archive.py').resolve()));self.assertEqual(before,(root/'task-records.json').read_bytes())

if __name__=='__main__':unittest.main()
