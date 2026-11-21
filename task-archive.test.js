const assert=require('node:assert/strict');
const archive=require('./task-archive.js');
const now=Date.parse('2026-11-22T00:00:00+09:00');
for(const [delta,want] of [[archive.DAY-1,'recent'],[archive.DAY,'archived'],[archive.DAY+1,'archived'],[-1,'unknown']]){
  assert.equal(archive.bucket({status:'completed',completed_at:new Date(now-delta).toISOString()},now),want);
}
for(const status of ['waiting','pending','approved','working','reopened']){
  assert.equal(archive.bucket({status,completed_at:'2020-01-01T00:00:00+09:00'},now),'active');
}
for(const completed_at of [null,'12:00','2026-11-20','2026-11-20T12:00:00','2026-02-30T12:00:00+09:00','2026-11-20T25:00:00+09:00','bad']){
  assert.equal(archive.bucket({status:'completed',completed_at},now),'unknown');
}
archive.ingest(require('./status.json'));
const snapshot=require('./task-records.json');
assert.equal(archive.records().length,snapshot.records.length);
assert(archive.records().every(it=>archive.bucket(it,now)==='unknown'));
assert.equal(new Set(snapshot.records.map(it=>it.id)).size,snapshot.records.length);
console.log('PASS: exact 24-hour boundary, unfinished tasks, unknown/future/invalid times, source count and unique IDs');
