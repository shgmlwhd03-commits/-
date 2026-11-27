#!/usr/bin/env python3
"""2026-11-28 08:28 대표님 지시 반영: 크레딧 최소 운용 · 전담 배정.

- 사무실(LIVE OFFICE) 실시간 전담: 큐가 변경안 취합 → 투덜이 최종 확인 후 GitHub 배포만
- 전 게시판 관리·유지: 뮤즈·큐가 수정안·사전 검수 전담(단순 반복은 지시 범위 내 일꾼) → 투덜이·해병이 실제 클릭만
- 총괄·부총괄은 크레딧 소모 최소화
"""
import json
import sys

PATH = sys.argv[1] if len(sys.argv) > 1 else "status.json"
with open(PATH, encoding="utf-8") as f:
    d = json.load(f)

STAMP = "2026-11-28T08:35:00+09:00"
HHMM = "08:30"

DUTY_TAIL = (
    " 2026-11-28 08:28 대표님 지시: 크레딧 최소 운용 — 총괄·부총괄은 크레딧 소모를 최대한 줄이고 다른 팀원을 활용해 "
    "최적 크레딧을 유지합니다. 사무실(LIVE OFFICE)은 큐(부관리자)가 팀 보고 취합·status.json 변경안(JSON)·요약을 정리하고 "
    "투덜이(총괄)는 최종 확인 후 GitHub 배포만, 전 게시판(티스토리·네이버·스레드·인스타)은 뮤즈(관리자)·큐가 원고 수정안·"
    "사전 검수·목차/링크 점검을 전담(단순 반복은 지시 범위 내 일꾼)하고 투덜이·해병이(부총괄)는 최종 확인과 실제 "
    "발행·비공개 클릭만 합니다."
)

# ---- 1. 머리말 ----
if DUTY_TAIL.strip() not in d.get("_note", ""):
    d["_note"] = (d.get("_note", "").rstrip() + DUTY_TAIL).strip()
d["updated"] = STAMP

# ---- 2. 신규 전담 배정 표 ----
d["duty"] = {
    "title": "크레딧 최소 운용 · 전담 배정 (11/28 08:28 대표님 확정)",
    "note": "초안·취합·사전 검수는 뮤즈·큐(단순 반복은 지시 범위 내 일꾼) → 최종 확인·실제 클릭만 총괄·부총괄",
    "rule": (
        "총괄·부총괄이 직접 하는 일은 최종 판단·승인, 실제 클릭(배포·발행·비공개), 대표님 보고, 🔴 금융·계정 확인뿐입니다. "
        "넘긴 작업도 결과 확인 책임은 지시한 사람에게 있고, 초안 그대로 발행하지 않습니다. "
        "승계 순서(총괄→부총괄→관리자→부관리자)와 일꾼 지시 범위 원칙은 그대로입니다."
    ),
    "updated": HHMM,
    "items": [
        {
            "no": "사무실",
            "task": "LIVE OFFICE 실시간 전담 유지",
            "owner": "큐 → 투덜이",
            "state": "work",
            "note": "큐가 팀 보고 취합·status.json 변경안(JSON)·요약 정리 → 투덜이가 최종 확인 후 GitHub 배포(main·gh-pages)만 수행",
        },
        {
            "no": "게시판",
            "task": "전 게시판(티스토리·네이버·스레드·인스타) 관리·유지",
            "owner": "뮤즈·큐 → 투덜이·해병이",
            "state": "work",
            "note": "뮤즈·큐가 원고 수정안·사전 검수·목차/링크 점검 전담(단순 반복은 지시 범위 내 일꾼) → 투덜이·해병이는 최종 확인과 실제 발행·비공개 클릭만",
        },
        {
            "no": "원칙",
            "task": "총괄·부총괄 크레딧 최소화",
            "owner": "전원",
            "state": "work",
            "note": "조사·초안·검수·반복 확인은 뮤즈·큐·지시받은 일꾼에게 넘기고, 총괄·부총괄은 판단·승인·클릭만 — 최적 크레딧 유지",
        },
        {
            "no": "유지",
            "task": "기존 원칙 그대로",
            "owner": "전원",
            "state": "wait",
            "note": "승계 총괄→부총괄→관리자→부관리자 · 일꾼은 지시받은 작업만 · 4인 상시 수평전개 · 🔴 금융은 대표님 직접",
        },
    ],
}

