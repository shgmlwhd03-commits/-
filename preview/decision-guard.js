/* ================= 🛡️ 결재 중복 접수 차단 (decision-guard.js) =================
   같은 안건의 같은 결정이 두 번 접수되면 결재함에 같은 이슈가 여러 개 생기고
   감시(#피클지시 실행)도 같은 건을 다시 처리한다. 접수 기록을 남겨 두고,
   새 접수 전에 (1) 이 브라우저의 기록 (2) 중계 주제(ntfy)의 최근 메시지
   (3) 열린 결재 이슈를 차례로 확인해 중복이면 접수하지 않는다.
   저장소·전송은 넘겨받게 두어 실제 페이지 밖에서도 그대로 시험할 수 있다. */
(function (root) {
  "use strict";

  var LOG_KEY = "liveoffice_chief_log";
  var LOG_MAX = 120;
  var EXACT_WINDOW_MS = 12 * 60 * 60 * 1000; // 같은 안건 ID + 같은 결정
  var HEAD_WINDOW_MS = 30 * 60 * 1000;       // 제목만 갱신된 같은 안건 + 같은 결정
  var JITTER_WINDOW_MS = 15 * 1000;          // 같은 안건을 15초 안에 다른 결정으로 연타

  function num(v, d) { return (typeof v === "number" && isFinite(v)) ? v : d; }
  function str(v) { return typeof v === "string" ? v.trim() : ""; }

  function store(s) {
    if (s) return s;
    try { return root.localStorage; } catch (e) { return null; }
  }

  /* 안건 ID는 "레인|방|제목" 형태다. 제목은 진행 상황이 바뀌면 함께 바뀐다. */
  function idParts(id) {
    var parts = str(id).split("|");
    return { lane: parts[0] || "", room: parts[1] || "", title: parts.slice(2).join("|") };
  }

  /* 제목에서 진행 상황(—, ·) 뒤를 떼어 "같은 안건"인지 비교할 머리글을 만든다. */
  function headOf(title) {
    var t = str(title);
    if (!t) return "";
    var cut = t.split(/[—–·]/)[0];
    return (cut || t).trim().slice(0, 80);
  }

  function agendaKey(rec) {
    var r = rec || {};
    var p = idParts(r.id);
    return p.lane + "|" + p.room + "|" + headOf(r.title || p.title);
  }

  function readLog(s) {
    var st = store(s);
    if (!st) return [];
    var raw = null;
    try { raw = st.getItem(LOG_KEY); } catch (e) { return []; }
    if (!raw) return [];
    var list = null;
    try { list = JSON.parse(raw); } catch (e) { return []; }
    if (!Array.isArray(list)) return [];
    return list.filter(function (r) { return r && typeof r === "object" && str(r.id); });
  }

  function writeLog(s, list) {
    var st = store(s);
    if (!st) return false;
    try { st.setItem(LOG_KEY, JSON.stringify(list.slice(0, LOG_MAX))); return true; }
    catch (e) { return false; }
  }

  /* 접수가 끝난 건만 기록한다(보내기 전·실패·불명은 기록하지 않는다). */
  function remember(s, rec) {
    var r = rec || {};
    if (!str(r.id) || !str(r.state)) return false;
    var entry = {
      id: str(r.id),
      title: str(r.title),
      state: str(r.state),
      channel: str(r.channel) || "unknown",
      ref: str(r.ref),
      at: num(r.at, Date.now())
    };
    return writeLog(s, [entry].concat(readLog(s)));
  }

  function clockOf(ms) {
    try {
      return new Date(num(ms, Date.now())).toLocaleTimeString("ko-KR", {
        timeZone: "Asia/Seoul", hour: "2-digit", minute: "2-digit", hour12: false
      });
    } catch (e) { return ""; }
  }

  /* 이 브라우저 기록으로 중복인지 본다. */
  function check(s, opt) {
    var o = opt || {};
    var id = str(o.id);
    var state = str(o.state);
    if (!id || !state) return { blocked: false };
    var t = num(o.now, Date.now());
    var key = agendaKey({ id: id, title: o.title });
    var log = readLog(s);
    for (var i = 0; i < log.length; i++) {
      var r = log[i];
      var age = t - num(r.at, 0);
      if (age < 0) age = 0;
      var sameId = str(r.id) === id;
      var sameAgenda = sameId || agendaKey(r) === key;
      var sameState = str(r.state) === state;
      if (sameAgenda && sameState && age <= (sameId ? EXACT_WINDOW_MS : HEAD_WINDOW_MS)) {
        return {
          blocked: true,
          kind: sameId ? "same" : "recent",
          receipt: r,
          at: clockOf(r.at),
          ageMs: age
        };
      }
      if (sameId && !sameState && age <= JITTER_WINDOW_MS) {
        return { blocked: true, kind: "jitter", receipt: r, at: clockOf(r.at), ageMs: age };
      }
    }
    return { blocked: false };
  }

  /* ntfy /json 응답(한 줄에 메시지 하나)에서 같은 안건의 같은 결정을 찾는다. */
  function scanRelay(text, opt) {
    var o = opt || {};
    var id = str(o.id);
    var state = str(o.state);
    if (!id) return { checked: true, blocked: false, found: 0 };
    var lines = String(text || "").split("\n");
    var found = 0, blocked = null;
    for (var i = 0; i < lines.length; i++) {
      var line = lines[i].trim();
      if (!line) continue;
      var ev = null;
      try { ev = JSON.parse(line); } catch (e) { continue; }
      if (!ev || ev.event !== "message") continue;
      var payload = null;
      try { payload = JSON.parse(ev.message); } catch (e) { payload = null; }
      if (!payload || str(payload.id) !== id) continue;
      found += 1;
      if (str(payload.state) === state) {
        blocked = { id: str(payload.id), state: str(payload.state), relayId: str(ev.id), at: num(ev.time, 0) * 1000 };
        break;
      }
    }
    return { checked: true, blocked: !!blocked, receipt: blocked, found: found };
  }

  /* 중계 주제에 남아 있는 최근 12시간 메시지를 읽어 다른 기기에서 이미 접수했는지 본다.
     확인에 실패하면(차단·오프라인) 접수를 막지 않고 "확인 못 함"으로 돌려준다. */
  function remoteRelay(topic, opt, deps) {
    var o = opt || {};
    var d = deps || {};
    var f = d.fetch || root.fetch;
    var key = str(topic);
    if (!f || !key || !str(o.id)) return Promise.resolve({ checked: false });
    var url = "https://ntfy.sh/" + encodeURIComponent(key) + "/json?poll=1&since=12h";
    var ctl = null, timer = null;
    try {
      if (typeof root.AbortController === "function") {
        ctl = new root.AbortController();
        timer = setTimeout(function () { try { ctl.abort(); } catch (e) {} }, num(o.timeoutMs, 4000));
      }
    } catch (e) { ctl = null; }
    var init = { method: "GET", headers: { "Accept": "application/json" } };
    if (ctl) init.signal = ctl.signal;
    return f(url, init).then(function (res) {
      if (!res || !res.ok) return { checked: false };
      return res.text().then(function (text) { return scanRelay(text, o); });
    }).catch(function () {
      return { checked: false };
    }).then(function (out) {
      if (timer) clearTimeout(timer);
      return out;
    });
  }

  function decisionOf(body) {
    var m = /(?:^|\n)\s*결정:\s*(\S+)/.exec(String(body || ""));
    return m ? m[1].trim() : "";
  }

  function hasAgendaId(body, id) {
    var lines = String(body || "").split("\n");
    for (var i = 0; i < lines.length; i++) {
      if (lines[i].trim() === "안건 ID: " + id) return true;
    }
    return false;
  }

  /* 열린 결재 이슈 중 같은 안건을 찾는다(다른 기기·저장소 초기화 뒤에도 중복 이슈를 막는다). */
  function findOpenIssue(issues, opt) {
    var o = opt || {};
    var id = str(o.id);
    if (!id || !Array.isArray(issues)) return null;
    for (var i = 0; i < issues.length; i++) {
      var iss = issues[i];
      if (!iss || typeof iss !== "object") continue;
      if (str(iss.state) && str(iss.state) !== "open") continue;
      if (!hasAgendaId(iss.body, id)) continue;
      return {
        number: num(iss.number, 0),
        url: str(iss.html_url) || str(iss.url),
        decision: decisionOf(iss.body)
      };
    }
    return null;
  }

  root.LODecisionGuard = {
    LOG_KEY: LOG_KEY,
    windows: { exact: EXACT_WINDOW_MS, head: HEAD_WINDOW_MS, jitter: JITTER_WINDOW_MS },
    headOf: headOf,
    agendaKey: agendaKey,
    readLog: readLog,
    remember: remember,
    check: check,
    scanRelay: scanRelay,
    remoteRelay: remoteRelay,
    findOpenIssue: findOpenIssue,
    clockOf: clockOf
  };
})(typeof window !== "undefined" ? window : this);
