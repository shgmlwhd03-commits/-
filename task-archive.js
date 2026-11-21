/* Completion is source data, never a browser approval choice. */
(function(root){
  'use strict';
  const DAY=24*60*60*1000;
  function completed(it){return !!it && ['completed','closed','done'].includes(it.status);}
  function time(it){
    const value=it && it.completed_at;
    if(typeof value!=='string'||!/^\d{4}-\d\d-\d\dT\d\d:\d\d(?::\d\d(?:\.\d+)?)?(?:Z|[+-]\d\d:\d\d)$/.test(value))return null;
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
  function collect(status){
    const out=[];
    Object.entries(status?.reports||{}).forEach(([room,report])=>(report.done||[]).forEach(value=>{const it=normalize(value,room,'reports.'+room+'.done');if(it)out.push(it);}));
    (status?.tasks||[]).forEach(value=>{const it=normalize(value,'','tasks');if(it)out.push(it);});
    (status?.chief?.items||[]).forEach(value=>{if(completed(value)){const it=normalize(value,value.room,'chief.items');if(it)out.push(it);}});
    return out;
  }
  let saved=[], current=[], loadError=false, boundaryTimer=null;
  function scheduleBoundary(){
    clearTimeout(boundaryTimer); const now=Date.now();
    const next=records().filter(completed).map(it=>time(it)).filter(t=>t!==null&&t<=now&&t+DAY>now).map(t=>t+DAY).sort((a,b)=>a-b)[0];
    if(next!==undefined)boundaryTimer=setTimeout(()=>{paint();root.archiveReclassify?.();scheduleBoundary();},Math.min(2147483647,Math.max(1,next-now)));
  }
  function records(){const map=new Map();saved.forEach(x=>map.set(x.id,x));current.forEach(x=>map.set(x.id,x));return [...map.values()];}
  function roomName(id){return typeof rooms!=='undefined'?(rooms.find(x=>x.id===id)?.title||id||'공통'):id;}
  const escape=value=>String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  function paint(){
    if(typeof document==='undefined')return;
    const body=document.getElementById('archive-list');if(!body)return;
    const all=records(), now=Date.now(), counts={archived:0,recent:0,unknown:0,active:0};all.forEach(it=>counts[bucket(it,now)]++);
    document.getElementById('archive-count').textContent=counts.archived;
    document.getElementById('archive-stats').textContent=`24시간 경과 ${counts.archived}건 · 24시간 이내 ${counts.recent}건 · 완료시각 미상/확인 필요 ${counts.unknown}건`;
    document.getElementById('archive-error').hidden=!loadError;
    const q=document.getElementById('archive-query').value.trim().toLowerCase(), filter=document.getElementById('archive-filter').value;
    const filtered=all.filter(it=>bucket(it,now)===filter&&(!q||(it.title+' '+(it.detail||'')+' '+roomName(it.room)).toLowerCase().includes(q)));
    body.innerHTML=filtered.length?filtered.map(it=>{
      const t=time(it), st=bucket(it,now);
      const when=t===null?'완료시각 미상 · 자동 이동 보류':t>now?'미래 완료시각 · 확인 필요':new Date(t).toLocaleString('ko-KR',{timeZone:'Asia/Seoul',hour12:false})+' KST';
      return `<article class="archive-card"><b>${escape(it.title)}</b><span>${escape(roomName(it.room))} · ${st==='archived'?'기록실 보관':st==='recent'?'최근 완료':'완료 보고 · 시각 확인 필요'}</span><small>${escape(when)}</small>${it.detail?`<p>${escape(it.detail)}</p>`:''}<details><summary>기록 근거</summary><small>${escape(it.source||'구조화 업무 기록')}</small></details></article>`;
    }).join(''):'<p class="archive-empty">이 구분에 해당하는 기록이 없습니다.</p>';
  }
  function ingest(status){current=collect(status);paint();scheduleBoundary();}
  function visibleDone(values,room){return (values||[]).map(v=>normalize(v,room,'reports.'+room+'.done')).filter(it=>it&&bucket(it)!=='archived').map(it=>it.title);}
  const api={DAY,completed,time,bucket,normalize,collect,records,paint,ingest,visibleDone};
  root.TaskArchive=api;
  if(typeof module!=='undefined')module.exports=api;
  if(typeof document!=='undefined'){
    document.addEventListener('DOMContentLoaded',async()=>{
      document.getElementById('archive-query')?.addEventListener('input',paint);
      document.getElementById('archive-filter')?.addEventListener('change',paint);
      try{const r=await fetch('./task-records.json',{cache:'no-store'});if(!r.ok)throw Error();const data=await r.json();saved=Array.isArray(data.records)?data.records:[];}catch(e){loadError=true;}
      paint();scheduleBoundary();
    });
  }
})(typeof window!=='undefined'?window:globalThis);