# ---- 3. 검수 원칙에 '크레딧 최소 운용' 추가 ----
guard = d.setdefault("guard", {})
items = guard.setdefault("items", [])
if not any(it.get("title") == "크레딧 최소 운용" for it in items):
    items.append({
        "title": "크레딧 최소 운용",
        "text": (
            "총괄·부총괄은 조사·초안·사전 검수·반복 확인을 뮤즈·큐·지시받은 일꾼에게 넘기고, 최종 판단·승인과 "
            "실제 클릭(배포·발행·비공개)만 직접 한다. 넘긴 작업도 결과 확인 책임은 지시한 사람에게 있다."
        ),
    })
g_note = guard.get("note", "")
credit_note = (
    " 2026-11-28 08:28 크레딧 최소 운용: 초안·취합·사전 검수는 뮤즈·큐(단순 반복은 지시 범위 내 일꾼)가 맡고, "
    "총괄·부총괄은 최종 확인과 실제 클릭만 합니다."
)
if "크레딧 최소 운용" not in g_note:
    guard["note"] = (g_note.rstrip() + credit_note).strip()
guard["updated"] = HHMM

# ---- 4. 6F 분장표 ----
roster = d.setdefault("roster", {})
roster["updated"] = HHMM
rule = roster.get("rule", "")
credit_rule = " · 총괄·부총괄은 크레딧 소모 최소(초안·검수는 뮤즈·큐·지시받은 일꾼)"
if "크레딧 소모 최소" not in rule:
    roster["rule"] = (rule.rstrip() + credit_rule).strip()
roster["note"] = "역할 별칭으로만 표기 · status.json 동기화 · 08:28 크레딧 최소 운용 배정 반영"

ROLE = {
    "td": (
        "업무 배분·우선순위·최종 팩트체크·전결 승인 → 대표님 상신 · 수익화 4채널 총괄 · "
        "크레딧 최소 운용: 변경안 취합은 큐, 총괄은 최종 확인·GitHub 배포만",
        "on",
        "가동 중(08:28) · 크레딧 최소 운용",
    ),
    "hb": (
        "부총괄 업무 + 관리자 교차검토 · 게시판 최종 확인·실제 발행/비공개 클릭 · 승계 2순위 · 크레딧 최소 운용",
        "on",
        "가동 확인(06:26) · 크레딧 최소 운용",
    ),
    "muse": (
        "관리자 검토(1차) · 게시판 원고 수정안·사전 검수·목차/링크 점검 전담 · 창작소설 공동 집필 · 회의록·아카이브 · 승계 3순위",
        "on",
        "06번 연결 · 자동 응답 미검증",
    ),
    "manus": (
        "부관리자 · 사무실 변경안 취합·정리(총괄 배포 전) · 게시판 사전 검수 · 창작소설·30초 영상 · 승계 마지막(부관리자)",
        "on",
        "08번 연결 · 멘션 응답",
    ),
    "inst": (
        "지시받은 작업만 실행(임의 판단·제안·착수·발행 금지) · 단순 반복(링크·표·이미지 정리)은 지시 범위 내 수행 → 지시한 사람에게 보고",
        "on",
        "가동 중 · 지시 작업만 · 수평전개 제외",
    ),
}
for it in roster.get("items", []):
    if it.get("id") in ROLE:
        it["role"], it["state"], it["chip"] = ROLE[it["id"]]

# ---- 5. 임무 배분표 ----
assign = d.setdefault("assignments", {})
assign["title"] = "🧾 임무 배분표 · 11/27 수익화 4채널 + 11/28 크레딧 최소 운용"
assign["updated"] = HHMM
a_route = assign.get("route", "")
credit_route = " · 08:28 크레딧 최소 운용: 초안·취합·사전 검수는 뮤즈·큐(단순 반복은 지시 범위 내 일꾼), 총괄·부총괄은 최종 확인·실제 클릭만"
if "크레딧 최소 운용" not in a_route:
    assign["route"] = (a_route.rstrip() + credit_route).strip()
