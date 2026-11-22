/* 완료 분류만 남긴 최소판 — 업무 기록실(메뉴·저장 기록)은 사용자 지시로 삭제됨. 활성 목록에서 완료 건을 걸러내는 분류 로직만 유지한다. */
(function(root){
  'use strict';
  const DAY=24*60*60*1000;
  function completed(it){return !!it && ['completed','closed','done'].includes(it.status);}
  function time(it){
    const value=it && it.completed_at;
    const parts=typeof value==='string'&&/^(\d{4})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(?:\.\d+)?)?(Z|[+-](\d\d):(\d\d))$/.exec(value);
    if(!parts)return null;
    const [,year,month,day,hour,minute,second,zone,offsetHour,offsetMinute]=parts;
    const y=Number(year),m=Number(month),d=Number(day);
    if(y<1000||m<1||m>12||d<1||d>new Date(Date.UTC(y,m,0)).getUTCDate()||Number(hour)>23||Number(minute)>59||Number(second||0)>59||(zone!=='Z'&&(Number(offsetHour)>23||Number(offsetMinute)>59)))return null;
    const n=Date.parse(value);return Number.isFinite(n)?n:null;
  }
  function bucket(it,now=Date.now()){
    if(!completed(it))return 'active';
    const t=time(it);
    if(t===null||t>now)return 'unknown';
    return now-t>=DAY?'archived':'recent';
  }
  function normalize(value,room,origin){
    const it=typeof value==='string'?{title:value,status:'completed'}:value;
    if(!it||typeof it.title!=='string'||!it.title.trim())return null;
    return {...it,title:it.title.trim(),room:it.room||room||'',id:it.id||JSON.stringify([it.room||room||'',it.title.trim()]),source:it.source||origin};
  }
  function visibleDone(values,room){return (values||[]).map(v=>normalize(v,room,'reports.'+room+'.done')).filter(it=>it&&bucket(it)!=='archived').map(it=>it.title);}
  const api={DAY,completed,time,bucket,normalize,visibleDone};
  root.TaskArchive=api;
  if(typeof module!=='undefined')module.exports=api;
})(typeof window!=='undefined'?window:globalThis);