OWNER = {
    "2": ("뮤즈·큐 작성·검수 → 투덜이 발행 확인",
          "원고·링크 세트 완료 → 네이버 블로그 임시저장 → 대표님 발행 1회 → 클릭·수익 확인 · 수정·재검수는 뮤즈·큐, 최종 확인·발행은 투덜이"),
    "4": ("뮤즈·큐 검수 → 투덜이·해병이 발행/비공개",
          "총괄 승인 완료 · 발행 대기(블로그·Threads·인스타 카드뉴스 6장) → 수정안·사전 검수는 뮤즈·큐, 실제 발행·비공개 클릭은 투덜이·해병이"),
    "8": ("큐 검수 → 투덜이 게시",
          "@tudeori.carlife 활성 확인 · 프로필 사진·소개 세팅 → 소화기 카드뉴스 첫 게시물 · 문구·검수는 큐, 게시 클릭은 투덜이"),
}
for it in assign.get("items", []):
    if it.get("no") in OWNER:
        it["owner"], it["note"] = OWNER[it["no"]]
NEW = [
    {
        "no": "13",
        "task": "사무실 실시간 전담 유지",
        "owner": "큐 → 투덜이",
        "state": "work",
        "note": "큐가 팀 보고 취합·status.json 변경안(JSON)·요약 정리 → 투덜이 최종 확인 후 GitHub 배포(main·gh-pages)만",
    },
    {
        "no": "14",
        "task": "전 게시판 관리·유지 변경",
        "owner": "뮤즈·큐 → 투덜이·해병이",
        "state": "work",
        "note": "원고 수정안·사전 검수·목차/링크 점검은 뮤즈·큐(단순 반복은 지시 범위 내 일꾼) · 실제 발행·비공개 클릭만 투덜이·해병이",
    },
]
existing_no = {it.get("no") for it in assign.get("items", [])}
for row in NEW:
    if row["no"] not in existing_no:
        assign.setdefault("items", []).append(row)

# ---- 6. 비상 승계 매트릭스 ----
backup = d.setdefault("backup", {})
b_note = backup.get("note", "")
if "크레딧 최소 운용" not in b_note:
    backup["note"] = (b_note.rstrip() + " · 크레딧 최소 운용(총괄·부총괄은 최종 확인·실제 클릭만)").strip()
b_rule = backup.get("rule", "")
if "크레딧 소모를 최소" not in b_rule:
    backup["rule"] = (b_rule.rstrip() + " 크레딧은 총괄·부총괄이 최소만 쓰고(초안·검수 위임, 최종 확인·클릭만) 여유분을 남긴다.").strip()
backup["updated"] = HHMM
PART = {
    "td": "최종 확인·승인·GitHub 배포",
    "hb": "최종 확인·실제 발행 클릭·교차검토",
    "muse": "게시판 수정안·사전 검수·회의록",
    "manus": "사무실 변경안 취합·게시판 사전 검수",
    "inst": "지시받은 작업만 실행 · 승계 제외",
}
for m in backup.get("members", []):
    if m.get("id") in PART:
        m["part"] = PART[m["id"]]

# ---- 7. 협업·결재선 설명 ----
collab = d.setdefault("collab", {})
c_note = collab.get("note", "")
c_add = " 2026-11-28 08:28 크레딧 최소 운용 배정: 사무실은 큐가 변경안 취합 → 투덜이 배포만, 게시판은 뮤즈·큐가 수정안·사전 검수 → 투덜이·해병이가 실제 클릭만."
if "크레딧 최소 운용 배정" not in c_note:
    collab["note"] = (c_note.rstrip() + c_add).strip()

chief = d.setdefault("chief", {})
ch_note = chief.get("note", "")
ch_add = " 총괄·부총괄은 크레딧 최소 운용(최종 확인·실제 클릭만)이라, 결재 창구 정리·사전 검수는 뮤즈·큐가 1차로 맡습니다."
if "크레딧 최소 운용" not in ch_note:
    chief["note"] = (ch_note.rstrip() + ch_add).strip()
chief["updated"] = HHMM

# ---- 8. 방 전광판·현재 업무 ----
d["ceo_tudeori"] = {
    "status": "working",
    "ticker": "총괄 가동 중(08:28) · 크레딧 최소 운용 배정 확정 — 사무실은 큐 변경안 → 총괄 GitHub 배포만, 게시판은 뮤즈·큐 수정안·사전 검수 → 투덜이·해병이 실제 발행·비공개 클릭만",
    "nowTask": "최종 확인·승인·배포만",
    "nowState": "work",
    "updated": HHMM,
}
d["ceo_haebyeong"]["nowTask"] = "배정 · 게시판 최종 확인·실제 발행 클릭"
d["manager_muse"]["nowTask"] = "배정 · 게시판 수정안·사전 검수"
d["deputy_manus"]["nowTask"] = "배정 · 사무실 변경안 취합·게시판 검수"

# ---- 9. 가동 확인 기록(총괄 크레딧 소진 표기 정리) ----
credit = d.setdefault("credit", {})
credit["partner"] = "총괄 가동 확인(11-28 08:27~08:28 대표님 대화·지시) · 크레딧 최소 운용"
credit["haebyeongi"] = "가동 확인(11-28 06:26 보고) · 부총괄 · 크레딧 최소 운용"
credit["updated"] = "2026-11-28T08:30:00+09:00"
checks = credit.setdefault("checks", {})
td = checks.setdefault("td", {})
td["ops"] = {
    "state": "verified",
    "checked_at": "2026-11-28T08:28:00+09:00",
    "by": "대표님 08:27 크레딧 배정 지시·08:28 승인에 대한 총괄 회신·공지 게시 — 가동 확인(11/27 13:29 소진 표기 해제)",
}
td["report"] = {
    "text": "08:28 지시 반영 — 크레딧 최소 운용 배정 확정·#피클지시 공지·대시보드 반영",
    "source": "#피클지시 ts 1795822245.616479",
    "reported_at": "2026-11-28T08:30:00+09:00",
}

# ---- 10. 역할별 보고 요약 ----
reports = d.setdefault("reports", {})
SUM = {
    "ceo_tudeori": "👑 총괄(투덜이) · 업무 배분·우선순위·최종 팩트체크·전결 승인 → 대표님 상신 · 수익화 4채널 연동 총괄 · 비상 승계 1순위 · 4인 상시 수평전개 1순위 · 크레딧 최소 운용(사무실은 큐 취합 → 총괄 배포만)",
    "ceo_haebyeong": "👑 부총괄(해병이) · 데일리 머니리포트·영문 여행·쿠팡파트너스 + 관리자 교차검토 · 비상 승계 2순위 · 4인 상시 수평전개 2순위 · 크레딧 최소 운용(게시판 최종 확인·실제 발행 클릭만)",
    "manager_muse": "🧠 관리자(뮤즈) · 관리자 검토(1차) · 게시판 원고 수정안·사전 검수·목차/링크 점검 전담 · 창작소설 공동 집필 · 회의록·아카이브 · 비상 승계 3순위 · 4인 상시 수평전개 3순위",
    "deputy_manus": "🤖 부관리자(큐 · Manus) · 사무실 변경안 취합·정리(총괄 배포 전) · 게시판 사전 검수 · 창작소설 공동 집필 · 30초 AI 영상 · 비상 승계 4순위 · 4인 상시 수평전개 마지막",
    "instinct": "🛠️ 일꾼(Instinct · 기존 총괄) · 지시받은 작업만 실행(단순 반복은 지시 범위 내) → 지시한 사람에게 보고 · 비상 승계·수평전개 제외",
}
for k, v in SUM.items():
    if k in reports and isinstance(reports[k], dict):
        reports[k]["summary"] = v

with open(PATH, "w", encoding="utf-8") as f:
    json.dump(d, f, ensure_ascii=False, indent=1)
    f.write("\n")
print("ok:", PATH)
