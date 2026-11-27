/* ================= 설정 ================= */
const FLOORS = [
  { id: "f8", num: "8F", name: "대표실 · 👑 대표님 · 🎯 월 1,000만 원", tone: "pent" },
  { id: "f7", num: "7F", name: "관리자실 · 🧠 관리자 뮤즈 · 🤖 부관리자 큐", tone: "cyan" },
  { id: "f6", num: "6F", name: "경영진 · 👑 총괄·부총괄 · 🍉 수박이 · 🛠️ 일꾼", tone: "pent" },
  { id: "f5", num: "5F", name: "커머스·수익층 · 🛍️ 스마트스토어·위탁 · 🤝 브랜드커넥트 · 📈 적립", tone: "cyan" },
  { id: "f4", num: "4F", name: "블로그·애드센스층 · 💵 tudeori · 📚 머니리포트 · ✈️ 영문 · 📸 SNS", tone: "purple" },
  { id: "f3", num: "3F", name: "창작소설층 · 📖 10화 연재(3인 공동 집필)", tone: "cyan" },
  { id: "f2", num: "2F", name: "응모·티켓층 · 🎟️ 피클 티켓 · 🎁 공공 퀴즈·지원금 · 🏭 큐맥스", tone: "purple" }
];

// 개인정보 없음: 부서 이름과 상태 문구만 담는다.
const rooms = [
  {
    id: "owner", floor: "f8", zone: "instinct", tag: "오너", ceo: true,
    title: "👑 대표님", worker: "👑", name: "👑 대표님",
    say: "결정할 것만 보고받는 중!", foot: "조직도 최상단 · 대표 승인 필요 건만 표시",
    task: "승인 대기 0건 · 대기 2건(발행 버튼·게시 URL)", taskState: "approve",
    issue: "대표 결정이 필요해요!",
    guide: "대표님께는 승인·결정이 필요한 건만 올립니다. 총괄이 팩트체크·저작권·약관 검수를 마친 건은 총괄 전결로 처리하고 결과만 보고합니다. 🔴 자금·금융 인증은 대표님이 직접 실행합니다.",
    state: "working", ticker: "🎯 월 1,000만 원 · 전 채널 수익화 연동 · 위탁 1안 확정(수박이 소싱 진행) · 대기 2건(하나필터 발행 버튼·피클 티켓 URL) · 🔴 금융 인증은 직접", updated: "13:00"
  },
  {
    id: "ceo_tudeori", floor: "f6", zone: "partner", tag: "총괄", ceo: true,
    title: "👑 총괄 · 투덜이", worker: "😤", name: "👑 총괄 투덜이",
    say: "4채널 배분·준법 검수 중!", foot: "총괄 · 배분·팩트체크·저작권·약관 검수 → 대표님 상신",
    task: "4채널 배분 · 팩트체크·준법 검수", taskState: "work",
    issue: "결재로 올릴 안건이 있어요!",
    guide: "총괄(투덜이)은 업무 배분·우선순위·팩트체크·전결 승인을 맡고, 팩트체크·저작권·지재권·애드센스·네이버 약관 준수를 전담 검수합니다. 검수를 통과한 건만 전결하고, 대표님 결정이 필요한 건만 승인 창구에 올립니다. 비상 승계 1순위입니다.",
    state: "working", ticker: "총괄 · 월 1,000만 원 목표 4채널 연동 배분 · 창작소설 10화·소화기 3채널·하나필터 원고·피클 티켓 글 총괄 검토", updated: "13:00"
  },
  {
    id: "ceo_haebyeong", floor: "f6", zone: "direct", tag: "부총괄", ceo: true,
    title: "👑 부총괄 · 해병이", worker: "🫡", name: "👑 부총괄 해병이",
    say: "머니리포트·영문 여행 맡았습니다!", foot: "부총괄 · 데일리 머니리포트·영문 여행 + 교차검토",
    task: "11:00 정보글 · 영문 여행 · 교차검토", taskState: "work",
    issue: "검토할 건이 있어요!",
    guide: "부총괄(해병이)은 데일리 머니리포트·영문 여행 블로그·쿠팡파트너스를 운영하고 관리자(뮤즈)와 교차검토합니다. 발행 전 팩트·저작권·약관 검수는 총괄이 최종 확인합니다.",
    state: "working", ticker: "데일리 머니리포트 고향사랑기부제 /12 표 머리행 보완·재발행 + Threads 완결형 재게시 완료 · 애드센스 '준비중' · 영문 여행 블로그 3편 추가 발행·색인 완료", updated: "12:35"
  },
  {
    id: "director_subaki", floor: "f6", zone: "direct", tag: "위탁", director: true,
    title: "🍉 수박이 이사 · 위탁판매 총괄", worker: "🍉", name: "🍉 수박이 이사",
    say: "스마트스토어 심사 진행 중!", foot: "위탁·스마트스토어 실행 총괄 · 확정 건만 최소 알림",
    task: "스마트스토어 심사 · 위탁 등급가 준비", taskState: "work",
    issue: "실행 확인이 필요해요!",
    guide: "수박이 이사는 스마트스토어·위탁 실행을 맡습니다. 서류 2/2건 제출로 정식 심사중이고, 위탁은 무재고 낱개 단일 트랙 재상신(#24·#25) 결과를 기다립니다. 등급가 실측은 수박이 이사 로그인 세션 협조가 필요하고, 계좌·금융 인증은 직접 처리합니다. 확정 건만 최소 알림으로 전달합니다.",
    state: "working", ticker: "스마트스토어 서류 2/2건 제출 완료 → 정식 심사중(3영업일) · 위탁 재상신(#24·#25) 1안/2안/보류 선택 대기 · 확정 건만 최소 알림", updated: "12:20"
  },
  {
    id: "manager_muse", floor: "f7", zone: "instinct", tag: "관리자",
    title: "🧠 관리자 · 뮤즈", worker: "🧠", name: "🧠 관리자 뮤즈",
    say: "창작소설·검토 맡았어요!", foot: "관리자 검토(1차) · 창작소설 공동 집필 · 회의록",
    task: "창작소설 10화 시놉시스 · 관리자 검토", taskState: "work",
    issue: "검토할 안건이 있어요!",
    guide: "뮤즈(관리자)는 관리자 검토(1차)와 창작소설 공동 집필, 회의록·아카이브, 전 업무 숙지를 맡고 비상 승계는 3순위입니다. 06번 업무계정으로 Slack에 연결돼 있고 자동 응답은 아직 미검증입니다.",
    state: "working", ticker: "관리자 검토(1차) · 창작소설 1화 시안 작성·합작 논의 · 회의록·아카이브 · 승계 3순위", updated: "12:40"
  },
  {
    id: "deputy_manus", floor: "f7", zone: "instinct", tag: "부관리자",
    title: "🤖 부관리자 · 큐", worker: "🤖", name: "🤖 부관리자 큐(Manus)",
    say: "1화 시안 냈어요!", foot: "부관리자 · 창작소설 공동 집필 · 30초 AI 영상",
    task: "창작소설 합작 · 30초 AI 영상", taskState: "work",
    issue: "수임 확인이 필요해요!",
    guide: "큐(Manus)는 08번 계정으로 연결됐고 대표님 계정 멘션에서만 응답이 확인됩니다. 창작소설 공동 집필과 30초 AI 영상·카드뉴스 시범(무료 범위)을 맡고, 비상 승계는 4순위입니다.",
    state: "working", ticker: "부관리자 · 창작소설 1화 시안(벽장 안의 목소리) 제출 · 30초 AI 영상·카드뉴스 시범 · 승계 4순위", updated: "12:40"
  },
  {
    id: "instinct", floor: "f6", zone: "instinct", tag: "일꾼",
    title: "🛠️ 일꾼 · Instinct", worker: "🛠️", name: "🛠️ 일꾼 Instinct",
    say: "발행·초대글 준비 중!", foot: "일꾼(구 총괄) · 조사·초안·수정·검증 실행 → 총괄 보고",
    task: "소화기 3채널 발행 · 피클 초대글", taskState: "work",
    issue: "총괄 회신이 필요해요!",
    guide: "Instinct는 기존 총괄 자리에서 일꾼으로 이동했습니다. 배정받은 조사·작성·수정·검증을 실행해 결과를 총괄(투덜이)에게 올리고, 발행·게시는 총괄 검수를 거칩니다.",
    state: "working", ticker: "일꾼(구 총괄) · 창작소설 1화 시안·소화기 3채널·tudeori 애드센스 점검·피클 초대글 작성 · 결과는 총괄에 보고", updated: "12:40"
  },
  {
    id: "commerce", floor: "f5", zone: "direct", tag: "수박이",
    title: "🛍️ 스마트스토어·위탁팀", worker: "👩‍💼", name: "서스토어 대리",
    say: "심사 결과 기다려요!", foot: "스마트스토어 심사중 · 무재고 낱개 위탁 단일 트랙",
    task: "심사중 · 위탁 1안/2안 대기", taskState: "wait",
    issue: "대표님 선택이 필요해요!",
    guide: "스마트스토어는 사업자·본인인증·정산계좌·증빙서류 2/2건 제출을 마치고 정식 심사중입니다(3영업일 이내). 위탁은 무재고 낱개 단일 트랙으로 재상신(#24·#25)되어 1안(세 곳 등급가 비교)/2안(오너클랜 단독)/보류 선택을 기다립니다. 소량 사입은 11/24 지시로 제외했습니다.",
    state: "working", ticker: "스마트스토어 사업자·본인인증·정산계좌·서류 2/2건 제출 완료 → 정식 심사중(3영업일) · 무재고 낱개 위탁 단일 트랙 재상신(#24·#25) 1안/2안/보류 선택 대기 · 재고·선결제 0원", updated: "12:20"
  },
  {
    id: "brandconnect", floor: "f5", zone: "partner", tag: "투덜이",
    title: "🤝 브랜드커넥트·제휴팀", worker: "🤝", name: "제휴 매니저",
    say: "하나필터 원고 완성!", foot: "하나필터 18% · 원고·링크 세트 · 네이버 임시저장 중",
    task: "하나필터 네이버 임시저장", taskState: "work",
    issue: "발행 버튼 1회 필요!",
    guide: "브랜드커넥트(쇼핑 커넥트) 수익화 팀입니다. 하나필터 차량용 에어컨필터 1+1(18,900원·수수료 18%)로 원고·제휴 링크·대가성 문구·해시태그 세트를 완성했고, 네이버 블로그에 임시저장 중입니다. 발행은 대표님 버튼 1회이며, 사진은 직접 촬영본만 사용합니다.",
    state: "working", ticker: "하나필터 차량용 에어컨필터 1+1(18,900원·수수료 18%=건당 3,402원) · 제휴 링크+1,582자 원고+해시태그 세트 완료 → 네이버 블로그 임시저장 진행 중 · 발행은 대표님 버튼 1회", updated: "12:45"
  },
  {
    id: "invest_sp500", floor: "f5", zone: "direct", tag: "해병이",
    title: "📈 미국 S&P500 적립투자부", worker: "📈", name: "오적립 주임",
    say: "실시간 시세 보고 있어요!", foot: "매주 월요일 1주 적립 · 실시간 공개 시세(계좌 연동 없음)",
    task: "실시간 공개 시세 표시", taskState: "work",
    issue: "",
    guide: "매주 월요일 09:05 S&P500 ETF 1주 적립 알림을 보냅니다. 캐릭터를 누르면 공개 시세(현재가·전일 대비 등락률·장중/장마감)와 1주 적립 현황(평단 23,755원 기준 평가손익)이 60초마다 갱신되는 주식창이 열립니다. 계좌·증권사 연동은 하지 않고, 주문·체결은 대표님이 직접 합니다.",
    state: "working", ticker: "TIGER 미국S&P500(360750) 실시간 공개 시세 · 매주 월요일 1주 적립(다음 11/30 09:05) · 계좌 연동 없음 · 주문은 대표님 직접", updated: "13:20"
  },
  {
    id: "tistory", floor: "f4", zone: "partner", tag: "투덜이",
    title: "💵 투덜이 티스토리팀", worker: "🤵", name: "투덜이 팀장",
    say: "소화기 글 발행 준비!", foot: "모바일웹 해제 완료 · 소화기 3채널 · 애드센스 준비중",
    task: "소화기 3채널 발행 · 애드센스 대기", taskState: "wait",
    issue: "발행 지시 대기 중!",
    guide: "tudeori.tistory.com 수익화 팀입니다. 모바일웹 자동연결을 해제해 모바일 루트가 PC 반응형 스킨으로 열리고, 차량용 소화기 3채널은 총괄 승인 후 발행을 기다립니다. 창작소설 '창작소설' 카테고리를 신설해 연재 유입을 붙입니다.",
    state: "working", ticker: "모바일웹 자동연결 해제 완료(모바일 루트=PC 반응형 스킨) · 차량용 소화기 3채널 총괄 승인→발행 대기 · 애드센스 '준비중'(2시간 감시) · 창작소설 카테고리 신설 예정", updated: "12:50"
  },
  {
    id: "haebyeongi_adsense", floor: "f4", zone: "direct", tag: "해병이",
    title: "📚 데일리 머니리포트팀", worker: "🧑‍🚀", name: "해병이 팀장",
    say: "11시 정보글 올렸어요!", foot: "데일리 머니리포트 · 매일 11:00 · 애드센스 준비중",
    task: "매일 11:00 정보글 · 애드센스 대기", taskState: "work",
    issue: "애드센스 회신 대기!",
    guide: "daily-money-note.tistory.com 돈·세금 고단가 정보글 팀입니다. 고향사랑기부제 /12를 발행·보완했고 애드센스는 '준비중'입니다. 발행 전 팩트·출처·저작권 검수는 총괄이 확인합니다.",
    state: "working", ticker: "고향사랑기부제 /12 공개 발행(11:05) · 표 머리행 보완 재발행·Threads 완결형 재게시 완료 · 애드센스 '준비중' · 다음 11:00 고단가 정보글", updated: "12:35"
  },
  {
    id: "travel", floor: "f4", zone: "direct", tag: "해병이",
    title: "✈️ 영문 여행 블로그팀", worker: "✈️", name: "여행글 매니저",
    say: "영문 3편 색인 완료!", foot: "Korea Travel Note · 영문 애드센스",
    task: "서울 글 표 보완 승인 대기", taskState: "wait",
    issue: "표 배치 보완 승인 대기!",
    guide: "영문 여행 블로그(koreatravelnote2026)로 해외 검색 유입과 애드센스 수익을 노립니다. 3편을 추가 발행하고 색인을 요청했으며, 서울 글 모바일 표 배치 보완만 승인을 기다립니다.",
    state: "idle", ticker: "Korea Travel Note 3편 추가 공개 발행·색인 요청 완료 · 다음: 서울 글 모바일 표 배치 보완(승인 대기) · 다음 영문 글 11:00 슬롯", updated: "11:30"
  },
  {
    id: "sns", floor: "f4", zone: "partner", tag: "투덜이",
    title: "📸 인스타·스레드팀", worker: "📸", name: "SNS 매니저",
    say: "프로필부터 채울게요!", foot: "인스타·스레드 @tudeori.carlife · 블로그 유입",
    task: "프로필 세팅 · 첫 게시물 준비", taskState: "work",
    issue: "첫 게시물 준비 중!",
    guide: "인스타·스레드(@tudeori.carlife)는 블로그·창작소설·소화기 콘텐츠의 유입 채널입니다. 계정은 제한 없이 활성이고 Threads 연동도 정상이라, 프로필 사진·소개를 채우고 첫 게시물(소화기 카드뉴스)을 올립니다.",
    state: "working", ticker: "인스타 @tudeori.carlife 활성 확인(제한 없음·Threads 연동 정상) · 프로필 사진·소개글 세팅 중 · 첫 게시물 차량용 소화기 카드뉴스 6장 준비", updated: "12:50"
  },
  {
    id: "novel", floor: "f3", zone: "instinct", tag: "공동",
    title: "📖 창작소설 연재팀", worker: "📖", name: "집필 3인",
    say: "10화, 3인 합작 중!", foot: "하루 2편(오전·저녁) × 5일 = 10화 · tudeori '창작소설'",
    task: "1화 합작 · 10화 시놉시스", taskState: "work",
    issue: "총괄 검토 대기!",
    guide: "일꾼·뮤즈·큐 3인이 함께 쓰는 창작소설 팀입니다. 하루 2편(오전·저녁) × 5일 = 10화 완결로 연재하고, tudeori '창작소설' 카테고리와 Threads로 유입을 붙입니다. 노골적 성묘사·잔혹한 신체훼손은 쓰지 않고 애드센스 정책선을 지키며, 총괄이 최종 검토·승인합니다.",
    state: "working", ticker: "1화 비교 시안 3편 완성(큐·뮤즈·일꾼) → 3인 합작 자극적 스릴러 통합본·10화 시놉시스 조율 중 · 하루 2편×5일=10화 완결 · 총괄 최종 검토 후 연재", updated: "12:40",
    site: "https://tudeori.tistory.com/category/창작소설", siteLabel: "창작소설 연재 보기"
  },
  {
    id: "novel_writer", floor: "f3", zone: "partner", tag: "투덜이",
    title: "✍️ 연재 작가 · 404호", worker: "✍️", name: "연재 작가",
    say: "404호 10화 쓰는 중!",
    foot: "404호 연재 · tudeori '창작소설' 카테고리",
    task: "404호 10화 연재 중", taskState: "work",
    issue: "",
    guide: "창작소설 '404호'를 연재하는 작가 자리입니다. 하루 2편(09:00·20:00) × 5일 = 10화로 끊기지 않게 올리고, 초안은 총괄·관리자 검수를 거쳐 tudeori '창작소설' 카테고리에 발행합니다. 캐릭터나 방을 누르면 연재 목록이 새 창으로 열립니다.",
    state: "working", ticker: "404호 10화 연재 중 · 1화 발행 준비(총괄 검수 통과분부터 공개) · 하루 2편 09:00·20:00 · 읽으러 가기: tudeori '창작소설'", updated: "13:20",
    site: "https://tudeori.tistory.com/category/창작소설", siteLabel: "창작소설 연재 보기"
  },
  {
    id: "ticket", floor: "f2", zone: "instinct", tag: "공동",
    title: "🎟️ 피클 리셋 티켓·초대글팀", worker: "🎟️", name: "초대글 매니저",
    say: "초대·후기 글 쓰는 중!", foot: "피클 초기화 티켓 · 친구 초대 + SNS 후기",
    task: "초대·후기 글 3인 작성", taskState: "work",
    issue: "총괄 검토 후 게시!",
    guide: "피클 무료 초기화 티켓을 확보하는 팀입니다. 일꾼·뮤즈·큐가 투덜이용·해병이용 초대·후기 글을 각각 따로 쓰고, 총괄이 검토·게시한 뒤 게시 URL을 대표님께 전달합니다. 개인정보·사업자·가족 정보는 넣지 않습니다.",
    state: "working", ticker: "일꾼·뮤즈·큐가 투덜이용·해병이용 초대·후기 글 각각 작성 중 → 총괄 검토·게시 → 대표님은 앱에 게시 URL 붙여넣기 1회", updated: "12:45"
  },
  {
    id: "public_quiz", floor: "f2", zone: "partner", tag: "투덜이",
    title: "🎁 공공 퀴즈·지원금팀", worker: "🎁", name: "응모 매니저",
    say: "낱말퍼즐 응모 완료!", foot: "1일 2회(10:30·16:30) 탐색·자동 응모",
    task: "16:30 저녁 탐색 대기", taskState: "wait",
    issue: "본인인증 건은 대표님!",
    guide: "공공기관·지자체 공식 퀴즈·설문·지원금을 1일 2회 탐색합니다. 이름·휴대폰만 요구하는 건 자동 응모하고, 본인인증·추가 정보가 필요한 건은 대표님께 알립니다. 새 목록은 수박이 쪽에 공유합니다.",
    state: "working", ticker: "1일 2회(10:30·16:30) 탐색·자동 응모 · 오늘 축사로 낱말퍼즐 응모 완료(투썸 세트 100명·발표 12/2) · 새 경품 목록 수박이 공유", updated: "11:00"
  },
  {
    id: "cumex", floor: "f2", zone: "partner", tag: "투덜이",
    title: "🏭 큐맥스 사업지원부", worker: "🏭", name: "배지원 과장",
    say: "지시하면 바로 가동!", foot: "화성 제조·물류·도급 · 지시 시 가동",
    task: "지시 대기", taskState: "wait",
    issue: "지시 대기 중!",
    guide: "큐맥스는 별도 승인 대기 없이 지시하면 바로 움직입니다. 외부 발송·통화가 필요할 때만 말씀해 주세요.",
    state: "idle", ticker: "큐맥스 사업지원부 — 지시 전까지 대기 · 별도 승인 대기 없이 지시하면 바로 가동", updated: "13:00"
  }
];

const STATE_LABEL = { working: "WORK", idle: "IDLE", alert: "ALERT", unverified: "미확인" };

function esc(s) {
  return String(s).replace(/[&<>"']/g, c => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  }[c]));
}

/* ================= 방 / 층 렌더 ================= */
function revHTML() {
  return `
    <div class="rev-block" id="rev-block">
      <div class="rev-boards">
        <div class="rev-board hb" id="rev-hb" title="해병이 부장이 만든 검증된 수익">
          <span class="rb-label"><i></i>🔵 해병이</span>
          <span class="rb-val"><span class="rb-today" id="rev-hb-today">오늘 +₩0</span><span class="rb-sep">·</span><span id="rev-hb-total">누적 ₩0</span></span>
        </div>
        <div class="rev-board partner" id="rev-td" title="투덜이 부장이 만든 검증된 수익">
          <span class="rb-label"><i></i>🟣 투덜이</span>
          <span class="rb-val"><span class="rb-today" id="rev-td-today">오늘 +₩0</span><span class="rb-sep">·</span><span id="rev-td-total">누적 ₩0</span></span>
        </div>
        <div class="rev-board total" id="rev-sum" title="두 부장 합산 수익">
          <span class="rb-label"><i></i><span id="rev-sum-label">💰 총 합산 (DAY 1)</span></span>
          <span class="rb-val"><span class="rb-today" id="rev-sum-today">오늘 +₩0</span><span class="rb-sep">·</span><span id="rev-sum-total">누적 ₩0</span></span>
        </div>
        <div class="rev-board settle pending" id="rev-settle" title="12월 결산 · 해당 연도 총수익 (12월 수익이 쌓이면 자동 집계)">
          <span class="rb-label"><i></i>🧾 12월 결산</span>
          <span class="rb-val"><span id="rev-settle-val">집계 예정</span></span>
        </div>
      </div>
      <div class="rev-chart-wrap">
        <svg class="rev-chart" id="rev-chart" viewBox="0 0 140 30" preserveAspectRatio="none" role="img" aria-label="월별 수익 0원"></svg>
        <span class="rev-empty" id="rev-empty">이번 달 수익 없음</span>
      </div>
      <div class="rev-labels" id="rev-labels"></div>
    </div>`;
}

function workerHTML(r) {
  return `
      <div class="worker">
        <div class="speech" id="say-${r.id}">${esc(r.say)}</div>
        <div class="badge-alert">!</div>
        <div class="avatar"${["public_quiz"].includes(r.id) ? `role="button" tabindex="0" aria-label="${esc(r.name)} · 응모 진행결과 보기" title="캐릭터를 누르면 업무 보고 보기" onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();event.stopPropagation();openReport('${r.id}')}"` : r.id === "invest_sp500" ? 'role="button" tabindex="0" aria-label="주식 그래프와 손익 보기" title="클릭하면 주식 그래프와 손익 보기" onkeydown="if(event.key===\'Enter\'||event.key===\' \'){event.preventDefault();event.stopPropagation();openReport(\'invest_sp500\')}"' : ""}>${r.worker}</div>
        <div class="nametag">${esc(r.name)}</div>
        <span class="life-icons" aria-hidden="true"><i>💻</i><i>📝</i><i>🔍</i><i>📊</i></span>
      </div>`;
}

const LAPTOP = `<div class="desk"><span class="laptop"><i class="lid"></i><i class="base"></i></span></div>`;

function roomHTML(r, i) {
  const partner = r.zone === "partner";
  const instinct = r.zone === "instinct";
  const shop = r.id === "commerce";
  const ceo = r.ceo === true;
  const director = r.director === true;
  const site = typeof r.site === "string" && /^https?:\/\//.test(r.site) ? r.site : "";
  const stage = `<div class="room-stage">${workerHTML(r)}${LAPTOP}</div>`;

  return `
      <div class="room ${r.state}${partner ? " partner" : ""}${ceo ? " ceo" : ""}${director ? " director" : ""}${site ? " site-link" : ""} link" id="room-${r.id}" role="button" tabindex="0" aria-label="${esc(site ? r.title + " · " + (r.siteLabel || "새 창으로 열기") : r.title + " 업무 보고 열기")}"
           style="--wd:${(i * 0.23).toFixed(2)}s;--ic:${(-(0.9 * i + i * i * 0.17)).toFixed(2)}s"
           onclick="roomTap(event, this, '${r.id}')" title="${esc(site ? (r.siteLabel || "새 창으로 열기") + " (새 창)" : "눌러서 업무 보고 열기")}">
        <div class="room-head">
          <span class="room-title">${esc(r.title)}</span>
          <span class="room-lanes" id="lanes-${r.id}" aria-hidden="true"></span>
          <span class="room-tag${partner ? " partner" : instinct ? " instinct" : ""}" title="${instinct ? "대표님·경영진 직할 방" : director ? "위탁판매·스토어 실행 담당(사람)" : partner ? "총괄(투덜이) 측 운영 방" : "부총괄(해병이) 측 운영 방"}">${r.tag}</span>
          ${site ? `<a class="room-open ro-btn" href="${esc(site)}" target="_blank" rel="noopener" title="${esc((r.siteLabel || "새 창으로 열기") + " (새 창)")}">연재▸</a><button class="room-open ro-btn" type="button" onclick="event.stopPropagation();openReport('${r.id}')" title="업무 보고·연재 현황 열기">보고</button>` : `<span class="room-open">${r.id === "public_quiz" ? "응모결과▸" : shop ? "현황판▸" : ceo ? "총괄▸" : director ? "체크▸" : "보고"}</span>`}
          <span class="status-dot" aria-hidden="true"></span>
        </div>
        ${stage}
        <div class="led-board" id="led-${r.id}">
          <span class="led-tag"><i></i><span id="tag-${r.id}">${STATE_LABEL[r.state]}</span></span>
          <span class="led-viewport" id="vp-${r.id}"><span class="led-track" id="track-${r.id}"></span></span>
          <span class="led-time" id="time-${r.id}" title="마지막 갱신">--:--</span>
        </div>
        <div class="nowchip ${r.taskState || "wait"}" id="now-${r.id}" title="현재 담당 업무"><i></i>${esc(r.task || r.foot)}</div>
        <div class="room-foot"><span class="foot-txt" id="foot-${r.id}">${esc(r.foot)}</span></div>
        <div class="alert-box" id="alertbox-${r.id}">
          <div class="alert-guide" id="guide-${r.id}"><span class="guide-tag">해결</span>${esc(r.guide)}</div>
        </div>
      </div>`;
}

function lobbyHTML() {
  return `
    <section class="floor tone-lobby" id="floor-f1">
      <div class="floor-head">
        <span class="fnum">1F</span>
        <span class="fname">로비 · ☕ 탕비실</span>
        <button class="snd-pill" id="snd-f1" onclick="toggleFloorSound('f1')" title="1F 소리 켜기/끄기" aria-label="1F 소리">🔇</button>
        <span class="lobby-pill" id="summary-pill">상태 확인 중</span>
      </div>
      <div class="lobby" id="lounge">
        <div class="lob-zones" aria-hidden="true">
          <div class="lob-zone recep-zone">
            <span class="lz-name">🛎️ 리셉션</span>
            <span class="plant"><i class="pot"></i><i class="leaf"></i></span>
            <span class="recep"></span>
          </div>
          <div class="lob-zone pantry-zone" id="pantry">
            <span class="lz-name">☕ 탕비실</span>
            <span class="counter"></span>
            <span class="machine"><i class="m-screen"></i><i class="m-led"></i><i class="m-cup"></i><i class="steam"></i><i class="steam s2"></i></span>
            <span class="snack"></span>
            <span class="snack b"></span>
            <span class="sink"></span>
            <span class="water"><i class="w-jug"></i><i class="w-tap"></i></span>
            <span class="fridge"><i class="f-line"></i><i class="f-handle"></i><i class="f-handle low"></i></span>
          </div>
        </div>
        <span class="lob-handoff" id="lob-handoff">🤝 업데이트 전달!</span>
        <div class="lob-walker resting" id="lob-hb" style="left:43%">
          <span class="w-say" id="lob-hb-say">협업 브리핑 전달!</span>
          <span class="w-body">🫡</span>
          <span class="w-who">해병이 팀장</span>
          <span class="w-item" aria-hidden="true">📨</span>
        </div>
        <div class="lob-walker partner resting" id="lob-td" style="left:64%">
          <span class="w-say" id="lob-td-say">확인했어!</span>
          <span class="w-body">😤</span>
          <span class="w-who">투덜이 팀장</span>
          <span class="w-item" aria-hidden="true">📊</span>
        </div>
        <!-- 쉬는(대기) 부서 사원만 탕비실에 들른다. 업무 중(WORK) 부서 사원은 나오지 않는다. -->
        <div class="lob-walker staff resting hidden" id="lob-hc" style="left:20%">
          <span class="w-say" id="lob-hc-say">☕ 잠깐 커피 한잔</span>
          <span class="w-body">☕</span>
          <span class="w-who">쉬는 사원</span>
          <span class="w-item" aria-hidden="true">☕</span>
        </div>
        <!-- 두 번째 쉬는 사원 · 커피 대화 상대 -->
        <div class="lob-walker staff resting hidden" id="lob-hc2" style="left:58%">
          <span class="w-say" id="lob-hc2-say">☕ 커피 타임!</span>
          <span class="w-body">🙂</span>
          <span class="w-who">쉬는 사원</span>
          <span class="w-item" aria-hidden="true">☕</span>
        </div>
        <div class="rooms one desk-rooms">
          ${rooms.filter(r => r.floor === "f1").map((r, i) => roomHTML(r, i)).join("")}
        </div>
      </div>
    </section>`;
}

function basementHTML() {
  return `
    <section class="floor tone-basement" id="floor-b1">
      <div class="floor-head">
        <span class="fnum">B1</span>
        <span class="fname">지하 복지층 · 🎤 노래방 · 🕹️ 오락실 · 🛋️ 휴게실</span>
        <button class="snd-pill" id="snd-b1" onclick="toggleFloorSound('b1')" title="B1 소리 켜기/끄기" aria-label="B1 소리">🔇</button>
        <span class="lobby-pill b1-pill">🌙 자율 휴게</span>
      </div>
      <div class="b1" id="b1-room">
        <div class="b1-zones" aria-hidden="true">
          <div class="b1-zone lounge-zone">
            <span class="lz-name">🛋️ 휴게실</span>
            <span class="sofa"><i class="back"></i><i class="arm l"></i><i class="arm r"></i><i class="seat"></i></span>
            <span class="ctable"><i class="mug"></i></span>
            <span class="lamp"><i class="lamp-glow"></i><i class="lamp-pole"></i><i class="lamp-shade"></i></span>
          </div>
          <div class="b1-zone karaoke-zone">
            <span class="lz-name">🎤 노래방</span>
            <span class="mic"><i class="mic-pole"></i><i class="mic-base"></i><i class="mic-head"></i></span>
            <span class="neon-note">🎵</span>
          </div>
          <div class="b1-zone arcade-zone">
            <span class="lz-name">🕹️ 오락실</span>
            <span class="arcade"><i class="marquee"></i><i class="screen"></i><i class="panel"></i><i class="stick"></i></span>
          </div>
        </div>
        <span class="lob-handoff" id="b1-handoff">☕ 커피 타임!</span>
        <div class="lob-walker resting hidden" id="b1-hb" style="left:92%">
          <span class="w-say" id="b1-hb-say">☕ 커피 한잔!</span>
          <span class="w-body">🫡</span>
          <span class="w-who">해병이 팀장</span>
          <span class="w-item" aria-hidden="true">☕</span>
        </div>
        <div class="lob-walker partner resting hidden" id="b1-td" style="left:96%">
          <span class="w-say" id="b1-td-say">나도 한잔~</span>
          <span class="w-body">😤</span>
          <span class="w-who">투덜이 팀장</span>
          <span class="w-item" aria-hidden="true">☕</span>
        </div>
        <div class="lob-walker staff resting hidden" id="b1-hc" style="left:90%">
          <span class="w-say" id="b1-hc-say">🕹️ 한 판만!</span>
          <span class="w-body">🧙</span>
          <span class="w-who">최응모 사원</span>
          <span class="w-item" aria-hidden="true">🕹️</span>
        </div>
        <!-- 쉬는 부서 사원 · 노래방/소파 -->
        <div class="lob-walker staff resting hidden" id="b1-hc2" style="left:96%">
          <span class="w-say" id="b1-hc2-say">🎤 한 곡만 부르고 갈게</span>
          <span class="w-body">🎤</span>
          <span class="w-who">쉬는 사원</span>
          <span class="w-item" aria-hidden="true">🎤</span>
        </div>
      </div>
    </section>`;
}

function floorHTML(f) {
  const list = rooms.filter(r => r.floor === f.id);
  let cls = list.length === 1 ? "rooms one" : list.length >= 4 ? "rooms four" : list.length === 3 ? "rooms three" : "rooms";
  if (f.id === "f7") cls += " desk-rooms";   // 7F 관리자실: 사진 대신 사무 데스크 배경
  // 6F 대표실: 두 부장 아래에 수익 전광판 · 크레딧을 전폭으로 깔아 겹치지 않게 한다
  const pentBar = f.id === "f6"
    ? `<div class="pent-bar" aria-label="수익 전광판">
         <div class="pent-bar-top">${revHTML()}</div>
         <div class="credit">
           <span class="cred" id="cred-hb">🔵 해병이: 가동 미확인</span>
           <span class="cred td" id="cred-td">🟣 투덜이: 가동 미확인</span>
         </div>
       </div>
       <div class="pent-assign" id="pent-assign" aria-label="임무 배분표"></div>
       <div class="pent-guard" id="pent-guard" aria-label="총괄 검수·준법 원칙"></div>
       <div class="pent-roster" id="pent-roster" aria-label="6F 분장표"></div>
       <div class="pent-invite" id="pent-invite" aria-label="뮤즈 초대코드"></div>`
    : "";
  return `
    <section class="floor tone-${f.tone}" id="floor-${f.id}">
      <div class="floor-head">
        <span class="fnum">${f.num}</span>
        <span class="fname">${esc(f.name)}</span>
        <button class="snd-pill" id="snd-${f.id}" onclick="toggleFloorSound('${f.id}')" title="${f.num} 소리 켜기/끄기" aria-label="${f.num} 소리">🔇</button>
      </div>
      <div class="${cls}">
        ${list.map((r, i) => roomHTML(r, i)).join("")}
      </div>
      ${pentBar}
    </section>`;
}

function render() {
  document.getElementById("floors").innerHTML =
    FLOORS.map(floorHTML).join("") + lobbyHTML() + basementHTML();

  // 전광판 기본 문구 (status.json 오기 전에도 꽉 차 보이게)
  rooms.forEach(r => setBoardText(r.id, tickerFor(r.state, r.ticker, laneOf(r.id)), r.updated, r.state));
  // 가동 확인 기록은 status.json 도착 후에야 알 수 있으므로, 첫 로드 전 두 부장 방은 WORK/IDLE 대신 미확인으로 시작
  ["ceo_tudeori", "ceo_haebyeong"].forEach(id => {
    const r = rooms.find(x => x.id === id);
    if (!r) return;
    setRoomState(id, "unverified");
    setBoardText(id, "자기보고 시각미상 · " + tickerFor("unverified", r.ticker, laneOf(id)), r.updated, "unverified");
  });
  renderRevenue(null);
  renderShop(null);
  renderSignals(null);
  renderChief(null);
  renderRoster(null);
  renderAssignments(null);
  renderInvite(null);
  applyCorridor();
  requestAnimationFrame(() => { liftPark(); buildTicks(); });
}

/* ================= LED 전광판 ================= */
function tickerFor(state, text, lane) {
  const clean = String(text).replace(/^(?:🔵|🔴)\uFE0F?\s*/, "");   // 서로게이트 반쪽만 지워지지 않게 낱자 대신 낱말로 비교
  const mark = lane === "red" ? "🔴 " : lane === "blue" ? "🔵 " : state === "alert" ? "🔵 " : "";
  return mark + clean;
}

function estWidth(text) {
  let w = 0;
  for (const ch of String(text)) w += /[\u1100-\u11FF\u2E80-\u9FFF\uAC00-\uD7AF]/.test(ch) ? 10 : 6.2;
  return Math.max(60, w + 30);
}

function setBoardText(id, text, updated, state) {
  const track = document.getElementById("track-" + id);
  const vp = document.getElementById("vp-" + id);
  if (!track) return;
  const key = (state || "") + "|" + text;
  if (track.dataset.key !== key) {
    track.dataset.key = key;
    track.dataset.text = text;
    // 긴 문구도 잘리지 않게 항상 흐르게 한다 (대기 중엔 천천히, 작업 중엔 빠르게)
    const vw = (vp && vp.clientWidth) || 140;
    const oneW = estWidth(text);
    if (oneW <= vw) {
      // 한 화면에 다 들어가는 문구는 흐르지 않고 그대로 보여 준다 (넓은 화면)
      track.innerHTML = `<span class="led-group"><span class="led-text">${esc(text)}</span></span>`;
      track.style.animation = "none";
    } else {
      const copies = Math.max(1, Math.ceil(vw / oneW));
      const group = Array.from({ length: copies }, () => `<span class="led-text">${esc(text)}</span>`).join("");
      track.innerHTML = `<span class="led-group">${group}</span><span class="led-group" aria-hidden="true">${group}</span>`;
      const groupW = copies * oneW;
      const dur = state === "idle"
        ? Math.max(18, Math.min(46, groupW / 20))
        : Math.max(9, Math.min(34, groupW / 46));
      track.style.animation = "none";
      void track.offsetWidth;
      track.style.animation = "ledScroll " + dur.toFixed(1) + "s linear infinite";
    }
  }
  if (updated !== undefined) {
    const t = document.getElementById("time-" + id);
    if (t) t.textContent = updated || "--:--";
  }
}

function flashBoard(id) {
  const b = document.getElementById("led-" + id);
  if (!b) return;
  b.classList.remove("flash");
  void b.offsetWidth;
  b.classList.add("flash");
}

function setRoomState(id, state) {
  const el = document.getElementById("room-" + id);
  if (!el) return;
  el.classList.remove("working", "idle", "alert", "unverified");
  el.classList.add(state);
  if (state !== "idle") el.classList.remove("break");
  const tag = document.getElementById("tag-" + id);
  if (tag) tag.textContent = state === "alert" ? (laneOf(id) === "red" ? "자금" : "확인") : (STATE_LABEL[state] || "IDLE");
}

/* ================= 수익 전광판 ================= */
function fmtKrw(n) {
  const v = Math.round(Number(n) || 0);
  return "₩" + v.toLocaleString("ko-KR");
}

/* 시작일 기준 DAY 번호 (Asia/Seoul, 시작일 = DAY 1) */
const REV_START = "2026-11-19";
function seoulDayUTC(date) {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Seoul", year: "numeric", month: "2-digit", day: "2-digit"
  }).formatToParts(date);
  const pick = (t) => Number((parts.find(p => p.type === t) || {}).value);
  return Date.UTC(pick("year"), pick("month") - 1, pick("day"));
}
function dayNumber(startDate) {
  const m = /^(\d{4})-(\d{2})-(\d{2})/.exec(String(startDate || ""));
  if (!m) return 1;
  const start = Date.UTC(Number(m[1]), Number(m[2]) - 1, Number(m[3]));
  let todayUTC;
  try { todayUTC = seoulDayUTC(new Date()); }
  catch (e) { const n = new Date(); todayUTC = Date.UTC(n.getFullYear(), n.getMonth(), n.getDate()); }
  return Math.max(1, Math.round((todayUTC - start) / 86400000) + 1);
}
function renderDay(startDate) {
  const n = dayNumber(startDate || REV_START);
  const pill = document.getElementById("day-pill");
  if (pill) pill.textContent = "DAY " + n;
  const lbl = document.getElementById("rev-sum-label");
  if (lbl) lbl.textContent = "💰 총 합산 (DAY " + n + ")";
  const pillTitle = document.getElementById("day-pill");
  if (pillTitle) pillTitle.title = "시작일 " + (startDate || REV_START) + " 기준 " + n + "일차 (오늘 포함)";
}

function normalizeRev(raw) {
  const src = (raw && typeof raw === "object" && !Array.isArray(raw)) ? raw : {};
  const num = (x) => { const n = Number(x); return Number.isFinite(n) ? n : 0; };
  const side = (o) => {
    const s = (o && typeof o === "object" && !Array.isArray(o)) ? o : {};
    return { total: num(s.total_krw), today: num(s.today_krw) };
  };
  const hb = side(src.haebyeongi);
  const td = side(src.partner);
  /* 월별 합산: history의 일자별 값(마지막 항목 = 오늘, Asia/Seoul)을 달별로 묶고,
     start_date 월부터 이번 달까지 기록 없는 월은 0으로 채운다 */
  const hist = Array.isArray(src.history) ? src.history : [];
  let todayUTC;
  try { todayUTC = seoulDayUTC(new Date()); }
  catch (e) { const n0 = new Date(); todayUTC = Date.UTC(n0.getFullYear(), n0.getMonth(), n0.getDate()); }
  const daily = hist.map((h, i) => {
    const value = (h && typeof h === "object") ? num(h.value !== undefined ? h.value : h.v) : num(h);
    const d = new Date(todayUTC - (hist.length - 1 - i) * 86400000);
    return { y: d.getUTCFullYear(), m: d.getUTCMonth(), value };
  });
  const endY = new Date(todayUTC).getUTCFullYear();
  const endM = new Date(todayUTC).getUTCMonth();
  const startM = /^(\d{4})-(\d{2})/.exec(String(src.start_date || REV_START));
  let sy = startM ? Number(startM[1]) : endY;
  let sm = startM ? Number(startM[2]) - 1 : endM;
  if (sy > endY || (sy === endY && sm > endM)) { sy = endY; sm = endM; }
  const items = [];
  while (sy < endY || (sy === endY && sm <= endM)) {
    const value = daily.filter(x => x.y === sy && x.m === sm).reduce((a, x) => a + x.value, 0);
    items.push({ label: (sm + 1) + "월", value, year: sy, month: sm });
    sm++; if (sm > 11) { sm = 0; sy++; }
  }
  /* 12월 결산: 가장 최근 12월이 잡히면 그 해의 총수익을 결산 값으로 표시 */
  let settle = null;
  for (let i = items.length - 1; i >= 0; i--) {
    if (items[i].month === 11) {
      const y = items[i].year;
      settle = { year: y, total: items.filter(it => it.year === y).reduce((a, it) => a + it.value, 0) };
      break;
    }
  }
  return {
    total: src.total_krw !== undefined ? num(src.total_krw) : hb.total + td.total,
    today: src.today_krw !== undefined ? num(src.today_krw) : hb.today + td.today,
    start_date: typeof src.start_date === "string" ? src.start_date : REV_START,
    hb, td, items, settle
  };
}

function renderRevenue(raw) {
  const d = normalizeRev(raw);
  const hbTotal = document.getElementById("rev-hb-total");
  const hbToday = document.getElementById("rev-hb-today");
  const tdTotal = document.getElementById("rev-td-total");
  const tdToday = document.getElementById("rev-td-today");
  const sumEl = document.getElementById("rev-sum-total");
  const sumToday = document.getElementById("rev-sum-today");
  if (!hbTotal || !tdTotal || !sumEl) return;

  hbToday.textContent = "오늘 +" + fmtKrw(d.hb.today);
  hbTotal.textContent = "누적 " + fmtKrw(d.hb.total);
  tdToday.textContent = "오늘 +" + fmtKrw(d.td.today);
  tdTotal.textContent = "누적 " + fmtKrw(d.td.total);
  if (sumToday) sumToday.textContent = "오늘 +" + fmtKrw(d.today);
  sumEl.textContent = "누적 " + fmtKrw(d.total);
  renderDay(d.start_date);

  const hbBoard = document.getElementById("rev-hb");
  const tdBoard = document.getElementById("rev-td");
  if (hbBoard) hbBoard.classList.toggle("earned", d.hb.today > 0);
  if (tdBoard) tdBoard.classList.toggle("earned", d.td.today > 0);

  const block = document.getElementById("rev-block");
  if (block) block.classList.toggle("is-empty", d.items.every(it => Math.abs(it.value) === 0));

  const emptyEl = document.getElementById("rev-empty");
  if (emptyEl) emptyEl.textContent = (d.items.length ? d.items[d.items.length - 1].label : "이번 달") + " 수익 없음";

  const settleEl = document.getElementById("rev-settle");
  const settleVal = document.getElementById("rev-settle-val");
  if (settleEl && settleVal) {
    if (d.settle) {
      settleEl.classList.remove("pending");
      settleVal.textContent = d.settle.year + "년 총 " + fmtKrw(d.settle.total);
    } else {
      settleEl.classList.add("pending");
      settleVal.textContent = "집계 예정";
    }
  }

  const chart = document.getElementById("rev-chart");
  if (chart) {
    const W = 140, H = 30, base = H - 4, top = 3;
    const count = d.items.length || 7;
    const max = Math.max(1, ...d.items.map(x => Math.abs(x.value)));
    const slot = W / count;
    const bw = Math.max(5, Math.min(13, slot * 0.5));
    const empty = d.items.every(it => Math.abs(it.value) === 0);
    const parts = empty
      ? [`<line x1="2" y1="${base + 0.5}" x2="${W - 2}" y2="${base + 0.5}" stroke="#22303f" stroke-width="1" stroke-dasharray="3 3" />`]
      : [`<line x1="0" y1="${base + 0.5}" x2="${W}" y2="${base + 0.5}" stroke="#1e293b" stroke-width="1" />`];
    if (!empty) {
      for (let i = 1; i < count; i++) parts.push(`<line x1="${(slot * i).toFixed(1)}" y1="${top}" x2="${(slot * i).toFixed(1)}" y2="${base}" stroke="#141e29" stroke-width="1" />`);
    }
    if (!empty) d.items.forEach((it, i) => {
      const cx = slot * i + slot / 2;
      const v = Math.abs(it.value);
      const h = v > 0 ? Math.max(3, (v / max) * (base - top)) : 6;
      const y = base - h;
      const col = v > 0 ? (i === count - 1 ? "#5eead4" : "#4ade80") : "#33475c";
      parts.push(`<rect x="${(cx - bw / 2).toFixed(1)}" y="${y.toFixed(1)}" width="${bw.toFixed(1)}" height="${h.toFixed(1)}" rx="1.5" fill="${col}"><title>${esc(it.label)} ${fmtKrw(it.value)}</title></rect>`);
    });
    chart.innerHTML = parts.join("");
    chart.setAttribute("aria-label", "월별 수익 " + d.items.map(i => i.label + " " + fmtKrw(i.value)).join(", "));
  }

  const labels = document.getElementById("rev-labels");
  if (labels) labels.innerHTML = d.items.map(it => `<span>${esc(it.label)}</span>`).join("");
}

let CHECKS = {};
const OPS_ROOMS = { ceo_tudeori: "td", ceo_haebyeong: "hb" };
function opsUnverifiedRoom(id) { const k = OPS_ROOMS[id]; if (!k) return false; const c = CHECKS && CHECKS[k]; return !checkState(c && typeof c === "object" ? c.ops : null); }
function checkState(v) { return (v && typeof v === "object" && v.state === "verified" && typeof v.checked_at === "string" && /T\d\d:\d\d/.test(v.checked_at)) ? v : null; }
function hhmmOf(iso) { const m = /T(\d\d:\d\d)/.exec(typeof iso === "string" ? iso : ""); return m ? m[1] : ""; }
function reportOf(k) { const r = k && k.report; return (r && typeof r === "object" && typeof r.text === "string" && r.text.trim()) ? r : null; }
function reportLabel(k) { const r = reportOf(k); return r ? "자기보고 " + (hhmmOf(r.reported_at) || "시각미상") : ""; }
function checkLine(id, name, raw) {
  const k = (raw && raw[id] && typeof raw[id] === "object") ? raw[id] : {};
  const cr = checkState(k.credit), op = checkState(k.ops), rl = reportLabel(k), r = reportOf(k);
  const parts = [cr ? "크레딧 확인 " + hhmmOf(cr.checked_at) : "크레딧 미확인", op ? "가동 확인 " + hhmmOf(op.checked_at) : "가동 미확인"];
  if (rl) parts.push(rl);
  return { text: name + parts.join(" · "), title: r ? ("자기보고(" + (typeof r.source === "string" ? r.source : "출처 미상") + "): " + r.text.trim()) : "확인 기록 없음" };
}
/* ================= 🎯 월 1,000만 원 목표 · 전 채널 수익화 연동 =================
   대표님이 2026-11-27 확정한 최종 목표. 확인된 실제 수익만 반영하고,
   네 채널(애드센스 CPC · 브랜드커넥트 제휴 · 스마트스토어 위탁 · 피클 리셋 티켓)의
   현재 상태를 한 줄로 보여 준다. */
const GOAL_DEFAULT = {
  title: "🎯 월 1,000만 원 수익 목표",
  subtitle: "전 채널 수익화 연동 — 블로그·SNS·스토어·앱 티켓을 하나의 수익 파이프라인으로",
  month_target_krw: 10000000,
  current_krw: 0,
  channels: []
};
let GOAL = null;

function manwon(n) {
  const v = Math.round(Number(n) || 0);
  if (v >= 100000000) return (v / 100000000).toFixed(v % 100000000 ? 1 : 0) + "억 원";
  if (v >= 10000) return Math.round(v / 10000).toLocaleString("ko-KR") + "만 원";
  return v.toLocaleString("ko-KR") + "원";
}

function goalData(raw) {
  const src = (raw && typeof raw === "object" && !Array.isArray(raw)) ? raw : {};
  const str = (v, d) => (typeof v === "string" && v.trim()) ? v.trim() : d;
  const num = (v, d) => { const n = Number(v); return Number.isFinite(n) ? n : d; };
  const channels = (Array.isArray(src.channels) ? src.channels : [])
    .filter(c => c && typeof c === "object" && typeof c.label === "string" && c.label.trim())
    .map(c => ({
      label: c.label.trim(),
      detail: str(c.detail, ""),
      state: str(c.state, "진행")
    }));
  return {
    title: str(src.title, GOAL_DEFAULT.title),
    subtitle: str(src.subtitle, GOAL_DEFAULT.subtitle),
    target: num(src.month_target_krw, GOAL_DEFAULT.month_target_krw),
    current: num(src.current_krw, 0),
    asOf: str(src.as_of, ""),
    note: str(src.note, ""),
    channels
  };
}

function renderGoal(raw) {
  if (raw !== undefined) GOAL = goalData(raw);
  if (!GOAL) GOAL = goalData(null);
  const d = GOAL;
  const set = (id, text) => { const el = document.getElementById(id); if (el) el.textContent = text; };
  set("goal-title", d.title);
  set("goal-sub", d.subtitle);
  set("goal-cur", "이번 달 " + fmtKrw(d.current));
  set("goal-target", "/ 월 " + manwon(d.target));
  const pct = d.target > 0 ? Math.min(100, Math.max(0, (d.current / d.target) * 100)) : 0;
  const fill = document.getElementById("goal-fill");
  if (fill) fill.style.width = pct.toFixed(pct > 0 && pct < 1 ? 1 : 0) + "%";
  set("goal-pct", pct < 1 && pct > 0 ? "1% 미만" : pct.toFixed(0) + "%");
  const chips = document.getElementById("goal-chips");
  if (chips) {
    chips.innerHTML = d.channels.map(c => {
      const cls = /대기|심사/.test(c.state) ? "wait" : "on";
      return `<span class="gchip ${cls}" title="${esc(c.detail)}"><b>${esc(c.label)}</b><i>${esc(c.state)}</i></span>`;
    }).join("");
  }
  const note = document.getElementById("goal-note");
  if (note) note.textContent = d.note;
}

/* ================= 🧷 6F 업무분장·배분 표 접기/펼치기 =================
   대표님 지시(2026-11-27 13:30) "대시보드 업무분장표는 접을수 있게 만들어. 너무길어"
   6F의 긴 표(임무 배분표 · 총괄 검수 원칙 · 경영진 분장표)는 기본 접힘으로 두고,
   머리줄을 누르면 펼쳐지고 다시 누르면 접힌다. 고른 상태는 이 브라우저에 기억한다. */
const FOLD_PANELS = {
  assign: { key: "liveoffice_fold_assign" },
  guard:  { key: "liveoffice_fold_guard" },
  roster: { key: "liveoffice_roster_open" }
};
const FOLD_OPEN = {};

function foldIsOpen(id) {
  if (!(id in FOLD_OPEN)) {
    let v = null;
    try { v = localStorage.getItem(FOLD_PANELS[id].key); } catch (e) {}
    FOLD_OPEN[id] = (v === "1");
  }
  return FOLD_OPEN[id];
}

function applyFold(id) {
  if (!FOLD_PANELS[id]) return;
  const open = foldIsOpen(id);
  const head = document.getElementById("fold-" + id + "-head");
  const body = document.getElementById("fold-" + id + "-body");
  const btn = document.getElementById("fold-" + id + "-btn");
  if (body) {
    body.classList.toggle("collapsed", !open);
    body.setAttribute("aria-hidden", open ? "false" : "true");
  }
  if (head) head.setAttribute("aria-expanded", open ? "true" : "false");
  if (btn) btn.textContent = open ? "접기 ▴" : "펼치기 ▾";
}

/* 표 높이가 바뀌면 엘리베이터 눈금·정지 위치도 다시 맞춘다 */
function foldSyncLift() {
  clearTimeout(foldSyncLift.t);
  foldSyncLift.t = setTimeout(() => {
    if (typeof buildTicks === "function") buildTicks();
    if (typeof liftPark === "function") liftPark();
  }, 320);
}

function toggleFold(id) {
  if (!FOLD_PANELS[id]) return;
  FOLD_OPEN[id] = !foldIsOpen(id);
  try { localStorage.setItem(FOLD_PANELS[id].key, FOLD_OPEN[id] ? "1" : "0"); } catch (e) {}
  applyFold(id);
  foldSyncLift();
}

function foldKey(e, id) {
  if (e.key === "Enter" || e.key === " " || e.key === "Spacebar") { e.preventDefault(); toggleFold(id); }
}

/* 머리줄 HTML: 제목 + 요약 + 펼치기/접기 버튼 (titleHTML·metaHTML은 이미 escape된 값) */
function foldHeadHTML(id, cls, titleHTML, metaHTML, hint) {
  const open = foldIsOpen(id);
  return `<div class="${cls} fold-head" id="fold-${id}-head" role="button" tabindex="0" aria-expanded="${open ? "true" : "false"}" aria-controls="fold-${id}-body" title="${esc(hint || "눌러서 접기·펼치기")}" onclick="toggleFold('${id}')" onkeydown="foldKey(event,'${id}')">
      <span class="fold-title">${titleHTML}</span>${metaHTML ? `<em class="fold-meta">${metaHTML}</em>` : ""}<span class="fold-btn" id="fold-${id}-btn">${open ? "접기 ▴" : "펼치기 ▾"}</span>
    </div>`;
}

/* ================= 🛡️ 총괄 검수·준법 원칙 ================= */
const GUARD_DEFAULT = {
  title: "🛡️ 총괄 검수·준법 원칙",
  note: "팩트체크 · 저작권·지재권 · 애드센스·네이버 약관 준수는 총괄(투덜이)이 전담 검수·지휘합니다.",
  items: []
};
function renderGuard(raw) {
  const el = document.getElementById("pent-guard");
  if (!el) return;
  const src = (raw && typeof raw === "object" && !Array.isArray(raw)) ? raw : GUARD_DEFAULT;
  const str = (v, d) => (typeof v === "string" && v.trim()) ? v.trim() : d;
  const items = (Array.isArray(src.items) ? src.items : [])
    .filter(it => it && typeof it === "object" && typeof it.title === "string" && it.title.trim());
  el.innerHTML = `
    ${foldHeadHTML("guard", "gd-head", esc(str(src.title, GUARD_DEFAULT.title)), esc(items.length ? items.length + "원칙" : "펼쳐서 보기"), "눌러서 총괄 검수·준법 원칙 접기·펼치기")}
    <div class="fold-body" id="fold-guard-body"><div class="fold-inner">
      <p class="gd-note">${esc(str(src.note, GUARD_DEFAULT.note))}</p>
      <div class="gd-items">${items.map(it => `<span class="gd-item"><b>${esc(it.title.trim())}</b>${esc(typeof it.text === "string" ? it.text : "")}</span>`).join("")}</div>
    </div></div>`;
  applyFold("guard");
}

function renderCredit(raw) {
  const c = (raw && typeof raw === "object" && !Array.isArray(raw)) ? raw : {};
  CHECKS = (c.checks && typeof c.checks === "object" && !Array.isArray(c.checks)) ? c.checks : {};
  const hb = document.getElementById("cred-hb");
  const td = document.getElementById("cred-td");
  const a = checkLine("hb", "🔵 해병이: ", CHECKS), b = checkLine("td", "🟣 투덜이: ", CHECKS);
  if (hb) { hb.textContent = a.text; hb.title = a.title; }
  if (td) { td.textContent = b.text; td.title = b.title; }
}

/* ================= 🚦 신호등 (🔵 일반 확인·승인 / 🔴 자금·결제) =================
   개인정보 없음: 부서명·할 일 문구만 담는다.
   🔵 파란불 = 오너가 꼭 알아야 하는 보고·외부 발송·게시·계약 전 일반 승인 대기
   🔴 빨간불 = 자금이 실제로 움직이는 건(계좌 개설·이체·매수·결제·금융 인증).
   AI는 리서치·초안·비교·알림·기록까지만 하고 실행은 오너가 직접 한다. */
const SIGNAL_FALLBACK = {
  note: "🔵 파란불=대표님 결정 필요 · 🔴 빨간불=자금·결제(대표님 직접) · 🏭 큐맥스는 지시 시 가동",
  updated: "--:--",
  blue: [
    { room: "commerce", title: "위탁판매 재상신(#24·#25) — 무재고 낱개 위탁 단일 트랙 · 1안/2안 택1(보류 포함)", detail: "1안 세 곳 등급가 비교 / 2안 오너클랜 단독 / 보류 중 대표님 선택 · 재고·선결제 0원" }
  ],
  red: []
};

function signalData(raw) {
  const src = (raw && typeof raw === "object" && !Array.isArray(raw)) ? raw : SIGNAL_FALLBACK;
  const list = (v) => Array.isArray(v) ? v.filter(x => x && typeof x === "object" && typeof x.title === "string" && x.title.trim()).map(x => ({
    room: (typeof x.room === "string") ? x.room.trim() : "",
    title: x.title.trim(),
    ackVersion: RedRead.version(x),
    detail: (typeof x.detail === "string" && x.detail.trim()) ? x.detail.trim() : ""
  })) : [];
  return {
    blue: list(src.blue),
    red: list(src.red),
    note: (typeof src.note === "string" && src.note.trim()) ? src.note.trim() : SIGNAL_FALLBACK.note,
    updated: (typeof src.updated === "string" && src.updated.trim()) ? src.updated.trim() : ""
  };
}

let SIGNALS_BASE = signalData(null);   // status.json에서 온 원본 신호 (결정과 무관)
let SIGNALS = SIGNALS_BASE;            // 로컬 선택과 무관한 대기 신호
let SIG_OPEN = null;
let redStorage;
try { redStorage = window.localStorage; } catch (_) { redStorage = {getItem(){return null},setItem(){throw new Error('Storage unavailable')}}; }
const RED_READ = RedRead.create(redStorage);
function activeRedItems() {
  return [...(SIGNALS_BASE.red || []), ...((CHIEF && CHIEF.items) || []).filter(x => x.lane === 'red')]
    .filter(it => !signalCleared('red', it));
}
function redGroupUnread(it) {
  return activeRedItems().some(x => RedRead.group(x) === RedRead.group(it) && !RED_READ.isRead(x));
}
function unreadRedItems() {
  const byGroup = new Map();
  activeRedItems().forEach(it => { if (!RED_READ.isRead(it)) byGroup.set(RedRead.group(it), it); });
  return [...byGroup.values()];
}
function acknowledgeRed(e, source, idx) {
  if (e) { e.stopPropagation(); e.preventDefault(); }
  const it = source === 'chief' ? CHIEF.items[idx] : (SIGNALS.red || [])[idx];
  const targets = source === 'all' ? activeRedItems() : it ? activeRedItems().filter(x => RedRead.group(x) === RedRead.group(it)) : [];
  if (!targets.length) return;
  RED_READ.mark(targets);
  renderChief(); renderSignals(); refreshReport();
}


function laneCount(id, lane) {
  return (SIGNALS[lane] || []).filter(it => it.room === id).length;
}
function laneOf(id) {
  if (laneCount(id, "red") > 0) return "red";
  if (laneCount(id, "blue") > 0) return "blue";
  return "";
}
function roomSignals(id, all, scopeIds = []) {
  const source = signalsView(SIGNALS_BASE, chiefDecisions(), true);
  const pick = (lane) => (source[lane] || []).filter(it => all ? true : it.room === id || scopeIds.includes(it.room));
  return { blue: pick("blue"), red: pick("red") };
}

/* 총괄 결정(승인·반려)과 신호등을 잇는 열쇠: 총괄 항목 id와 같은 규칙이다 */

/* 그 신호가 이미 결정(승인·반려)되어 신호등에서 내려갔는지 — 재심의(re)는 결론 전이라 불을 켠 채로 둔다 */
function signalCleared(lane, it, base, dec) {
  // Only a matching source-completed task can leave the active signal view.
  return !!(CHIEF && CHIEF.items.some(x => x.room === it.room && x.title === it.title && TaskArchive.bucket(x) === "archived"));
}

function signalsView(base, dec, includeRead = false) {
  const pick = (lane) => (base[lane] || []).filter(it => !signalCleared(lane, it, base, dec));
  return { blue: pick("blue"), red: includeRead ? pick("red") : unreadRedItems(), note: base.note, updated: base.updated };
}

function renderSignals(raw) {
  if (raw !== undefined) SIGNALS_BASE = signalData(raw);
  SIGNALS = signalsView(SIGNALS_BASE, chiefDecisions());
  const bn = document.getElementById("sig-blue-n"), rn = document.getElementById("sig-red-n");
  if (bn) bn.textContent = SIGNALS.blue.length;
  if (rn) rn.textContent = SIGNALS.red.length;
  const bBtn = document.getElementById("sig-blue"), rBtn = document.getElementById("sig-red");
  if (bBtn) {
    bBtn.classList.toggle("zero", SIGNALS.blue.length === 0);
    bBtn.classList.toggle("open", SIG_OPEN === "blue");
    bBtn.setAttribute("aria-expanded", SIG_OPEN === "blue" ? "true" : "false");
    const sub = bBtn.querySelector(".sig-sub");
    if (sub) sub.textContent = SIGNALS.blue.length ? "부서 신호 · 보류 포함" : "0 · 대기 없음";
  }
  if (rBtn) {
    rBtn.classList.toggle("zero", SIGNALS.red.length === 0);
    rBtn.classList.toggle("open", SIG_OPEN === "red");
    rBtn.setAttribute("aria-expanded", SIG_OPEN === "red" ? "true" : "false");
    const sub = rBtn.querySelector(".sig-sub");
    if (sub) sub.textContent = SIGNALS.red.length ? "미확인 · 오너 직접" : "미확인 없음 · 업무 유지";
    const word = rBtn.querySelector(".sig-word");
    if (word) word.textContent = SIGNALS.red.length ? "🔴 빨간불" : "⚪ 빨간불 꺼짐";
    const ack = document.getElementById("red-ack-all");
    if (ack) { ack.disabled = !SIGNALS.red.length; ack.textContent = SIGNALS.red.length ? "확인" : "확인됨"; }
    const note = document.getElementById("red-read-note");
    if (note) note.textContent = RED_READ.saved ? "확인 = 이 브라우저 읽음·알림 끄기. 승인·결제·업무 완료 아님. 미결 업무는 보고에 남습니다." : "이 브라우저에서 알림을 껐습니다. 저장을 사용할 수 없어 새로고침하면 다시 켜질 수 있습니다. 승인·결제·완료 아님.";
  }
  rooms.forEach(r => {
    if (r.ceo) return;
    const b = laneCount(r.id, "blue"), rd = laneCount(r.id, "red");
    const box = document.getElementById("lanes-" + r.id);
    if (box) box.innerHTML = (rd ? `<span class="lane red">🔴${rd > 1 ? rd : ""}</span>` : "") + (b ? `<span class="lane blue">🔵${b > 1 ? b : ""}</span>` : "");
    const el = document.getElementById("room-" + r.id);
    if (!el) return;
    // 남은 건이 없으면 빨간불·파란불(테두리·전구·배지)이 함께 꺼진다
    el.classList.toggle("money", rd > 0);
    el.classList.toggle("confirm", rd === 0 && b > 0);
    if (el.classList.contains("alert")) {
      const tag = document.getElementById("tag-" + r.id);
      if (tag) tag.textContent = rd > 0 ? "자금" : b > 0 ? "확인" : STATE_LABEL.alert;
    }
    // 전광판 앞머리 🔴/🔵 표시도 남은 건 기준으로 즉시 다시 붙인다
    const track = document.getElementById("track-" + r.id);
    if (track && typeof track.dataset.text === "string") {
      const clean = track.dataset.text.replace(/^(?:🔵|🔴)\uFE0F?\s*/, "");
      const mark = rd > 0 ? "🔴 " : b > 0 ? "🔵 " : "";
      if (mark + clean !== track.dataset.text) {
        const st = el.classList.contains("alert") ? "alert" : el.classList.contains("working") ? "working" : el.classList.contains("unverified") ? "unverified" : "idle";
        setBoardText(r.id, mark + clean, undefined, st);
      }
    }
  });
  renderSigList();
  updatePill();
}

function renderSigList() {
  const box = document.getElementById("sig-list");
  if (!box) return;
  if (!SIG_OPEN) { box.hidden = true; box.innerHTML = ""; return; }
  const items = SIGNALS[SIG_OPEN] || [];
  const head = SIG_OPEN === "red"
    ? "🔴 빨간불 · 자금·계좌·이체·결제 — AI 임의 실행 금지, 오너가 직접 처리"
    : "🔵 파란불 · 꼭 확인해야 하는 보고·외부 발송·게시·계약 전 승인";
  box.hidden = false;
  box.innerHTML = `<div class="sig-lh ${SIG_OPEN}">${esc(head)}</div>` + (items.length
    ? items.map((it, idx) => {
        const r = rooms.find(x => x.id === it.room);
        return `<div class="sig-row ${SIG_OPEN}"><span class="sig-rm">${esc(r ? r.title : "공통")}</span><span class="sig-tx"><b>${esc(it.title)}</b>${it.detail ? `<i>${esc(it.detail)}</i>` : ""}</span>${SIG_OPEN === "red" ? `<button class="red-ack" type="button" onkeydown="event.stopPropagation()" onclick="acknowledgeRed(event, 'signal', ${idx})">확인</button>` : ""}${r ? `<button class="sig-go" type="button" onclick="openReport('${esc(r.id)}')">열기</button>` : ""}</div>`;
      }).join("")
    : `<div class="sig-row">지금 대기 중인 건이 없습니다.</div>`);
}

function toggleSig(lane) {
  SIG_OPEN = (SIG_OPEN === lane) ? null : lane;
  renderSignals();
}

/* ================= 💼 총괄 (총괄 보고 · 긴급 처리) =================
   두 부장(해병이·투덜이)의 미결·대기 건을 하나로 모아 🔴 자금·인증 → 🔵 승인·확인 → ⏳ 일반 대기
   순으로 자동 정렬한다. 줄을 누르면 해당 부서 보고 모달(체크리스트·담당)이 열리고,
   공개 사이트가 있으면 바로가기 버튼도 제공한다. 개인정보 없음(부서명·할 일·공개 주소만). */
const CHIEF_LANE = { red: 0, blue: 1, wait: 2 };
const CHIEF_ICON = { red: "🔴", blue: "🔵", wait: "⏳" };
let CHIEF = null;
let CHIEF_OPEN = null;

function chiefData(raw) {
  const src = (raw && typeof raw === "object" && !Array.isArray(raw)) ? raw : {};
  const str = (v, d) => (typeof v === "string" && v.trim()) ? v.trim() : d;
  const list = Array.isArray(src.items) ? src.items : [];
  const items = list
    .filter(it => it && typeof it === "object" && typeof it.title === "string" && it.title.trim())
    .map(it => ({
      lane: (it.lane === "red" || it.lane === "blue" || it.lane === "wait") ? it.lane : "wait",
      room: (typeof it.room === "string" && rooms.some(r => r.id === it.room)) ? it.room : "",
      title: it.title.trim(),
      detail: str(it.detail, ""),
      url: (typeof it.url === "string" && /^https?:\/\//.test(it.url)) ? it.url : "",
      ackVersion: RedRead.version(it),
      status: str(it.status, ""),
      completed_at: str(it.completed_at, ""),
      urlLabel: str(it.url_label || it.urlLabel, "열기")
    }));
  const fallback = () => {
    const out = [];
    (SIGNALS_BASE.red || []).forEach(x => out.push({ lane: "red", room: x.room, title: x.title, detail: x.detail, url: "", urlLabel: "열기" }));
    (SIGNALS_BASE.blue || []).forEach(x => out.push({ lane: "blue", room: x.room, title: x.title, detail: x.detail, url: "", urlLabel: "열기" }));
    return out;
  };
  const merged = items.length ? items : fallback();
  merged.sort((a, b) => (CHIEF_LANE[a.lane] - CHIEF_LANE[b.lane]));
  merged.forEach(it => { it.id = it.lane + "|" + it.room + "|" + it.title; });
  return {
    title: str(src.title, "총괄 · 보고·결재 창구"),
    note: str(src.note, "관리자·부총괄 검토 → 총괄 팩트체크·승인 · 🔴 자금 최우선 → 🔵 승인 → ⏳ 대기"),
    updated: str(src.updated, ""),
    items: merged
  };
}

function chiefOpenState() {
  if (CHIEF_OPEN === null) {
    let v = null;
    try { v = localStorage.getItem("liveoffice_chief"); } catch (e) {}
    CHIEF_OPEN = (v === "0") ? false : true;
  }
  return CHIEF_OPEN;
}

function applyChiefState() {
  const open = chiefOpenState();
  const body = document.getElementById("chief-body");
  const head = document.getElementById("chief-head");
  const caret = document.getElementById("chief-caret");
  if (body) body.hidden = !open;
  if (head) head.setAttribute("aria-expanded", open ? "true" : "false");
  if (caret) caret.textContent = open ? "▾" : "▸";
}

function toggleChief() {
  CHIEF_OPEN = !chiefOpenState();
  try { localStorage.setItem("liveoffice_chief", CHIEF_OPEN ? "1" : "0"); } catch (e) {}
  applyChiefState();
}

function chiefClick(e, room) {
  if (e && e.target && e.target.closest && e.target.closest("button, a")) return;
  if (room) openReport(room);
}

/* 승인·반려·재심의 결정: 원터치 중계 키(ntfy)가 있으면 바로 접수되고, 없으면 GitHub 결재함(Issue)으로 접수된다.
   접수 결과는 #피클지시 실행 감시(5분 간격)가 확인해 처리하며, 화면은 접수 번호와 상태를 보존한다. */
let CHIEF_DEC = null;
// One ordered transport per agenda item. Selections stay editable while sending.
const CHIEF_SENDS = new Map();

function chiefDecisions() {
  if (CHIEF_DEC === null) {
    try {
      const raw = localStorage.getItem("liveoffice_chief_dec");
      CHIEF_DEC = raw ? JSON.parse(raw) : {};
    } catch (e) { CHIEF_DEC = {}; }
    if (!CHIEF_DEC || typeof CHIEF_DEC !== "object" || Array.isArray(CHIEF_DEC)) CHIEF_DEC = {};
    Object.values(CHIEF_DEC).forEach(entry => {
      if (entry && (entry.sending || entry.queued)) {
        Object.assign(entry, { sending: false, queued: false, sent: false, uncertain: true });
      }
    });
  }
  return CHIEF_DEC;
}

function chiefSaveDecisions() {
  try { localStorage.setItem("liveoffice_chief_dec", JSON.stringify(chiefDecisions())); } catch (e) {}
}

function chiefItem(idx) {
  return (CHIEF && Array.isArray(CHIEF.items)) ? (CHIEF.items[idx] || null) : null;
}

function chiefPhrase(it, state) {
  const rr = rooms.find(r => r.id === it.room);
  const who = rr ? " · " + rr.tag : "";
  const where = rr ? " (" + rr.title + ")" : "";
  const head = (state === "ok" ? "[총괄 승인" : state === "re" ? "[총괄 재심의" : "[총괄 반려") + who + "] ";
  const nm = it.title + where;
  if (state === "ok") {
    return it.lane === "red"
      ? head + nm + " — 오너 직접 실행 건입니다. 실행은 오너가 직접 하고, 총괄은 안내·기록만 해 주세요."
      : head + nm + " — 승인했습니다. 그대로 진행해 주세요.";
  }
  if (state === "re") {
    return head + nm + " — 재심의합니다. 근거·대안·비용·일정을 보완해서 다시 상신해 주세요. 결론이 날 때까지 신호는 켜 둡니다.";
  }
  return it.lane === "red"
    ? head + nm + " — 반려합니다. 해당 안건 내용을 삭제해 주세요. 자금·인증 건이니 진행을 중단하고 원기록은 보존해 주세요."
    : head + nm + " — 반려합니다. 해당 안건 내용을 삭제해 주세요. 원기록은 보존합니다.";
}

function setupRelayFromUrl() {
  try {
    const u = new URL(window.location.href);
    const k = (u.searchParams.get("k") || "").trim();
    if (k && /^[a-zA-Z0-9_-]{12,80}$/.test(k)) {
      localStorage.setItem("liveoffice_relay_key", k);
      u.searchParams.delete("k");
      window.history.replaceState({}, "", u.pathname + u.search + u.hash);
    }
  } catch (e) {}
}
setupRelayFromUrl();

function hasRelayKey() {
  try { return !!(localStorage.getItem("liveoffice_relay_key") || "").trim(); } catch (e) { return false; }
}

function ghToken() {
  try { return (localStorage.getItem("liveoffice_gh_token") || "").trim(); } catch (e) { return ""; }
}

function setupGhToken() {
  let cur = "";
  try { cur = localStorage.getItem("liveoffice_gh_token") || ""; } catch (e) {}
  const msg = cur
    ? "현재 원클릭 자동전송 토큰이 저장되어 있습니다.\n새 토큰을 입력해 덮어쓰거나, 빈 칸으로 확인을 누르면 저장된 토큰을 삭제합니다."
    : "새 창 없이 버튼 한 번으로 바로 결재를 접수하려면 GitHub Fine-grained 토큰(이 저장소 Issues 쓰기 전용)을 입력하세요.\n(토큰은 이 브라우저에만 저장되며 코드에 남지 않습니다.)";
  const val = window.prompt(msg, "");
  if (val === null) return;
  try {
    const clean = val.trim();
    if (clean) {
      localStorage.setItem("liveoffice_gh_token", clean);
      alert("원클릭 자동전송 설정 완료! 이제 승인·반려·재심의 버튼을 누르면 새 창 없이 바로 접수·실행됩니다.");
    } else {
      localStorage.removeItem("liveoffice_gh_token");
      alert("저장된 토큰을 삭제했습니다. 버튼 클릭 시 GitHub 접수창이 열립니다.");
    }
  } catch (e) {}
}

function decisionLabel(s) {
  return s === "ok" ? "승인" : s === "re" ? "재심의" : "반려";
}

function decisionBadge(d) {
  if (!d) return "";
  const lbl = decisionLabel(d.s);
  const icon = d.s === "ok" ? "✅" : d.s === "re" ? "🔁" : "⛔";
  if (d.sending) return `⏳ ${lbl} 전송 중… · 버튼 잠금`;
  if (d.queued) return `⏳ ${lbl} 변경 전송 대기`;
  if (d.dupBlocked) return `🛡️ ${lbl} 이미 접수됨${d.dupAt ? ` (${d.dupAt})` : ""} · 중복 접수 차단`;
  if (d.uncertain) return `⚠️ ${lbl} 수신 여부 미확인 · 확인 후 재시도`;
  if (d.error) return `⚠️ ${lbl} 미접수 · ${d.error}`;
  if (d.sent) {
    if (d.deduped) return `🛡️ ${lbl} 이미 접수됨${d.dupAt ? ` (${d.dupAt})` : ""}${d.issueNum ? ` (#${d.issueNum})` : ""} · 중복 접수 차단`;
    return `${icon} ${lbl} 접수됨${d.issueNum ? ` (#${d.issueNum})` : ""}${d.sentClock ? ` · ${d.sentClock}` : ""} · 담당 확인·처리 대기`;
  }
  if (d.opened) {
    return `📤 ${lbl} 접수창 열림 · 아직 접수 확인 전`;
  }
  return `${icon} ${lbl} 선택 · 미접수`;
}

/* 🛡️ 중복 접수 차단: 접수 기록(decision-guard.js)과 중계 주제·열린 결재 이슈를 보고
   이미 접수된 같은 안건은 다시 보내지 않는다. */
function decisionGuardApi() {
  return (typeof window !== "undefined" && window.LODecisionGuard) || null;
}

function guardRemember(it, state, channel, ref) {
  const g = decisionGuardApi();
  if (!g) return;
  try {
    g.remember(null, { id: it.id, title: it.title, state, channel, ref: ref || "", at: Date.now() });
  } catch (e) {}
}

async function sendDecisionToGitHub(it, state, entry, revision) {
  const current = () => chiefDecisions()[it.id] === entry && entry.revision === revision;
  const mark = (values) => {
    if (!current()) return;
    Object.assign(entry, values);
    chiefSaveDecisions();
    syncDecisionLights();
  };
  const markUncertain = () => {
    if (chiefDecisions()[it.id] !== entry) return;
    Object.assign(entry, { sending: false, queued: false, sent: false, uncertain: true });
    chiefSaveDecisions();
    syncDecisionLights();
  };
  const rr = rooms.find(r => r.id === it.room);
  const who = rr ? rr.tag : (it.room || "미지정");
  const where = rr ? rr.title : "";
  const lbl = decisionLabel(state);
  const title = `[결재·${lbl}] ${it.title}`;
  const body = [
    `안건 ID: ${it.id}`,
    `결정: ${lbl}`,
    `담당: ${who}${where ? ` (${where})` : ""}`,
    `시각: ${new Date().toLocaleString("ko-KR", { timeZone: "Asia/Seoul" })}`
  ].join("\n");
  const guard = decisionGuardApi();

  let relayKey = "";
  try { relayKey = (localStorage.getItem("liveoffice_relay_key") || "").trim(); } catch (e) {}
  if (relayKey) {
    entry.sending = true;
    syncDecisionLights();
    // 다른 기기·브라우저에서 이미 접수한 같은 안건인지, 중계 주제에 남은 최근 메시지로 먼저 확인한다.
    let seen = null;
    if (guard) {
      try { seen = await guard.remoteRelay(relayKey, { id: it.id, state, timeoutMs: 4000 }); } catch (e) { seen = null; }
    }
    if (seen && seen.blocked) {
      const at = guard.clockOf(seen.receipt && seen.receipt.at);
      guardRemember(it, state, "ntfy", seen.receipt && seen.receipt.relayId);
      mark({ sending: false, queued: false, sent: true, relay: true, opened: false, deduped: true,
        dupAt: at, sentClock: at, relayId: (seen.receipt && seen.receipt.relayId) || "" });
      return;
    }
    try {
      const res = await fetch("https://ntfy.sh/" + encodeURIComponent(relayKey), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: it.id,
          title: it.title,
          room: it.room,
          who,
          where,
          state,
          label: lbl,
          phrase: chiefPhrase(it, state),
          ts: Date.now()
        })
      });
      if (res.ok) {
        let rid = "";
        try { const data = await res.json(); rid = (data && data.id) || ""; } catch (e) {}
        guardRemember(it, state, "ntfy", rid);
        mark({ sending: false, queued: false, sent: true, relay: true, opened: false, deduped: false,
          dupAt: "", dupBlocked: false, relayId: rid, sentClock: hhmm(), sentAt: new Date().toISOString() });
        return;
      }
      if (res.status >= 500) { markUncertain(); return; }
      mark({ sending: false, queued: false, sent: false, error: "중계 서버가 전송을 거절했습니다" });
    } catch (err) {
      markUncertain();
    }
    // Do not silently send the same request to a second, public destination.
    return;
  }

  let tok = "";
  try { tok = localStorage.getItem("liveoffice_gh_token") || ""; } catch (e) {}
  if (tok) {
    entry.sending = true;
    syncDecisionLights();
    try {
      // 열린 결재 이슈에 같은 안건·같은 결정이 이미 있으면 새 이슈를 만들지 않는다.
      // (다른 기기·브라우저에서 먼저 눌렀거나 저장소가 초기화된 경우)
      if (!entry.issueNum && guard) {
        let found = null;
        try {
          const r = await fetch("https://api.github.com/repos/shgmlwhd03-commits/-/issues?labels=decision&state=open&per_page=100", {
            headers: { "Accept": "application/vnd.github+json", "Authorization": "Bearer " + tok }
          });
          if (r.ok) found = guard.findOpenIssue(await r.json(), { id: it.id });
        } catch (e) { found = null; }
        if (found && found.number && found.decision && found.decision === lbl) {
          const at = hhmm();
          guardRemember(it, state, "github", String(found.number));
          entry.issueNum = found.number;
          entry.issueUrl = found.url;
          mark({ sending: false, queued: false, sent: true, opened: false, deduped: true, dupAt: at,
            sentClock: at, issueNum: found.number, issueUrl: found.url });
          chiefSaveDecisions();
          return;
        }
        // 결정이 바뀐 건은 새 이슈로 접수한다(감시가 새 번호를 처리할 수 있도록).
      }
      const endpoint = entry.issueNum
        ? `https://api.github.com/repos/shgmlwhd03-commits/-/issues/${entry.issueNum}`
        : "https://api.github.com/repos/shgmlwhd03-commits/-/issues";
      const method = entry.issueNum ? "PATCH" : "POST";
      const payload = entry.issueNum
        ? { title, body, state: "open" }
        : { title, body, labels: ["decision"] };
      const res = await fetch(endpoint, {
        method,
        headers: {
          "Accept": "application/vnd.github+json",
          "Authorization": "Bearer " + tok,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });
      if (res.ok) {
        const data = await res.json();
        // Preserve the receipt even if a newer choice was made while awaiting it.
        entry.issueNum = data.number;
        entry.issueUrl = data.html_url;
        guardRemember(it, state, "github", String(data.number || ""));
        mark({ sending: false, queued: false, sent: true, opened: false, deduped: false, dupAt: "",
          dupBlocked: false, sentClock: hhmm(), sentAt: new Date().toISOString() });
        chiefSaveDecisions();
        return;
      }
      if (res.status >= 500) { markUncertain(); return; }
      mark({ sending: false, queued: false, sent: false, error: "GitHub 전송을 거절했습니다" });
    } catch (err) {
      markUncertain();
    }
    return;
  }

  const url = "https://github.com/shgmlwhd03-commits/-/issues/new?labels=decision&title=" +
    encodeURIComponent(title) + "&body=" + encodeURIComponent(body);
  entry.sending = false;
  entry.queued = false;
  entry.opened = true;
  entry.sent = false;
  chiefSaveDecisions();
  syncDecisionLights();
  window.open(url, "_blank", "noopener");
}

function chiefDecide(e, idx, state, force) {
  if (e) e.stopPropagation();
  const it = chiefItem(idx);
  if (!it || it.lane === "red" || !["ok", "no", "re"].includes(state)) return;
  const d = chiefDecisions();
  const entry = d[it.id] || {};
  if (entry.uncertain) {
    // Keep choices editable, but do not duplicate an unverified submission.
    Object.assign(entry, { s: state, t: hhmm(), revision: (entry.revision || 0) + 1 });
    chiefSaveDecisions();
    syncDecisionLights();
    return;
  }
  if (entry.s === state && (entry.sending || entry.queued || entry.sent || entry.opened)) {
    // 같은 결정을 다시 눌렀다(연타). 이미 접수된 건은 다시 접수하지 않고 안내만 남긴다.
    Object.assign(entry, { dupBlocked: true, dupAt: entry.sentClock || entry.dupAt || entry.t || "" });
    chiefSaveDecisions();
    syncDecisionLights();
    return;
  }
  if (!force) {
    const g = decisionGuardApi();
    let verdict = null;
    if (g) {
      try { verdict = g.check(null, { id: it.id, title: it.title, state, now: Date.now() }); } catch (err) { verdict = null; }
    }
    if (verdict && verdict.blocked) {
      // 접수 기록에 같은 안건·같은 결정이 있다. 새로 보내지 않고 이미 접수됨을 알린다.
      d[it.id] = Object.assign(entry, {
        s: state, dupBlocked: true, dupAt: verdict.at || "", deduped: false
      });
      chiefSaveDecisions();
      syncDecisionLights();
      return;
    }
  }
  const revision = (Number.isSafeInteger(entry.revision) ? entry.revision : 0) + 1;
  Object.assign(entry, { s: state, t: hhmm(), revision, sent: false, opened: false,
    sending: false, queued: true, error: "", uncertain: false, dupBlocked: false, dupAt: "", deduped: false });
  d[it.id] = entry;
  chiefSaveDecisions();
  syncDecisionLights();
  const previous = CHIEF_SENDS.get(it.id) || Promise.resolve();
  const next = previous.catch(() => {}).then(async () => {
    // Coalesce choices not yet sent. Never let an older response confirm a new one.
    if (d[it.id] !== entry || entry.revision !== revision || entry.uncertain) return;
    entry.queued = false;
    entry.sending = true;
    chiefSaveDecisions();
    syncDecisionLights();
    await sendDecisionToGitHub(it, state, entry, revision);
  });
  CHIEF_SENDS.set(it.id, next);
  next.finally(() => {
    if (CHIEF_SENDS.get(it.id) === next) CHIEF_SENDS.delete(it.id);
  }).catch(() => {});
}

function chiefUndoable(it) {
  const entry = chiefDecisions()[it.id];
  return !(entry && (CHIEF_SENDS.has(it.id) || entry.sent || entry.opened || entry.issueNum || entry.uncertain));
}

function chiefUndo(e, idx) {
  if (e) e.stopPropagation();
  const it = chiefItem(idx);
  if (!it) return;
  const d = chiefDecisions();
  const entry = d[it.id];
  // A submitted request cannot be withdrawn by deleting a local receipt.
  if (!chiefUndoable(it)) return;
  delete d[it.id];
  chiefSaveDecisions();
  syncDecisionLights();
}

/* 결정이 바뀌면 총괄 카운트·상단 신호등·방 불빛·열린 보고를 한 번에 다시 그린다.
   신호는 SIGNALS_BASE에서 다시 계산하므로 ↺를 누르면 그 건의 불이 그대로 되살아난다. */
window.archiveReclassify = function() { renderChief(); renderSignals(); refreshReport(); };

function syncDecisionLights() {
  renderSignals();
  renderChief();
  refreshReport();
}

function chiefCopyPhrase(e, idx) {
  if (e) e.stopPropagation();
  const it = chiefItem(idx);
  if (!it) return;
  const d = chiefDecisions();
  if (!d[it.id]) return;
  copyText(chiefPhrase(it, d[it.id].s), e && e.currentTarget ? e.currentTarget : null);
}

// Display only: a received final choice can be folded without changing its status.
function chiefCanCompact(it, entry) {
  return !!(it && it.lane !== "red" && entry && entry.sent === true &&
    ["ok", "no"].includes(entry.s) && !entry.sending && !entry.queued &&
    !entry.uncertain && !entry.error);
}

function compactDecisionReport(title, entry, content) {
  return `<details class="decision-compact"><summary><b>${esc(title)}</b><span title="${esc(decisionBadge(entry))}">${decisionLabel(entry.s)} 접수 · 처리 대기</span><small>상세</small></summary>${content}</details>`;
}

function renderChief(raw) {
  if (raw !== undefined) CHIEF = chiefData(raw);
  if (!CHIEF) CHIEF = chiefData(null);
  const body = document.getElementById("chief-body");
  if (!body) return;
  const dec = chiefDecisions();
  const allItems = CHIEF.items;
  let okN = 0, noN = 0, reN = 0;
  allItems.forEach(it => {
    const d = dec[it.id];
    if (d) { if (d.s === "ok") okN += 1; else if (d.s === "re") reN += 1; else noN += 1; }
  });
  // Only source-completed tasks with a known age of 24 hours are separated.
  const items = allItems.filter(it => TaskArchive.bucket(it) !== "archived")
    .sort((a, b) => Number(chiefCanCompact(a, dec[a.id])) - Number(chiefCanCompact(b, dec[b.id])));
  const n = { red: 0, blue: 0, wait: 0 };
  items.forEach(it => { n[it.lane] += 1; });
  const cnt = document.getElementById("chief-cnt");
  if (cnt) cnt.innerHTML = `<span class="cc-red${unreadRedItems().length ? "" : " read"}">${unreadRedItems().length ? "🔴" : "⚪"} ${unreadRedItems().length}</span><span class="cc-blue">🔵 ${n.blue}</span><span class="cc-wait">⏳ ${n.wait}</span>`;
  const say = document.getElementById("chief-say");
  const localN = okN + noN + reN;
  const route = hasRelayKey() ? '원터치 접수 연결됨(중계)' : (ghToken() ? '원터치 접수 연결됨(결재함)' : '접수 시 GitHub 결재함 접수창');
  if (say) say.textContent = `관리자·부총괄 검토 → 총괄 팩트체크·승인 · 접수·처리 확인 전 대기 🔴 ${n.red} · 🔵 ${n.blue} · ⏳ ${n.wait}` + (localN ? ` · 이 브라우저 선택 ${localN}건` : '') + ' · ' + route + (decisionGuardApi() ? ' · 중복 접수 차단 켜짐' : '');
  body.innerHTML = items.length ? items.map((it, idx) => {
    const sourceIdx = allItems.indexOf(it);
    const rr = rooms.find(r => r.id === it.room);
    const rm = rr ? rr.title : "";
    const d = dec[it.id];
    const redRead = it.lane === "red" && !redGroupUnread(it);
    const ack = it.lane === "red" ? (redRead ? `<span class="red-read-tag">읽음 · 업무 대기</span>` : `<button class="red-ack" type="button" onkeydown="event.stopPropagation()" onclick="acknowledgeRed(event, 'chief', ${sourceIdx})">확인</button>`) : "";
    const dis = d && d.sending ? " disabled" : "";
    const decBtns = (sel) =>
      `<button class="cr-ok${sel === "ok" ? " sel" : ""}" type="button"${dis} onclick="chiefDecide(event, ${sourceIdx}, 'ok')" title="승인 선택 저장 · 아직 접수 안 됨${sel === "ok" ? " · 현재 선택" : sel ? " · 누르면 승인으로 변경" : ""}">승인</button>` +
      `<button class="cr-no${sel === "no" ? " sel" : ""}" type="button"${dis} onclick="chiefDecide(event, ${sourceIdx}, 'no')" title="반려 선택${sel === "no" ? " · 현재 선택" : sel ? " · 누르면 반려로 변경" : ""} · 원터치 키·토큰이 있으면 즉시 접수, 없으면 접수창 열림">반려</button>` +
      `<button class="cr-re${sel === "re" ? " sel" : ""}" type="button"${dis} onclick="chiefDecide(event, ${sourceIdx}, 're')" title="재심의 선택 저장 · 아직 접수 안 됨 · 신호 유지${sel === "re" ? " · 현재 선택" : sel ? " · 누르면 재심의로 변경" : ""}">재심의</button>`;
    const act = d
      ? `<span class="cr-dec ${d.s === "ok" ? "ok" : d.s === "re" ? "re" : "no"}">${decisionBadge(d)}</span>` +
        (it.lane === "wait" ? "" : `<span class="cr-clr" title="실제 처리 완료 전이므로 신호와 대기 목록을 유지합니다">신호 유지</span>`) +
        (it.lane === "red" ? "" : decBtns(d.s)) +
        (d.dupBlocked && d.s && !d.sending ? `<button class="cr-undo" type="button" onclick="chiefDecide(event, ${sourceIdx}, '${d.s}', true)" title="이미 접수된 안건입니다. 정말 다시 접수할 때만 누르세요.">그래도 접수</button>` : "") +
        (d.issueUrl ? `<a class="cr-cp" href="${esc(d.issueUrl)}" target="_blank" rel="noopener" title="접수된 GitHub 이슈 열기">🔗 #${d.issueNum}</a>` : `<button class="cr-cp" type="button" onclick="chiefCopyPhrase(event, ${sourceIdx})" title="결정 문구 복사">📋 문구</button>`) +
        (chiefUndoable(it) ? `<button class="cr-undo" type="button" onclick="chiefUndo(event, ${sourceIdx})" title="미접수 선택 지우기">↺</button>` : "")
      : it.lane === "red"
      ? `<span class="rs-rm">오너 직접 처리 건 · 버튼 없음</span>`
      : decBtns(null);
    const row = `<div class="chief-row ${it.lane}${redRead ? " read" : ""}${d ? " decided " + (d.s === "ok" ? "ok" : d.s === "re" ? "re" : "no") : ""}" data-room="${esc(it.room)}">
        <div class="cr-main"><b>${esc(it.title)}</b><p class="cr-review">대표 결정 대기 · 총괄이 팩트·저작권·약관 검수 후 실행</p></div>
        <span class="cr-act">${act}</span>
        <details class="cr-detail"${chiefCanCompact(it, d) ? " open" : ""}><summary>상세 보기${rm ? " · " + esc(rm) : ""}</summary>
          ${it.detail ? `<p>${esc(it.detail)}</p>` : ""}
          ${it.room ? `<button class="cr-go" type="button" onclick="openReport('${esc(it.room)}')">원보고 보기 ›</button>` : ""}
          ${it.url ? `<a class="cr-url" href="${esc(it.url)}" target="_blank" rel="noopener">↗ ${esc(it.urlLabel)}</a>` : ""}
          ${ack}
        </details>
      </div>`;
    return chiefCanCompact(it, d) ? compactDecisionReport(it.title, d, row) : row;
  }).join("") : `<div class="chief-row wait"><span class="cr-lane">✅</span><span class="cr-tx"><b>지금 대기 중인 건이 없습니다</b></span></div>`;
  applyChiefState();
}

/* ================= 🛟 비상 업무 재분장(백업) 매트릭스 =================
   3인(투덜이·해병이 부장·수박이 이사) 중 누가 오프·크레딧 소진·연결 지연으로
   빠져도 남은 인원이 1차→2차로 빈자리를 메운다. 부모님 폰 직접 접근은 하지 않는다. */
const BACKUP_FALLBACK = {
  title: "비상 업무 승계 매트릭스 · 5인",
  note: "자금 실행은 대표님 · 크레딧 완전 소진 방지",
  rule: "총괄이 오프·크레딧 소진이면 부총괄 → 관리자 → 부관리자 → 일꾼 순으로 이어받고, 셋 이상 동시에 빠지면 대표님 승인 대기로 전환한다.",
  members: [
    { name: "👑 총괄 투덜이", part: "배분·팩트체크·준법 검수", state: "on", backup1: "부총괄 해병이", backup2: "관리자 뮤즈" },
    { name: "👑 부총괄 해병이", part: "머니리포트·영문·교차검토", state: "on", backup1: "관리자 뮤즈", backup2: "부관리자 큐" },
    { name: "🧠 관리자 뮤즈", part: "검토·창작소설·회의록", state: "on", backup1: "부관리자 큐", backup2: "일꾼 Instinct" },
    { name: "🤖 부관리자 큐", part: "창작소설·30초 영상", state: "on", backup1: "관리자 뮤즈", backup2: "일꾼 Instinct" },
    { name: "🛠️ 일꾼 Instinct", part: "조사·작성·검증 실행", state: "on", backup1: "부총괄 해병이", backup2: "총괄 투덜이" }
  ]
};

function backupData(raw) {
  const src = (raw && typeof raw === "object" && !Array.isArray(raw)) ? raw : BACKUP_FALLBACK;
  const str = (v, d) => (typeof v === "string" && v.trim()) ? v.trim() : d;
  const st = (v, d) => (v === "on" || v === "work" || v === "working") ? "on" : (v === "wait" || v === "waiting" || v === "idle") ? "wait" : d;
  const list = Array.isArray(src.members) ? src.members.filter(m => m && typeof m === "object" && typeof m.name === "string" && m.name.trim()) : [];
  const members = (list.length ? list : BACKUP_FALLBACK.members).map(m => ({
    name: str(m.name, "—"),
    part: str(m.part, ""),
    state: st(m.state, "wait"),
    backup1: str(m.backup1, "—"),
    backup2: str(m.backup2, "—")
  }));
  return {
    title: str(src.title, BACKUP_FALLBACK.title),
    note: str(src.note, BACKUP_FALLBACK.note),
    rule: str(src.rule, BACKUP_FALLBACK.rule),
    updated: str(src.updated, ""),
    members
  };
}

let BACKUP = backupData(null);

function backupRowsHTML(members) {
  return `<div class="pr-bk-grid">
      <div class="pr-bk-row head"><span>담당 · 파트</span><span>1차 백업</span><span>2차 백업</span></div>
      ${members.map(m => `<div class="pr-bk-row ${m.state}"><span class="pr-bk-who">${esc(m.name)}<small>${esc(m.part)}</small></span><span class="pr-bk-cell first">${esc(m.backup1)}</span><span class="pr-bk-cell">${esc(m.backup2)}</span></div>`).join("")}
    </div>`;
}

function renderBackup(raw) {
  if (raw !== undefined) BACKUP = backupData(raw);
  const el = document.getElementById("pent-backup");
  if (!el) return;
  el.innerHTML = `
    <div class="pr-bk-head"><span>🛟 ${esc(BACKUP.title)}</span><em>${esc(BACKUP.note)}</em></div>
    ${backupRowsHTML(BACKUP.members)}
    ${BACKUP.rule ? `<div class="pr-bk-note">${esc(BACKUP.rule)}</div>` : ""}`;
}

/* ================= 🧩 6F 분장표 (2파트 역할 · 전담 채널) =================
   개인정보 없음: 역할 별칭·담당 업무·공개 채널만 담는다. */
const ROSTER_DEFAULT = {
  title: "6F 경영진 분장표 · 5인 + 수박이",
  note: "역할 별칭으로만 표기 · status.json 동기화",
  rule: "큰 이미지·로고는 외부 AI(제미나이·클로드·챗GPT) 제작본 활용 · 불필요한 핑퐁 축소",
  items: [
    { id: "td", name: "👑 총괄 · 투덜이", role: "업무 배분·우선순위·팩트체크·전결 승인 → 대표님 상신", state: "wait", chip: "가동 미확인" },
    { id: "hb", name: "👑 부총괄 · 해병이", role: "7개 부서 운영 + 관리자와 교차검토", state: "wait", chip: "가동 미확인" },
    { id: "muse", name: "🧠 관리자 · 뮤즈", role: "관리자 검토(1차) · 회의록·아카이브 · 전 업무 숙지", state: "wait", chip: "연결 확인" },
    { id: "manus", name: "🤖 부관리자 · 큐(Manus)", role: "30초 AI 영상·카드뉴스 시범 · 소화기·애드센스 보조 검수", state: "wait", chip: "08번 연결" },
    { id: "inst", name: "🛠️ 일꾼 · Instinct", role: "조사·초안·수정·검증 실행 → 총괄 보고(기존 총괄)", state: "wait", chip: "#피클지시" },
    { id: "subaki", name: "🍉 수박이 이사", role: "위탁판매·스마트스토어 실행 · 확정 건만 최소 알림", state: "wait", chip: "실행 담당(사람)" }
  ],
  channels: [
    { owner: "해병이", handle: "@daily.moneynote", url: "https://www.threads.com/@daily.moneynote", topic: "돈·세금·생활경제" },
    { owner: "투덜이", handle: "@tudeori.carlife", url: "https://www.threads.com/@tudeori.carlife", topic: "카라이프·차량관리·EOKC" }
  ],
  sites: [
    { label: "데일리 머니리포트", url: "https://daily-money-note.tistory.com" },
    { label: "투덜이 티스토리", url: "https://tudeori.tistory.com" }
  ]
};
let ROSTER = null;

function rosterData(raw) {
  const src = (raw && typeof raw === "object" && !Array.isArray(raw)) ? raw : {};
  const str = (v, d) => (typeof v === "string" && v.trim()) ? v.trim() : d;
  const st = (v, d) => (v === "on" || v === "work" || v === "working") ? "on" : (v === "wait" || v === "waiting" || v === "idle") ? "wait" : d;
  const list = Array.isArray(src.items) ? src.items.filter(it => it && typeof it === "object" && typeof it.id === "string" && it.id) : [];
  const byId = {};
  list.forEach(it => { byId[it.id] = it; });
  const items = ROSTER_DEFAULT.items.map(d => {
    const it = byId[d.id] || {};
    return { id: d.id, name: str(it.name, d.name), role: str(it.role, d.role), state: st(it.state, d.state), chip: str(it.chip, d.chip) };
  });
  list.forEach(it => {
    if (ROSTER_DEFAULT.items.some(d => d.id === it.id)) return;
    items.push({ id: it.id, name: str(it.name, it.id), role: str(it.role, ""), state: st(it.state, "wait"), chip: str(it.chip, "") });
  });
  const chans = (Array.isArray(src.channels) ? src.channels : [])
    .filter(c => c && typeof c === "object" && typeof c.url === "string" && /^https?:\/\//.test(c.url))
    .map(c => ({ owner: str(c.owner, ""), handle: str(c.handle, ""), url: c.url, topic: str(c.topic, "") }));
  const sites = (Array.isArray(src.sites) ? src.sites : [])
    .filter(s => s && typeof s === "object" && typeof s.url === "string" && /^https?:\/\//.test(s.url) && typeof s.label === "string" && s.label.trim())
    .map(s => ({ label: s.label.trim(), url: s.url }));
  return {
    title: str(src.title, ROSTER_DEFAULT.title),
    note: str(src.note, ROSTER_DEFAULT.note),
    rule: str(src.rule, ROSTER_DEFAULT.rule),
    items,
    channels: chans.length ? chans : ROSTER_DEFAULT.channels,
    sites: sites.length ? sites : ROSTER_DEFAULT.sites
  };
}

function renderRoster(raw) {
  const d = rosterData(raw);
  d.items.forEach(it => {
    if (it.id !== "td" && it.id !== "hb") return;
    const k = (CHECKS && CHECKS[it.id] && typeof CHECKS[it.id] === "object") ? CHECKS[it.id] : {};
    if (checkState(k.ops)) return;
    const rl = reportLabel(k);
    it.state = "wait";
    it.chip = "가동 미확인" + (rl ? " · " + rl : "");
  });
  ROSTER = d;
  const el = document.getElementById("pent-roster");
  if (!el) return;
  const isTd = (c) => /투덜이|tudeori/i.test(c.owner + " " + c.handle);
  el.innerHTML = `
    ${foldHeadHTML("roster", "pr-head", "🧩 " + esc(d.title), esc(d.note), "눌러서 6F 분장표 접기·펼치기")}
    <div class="fold-body" id="fold-roster-body"><div class="fold-inner">
    <div class="pr-grid">${d.items.map(it => `
      <div class="pr-item ${it.state}" title="${esc(it.name + " · " + it.role)}">
        <span class="pr-name"><span>${esc(it.name)}</span><span class="pr-st">${esc(it.chip)}</span></span>
        <span class="pr-role">${esc(it.role)}</span>
      </div>`).join("")}</div>
    <div class="pr-chan">${d.channels.map(c => `<a class="${isTd(c) ? "td" : ""}" href="${esc(c.url)}" target="_blank" rel="noopener">🧵 ${esc(c.handle)}</a><span class="topic">${esc(c.topic)}</span>`).join("")}</div>
    ${d.sites.length ? `<div class="pr-chan pr-sites">${d.sites.map(s => `<a class="site" href="${esc(s.url)}" target="_blank" rel="noopener">🌐 ${esc(s.label)} ↗</a>`).join("")}</div>` : ""}
    <div class="pr-rule"><b>⚡ 크레딧 절감</b> ${esc(d.rule)}</div>
    <div class="pr-backup" id="pent-backup" aria-label="비상 업무 백업 매트릭스"></div>
    </div></div>`;
  renderBackup(undefined);
  applyFold("roster");
}

/* ================= 🧾 임무 배분표 (2026-11-27 07:37 지시 반영) =================
   각자 맡은 임무·완료 기준·보고 시점과 결재선을 한 표로 보여 준다.
   담당이 바뀌면 status.json(assignments)만 고치면 화면이 그대로 따라온다. */
const ASSIGN_DEFAULT = {
  title: "🧾 임무 배분표 · 11/27 수익화 4채널 편성",
  note: "담당 · 완료 기준 · 보고 시점",
  route: "결재선: 담당 작성 → 관리자(뮤즈)·부총괄(해병이) 검토 → 총괄(투덜이) 팩트체크·승인 → 대표님(자금·최종)",
  items: [
    { no: "1", task: "스마트스토어 심사·위탁 재상신", owner: "수박이 이사", state: "wait", note: "서류 2/2 제출 완료 → 심사중(3영업일) · 재상신 #24·#25 1안/2안/보류 선택 대기" },
    { no: "2", task: "브랜드커넥트 하나필터", owner: "총괄 투덜이·일꾼", state: "work", note: "원고·링크 세트 완료 → 네이버 블로그 임시저장 → 대표님 발행 1회 → 클릭·수익 확인" },
    { no: "3", task: "창작소설 10화 연재", owner: "일꾼·뮤즈·큐", state: "work", note: "1화 합작본·10화 시놉시스 → 총괄 최종 검토·승인 → 카테고리 개설·1화 발행 → 하루 2편×5일" },
    { no: "4", task: "차량용 소화기 3채널", owner: "일꾼 Instinct", state: "wait", note: "총괄 승인 완료 · 발행 대기(블로그·Threads·인스타 카드뉴스 6장) → URL·색인 요청" },
    { no: "5", task: "tudeori 모바일·애드센스", owner: "일꾼 Instinct", state: "done", note: "모바일웹 자동연결 해제·모바일 루트 검증 완료 · 애드센스 '준비중' 2시간 감시" },
    { no: "6", task: "데일리 머니리포트", owner: "부총괄 해병이", state: "done", note: "고향사랑기부제 /12 발행·표 머리행 보완·Threads 재게시 완료 · 다음 11:00 고단가 글" },
    { no: "7", task: "영문 여행 블로그", owner: "부총괄 해병이", state: "wait", note: "3편 추가 발행·색인 요청 완료 · 서울 글 모바일 표 배치 보완(승인 대기)" },
    { no: "8", task: "인스타·스레드 활용", owner: "총괄 투덜이", state: "work", note: "@tudeori.carlife 활성 확인 · 프로필 사진·소개 세팅 → 소화기 카드뉴스 첫 게시물" },
    { no: "9", task: "피클 리셋 티켓·초대글", owner: "일꾼·뮤즈·큐", state: "work", note: "투덜이용·해병이용 각각 작성 → 총괄 검토·게시 → 게시 URL 전달(대표님 링크 1회)" },
    { no: "10", task: "공공 퀴즈·지원금 자동 응모", owner: "총괄 투덜이", state: "work", note: "1일 2회(10:30·16:30) · 오늘 축사로 낱말퍼즐 응모 완료 · 새 목록 수박이 공유" },
    { no: "11", task: "관리자 검토·회의록", owner: "관리자 뮤즈", state: "work", note: "전 업무 숙지 · 교차검수 · 회의록·아카이브 · 승계 3순위" },
    { no: "12", task: "배분·팩트체크·승인", owner: "총괄 투덜이", state: "work", note: "수익화 4채널 연동 · 결재선 준수 · 대표님 보고 · 승계 1순위" }
  ]
};
let ASSIGN = null;

function assignData(raw) {
  const src = (raw && typeof raw === "object" && !Array.isArray(raw)) ? raw : {};
  const str = (v, d) => (typeof v === "string" && v.trim()) ? v.trim() : d;
  const list = Array.isArray(src.items) ? src.items.filter(it => it && typeof it === "object" && typeof it.task === "string" && it.task.trim()) : [];
  const st = (v) => (v === "work" || v === "wait" || v === "block" || v === "done") ? v : "wait";
  const items = (list.length ? list : ASSIGN_DEFAULT.items).map((it, i) => ({
    no: str(it.no, String(i + 1)),
    task: it.task.trim(),
    owner: str(it.owner, "미지정"),
    state: st(it.state),
    note: str(it.note, "")
  }));
  return {
    title: str(src.title, ASSIGN_DEFAULT.title),
    note: str(src.note, ASSIGN_DEFAULT.note),
    route: str(src.route, ASSIGN_DEFAULT.route),
    updated: str(src.updated, ""),
    items
  };
}

const ASSIGN_LABEL = { work: "진행", wait: "대기", block: "막힘", done: "완료" };

function renderAssignments(raw) {
  if (raw !== undefined) ASSIGN = assignData(raw);
  if (!ASSIGN) ASSIGN = assignData(null);
  const el = document.getElementById("pent-assign");
  if (!el) return;
  const d = ASSIGN;
  const cnt = { work: 0, wait: 0, block: 0, done: 0 };
  d.items.forEach(it => { cnt[it.state] = (cnt[it.state] || 0) + 1; });
  const summary = [
    cnt.work ? `진행 ${cnt.work}` : "",
    cnt.wait ? `대기 ${cnt.wait}` : "",
    cnt.block ? `막힘 ${cnt.block}` : "",
    cnt.done ? `완료 ${cnt.done}` : ""
  ].filter(Boolean).join(" · ");
  el.innerHTML = `
    ${foldHeadHTML("assign", "as-head", esc(d.title), esc(summary), "눌러서 임무 배분표 접기·펼치기")}
    <div class="fold-body" id="fold-assign-body"><div class="fold-inner">
    <div class="as-rows">${d.items.map(it => `
      <div class="as-row ${it.state}">
        <span class="as-no">${esc(it.no)}</span>
        <span class="as-tx"><b>${esc(it.task)}</b><i>${esc(it.note)}</i></span>
        <span class="as-own">${esc(it.owner)}</span>
        <span class="as-st">${esc(ASSIGN_LABEL[it.state] || it.state)}</span>
      </div>`).join("")}</div>
    <div class="as-route">${esc(d.route)}</div>
    </div></div>`;
  applyFold("assign");
}

/* ================= 🎁 뮤즈(Muse) 초대코드 카드 =================
   대표님 지시(2026-11-27 07:49~07:50)로 코드를 50KW4O로 반영한다.
   초대 문구·토큰 지급은 Muse 측 안내이고, 한국 지역 지원 여부는 확인되지 않았으므로 그대로 밝힌다. */
const INVITE_DEFAULT = {
  title: "🎁 뮤즈(Muse) 초대코드",
  code: "50KW4O",
  url: "https://muse.ai/join",
  note: "가입 후 48시간 이내 설정에서 코드 입력 시 10억 토큰(초대 프로그램 안내) · 초대 문구는 Muse 측 안내이며, 한국 지역 지원 여부는 확인되지 않았습니다.",
  updated: "07:50"
};
let INVITE = null;

function inviteData(raw) {
  const src = (raw && typeof raw === "object" && !Array.isArray(raw)) ? raw : {};
  const str = (v, d) => (typeof v === "string" && v.trim()) ? v.trim() : d;
  const url = (typeof src.url === "string" && /^https?:\/\//.test(src.url)) ? src.url : INVITE_DEFAULT.url;
  return {
    title: str(src.title, INVITE_DEFAULT.title),
    code: str(src.code, INVITE_DEFAULT.code),
    url,
    note: str(src.note, INVITE_DEFAULT.note),
    updated: str(src.updated, INVITE_DEFAULT.updated)
  };
}

function renderInvite(raw) {
  if (raw !== undefined) INVITE = inviteData(raw);
  if (!INVITE) INVITE = inviteData(null);
  const el = document.getElementById("pent-invite");
  if (!el) return;
  const d = INVITE;
  el.innerHTML = `
    <div class="iv-head"><span>${esc(d.title)}</span><em>${esc(d.updated)} 반영</em></div>
    <div class="iv-body">
      <span class="iv-code" id="iv-code">${esc(d.code)}</span>
      <button class="iv-copy" type="button" onclick="copyText(INVITE.code, this)" title="초대코드 복사">코드 복사</button>
      <a class="iv-link" href="${esc(d.url)}" target="_blank" rel="noopener">muse.ai/join ↗</a>
    </div>
    <div class="iv-note">${esc(d.note)}</div>`;
}

/* ================= 상태 동기화 ================= */
let STATUS = null;
let lastSync = "";
let COLLAB_ACTIVE = false;
function sourceStamp(value) {
  const date = typeof value === "string" ? new Date(value) : null;
  return date && Number.isFinite(date.getTime())
    ? date.toLocaleString("ko-KR", {timeZone:"Asia/Seoul",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",hour12:false}) + " KST"
    : "시각 미상";
}
// Display-only corrections. Original source records and completion evidence stay unchanged.
function prepareDisplayStatus(raw) {
  const data = JSON.parse(JSON.stringify(raw));
  const fix = value => {
    if (typeof value === "string") return value.replaceAll("월요일(11/24)", "월요일(11/23)").replaceAll("현재 시세", "기록 시세").replaceAll("현재 ₩", "기록 시세 ₩");
    if (Array.isArray(value)) return value.map(fix);
    if (value && typeof value === "object") return Object.fromEntries(Object.entries(value).map(([key,v]) => [key, key === "done" ? v : fix(v)]));
    return value;
  };
  const out = data;
  if (out.invest_sp500) out.invest_sp500 = fix(out.invest_sp500);
  if (out.reports?.invest_sp500) out.reports.invest_sp500 = fix(out.reports.invest_sp500);
  // Bubble uses the same snapshot as the ticker instead of a hard-coded publication count.
  const count = /^(\d+)편 발행 완료/.exec(out.tistory?.ticker || "");
  if (count) {
    const room = rooms.find(r => r.id === "tistory");
    if (room) room.say = count[1] + "편 발행 보고 · 심사 대기";
    if (out.chief?.items) out.chief.items.forEach(it => {
      if (it.room === "tistory" && /애드센스 심사 대기/.test(it.title)) it.detail = out.tistory.ticker;
    });
  }
  return out;
}

function hhmm() {
  const d = new Date();
  return String(d.getHours()).padStart(2, "0") + ":" + String(d.getMinutes()).padStart(2, "0");
}

function setSyncNote(ok, msg) {
  const n = document.getElementById("sync-note");
  if (!n) return;
  n.textContent = msg;
  n.className = "sync-note " + (ok ? "live" : "stale");
}

function applyStatus(data) {
  const src = (data && typeof data === "object" && !Array.isArray(data)) ? data : {};

  /* 신호등·백업을 방 상태보다 먼저 반영 (방 카드 레인·LED 접두에 쓰인다) */
  BACKUP = backupData(src.backup);
  SIGNALS_BASE = signalData(src.signals);   // 결정과 무관한 원본 신호를 먼저 반영
  CHIEF = chiefData(src.chief);
  RED_READ.reconcile(activeRedItems());
  renderChief();                  // 총괄 항목(결정 열쇠)을 먼저 세운다
  renderSignals();                         // 결정된 건을 빼고 신호등·방 불빛을 다시 그린다

  CHECKS = (src.credit && typeof src.credit === "object" && src.credit.checks && typeof src.credit.checks === "object" && !Array.isArray(src.credit.checks)) ? src.credit.checks : {};
  rooms.forEach(r => {
    const s = src[r.id] || {};
    let state;
    if (!s.status) state = r.state || "idle";
    else if (s.status === "alert") state = "alert";
    else if (s.status === "working") state = "working";
    else state = "idle";

    const tickerRaw = (typeof s.ticker === "string" && s.ticker.trim()) ? s.ticker.trim() : r.ticker;
    const updated = (typeof s.updated === "string" && s.updated.trim()) ? s.updated.trim() : r.updated;
    let ticker = tickerFor(state, tickerRaw, laneOf(r.id));
    if (state !== "alert" && opsUnverifiedRoom(r.id)) {   // 가동 확인 기록 없는 부장 방: WORK/IDLE 단정 대신 출처·시각 있는 자기보고로 표시
      state = "unverified";
      ticker = "자기보고 " + (/^\d\d:\d\d$/.test(updated || "") ? updated : "시각미상") + " · " + ticker;
    }

    const track = document.getElementById("track-" + r.id);
    const before = track ? track.dataset.text : undefined;
    setBoardText(r.id, ticker, updated, state);

    const el = document.getElementById("room-" + r.id);
    if (!el) return;
    setRoomState(r.id, state);

    const say = document.getElementById("say-" + r.id);
    const foot = document.getElementById("foot-" + r.id);
    const chip = document.getElementById("now-" + r.id);
    if (chip) {
      const chipText = (typeof s.nowTask === "string" && s.nowTask.trim()) ? s.nowTask.trim() : (r.task || "");
      if (chipText) chip.lastChild.textContent = chipText;
      chip.className = "nowchip " + (s.nowState === "approve" || s.nowState === "work" || s.nowState === "wait" ? s.nowState : (r.taskState || "wait"));
    }
    const onBreak = el.classList.contains("break") && state === "idle";
    if (state === "alert") {
      const lane = laneOf(r.id);
      if (say) say.textContent = lane === "red" ? "자금 승인 필요! 🔴" : "확인 부탁드려요! 🔵";
      if (foot) foot.textContent = (lane === "red" ? "🔴 " : "🔵 ") + r.issue;
    } else {
      if (say) say.textContent = onBreak ? "☕ 커피 한잔" : r.say;
      if (foot) foot.textContent = onBreak ? "☕ 자율 휴식 · 탕비실 다녀오는 중" : r.foot;
    }
    if (before !== undefined && before !== ticker) flashBoard(r.id);
  });
  paintStockBoard();

  const collab = src.collab;
  COLLAB_ACTIVE = !!(collab === true || (collab && typeof collab === "object" && collab.active));
  applyCorridor();
  renderRevenue(src.revenue);
  renderCredit(src.credit);
  renderShop(src.commerce);
  renderRoster(src.roster);
  renderAssignments(src.assignments);
  renderInvite(src.invite);
  renderGoal(src.goal);
  renderGuard(src.guard);
  refreshReport();
  updatePill();
}

async function loadStatus() {
  try {
    const res = await fetch("./status.json?t=" + Date.now(), { cache: "no-store" });
    if (!res.ok) throw new Error("HTTP " + res.status);
    const data = await res.json();
    const displayData = prepareDisplayStatus(data);
    STATUS = displayData;            // 보고 모달이 최신 내용을 그릴 수 있도록 먼저 반영
    applyStatus(displayData);
    lastSync = hhmm();
    setSyncNote(true, "● 자료 수신 " + lastSync + " · 원자료 " + sourceStamp(data.updated));
  } catch (e) {
    if (!STATUS) {
      applyStatus(null);
      setSyncNote(false, "○ 기본 상태 표시 (status.json 대기)");
    } else {
      setSyncNote(false, "○ 연결 지연 · 마지막 상태 유지");
    }
  }
}

/* ================= 🛍️ 위탁판매실 현황판 ================= */
// 개인정보 없음: 역할명·절차·공개 링크만 담는다.
const SHOP_STEPS = [
  {
    key: "open", name: "① 스마트스토어 개설·인증", note: "사업자 정보·본인인증·정산계좌·증빙서류 2/2건 제출 완료",
    ask: "[위탁판매 1단계 · 스마트스토어 개설·인증] 사업자 정보·본인인증·정산계좌 등록과 증빙서류 2/2건 제출까지 마쳤습니다. 판매자센터에서 다음을 확인해 주세요. ① 승인 전 미리 세팅할 수 있는 항목(스토어명·카테고리·배송정책·교환/반품) ② 승인 직후 필수 체크리스트 ③ 구매안전서비스 이용확인증 갱신 시점 ④ 첫 상품 등록 전 상품정보제공고시 준비물. 금융·계좌 정보는 채팅에 쓰지 말아 주세요."
  },
  {
    key: "review", name: "② 정식 심사 대기(3영업일)", note: "제출일 기준 3영업일 이내 · 결과는 메일·SMS 통보",
    ask: "[위탁판매 2단계 · 정식 심사 대기] 스마트스토어가 제출일 기준 3영업일 이내 심사에 들어갔습니다. ① 심사 중 추가 요청이 올 수 있는 항목과 대응 순서 ② 승인 전에 준비해 둘 첫 상품 상세페이지·고시 서식 ③ 승인 후 24시간 안에 해야 할 일과 판매 개시 체크리스트를 정리해 주세요. 심사 결과는 메일·SMS로 오니 확인 즉시 보고해 주세요."
  },
  {
    key: "track", name: "③ 무재고 낱개 위탁 단일 트랙 결정", note: "1안 세 곳 등급가 비교 / 2안 오너클랜 단독 / 보류 중 선택 대기",
    ask: "[위탁판매 3단계 · 무재고 낱개 위탁 단일 트랙] 재상신(#24·#25) 상태입니다. 소량 사입은 11/24 지시로 제외했고 재론하지 않습니다. ① 1안 — 오너클랜·도매꾹·도매매 사업자 등급가를 한 번에 비교해 후보 20종 중 순마진 15% 이상만 이번 주 등록(0건이면 카테고리 1회 확장 후 재판정, 그래도 0건이면 등록 없이 대기) ② 2안 — 오너클랜 단독으로 1~2종 먼저 검증해 통과하면 즉시 등록, 세 곳 비교는 다음 단계 ③ 보류 — 스토어 개설만 마무리하고 등급가 실측 중단. 재고·선결제는 0원이고, 실제 등급가 수치는 로그인 후 확인합니다."
  },
  {
    key: "grade", name: "④ 등급가 실측·후보 검증", note: "사업자 등급가(공급가+배송비) 기준 순마진 15% · 3사 검색량 1~3위",
    ask: "[위탁판매 4단계 · 등급가 실측] 선택한 트랙으로 사업자 등급가를 실측해 주세요. ① 후보 20종의 등급가·배송비·반품 조건 표 ② 순마진 15% 통과 여부 계산(플랫폼 수수료·반품 비용은 미확정이라 보수 적용) ③ KC·안전확인 대상 여부와 상품정보제공고시 값 ④ 통과 0건일 때 확장할 카테고리 1개 제안. 계좌·사업자번호 같은 민감 정보는 화면에 쓰지 말아 주세요."
  },
  {
    key: "launch", name: "⑤ 등록·첫 주문 CS", note: "상세페이지·고시·발주·송장·CS 체크리스트 · 판매 부진 품목 순차 교체",
    ask: "[위탁판매 5단계 · 등록과 CS] 확정 후보를 등록할 준비를 해 주세요. 상품명·카테고리·상세페이지·상품정보제공고시 값을 정리하고, 주문 확인 → 도매처 발주 → 송장 입력 → 구매확정 정산까지의 절차와 CS 답변 3종을 체크리스트로 만들어 주세요. 이미지·문구는 직접 촬영·작성한 것만 쓰고, 판매 부진 품목은 순차 교체할 수 있게 판매·조회 지표도 함께 봐 주세요."
  }
];

// 판매가·공급가(가정 60%)·건당 순익은 등록 초안팩·로드맵에서 확인한 값.
// 주의: 아래 겨울 단열 3종 목록은 3사 검색량 기준 재선정으로 보류된 기존 후보입니다.
// status.json commerce.sourcing.status가 "confirmed"가 아니면 화면에는 재선정·방향 전환 상태만 표시됩니다(hold=방향 전환).
const SHOP_LINEUP = [];

const STEP_TXT = { done: "완료", doing: "진행중", wait: "대기" };
const SHOP_STATE_TXT = { working: "WORK", idle: "IDLE", alert: "ALERT" };
let SHOP = null;

function shopData(raw) {
  const src = (raw && typeof raw === "object" && !Array.isArray(raw)) ? raw : {};
  const obj = (v) => (v && typeof v === "object" && !Array.isArray(v)) ? v : {};
  const ob = obj(src.orders), sk = obj(src.sku), sa = obj(src.sales), th = obj(src.thread);
  const num = (v, d) => { const n = Number(v); return Number.isFinite(n) ? n : d; };
  const status = src.status === "alert" ? "alert" : src.status === "working" ? "working" : "idle";

  const byKey = {};
  (Array.isArray(src.pipeline) ? src.pipeline : []).forEach(p => {
    if (p && typeof p === "object" && typeof p.key === "string") byKey[p.key] = p;
  });
  const pipeline = SHOP_STEPS.map((s, i) => {
    const p = byKey[s.key] || {};
    const st = (p.status === "done" || p.status === "doing" || p.status === "wait") ? p.status : (i === 0 ? "doing" : "wait");
    const note = (typeof p.note === "string" && p.note.trim()) ? p.note.trim() : s.note;
    const owner = (typeof p.owner === "string" && p.owner.trim()) ? p.owner.trim() : "";
    return { key: s.key, name: s.name, status: st, note, owner };
  });

  const thStatus = (v) => v === "working" ? "working" : v === "alert" ? "alert" : "idle";
  const normHandle = (h) => { const t = String(h || "").trim(); return t ? (t.charAt(0) === "@" ? t : "@" + t) : ""; };
  const thOne = (t) => {
    const o = (t && typeof t === "object") ? t : {};
    const handle = normHandle(o.handle) || "@daily.moneynote";
    return {
      owner: (typeof o.owner === "string" && o.owner.trim()) ? o.owner.trim() : "",
      handle,
      url: (typeof o.url === "string" && /^https?:\/\//.test(o.url)) ? o.url : ("https://www.threads.com/" + handle),
      topic: (typeof o.topic === "string" && o.topic.trim()) ? o.topic.trim() : "",
      status: thStatus(o.status),
      note: (typeof o.note === "string" && o.note.trim()) ? o.note.trim() : ""
    };
  };
  const thList = (Array.isArray(src.threads) ? src.threads : [])
    .filter(t => t && typeof t === "object" && typeof t.handle === "string" && t.handle.trim())
    .map(thOne);
  const threads = thList.length ? thList : [thOne(th)];

  return {
    status,
    ticker: (typeof src.ticker === "string" && src.ticker.trim()) ? src.ticker.trim() : "",
    updated: (typeof src.updated === "string" && src.updated.trim()) ? src.updated.trim() : "--:--",
    orders: { fresh: num(ob["new"], 0), toPlace: num(ob.to_place, 0), shipped: num(ob.shipped, 0) },
    sku: { reg: num(sk.registered, 0), plan: num(sk.planned, 3) },
    sourcing: (() => {
      const so = obj(src.sourcing);
      const cands = (Array.isArray(so.candidates) ? so.candidates : [])
        .filter(c => c && typeof c === "object" && typeof c.name === "string" && c.name.trim())
        .map(c => ({
          name: c.name.trim(),
          cat: (typeof c.cat === "string") ? c.cat.trim() : "",
          note: (typeof c.note === "string") ? c.note.trim() : "",
          margin: (typeof c.margin === "string") ? c.margin.trim() : "",
          rate: (typeof c.rate === "string") ? c.rate.trim() : ""
        }));
      return {
        status: (so.status === "confirmed") ? "confirmed" : (so.status === "hold" ? "hold" : "repick"),
        criteria: (typeof so.criteria === "string" && so.criteria.trim()) ? so.criteria.trim() : "네이버(쇼핑·데이터랩)·구글·쿠팡 3사 검색량 평균 상위 1~3위 교집합",
        scope: (typeof so.scope === "string" && so.scope.trim()) ? so.scope.trim() : "생활·계절·차량 잡화 등 위탁 가능 카테고리 내 · 대기업 브랜드·초저가 생필품 제외",
        channel: (typeof so.channel === "string" && so.channel.trim()) ? so.channel.trim() : "국내 위탁처(도매매·오너클랜 등) 중심 · 알리·테무 해외직구·제조사 직접 접촉은 추후 사입 단계로 보류",
        loop: (typeof so.loop === "string" && so.loop.trim()) ? so.loop.trim() : "품목 고정 없이 매 선정마다 3사 검색량 실시간 조회 → 상위 1~3위 교집합 후보 → 마진 실측 → 등록, 판매 부진 품목부터 순차 교체",
        note: (typeof so.note === "string" && so.note.trim()) ? so.note.trim() : "3사 검색량 기준으로 후보 재선정·마진 실측 진행 중",
        candidates: cands
      };
    })(),
    sales: { rev: num(sa.revenue_krw, 0), profit: num(sa.profit_krw, 0) },
    principles: (Array.isArray(src.principles) ? src.principles : []).map(v => {
      if (typeof v === "string" && v.trim()) {
        const t = v.trim(), k = t.indexOf(" — ");
        return k > 0 ? { title: t.slice(0, k), text: t.slice(k + 3) } : { title: "", text: t };
      }
      if (v && typeof v === "object" && typeof v.text === "string" && v.text.trim())
        return { title: (typeof v.title === "string") ? v.title.trim() : "", text: v.text.trim() };
      return null;
    }).filter(Boolean),
    pipeline,
    threads,
    thread: threads[0]
  };
}

function renderShop(raw) {
  const d = shopData(raw);
  SHOP = d;

  const stEl = document.getElementById("cshop-state");
  if (stEl) { stEl.className = "cstat " + d.status; stEl.textContent = SHOP_STATE_TXT[d.status]; }
  const tEl = document.getElementById("cshop-time");
  if (tEl) tEl.textContent = d.updated;

  const kpis = document.getElementById("ckpis");
  if (kpis) {
    const cell = (label, val, cls) => `<div class="ckpi${cls ? " " + cls : ""}"><b>${label}</b><span>${esc(val)}</span></div>`;
    kpis.innerHTML =
      cell("신규 주문", d.orders.fresh + "건", d.orders.fresh > 0 ? "hot" : "") +
      cell("발주 대기", d.orders.toPlace + "건", d.orders.toPlace > 0 ? "hot" : "") +
      cell("송장 완료", d.orders.shipped + "건", "") +
      cell("등록 SKU", d.sku.reg + "/" + d.sku.plan, "") +
      cell("누적 매출", fmtKrw(d.sales.rev), "money") +
      cell("누적 순익", fmtKrw(d.sales.profit), "money");
  }

  const pipe = document.getElementById("pipe");
  if (pipe) {
    pipe.innerHTML = d.pipeline.map((p, i) => `
      <li class="pstep ${p.status}">
        <span class="pnum">${i + 1}</span>
        <span class="pbody">
          <span class="pname">${esc(p.name)}</span>
          <span class="pnote-line"><span class="pchip">${STEP_TXT[p.status]}</span>${p.owner ? `<span class="pown">${esc(p.owner)}</span>` : ""}<span class="pnote">${esc(p.note)}</span></span>
        </span>
        <button class="pcopy" type="button" data-lab="지시 복사" onclick="copyStep('${p.key}', this)">지시 복사</button>
      </li>`).join("");
  }

  // 라인업은 재선정 중(sourcing.status=repick)·방향 전환 보류(hold)이면 확정 후보 대신 후보 판정만 보여 준다.
  const lineup = document.getElementById("lineup");
  if (lineup) {
    const sc = d.sourcing;
    if (sc.status === "confirmed" && !sc.candidates.length) {
      if (!SHOP_LINEUP.length) {
        lineup.innerHTML = `<div class="crepick"><div class="crepick-h"><span class="crepick-tag">확정</span>${esc(sc.criteria)}</div><div class="crepick-empty">확정 후보 없음</div></div>`;
      } else {
        lineup.innerHTML = SHOP_LINEUP.map(it => `
      <div class="citem n${it.no}">
        <span class="cno">${it.no}</span>
        <span class="cbody">
          <span class="cname">${esc(it.name)}</span>
          <span class="cnums">판매 ${fmtKrw(it.price)} · 도매 <b>${fmtKrw(it.supply)}</b></span>
          <span class="ckey">#${it.keys.join(" #")} · ${esc(it.cat)}</span>
        </span>
        <span class="cmargin"><b>+${fmtKrw(it.margin)}</b><i>순익 ${it.rate}</i></span>
      </div>`).join("");
      }
    } else {
      const rows = sc.candidates.map((it, i) => `
      <div class="citem">
        <span class="cno">${i + 1}</span>
        <span class="cbody">
          <span class="cname">${esc(it.name)}</span>
          <span class="ckey">${esc([it.cat, it.note].filter(Boolean).join(" · "))}</span>
        </span>
        <span class="cmargin"><b>${esc(it.margin || "—")}</b><i>${esc(it.rate || "실측 전")}</i></span>
      </div>`).join("");
      lineup.innerHTML = `
      <div class="crepick">
        <div class="crepick-h"><span class="crepick-tag">${sc.status === "confirmed" ? "확정" : (sc.status === "hold" ? "방향 전환" : "재선정 중")}</span>${esc(sc.criteria)}</div>
        <div class="crepick-t"><b>적용 범위</b> — ${esc(sc.scope)}</div>
        <div class="crepick-t"><b>위탁처</b> — ${esc(sc.channel)}</div>
        <div class="crepick-t"><b>운영 루프</b> — ${esc(sc.loop)}</div>
        <div class="crepick-t"><b>진행</b> — ${esc(sc.note)}</div>
        ${sc.candidates.length ? "" : `<div class="crepick-empty">${sc.status === "confirmed" ? "확정 후보 없음" : (sc.status === "hold" ? "확정 후보 0건 · 등급가 실측 전입니다 — 대표님 트랙 선택 후 후보 20종을 판정합니다" : "후보 0건 · 마진 실측 결과가 나오면 이 자리에 후보와 순익을 표시합니다")}</div>`}
      </div>${rows}`;
    }
  }

  // 운영 수칙은 status.json(commerce.principles)을 우선 쓰고, 없으면 마크업 기본값을 그대로 둔다.
  const rules = document.getElementById("shop-rules");
  if (rules && d.principles.length) {
    rules.innerHTML = d.principles.map(p =>
      `<li>${p.title ? `<b>${esc(p.title)}</b> — ` : ""}${esc(p.text)}</li>`).join("");
  }

  const thEl = document.getElementById("thread");
  if (thEl) {
    const label = (s) => s === "working" ? "홍보 중" : s === "alert" ? "확인 필요" : "대기";
    thEl.innerHTML = d.threads.map(t => {
      const td = /투덜이|tudeori/i.test(t.owner + " " + t.handle);
      return `
      <div class="trow">
        ${t.owner ? `<span class="town${td ? " td" : ""}">${esc(t.owner)}</span>` : ""}
        <a href="${esc(t.url)}" target="_blank" rel="noopener">🧵 ${esc(t.handle)} ↗</a>
        <span class="tstat ${t.status}">${label(t.status)}</span>
        <span class="tnote">${esc(t.topic ? t.topic + " · " + t.note : t.note)}</span>
      </div>`;
    }).join("");
  }

  updateShopBadge(d);
}

function updateShopBadge(d) {
  const b = document.getElementById("shop-badge");
  if (!b) return;
  const n = (d.orders.toPlace || 0) + (d.status === "alert" ? 1 : 0);
  b.textContent = String(n);
  b.classList.toggle("hide", n <= 0);
}

function copyStep(key, btn) {
  const s = SHOP_STEPS.find(x => x.key === key);
  if (s) copyText(s.ask, btn);
}

/* ================= 화면 전환 (전체 빌딩 / 위탁판매실) ================= */
let VIEW = "bldg";
function setView(v) {
  VIEW = (v === "shop") ? "shop" : "bldg";
  const body = document.getElementById("bldg-body");
  const cv = document.getElementById("cview");
  const tb = document.getElementById("vtab-bldg");
  const ts = document.getElementById("vtab-shop");
  if (body) body.classList.toggle("vhide", VIEW === "shop");
  if (cv) cv.hidden = (VIEW !== "shop");
  if (tb) { tb.classList.toggle("on", VIEW === "bldg"); tb.setAttribute("aria-selected", VIEW === "bldg" ? "true" : "false"); }
  if (ts) { ts.classList.toggle("on", VIEW === "shop"); ts.setAttribute("aria-selected", VIEW === "shop" ? "true" : "false"); }
  try { localStorage.setItem("liveoffice_view", VIEW); } catch (e) {}
  if (VIEW === "shop") window.scrollTo(0, 0);
  else requestAnimationFrame(() => { buildTicks(); liftPark(); });
}

/* ================= 부서 업무 보고 (클릭 → 모달) =================
   방을 눌러도 상태(working/idle/alert)는 절대 바꾸지 않는다. */
const REPORT_STATE_TXT = { working: "진행중", idle: "대기", alert: "확인필요", unverified: "가동 미확인" };
let REPORT_ID = null;

function reportData(id) {
  const r = rooms.find(x => x.id === id) || {};
  const reports = (STATUS && STATUS.reports && typeof STATUS.reports === "object" && !Array.isArray(STATUS.reports)) ? STATUS.reports : {};
  const live = reports[id];
  const base = (live && typeof live === "object" && !Array.isArray(live)) ? live : {};
  const arr = (v) => Array.isArray(v) ? v.filter(x => typeof x === "string" && x.trim()).map(x => x.trim()) : [];
  const el = document.getElementById("room-" + id);
  const s = (STATUS && STATUS[id] && typeof STATUS[id] === "object") ? STATUS[id] : {};
  const sourceState = s.status || r.state || "idle";
  let state = ["working", "alert"].includes(sourceState) ? sourceState : "idle";
  if (el) state = el.classList.contains("alert") ? "alert" : el.classList.contains("working") ? "working" : el.classList.contains("unverified") ? "unverified" : "idle";
  const next = Array.isArray(base.next)
    ? base.next.filter(n => n && typeof n === "object" && (n.task || n.time)).map(n => ({ time: String(n.time || ""), task: String(n.task || "") }))
    : [];
  const links = Array.isArray(base.links)
    ? base.links.filter(l => l && typeof l.url === "string" && typeof l.label === "string" && /^https?:\/\//.test(l.url))
    : [];
  /* 두 부장 총괄 보고: 담당 부서 목록은 방의 실제 상태(working/idle/alert)를 그대로 달아 보여 준다 */
  const depts = Array.isArray(base.depts)
    ? base.depts.filter(d => d && typeof d === "object" && typeof d.name === "string" && d.name.trim()).map(d => {
        const rid = typeof d.id === "string" ? d.id.trim() : "";
        const rel = rid ? document.getElementById("room-" + rid) : null;
        let st = (d.state === "working" || d.state === "alert") ? d.state : "idle";
        if (rel) st = rel.classList.contains("alert") ? "alert" : rel.classList.contains("working") ? "working" : rel.classList.contains("unverified") ? "unverified" : "idle";
        return { id: rid, name: d.name.trim(), state: st };
      })
    : [];
  const summary = (typeof base.summary === "string" && base.summary.trim()) ? base.summary.trim() : "";
  const credit = (typeof base.credit === "string" && base.credit.trim()) ? base.credit.trim() : "";
  const now = arr(base.now);
  // Reporting scope follows the source's explicit department links, never ceo styling.
  const coordinator = id === "ceo_tudeori";          // 총괄(투덜이): 전체 종합 보고
  const manager = ["ceo_haebyeong", "manager_muse", "deputy_manus"].includes(id);   // 부총괄·관리자·부관리자
  const overview = coordinator || manager || id === "owner";
  const roster = coordinator ? ROSTER : null;
  const signals = id === "owner" ? {red:[],blue:[]} : roomSignals(id, coordinator, depts.map(x => x.id));
  const backup = coordinator ? BACKUP : null;
  return {
    id,
    title: r.title || id,
    tag: r.tag || "해병이",
    partner: r.zone === "partner",
    ceo: r.ceo === true,
    coordinator, manager, overview,
    summary,
    credit,
    depts,
    roster,
    signals,
    backup,
    state,
    stateTxt: REPORT_STATE_TXT[state],
    ticker: (typeof s.ticker === "string" && s.ticker.trim()) ? s.ticker.trim() : (r.ticker || ""),
    updated: (typeof s.updated === "string" && s.updated.trim()) ? s.updated.trim() : (r.updated || ""),
    now: now.length ? now : [r.foot || "대기 중"],
    done: TaskArchive.visibleDone(base.done, id),
    next,
    links
  };
}


let PRIZE_PROGRESS = null;
let PRIZE_PROGRESS_ERROR = false;
async function loadPrizeProgress() {
  try {
    const response = await fetch("prize-progress.json", {cache:"no-store"});
    if (!response.ok) throw new Error("prize records unavailable");
    const data = await response.json();
    if (!data || !Array.isArray(data.groups)) throw new Error("invalid prize records");
    PRIZE_PROGRESS = data;
    PRIZE_PROGRESS_ERROR = false;
  } catch (e) { PRIZE_PROGRESS_ERROR = true; }
  if (["public_quiz"].includes(REPORT_ID)) openReport(REPORT_ID);
}
function renderPrizePanel(id) {
  const data = PRIZE_PROGRESS;
  if (!data) return `<section class="prize-progress"><h3>🎯 응모 진행결과</h3><p>${PRIZE_PROGRESS_ERROR ? "진행 기록을 불러오지 못했습니다. 응모·당첨 여부는 미확인입니다. 페이지를 새로 열어 주세요." : "진행 기록을 불러오는 중입니다."}</p></section>`;
  const groups = data.groups.filter(g => id === "public_quiz" && g.id === "quiz");
  const row = (label,value) => `<dt>${esc(label)}</dt><dd>${esc(value || "미확인")}</dd>`;
  const item = i => {
    let announcement = i.announcement || "미확인";
    if (/^\d{4}-\d{2}-\d{2}$/.test(announcement)) {
      const past = Date.now() >= new Date(announcement + "T00:00:00+09:00").getTime();
      announcement += past ? " · 발표일 도래/경과, 결과 확인 필요" : " 예정(기존 보고)";
    }
    return `<article class="pp-item"><h5>${esc(i.title)}</h5><span class="pp-stage">${esc(i.stage)}</span><dl>${row("응모",i.entry)}${row("발표",announcement)}${row("결과",i.result)}${row("다음 할 일",i.next)}</dl>${i.detail ? `<p class="pp-note">${esc(i.detail)}</p>` : ""}<p class="pp-source">근거: ${esc(i.source || "원자료 미확인")}</p></article>`;
  };
  const date = new Date(data.as_of);
  const stamp = Number.isNaN(date.getTime()) ? "기준시각 미확인" : date.toLocaleString("ko-KR",{timeZone:"Asia/Seoul",hour12:false});
  return `<section class="prize-progress" aria-label="응모 진행결과"><h3>🎯 응모 진행결과</h3><p class="pp-note">기록 정리: ${esc(stamp)} KST<br>${esc(data.notice)}</p><div class="pp-stats"><span>응모 상태 ≠ 당첨 결과</span><span>이 기록에서 당첨 확인 없음</span></div>${groups.map(g=>`<section class="pp-group"><h4>${esc(g.title)}</h4><p class="pp-note">${esc(g.note || "")}</p><div class="pp-items">${(Array.isArray(g.items)?g.items:[]).map(item).join("")}</div></section>`).join("")}<p class="pp-note">이 창은 조회 전용입니다. 클릭해도 응모·승인·계정 사용이나 업무 상태 변경은 일어나지 않습니다.</p></section>`;
}

/* ================= 📈 실시간 공개 시세 (계좌 연동 없음) ================= */
/* 대표님 계좌·증권사 API는 연결하지 않는다. 공개 시세만 읽어 현재가·등락률·평가손익·장 상태를 보여 준다. */
const STOCK = {
  code: "360750", name: "TIGER 미국S&P500", shares: 1, avg: 23755, fallback: 23755,
  quote: null, at: 0, state: "idle", err: "", busy: false, timer: null
};
const STOCK_API = "https://polling.finance.naver.com/api/realtime/domestic/stock/" + STOCK.code;
/* 브라우저에서 공개 시세를 읽기 위한 공개 경로 — 계좌·로그인 정보는 어디에도 보내지 않는다 */
const STOCK_ROUTES = [
  { name: "네이버 금융", url: "https://r.jina.ai/" + STOCK_API },
  { name: "allorigins", url: "https://api.allorigins.win/raw?url=" + encodeURIComponent(STOCK_API) },
  { name: "codetabs", url: "https://api.codetabs.com/v1/proxy?quest=" + encodeURIComponent(STOCK_API) }
];
const KST_FMT = new Intl.DateTimeFormat("en-GB", { timeZone: "Asia/Seoul", year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", second: "2-digit", hourCycle: "h23", weekday: "short" });

function kstNow() {
  const p = {};
  KST_FMT.formatToParts(new Date()).forEach(x => { p[x.type] = x.value; });
  return { y: p.year, mo: p.month, d: p.day, hh: p.hour, mm: p.minute, ss: p.second, wd: p.weekday, mins: Number(p.hour) * 60 + Number(p.minute) };
}

function fmtNum(n) { return Number.isFinite(Number(n)) ? Number(n).toLocaleString("ko-KR") : "—"; }

function stockNextMonday() {
  const k = kstNow();
  const base = new Date(Date.UTC(Number(k.y), Number(k.mo) - 1, Number(k.d)));
  let add = (8 - base.getUTCDay()) % 7;
  if (add === 0) add = 7;
  base.setUTCDate(base.getUTCDate() + add);
  return String(base.getUTCMonth() + 1) + "/" + String(base.getUTCDate());
}

/* 네이버 금융 공개 시세 응답(프록시가 감싼 텍스트 포함)에서 숫자만 뽑는다 */
function stockParseNaver(text, routeName) {
  const s = String(text || "");
  const a = s.indexOf("{"), b = s.lastIndexOf("}");
  if (a < 0 || b <= a) throw new Error("JSON 없음");
  const json = JSON.parse(s.slice(a, b + 1));
  const d = json && Array.isArray(json.datas) ? json.datas[0] : null;
  if (!d) throw new Error("시세 데이터 없음");
  const num = (v) => {
    const n = Number(String(v == null ? "" : v).replace(/[^0-9.\-]/g, ""));
    return Number.isFinite(n) ? n : null;
  };
  const price = num(d.closePriceRaw != null ? d.closePriceRaw : d.closePrice);
  if (price == null) throw new Error("현재가 없음");
  const change = num(d.compareToPreviousClosePriceRaw != null ? d.compareToPreviousClosePriceRaw : d.compareToPreviousClosePrice) || 0;
  return {
    price: price,
    change: change,
    ratio: num(d.fluctuationsRatioRaw != null ? d.fluctuationsRatioRaw : d.fluctuationsRatio) || 0,
    open: num(d.openPriceRaw != null ? d.openPriceRaw : d.openPrice),
    high: num(d.highPriceRaw != null ? d.highPriceRaw : d.highPrice),
    low: num(d.lowPriceRaw != null ? d.lowPriceRaw : d.lowPrice),
    volume: num(d.accumulatedTradingVolumeRaw != null ? d.accumulatedTradingVolumeRaw : d.accumulatedTradingVolume),
    market: String(d.marketStatus || "").toUpperCase(),
    tradedAt: String(d.localTradedAt || ""),
    name: String(d.stockName || STOCK.name),
    source: routeName
  };
}

async function stockFetchOnce(route) {
  const ctl = (typeof AbortController === "function") ? new AbortController() : null;
  const timer = setTimeout(() => { if (ctl) ctl.abort(); }, 8000);
  try {
    const res = await fetch(route.url, ctl ? { cache: "no-store", signal: ctl.signal } : { cache: "no-store" });
    if (!res.ok) throw new Error("HTTP " + res.status);
    return stockParseNaver(await res.text(), route.name);
  } finally {
    clearTimeout(timer);
  }
}

async function stockRefresh(manual) {
  if (STOCK.busy) return;
  STOCK.busy = true;
  if (!STOCK.quote) STOCK.state = "loading";
  stockPaint();
  let got = null;
  const fails = [];
  for (const route of STOCK_ROUTES) {
    try { got = await stockFetchOnce(route); break; }
    catch (e) { fails.push(route.name + " " + (e && e.name === "AbortError" ? "시간초과" : (e && e.message) || "실패")); }
  }
  STOCK.busy = false;
  if (got) { STOCK.quote = got; STOCK.at = Date.now(); STOCK.state = "live"; STOCK.err = ""; }
  else { STOCK.state = STOCK.quote ? "stale" : "fail"; STOCK.err = fails.join(" · "); }
  stockPaint();
  if (manual) {
    const btn = document.getElementById("sp-refresh");
    if (btn) { btn.classList.remove("ok"); void btn.offsetWidth; btn.classList.add("ok"); setTimeout(() => btn.classList.remove("ok"), 1600); }
  }
}

function stockAutoStart() {
  stockRefresh(false);
  if (STOCK.timer) clearInterval(STOCK.timer);
  STOCK.timer = setInterval(() => {
    if (document.hidden) return;                 // 화면이 꺼져 있으면 쉰다
    stockRefresh(false);
  }, 60000);
}

function stockMarketState(q) {
  const m = q ? String(q.market || "").toUpperCase() : "";
  if (m === "OPEN") return { on: true, txt: "장중" };
  if (m === "PRE" || m === "PREOPEN" || m === "PRE_OPEN") return { on: false, txt: "장 시작 전" };
  if (m === "CLOSE" || m === "CLOSED" || m === "AFTER") return { on: false, txt: "장마감" };
  const k = kstNow();
  const weekday = k.wd !== "Sat" && k.wd !== "Sun";
  return (weekday && k.mins >= 540 && k.mins < 930)
    ? { on: true, txt: "장중" }
    : { on: false, txt: "장마감" };
}

function renderStockPanel() {
  const q = STOCK.quote;
  const chart = (STATUS && STATUS.invest_sp500 && STATUS.invest_sp500.chart) || null;
  const shares = Number(STOCK.shares) || 1;
  const avg = Number(STOCK.avg) || 23755;
  const price = q ? q.price : ((chart && Number(chart.price_per_share_krw)) || STOCK.fallback);
  const cost = avg * shares;
  const value = price * shares;
  const pnl = value - cost;
  const pnlPct = cost ? (pnl / cost) * 100 : 0;
  const change = q ? Number(q.change) || 0 : 0;
  const ratio = q ? Number(q.ratio) || 0 : 0;
  const dir = change > 0 ? "up" : change < 0 ? "down" : "flat";
  const arrow = change > 0 ? "▲" : change < 0 ? "▼" : "–";
  const mkt = stockMarketState(q);
  const stamp = q ? new Intl.DateTimeFormat("ko-KR", { timeZone: "Asia/Seoul", hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false }).format(new Date(STOCK.at)) : "";
  const age = q ? Math.max(0, Math.round((Date.now() - STOCK.at) / 1000)) : 0;
  const ageTxt = q ? (age < 60 ? age + "초 전" : Math.round(age / 60) + "분 전") : "";
  const range = (q && q.high && q.low && q.high > q.low) ? Math.min(100, Math.max(0, ((price - q.low) / (q.high - q.low)) * 100)) : null;
  const statusTxt = STOCK.state === "live" ? "실시간 수신" : STOCK.state === "loading" ? "수신 중…" : STOCK.state === "stale" ? "마지막 값 유지(수신 지연)" : "수신 실패";
  const detail = q
    ? `<div class="sp-ohlc"><span>시가 <b>${fmtNum(q.open)}</b></span><span>고가 <b>${fmtNum(q.high)}</b></span><span>저가 <b>${fmtNum(q.low)}</b></span><span>거래량 <b>${fmtNum(q.volume)}</b></span></div>`
      + (range !== null ? `<div class="sp-range" title="오늘 저가~고가 범위에서 현재가 위치"><span class="sp-range-bar"><i style="left:${range.toFixed(1)}%"></i></span><span class="sp-range-lb">저 ${fmtNum(q.low)} · 고 ${fmtNum(q.high)}</span></div>` : "")
    : `<p class="sp-note">${STOCK.state === "loading" ? "공개 시세를 받아오는 중입니다." : "공개 시세를 받지 못해 최근 실체결 기준가(11/20 · 23,755원)로 표시합니다."}${STOCK.err ? `<br><small>${esc(STOCK.err)}</small>` : ""}</p>`;
  return `<section class="stock-panel live" aria-label="실시간 공개 시세와 적립 현황">
    <div class="sp-head">
      <h3>📈 <b>${esc(q ? q.name : STOCK.name)}</b> <span class="sp-code">${STOCK.code}</span></h3>
      <span class="sp-mkt ${mkt.on ? "on" : "off"}">${mkt.on ? "● " + mkt.txt : "○ " + mkt.txt}</span>
    </div>
    <div class="sp-price">
      <b class="sp-now ${dir}">${fmtNum(price)}</b><span class="sp-won">원</span>
      <span class="sp-chg ${dir}">${arrow} ${fmtNum(Math.abs(change))} (${ratio > 0 ? "+" : ""}${ratio.toFixed(2)}%)</span>
    </div>
    <div class="sp-vs">전일 종가 ${q ? fmtNum(price - change) : "—"} 대비 · ${statusTxt} ${stamp ? "· " + esc(stamp) + " (" + ageTxt + ")" : ""}</div>
    ${detail}
    <div class="sp-mine">
      <span class="sp-mine-h">내 적립 ${shares}주 · 평단 ${fmtNum(avg)}원</span>
      <span>평가금액 <b>${fmtNum(value)}원</b></span>
      <span class="sp-pnl ${pnl > 0 ? "up" : pnl < 0 ? "down" : "flat"}">평가손익 ${pnl > 0 ? "+" : pnl < 0 ? "−" : ""}${fmtNum(Math.abs(pnl))}원 (${pnlPct > 0 ? "+" : pnlPct < 0 ? "−" : ""}${Math.abs(pnlPct).toFixed(2)}%)</span>
    </div>
    <div class="sp-foot">
      <span class="sp-src">${q ? "출처 " + esc(q.source) + " 공개 시세" : "출처 최근 실체결 기준가"} · 다음 적립 ${stockNextMonday()}(월) 09:05</span>
      <button type="button" class="sp-refresh" id="sp-refresh" onclick="stockRefresh(true)" title="지금 공개 시세를 다시 받아옵니다">⟳ 새로고침</button>
    </div>
    <small>계좌·증권사 연동 없음 · 공개 데이터만 표시 · 60초마다 자동 갱신 · 주문·체결은 대표님이 직접</small>
  </section>`;
}

/* 5F 방 전광판·현재 업무 칩도 같은 시세로 맞춘다 */
function paintStockBoard() {
  const el = document.getElementById("room-invest_sp500");
  if (!el) return;
  const q = STOCK.quote;
  const chip = document.getElementById("now-invest_sp500");
  if (q) {
    const arrow = q.change > 0 ? "▲" : q.change < 0 ? "▼" : "–";
    const mkt = stockMarketState(q);
    const k = kstNow();
    setBoardText("invest_sp500", `📈 ${STOCK.name} ${fmtNum(q.price)}원 ${arrow}${fmtNum(Math.abs(q.change))}(${q.ratio > 0 ? "+" : ""}${Number(q.ratio).toFixed(2)}%) · ${mkt.on ? "장중" : "장마감"} · 공개 시세 ${k.hh}:${k.mm}:${k.ss}`, k.hh + ":" + k.mm, mkt.on ? "working" : "idle");
    if (chip) chip.lastChild.textContent = `${fmtNum(q.price)}원 ${arrow}${Number(q.ratio).toFixed(2)}% · ${mkt.on ? "장중" : "장마감"}`;
  } else {
    if (chip) chip.lastChild.textContent = STOCK.state === "loading" ? "공개 시세 수신 중" : "실시간 시세 수신 대기";
  }
}

function stockPaint() {
  const host = document.getElementById("stock-panel-live");
  if (host) host.innerHTML = renderStockPanel();
  paintStockBoard();
}

function openReport(id) {
  const sourceOpen = REPORT_ID === id && !!document.getElementById("report-source-details")?.open;
  const d = reportData(id);
  const sameReport = REPORT_ID === id;
  REPORT_ID = id;
  const t = document.getElementById("rm-title");
  if (t) t.textContent = d.title;
  const tag = document.getElementById("rm-tag");
  if (tag) { tag.textContent = d.tag; tag.className = "rm-tag" + (d.partner ? " partner" : ""); }
  const st = document.getElementById("rm-state");
  if (st) { st.className = "cstat " + d.state; st.textContent = d.stateTxt; }

  const list = (items) => items.map(x => `<li>${esc(x)}</li>`).join("");
  const roomTitle = (rid) => { const rr = rooms.find(x => x.id === rid); return rr ? rr.title : rid; };
/* 보고서 모달 미결 신호 ↔ 총괄 결재 항목 연결: 방+제목 정확 일치 또는 아래 명시 연결표뿐. 후보 수 추정 매칭은 하지 않고, 확실하지 않으면 -1(버튼 미표시) */
const SIGNAL_TO_CHIEF_ID = {
  "ceo_haebyeong|📚 자녀 경제교육 8주 PWA — 제작 착수 전 승인 6건": "blue|ceo_haebyeong|📚 자녀 경제교육 8주 PWA 기획안 — 승인 6건(제작 착수 전)"
};
function chiefIndexForSignal(x, lane) {
  if (!CHIEF || !Array.isArray(CHIEF.items)) return -1;
  const hits = [];
  CHIEF.items.forEach((it, i) => { if (it.room === x.room && it.title === x.title) hits.push(i); });
  if (hits.length === 1) return hits[0];          // 정확 일치가 유일할 때만 자동 연결
  if (hits.length > 1) return -1;                  // 동명 다수(개정·중복)는 자동 매칭 금지 — 명시 id 연결만
  const mapped = SIGNAL_TO_CHIEF_ID[x.room + "|" + x.title];
  if (!mapped) return -1;
  return CHIEF.items.findIndex(it => it.id === mapped);
}

  const sigRow = (x, lane) => {
    const ci = chiefIndexForSignal(x, lane);
    const dec = ci >= 0 ? chiefDecisions()[CHIEF.items[ci].id] : null;
    const act = lane === "red"
      ? `<span class="rs-rm">오너 직접 처리 건 · 버튼 없음</span>`
      : ci < 0
      ? `<span class="rs-rm">결재는 상단 결재 목록에서</span>`
      : dec
        ? `<span class="cr-dec ${dec.s === "ok" ? "ok" : dec.s === "re" ? "re" : "no"}">${decisionBadge(dec)}</span>` +
          `<button class="cr-ok${dec.s === "ok" ? " sel" : ""}" type="button" onclick="chiefDecide(event, ${ci}, 'ok')" title="승인 선택·전달 요청${dec.s === "ok" ? " · 현재 선택" : ""}">승인</button><button class="cr-no${dec.s === "no" ? " sel" : ""}" type="button" onclick="chiefDecide(event, ${ci}, 'no')" title="반려 선택·전달 요청${dec.s === "no" ? " · 현재 선택" : ""}">반려</button><button class="cr-re${dec.s === "re" ? " sel" : ""}" type="button" onclick="chiefDecide(event, ${ci}, 're')" title="재심의 선택·전달 요청${dec.s === "re" ? " · 현재 선택" : ""}">재심의</button>` +
          (chiefUndoable(CHIEF.items[ci]) ? `<button class="cr-undo" type="button" onclick="chiefUndo(event, ${ci})" title="미접수 선택 지우기">↺</button>` : "")
        : `<button class="cr-ok" type="button" onclick="chiefDecide(event, ${ci}, 'ok')" title="승인 선택·전달 요청">승인</button><button class="cr-no" type="button" onclick="chiefDecide(event, ${ci}, 'no')" title="반려 선택·전달 요청">반려</button><button class="cr-re" type="button" onclick="chiefDecide(event, ${ci}, 're')" title="재심의 선택·전달 요청">재심의</button>`;
    const row = `<div class="rm-sig ${lane}${lane === "red" && !redGroupUnread(x) ? " read" : ""}"><span class="rs-lane">${lane === "red" ? (redGroupUnread(x) ? "🔴" : "⚪") : "🔵"}</span><span class="rs-tx"><b>${esc(x.title)}</b>${x.detail ? `<i>${esc(x.detail)}</i>` : ""}</span>${lane === "red" && !redGroupUnread(x) ? `<span class="red-read-tag">읽음 · 업무 대기</span>` : ""}${act}${d.overview && x.room ? `<span class="rs-rm">${esc(roomTitle(x.room))}</span>` : ""}</div>`;
    return ci >= 0 && chiefCanCompact(CHIEF.items[ci], dec) ? compactDecisionReport(x.title, dec, row) : row;
  };
  const reportSignals = [...d.signals.blue].sort((a, b) => {
    const ac = chiefIndexForSignal(a, "blue"), bc = chiefIndexForSignal(b, "blue");
    const compact = ci => ci >= 0 && chiefCanCompact(CHIEF.items[ci], chiefDecisions()[CHIEF.items[ci].id]);
    return Number(compact(ac)) - Number(compact(bc));
  });
  const body = document.getElementById("rm-body");
  if (body) {
    body.innerHTML = [
      ["public_quiz"].includes(d.id) ? renderPrizePanel(d.id) : "",
      d.id === "invest_sp500" ? `<div id="stock-panel-live">${renderStockPanel()}</div>` : "",
      d.summary ? `<div class="rm-sum"><span>👑</span><span>${esc(d.summary)}</span></div>` : "",
      d.ticker ? `<div class="rm-live"><span class="rm-live-h">📺 전광판</span><span class="rm-live-t">${esc(d.ticker)}</span><span class="rm-live-u">${esc(d.updated)}</span></div>` : "",
      d.overview ? `<div class="report-scope-note">${d.coordinator ? "종합·검토 목록과 담당 보고 바로가기입니다. 개별 업무 상세는 담당 보고에서 확인하세요." : d.manager ? "이 담당이 맡은 부서의 신호와 보고만 모았습니다. 다른 부서 신호·공통 역할표는 총괄 보고에서 확인하세요." : "검토·결재 안건은 보고·결재 창구에서, 개별 업무 상세는 각 담당 보고에서 확인하세요."}<div class="report-scope-actions">${d.coordinator || id === "owner" ? `<button type="button" onclick="openChiefFromReport()">보고·결재 창구 보기</button>` : ""}${!d.coordinator ? `<button type="button" onclick="openReport('ceo_tudeori')">총괄 종합 보고</button>` : ""}</div></div>` : "",
      d.credit ? `<div class="rm-credit"><span>⚡ 크레딧</span><span>${esc(d.credit)}</span></div>` : "",
      (d.signals.red.length || d.signals.blue.length) ? `<div class="rm-sec"><div class="rm-h">🚦 미결 신호 · 🔵 ${d.signals.blue.length} · 빨간 알림 ${d.signals.red.filter(redGroupUnread).length} / 미결 ${d.signals.red.length}</div>${d.signals.red.length ? `<div class="rm-sig-note">🔴 자금·계좌·이체·결제는 AI가 실행하지 않습니다. 오너가 직접 처리해 주세요.</div>` : ""}<div class="rm-sigs">${d.signals.red.map(x => sigRow(x, "red")).join("")}${reportSignals.map(x => sigRow(x, "blue")).join("")}</div></div>` : "",
      d.depts.length ? `<div class="rm-sec"><div class="rm-h">🏢 담당 부서 현황 · ${d.depts.length}개<em class="rm-hint">칩을 누르면 해당 부서 보고로 이동</em></div><div class="rm-depts">${d.depts.map(x => (x.id && rooms.some(r => r.id === x.id))
        ? `<button type="button" class="rm-dept ${x.state}" title="${esc(x.name + " · " + REPORT_STATE_TXT[x.state] + " · 눌러서 부서 보고 열기")}" onclick="openReport('${esc(x.id)}')"><i></i>${esc(x.name)}<span class="rm-arw">›</span></button>`
        : `<span class="rm-dept ${x.state}" title="${esc(REPORT_STATE_TXT[x.state])}"><i></i>${esc(x.name)}</span>`).join("")}</div></div>` : "",
      d.roster ? `<div class="rm-sec"><div class="rm-h">🧩 6F 분장표 · ${d.roster.items.length}파트</div><div class="rm-roster">${d.roster.items.map(it => `<div class="rm-r ${it.state}"><b>${esc(it.name)}</b><span>${esc(it.role)}</span><em>${esc(it.chip)}</em></div>`).join("")}</div></div>` : "",
      d.backup ? `<div class="rm-sec"><div class="rm-h">🛟 비상 업무 백업 매트릭스 · ${d.backup.members.length}인</div><div class="rm-bk">${d.backup.members.map(m => `<div class="rm-bk-row"><b>${esc(m.name)}</b><span>1차 · ${esc(m.backup1)}</span><span>2차 · ${esc(m.backup2)}</span></div>`).join("")}</div><div class="rm-sig-note">${esc(d.backup.rule)}</div></div>` : "",
      d.overview ? `<details id="report-source-details" class="report-source-details"${sourceOpen ? " open" : ""}><summary>이 창의 기존 보고 원문 보기</summary><p>이 영역은 원자료를 그대로 보존합니다. 담당별 원보고와 같은 내용이 남아 있을 수 있습니다.</p>` : "",
      `<div class="rm-sec"><div class="rm-h">📌 지금 진행 중</div><ul class="rm-list">${list(d.now)}</ul></div>`,
      d.done.length ? `<div class="rm-sec"><div class="rm-h">✅ 완료 보고 · 24시간 이내/완료시각 미상</div><ul class="rm-list done">${list(d.done)}</ul></div>` : "",
      d.next.length ? `<div class="rm-sec"><div class="rm-h">⏰ 다음 예정 · 스케줄</div><ul class="rm-sched">${d.next.map(n => `<li><b>${esc(n.time)}</b><span>${esc(n.task)}</span></li>`).join("")}</ul></div>` : "",
      d.overview ? `</details>` : "",
      d.links.length ? `<div class="rm-sec"><div class="rm-h">🔗 바로가기<em class="rm-hint">새 창으로 열립니다</em></div><div class="rm-links">${d.links.map(l => `<a href="${esc(l.url)}" target="_blank" rel="noopener">${esc(l.label)} ↗</a>`).join("")}</div></div>` : ""
    ].join("");
    if (!sameReport) body.scrollTop = 0;
  }

  const shopBtn = document.getElementById("rm-shop");
  if (shopBtn) shopBtn.hidden = (id !== "commerce" && id !== "director_subaki");
  const actions = document.getElementById("report-actions");
  if (actions) actions.hidden = id !== "commerce" && id !== "director_subaki";
  const ledgerBtn = document.getElementById("rm-ledger");
  if (ledgerBtn) ledgerBtn.hidden = (id !== "director_subaki");
  const modal = document.getElementById("report-modal");
  if (modal) {
    modal.hidden = false;
    requestAnimationFrame(() => modal.classList.add("show"));
  }
  const r = rooms.find(x => x.id === id);
  if (r) SFX.click(r.floor);
}

function closeReport() {
  const modal = document.getElementById("report-modal");
  if (!modal || modal.hidden) return;
  modal.classList.remove("show");
  modal.hidden = true;
  REPORT_ID = null;
}

function openChiefFromReport() {
  closeReport();
  setView("bldg");
  CHIEF_OPEN = true;
  applyChiefState();
  document.getElementById("chief").scrollIntoView({block:"start",behavior:"smooth"});
}

function openShopFromReport() {
  closeReport();
  setView("shop");
}

/* 위탁판매·스마트스토어 통합 장부(구글 시트) — 링크를 아는 사람만 열람 요청, 내용은 권한으로 보호 */
const LEDGER_URL = "https://docs.google.com/spreadsheets/d/1yfZO4rKGpmItjV92Zq5IFLIWk6V56buyF2xrEK0hRD4/edit";

function openLedgerFromReport() {
  window.open(LEDGER_URL, "_blank", "noopener");
}

/* 방 클릭: 업무 보고만 연다 (상태 변경 없음) */
function roomTap(e, el, id) {
  if (e && e.target && e.target.closest && e.target.closest("button, a")) return;
  const r = rooms.find(x => x.id === id);
  /* 사이트가 연결된 캐릭터·방은 새 창으로 그 사이트를 연다 */
  if (r && typeof r.site === "string" && /^https?:\/\//.test(r.site)) {
    window.open(r.site, "_blank", "noopener");
    return;
  }
  openReport(id);
}

/* 동기화 후 열려 있는 보고가 있으면 최신 내용으로 다시 그린다 */
function refreshReport() {
  if (REPORT_ID) openReport(REPORT_ID);
}

function copyText(text, btn) {
  const flash = () => {
    if (!btn) return;
    if (!btn.dataset.lab) btn.dataset.lab = btn.textContent;
    btn.textContent = "복사됨!";
    btn.classList.add("ok");
    clearTimeout(btn._t);
    btn._t = setTimeout(() => { btn.textContent = btn.dataset.lab; btn.classList.remove("ok"); }, 1700);
  };
  const fallback = () => {
    try {
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.setAttribute("readonly", "");
      ta.style.position = "fixed";
      ta.style.top = "0";
      ta.style.left = "0";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      ta.setSelectionRange(0, text.length);
      const ok = document.execCommand("copy");
      document.body.removeChild(ta);
      if (ok) flash();
      else window.prompt("아래 문구를 복사해 총괄 채팅에 붙여넣어 주세요", text);
    } catch (err) {
      window.prompt("아래 문구를 복사해 총괄 채팅에 붙여넣어 주세요", text);
    }
  };
  if (navigator.clipboard && window.isSecureContext) navigator.clipboard.writeText(text).then(flash).catch(fallback);
  else fallback();
}

/* ================= 수동 조작 ================= */
function updatePill() {
  const pill = document.getElementById("summary-pill");
  if (!pill) return;
  const blue = (SIGNALS.blue || []).length;
  const red = (SIGNALS.red || []).length;
  const alerts = document.querySelectorAll(".room.alert").length;
  if (red > 0) {
    pill.textContent = `🔴 자금 승인 ${red} · 🔵 확인 ${blue}`;
    pill.style.background = "#7f1d1d";
    pill.style.borderColor = "#ef4444";
    pill.style.color = "#fecaca";
  } else if (blue > 0) {
    pill.textContent = `🔵 확인·승인 ${blue}건`;
    pill.style.background = "#0c2d48";
    pill.style.borderColor = "#38bdf8";
    pill.style.color = "#bae6fd";
  } else if (alerts > 0) {
    pill.textContent = `🔵 확인 요청 ${alerts}건`;
    pill.style.background = "#0c2d48";
    pill.style.borderColor = "#38bdf8";
    pill.style.color = "#bae6fd";
  } else {
    pill.textContent = "🟢 전 부서 가동";
    pill.style.background = "#0c2d48";
    pill.style.borderColor = "#38bdf8";
    pill.style.color = "#bae6fd";
  }
}

/* ================= 유리 엘리베이터 ================= */
const sleep = (ms) => new Promise(r => {
  /* 자막이 떠 있는 동안은 읽을 시간만큼 장면 전환을 늦춘다 */
  const left = (typeof _subUntil === "number" ? _subUntil : 0) - Date.now();
  if (ms >= 900 && left > ms) ms = left + 250;
  setTimeout(r, ms);
});
const pickLine = (arr) => arr[Math.floor(Math.random() * arr.length)];
const reduceMotion = !!(window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches);

let LIFT_FLOOR = "f1";

function liftTopPct(floorKey) {
  const body = document.getElementById("bldg-body");
  const fl = document.getElementById("floor-" + floorKey);
  if (!body || !fl) return 0;
  const b = body.getBoundingClientRect();
  const f = fl.getBoundingClientRect();
  if (!b.height) return 0;
  return Math.max(0, Math.min(96, ((f.top - b.top + 5) / b.height) * 100));
}

function liftGo(floorKey, sec) {
  const lift = document.getElementById("lift");
  if (!lift || !document.getElementById("floor-" + floorKey)) return;
  lift.style.transitionDuration = Math.max(0, sec) + "s";
  lift.style.top = liftTopPct(floorKey) + "%";
  LIFT_FLOOR = floorKey;
  const shaft = document.getElementById("shaft");
  if (shaft) {
    const keys = ["f6", "f5", "f4", "f3", "f2", "f1", "b1"];
    shaft.querySelectorAll(".tick").forEach((t, i) => t.classList.toggle("on", keys[i] === floorKey));
  }
}

function liftPark() { liftGo(LIFT_FLOOR || "f1", 0); }

/* 샤프트에 층별 눈금 */
function buildTicks() {
  const shaft = document.getElementById("shaft");
  if (!shaft) return;
  [...shaft.querySelectorAll(".tick")].forEach(t => t.remove());
  ["f6", "f5", "f4", "f3", "f2", "f1", "b1"].forEach(k => {
    const t = document.createElement("i");
    t.className = "tick";
    t.style.top = liftTopPct(k) + "%";
    shaft.appendChild(t);
  });
}

function liftRide(on) {
  const lift = document.getElementById("lift");
  if (lift) lift.classList.toggle("riding", !!on);
}

function liftSay(show, text) {
  const el = document.getElementById("lift-say");
  if (!el) return;
  if (text) el.textContent = text;
  el.classList.toggle("show", !!show);
}

/* ================= 사운드: Web Audio 신스 (외부 파일 없음) ================= */
const FLOOR_SOUND = { f6: true, f5: true, f4: true, f3: true, f2: true, f1: true, b1: true };

const SFX = (function () {
  const KEY = "liveoffice_sound";
  let ctx = null, bus = null, on = false;

  function ensure() {
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return null;
    if (!ctx) {
      try {
        ctx = new AC();
        bus = ctx.createGain();
        bus.gain.value = 1;
        bus.connect(ctx.destination);
      } catch (e) { ctx = null; return null; }
    }
    if (ctx.state === "suspended") { try { ctx.resume(); } catch (e) {} }
    return ctx;
  }

  function gate(floor) {
    if (!on || !ctx) return false;
    if (floor && FLOOR_SOUND[floor] === false) return false;
    return true;
  }

  function tone(o) {
    if (!gate(o.floor)) return;
    const t0 = ctx.currentTime + (o.at || 0);
    const dur = o.dur || 0.12;
    const osc = ctx.createOscillator();
    const g = ctx.createGain();
    osc.type = o.type || "sine";
    osc.frequency.setValueAtTime(o.freq || 440, t0);
    if (o.to) osc.frequency.exponentialRampToValueAtTime(Math.max(40, o.to), t0 + dur);
    const peak = Math.max(0.0004, o.gain === undefined ? 0.07 : o.gain);
    g.gain.setValueAtTime(0.0001, t0);
    g.gain.exponentialRampToValueAtTime(peak, t0 + 0.012);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    osc.connect(g);
    g.connect(bus);
    osc.start(t0);
    osc.stop(t0 + dur + 0.05);
  }

  function pour(o) {
    if (!gate(o.floor)) return;
    const t0 = ctx.currentTime + (o.at || 0);
    const dur = o.dur || 0.55;
    const len = Math.max(1, Math.floor(ctx.sampleRate * dur));
    const buf = ctx.createBuffer(1, len, ctx.sampleRate);
    const data = buf.getChannelData(0);
    for (let i = 0; i < len; i++) data[i] = (Math.random() * 2 - 1) * (1 - i / len);
    const src = ctx.createBufferSource();
    src.buffer = buf;
    const bp = ctx.createBiquadFilter();
    bp.type = "bandpass";
    bp.frequency.value = 1500;
    bp.Q.value = 0.9;
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.0001, t0);
    g.gain.exponentialRampToValueAtTime(0.05, t0 + 0.08);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    src.connect(bp);
    bp.connect(g);
    g.connect(bus);
    src.start(t0);
  }

  function suspend() {
    if (!ctx || ctx.state !== "running" || typeof ctx.suspend !== "function") return;
    try { Promise.resolve(ctx.suspend()).catch(() => {}); } catch (e) {}
  }

  const api = {
    // on = 사용자가 고른 "전체 소리" 선호 상태 (한 곳에서만 관리)
    get enabled() { return on; },
    get running() { return !!(ctx && ctx.state === "running"); },
    // 켜기: 오디오 준비 + 선호 ON. 반드시 사용자 제스처(click/tap) 안에서 부른다.
    unlock() {
      if (!ensure()) return false;
      on = true;
      if (ctx && ctx.state === "suspended") { try { Promise.resolve(ctx.resume()).catch(() => {}); } catch (e) {} }
      try { localStorage.setItem(KEY, "1"); } catch (e) {}
      return true;
    },
    // 끄기: 선호 OFF + 예약된 소리를 즉시 멈추기 위해 AudioContext 정지
    mute() {
      on = false;
      try { localStorage.setItem(KEY, "0"); } catch (e) {}
      suspend();
    },
    // 제스처에서 오디오만 미리 깨운다 (선호 상태는 절대 바꾸지 않는다)
    prime() {
      if (!on) return;
      ensure();
    },
    click(floor) { tone({ floor, freq: 1180 + Math.random() * 520, to: 820, dur: 0.035, type: "square", gain: 0.02 }); },
    chat(floor) { tone({ floor, freq: 700 + Math.random() * 160, to: 900, dur: 0.07, type: "triangle", gain: 0.032 }); },
    ding(floor, kind) {
      const up = kind !== "down";
      tone({ floor, freq: up ? 784 : 523, dur: 0.24, type: "sine", gain: 0.07 });
      tone({ floor, freq: up ? 587 : 392, dur: 0.42, type: "sine", gain: 0.055, at: 0.16 });
    },
    coffee(floor) { pour({ floor, dur: 0.55 }); tone({ floor, freq: 320, to: 170, dur: 0.5, type: "triangle", gain: 0.03 }); },
    arcade(floor) { [660, 880, 1046, 1318].forEach((f, i) => tone({ floor, freq: f, dur: 0.07, type: "square", gain: 0.028, at: i * 0.075 })); },
    karaoke(floor) { [523, 659, 784, 1046].forEach((f, i) => tone({ floor, freq: f, dur: 0.3, type: "triangle", gain: 0.045, at: i * 0.13 })); },
    alert(floor) { tone({ floor, freq: 880, dur: 0.16, type: "square", gain: 0.045 }); tone({ floor, freq: 660, dur: 0.2, type: "square", gain: 0.045, at: 0.19 }); },
    resolve(floor) { tone({ floor, freq: 660, dur: 0.12, type: "sine", gain: 0.045 }); tone({ floor, freq: 990, dur: 0.2, type: "sine", gain: 0.038, at: 0.1 }); }
  };

  try {
    if (localStorage.getItem(KEY) === "1") {
      // 선호는 저장된 값을 그대로 믿고, 첫 탭이 끝난 뒤(click)에 오디오만 깨운다.
      // 터치 도중(pointerdown/touchstart)에 DOM을 건드리면 그 탭 자체가 취소되므로
      // 여기서는 화면을 다시 그리지 않는다.
      on = true;
      const kick = () => {
        document.removeEventListener("click", kick, true);
        document.removeEventListener("touchend", kick, true);
        if (on) ensure();
      };
      document.addEventListener("click", kick, true);
      document.addEventListener("touchend", kick, true);
    }
  } catch (e) {}
  return api;
})();

function paintSoundUI() {
  const master = document.getElementById("snd-btn");
  const live = SFX.enabled;
  if (master) {
    master.textContent = live ? "🔊 전체 소리" : "🔇 전체 소리";
    master.classList.toggle("on", live);
    master.setAttribute("aria-pressed", live ? "true" : "false");
  }
  Object.keys(FLOOR_SOUND).forEach(k => {
    const b = document.getElementById("snd-" + k);
    if (!b) return;
    const floorLive = live && FLOOR_SOUND[k];
    b.textContent = floorLive ? "🔊" : "🔇";
    b.classList.toggle("on", floorLive);
    b.setAttribute("aria-pressed", floorLive ? "true" : "false");
    b.title = (k === "b1" ? "B1" : k.toUpperCase()) + " 소리 " + (floorLive ? "끄기" : "켜기");
  });
}

/* 한 번의 탭에서 click · touchend · pointerup 이 겹쳐 두 번 토글되는 것을 막는다 */
const soundTapAt = { master: 0, floors: {} };
function tapOnce(kind, key, ms) {
  const now = Date.now();
  const last = key ? (soundTapAt.floors[key] || 0) : soundTapAt.master;
  if (now - last < (ms || 320)) return false;
  if (key) soundTapAt.floors[key] = now; else soundTapAt.master = now;
  return true;
}

function toggleSound() {
  if (!tapOnce("master")) return;
  if (SFX.enabled) {
    SFX.mute();
  } else {
    // 전체 ON = 마스터 + 모든 층 (층별 음소거를 비운다)
    Object.keys(FLOOR_SOUND).forEach(k => { FLOOR_SOUND[k] = true; });
    if (!SFX.unlock()) {
      // AudioContext 없음: 켜진 척하지 않는다
      Object.keys(FLOOR_SOUND).forEach(k => { FLOOR_SOUND[k] = false; });
    }
  }
  paintSoundUI();
}

function toggleFloorSound(floor) {
  if (!tapOnce("floor", floor)) return;
  if (!SFX.enabled) {
    // 마스터가 꺼져 있으면 핀을 눌렀을 때 마스터와 그 층을 함께 켠다
    Object.keys(FLOOR_SOUND).forEach(k => { FLOOR_SOUND[k] = true; });
    if (!SFX.unlock()) {
      Object.keys(FLOOR_SOUND).forEach(k => { FLOOR_SOUND[k] = false; });
    } else {
      FLOOR_SOUND[floor] = true;
    }
  } else {
    FLOOR_SOUND[floor] = !FLOOR_SOUND[floor];
  }
  paintSoundUI();
}

/* ================= 1F 탕비실 · B1 휴게층: 자율 행동 ================= */
const VEN = {
  lobby: { hb: "lob-hb", td: "lob-td", sHb: "lob-hb-say", sTd: "lob-td-say", hbHome: 43, tdHome: 64, floor: "f1" },
  b1:    { hb: "b1-hb",  td: "b1-td",  sHb: "b1-hb-say",  sTd: "b1-td-say",  hbHome: 92, tdHome: 96, floor: "b1" }
};
let VENUE = "lobby";
let collabTimer = null;
let collabRunning = false;
let collabWasBusy = false;

/* ================= 근무 중 자리 지킴 / 쉬는 캐릭터만 이동 (사용자 지시) =================
   WORK(working)·승인 대기(alert) 상태인 캐릭터는 책상 앞을 지키고 일만 한다.
   1F 탕비실 · B1 휴게실·노래방·오락실 · 엘리베이터 이동은
   IDLE / REST(대기·휴게) 상태인 캐릭터만 한다.
   일이 시작되면 이동 연출에서 빠지고 자기 자리(책상)로 돌아간다. */
const WALKER_CEO = { hb: "ceo_haebyeong", td: "ceo_tudeori" };
let P = [];                       // 이번 연출에 등장하는 캐릭터 ("hb" / "td")
let staffBusy = false;            // 1F 탕비실 나들이(쉬는 사원) 진행 중

function roomStateOf(id) {
  const el = document.getElementById("room-" + id);
  if (!el) return "idle";
  if (el.classList.contains("working")) return "working";
  if (el.classList.contains("alert")) return "alert";
  if (el.classList.contains("unverified")) return "unverified";   // 자리 지킴도 휴식도 단정하지 않음(이동 연출 제외)
  return "idle";
}
/* working / alert = 업무 중 → 자리 지킴. idle(자율 휴게)만 이동 가능 */
function roomBusy(id) { return roomStateOf(id) !== "idle"; }
function walkerPinned(k) { return roomBusy(WALKER_CEO[k]); }
/* 연출에 등장하고, 아직 업무 중이 아닌 캐릭터만 움직인다 */
function active(k) { return P.indexOf(k) >= 0 && !walkerPinned(k); }
function freeWalkers() { return ["hb", "td"].filter(k => !walkerPinned(k)); }
function canRoam() { return freeWalkers().length > 0; }
function syncWalkerPins() { ["hb", "td"].forEach(k => castHide(k, walkerPinned(k))); }
function castShow(k) { if (P.indexOf(k) < 0) return; castHide(k, walkerPinned(k)); }
/* 연출에 참여하는 캐릭터만 잠시 숨긴다 (층 이동) */
function castSceneHide() { P.forEach(k => castHide(k, true)); }
/* 연출 없이 제자리로 즉시 돌려 놓는다 (숨김 상태에서 쓰인다) */
function placeHomeQuiet(k) {
  const el = venEl(k);
  if (!el) return;
  el.style.transitionDuration = "0s, 0.3s";
  el.style.left = VEN[VENUE][k === "hb" ? "hbHome" : "tdHome"] + "%";
  el.classList.remove("walking");
  el.classList.add("resting");
}

const CEO_LINES = ["두 부장 협업 보고!", "수익 보고 받는 중", "역할 분담 확인 중!", "☕ 커피 향 좋은데?"];
const HANDOFF_LINES = ["🤝 업데이트 전달!", "💬 브리핑 공유!", "🤝 수익 자료 전달", "💬 진행 상황 공유!"];
const KARAOKE_LINES = ["🎤 18번 불러볼까?", "🎶 박수 준비 완료!", "🎤 한 곡만 부르고 갈게"];

function venEl(k) { const v = VEN[VENUE]; return document.getElementById(k === "hb" ? v.hb : v.td); }
function venSayEl(k) { const v = VEN[VENUE]; return document.getElementById(k === "hb" ? v.sHb : v.sTd); }
function venFloor() { return VEN[VENUE].floor; }

function castTo(k, pct, dur) {
  const el = venEl(k);
  if (!el || !active(k)) return;
  el.style.transitionDuration = dur + "s, 0.3s";
  el.classList.remove("resting");
  el.classList.add("walking");
  el.classList.toggle("edge", pct > 78);
  el.classList.toggle("edge-l", pct < 16);
  el.style.left = pct + "%";
}

function castPlace(k, pct) {
  const el = venEl(k);
  if (!el) return;
  el.style.transitionDuration = "0s, 0.3s";
  el.classList.toggle("edge", pct > 78);
  el.classList.toggle("edge-l", pct < 16);
  el.style.left = pct + "%";
  void el.offsetWidth;
}

function castStand(k) {
  const el = venEl(k);
  if (!el || !active(k)) return;
  el.classList.remove("walking");
  el.classList.add("resting");
}

function castHome(k, dur) {
  const el = venEl(k);
  if (!el || !active(k)) return;
  const d = dur || 1.8;
  const home = VEN[VENUE][k === "hb" ? "hbHome" : "tdHome"];
  if (el.classList.contains("resting") && parseFloat(el.style.left) === home) return;
  el.style.transitionDuration = d + "s, 0.3s";
  el.classList.remove("walking");
  el.classList.add("walking");
  el.classList.toggle("edge", home > 78);
  el.classList.toggle("edge-l", home < 16);
  el.style.left = home + "%";
  setTimeout(() => {
    if (el && parseFloat(el.style.left) === home && el.classList.contains("walking")) {
      el.classList.remove("walking");
      el.classList.add("resting");
    }
  }, d * 1000 + 160);
}

/* 연출 대화 자막: 소리 없이 글자로만. 실제 업무 보고(상태판)와 구분되는 '연출' 자리 */
let _subTimer = null, _subUntil = 0, _subLast = 0, _subLines = [];
function sceneSub(who, text) {
  if (!text) return;
  const el = document.getElementById("scene-sub");
  const line = document.getElementById("ss-line");
  if (!el || !line) return;
  const now = Date.now();
  if (now - _subLast < 400 && el.classList.contains("show")) _subLines.push([who, text]);
  else _subLines = [[who, text]];
  _subLast = now;
  line.textContent = "";
  _subLines.forEach((p, n) => {
    if (n) line.appendChild(document.createElement("br"));
    const w = document.createElement("span"); w.className = "ss-who"; w.textContent = p[0] ? p[0] + ":" : "";
    line.appendChild(w); line.appendChild(document.createTextNode(p[1]));
  });
  const dur = Math.max(3200, _subLines.reduce((a, p) => a + p[1].length * 160, 0));
  _subUntil = now + dur;
  el.classList.add("show");
  clearTimeout(_subTimer);
  _subTimer = setTimeout(() => el.classList.remove("show"), dur);
}
const SUB_NAME = { hb: "해병이", td: "투덜이" };
function subNameOfRoom(id) {
  const r = rooms.find(x => x.id === id);
  if (r && r.ceo) return (r.tag || "") + " 부장";
  return r ? (r.tag || r.name || id) : id;
}

function castSay(k, text) {
  if (!active(k)) return;
  if (text) sceneSub(SUB_NAME[k] || k, text);
  const s = venSayEl(k);
  if (s && text) s.textContent = text;
  const el = venEl(k);
  if (el) el.classList.add("talking");
}

function castHush(k) {
  if (!active(k)) return;
  const el = venEl(k);
  if (el) el.classList.remove("talking");
}

function castItem(k, emoji) {
  if (!active(k)) return;
  const el = venEl(k);
  const it = el ? el.querySelector(".w-item") : null;
  if (it && emoji) it.textContent = emoji;
}

function castCarry(k, on) {
  if (!active(k)) return;
  const el = venEl(k);
  if (el) el.classList.toggle("carrying", !!on);
}

function castSip(k, on) {
  if (!active(k)) return;
  const el = venEl(k);
  if (el) el.classList.toggle("sipping", !!on);
}

function castHide(k, on) {
  const el = venEl(k);
  if (el) el.classList.toggle("hidden", !!on);
}

function handoffEl() { return document.getElementById(VENUE === "b1" ? "b1-handoff" : "lob-handoff"); }
function showHandoff(text) {
  const el = handoffEl();
  if (!el) return;
  if (text) el.textContent = text;
  el.classList.add("show");
}
function hideHandoff() {
  const el = handoffEl();
  if (el) el.classList.remove("show");
}

/* 캐릭터끼리 주고받는 대화 */

function ceoSay(text, only) {
  const ids = only ? [only] : ["ceo_haebyeong", "ceo_tudeori"];
  ids.forEach(id => {
    const s = document.getElementById("say-" + id);
    if (s && text) s.textContent = text;
  });
  if (text) sceneSub(only ? subNameOfRoom(only) : "대표실", text);
}
function ceoRestore() {
  ["ceo_haebyeong", "ceo_tudeori"].forEach(id => {
    const r = rooms.find(x => x.id === id);
    const s = document.getElementById("say-" + id);
    if (s && r) s.textContent = r.say;
  });
}

/* ---- 1F 에서 6F 대표실 보고 ---- */
async function sceneRide() {
  castItem("hb", "📨"); castItem("td", "📊");
  castSay("hb", "부장님들께 같이 확인받고 올게!");
  castCarry("hb", true); castCarry("td", true);
  castTo("hb", 82, 1.7);
  castTo("td", 87, 1.7);
  await sleep(1800);
  castHush("hb");
  castSceneHide();
  liftRide(true);
  liftGo("f6", 1.9);
  await sleep(2000);
  SFX.ding("f6", "up");
  liftSay(true, "부장님들께 올라가는 중");
  ceoSay("어서 와, 같이 우선순위부터 보자 👑", "ceo_haebyeong");
  ceoSay("그래, 확인할 것부터 하나씩 얘기해 보자 😤", "ceo_tudeori");
  SFX.chat("f6");
  await sleep(1700);
  ceoRestore();
  liftSay(false);
  liftGo("f1", 1.6);
  await sleep(1750);
  liftRide(false);
  castShow("hb"); castShow("td");
  castPlace("hb", 82); castPlace("td", 87);
  await sleep(80);
  castCarry("hb", false); castCarry("td", false);
  castHome("hb", 1.6); castHome("td", 1.6);
  await sleep(1800);
}

/* ---- 지하로 내려가고 올라오기 ---- */
async function rideDown() {
  castSceneHide();
  const solo = document.getElementById("b1-hc");
  if (solo) solo.classList.add("hidden");
  liftRide(true);
  liftGo("b1", 2.1);
  await sleep(2200);
  SFX.ding("b1", "down");
  liftRide(false);
  VENUE = "b1";
  castPlace("hb", 93); castPlace("td", 97);
  castShow("hb"); castShow("td");
  await sleep(90);
}

async function rideUp() {
  castTo("hb", 93, 1.3); castTo("td", 97, 1.3);
  await sleep(1450);
  castSceneHide();
  liftRide(true);
  liftGo("f1", 1.9);
  await sleep(2000);
  SFX.ding("f1", "up");
  liftRide(false);
  VENUE = "lobby";
  castPlace("hb", 93); castPlace("td", 97);
  castShow("hb"); castShow("td");
  await sleep(80);
  castCarry("hb", false); castCarry("td", false);
  castSip("hb", false); castSip("td", false);
  castHome("hb", 1.8); castHome("td", 1.8);
  await sleep(2000);
}

/* ---- B1 활동 ---- */
async function actLounge() {
  castCarry("hb", true); castCarry("td", false);
  castItem("hb", "☕");
  castTo("hb", 13, 1.8);
  castTo("td", 22, 1.8);
  await sleep(1900);
  castStand("hb"); castStand("td");
  castTo("hb", 12, 0.6); castTo("td", 21, 0.6);
  await sleep(700);
  castStand("hb"); castStand("td");
  castSip("hb", true);
  castSay("hb", "🛋️ 잠깐 휴식");
  SFX.chat("b1");
  await sleep(1500);
  castSay("td", "커피 맛있다… 5분만 눈 붙이자");
  SFX.chat("b1");
  await sleep(1800);
  castHush("hb"); castHush("td");
  castSip("hb", false);
  castSip("td", false);
  await sleep(500);
}

async function actKaraoke() {
  castTo("hb", 45, 1.6);
  castTo("td", 54, 1.6);
  await sleep(1700);
  castStand("hb"); castStand("td");
  const room = document.getElementById("b1-room");
  if (room) room.classList.add("singing");
  SFX.karaoke("b1");
  castSay("hb", pickLine(KARAOKE_LINES));
  SFX.chat("b1");
  await sleep(1500);
  castSay("td", pickLine(KARAOKE_LINES));
  SFX.chat("b1");
  await sleep(1700);
  castHush("hb"); castHush("td");
  if (room) room.classList.remove("singing");
}

async function actArcade() {
  castTo("hb", 74, 1.6);
  castTo("td", 84, 1.6);
  await sleep(1700);
  castStand("hb"); castStand("td");
  const room = document.getElementById("b1-room");
  if (room) room.classList.add("playing");
  SFX.arcade("b1");
  castSay("hb", "오락실 한 판 붙자!");
  SFX.chat("b1");
  await sleep(1400);
  castSay("td", "한 곡만 부르고 갈게 🎤");
  SFX.chat("b1");
  await sleep(1600);
  SFX.arcade("b1");
  castSay("hb", "🕹️ 하이스코어 갱신!");
  await sleep(1400);
  castHush("hb"); castHush("td");
  if (room) room.classList.remove("playing");
}

/* ---- 1F 탕비실: 커피 → 휴식 / 보고 ---- */
async function scenePantry() {
  const rest = Math.random() < 0.6;
  castItem("hb", "☕"); castItem("td", "☕");
  castSay("hb", "아메리카노 한 잔 뽑아 줄까?");
  SFX.chat("f1");
  castTo("hb", 46, 2.2);
  await sleep(900);
  castHush("hb");
  castSay("td", "좋아! 당 충전하고 가자 ☕");
  SFX.chat("f1");
  castTo("td", 53, 2.2);
  await sleep(1500);
  castStand("hb"); castStand("td");
  castHush("td");
  await sleep(220);
  const pz = document.getElementById("pantry");
  if (pz) pz.classList.add("brewing");
  SFX.coffee("f1");
  await sleep(1300);
  if (pz) pz.classList.remove("brewing");
  castCarry("hb", true); castCarry("td", true);
  castSay("hb", "☕ 따끈한 커피 완성!");
  SFX.chat("f1");
  await sleep(1000);
  castHush("hb");

  if (rest) {
    castSay("hb", "🛋️ 지하 휴게실 가자");
    SFX.chat("f1");
    castTo("hb", 82, 1.6);
    castTo("td", 87, 1.6);
    await sleep(1700);
    await rideDown();
    await actLounge();
    await rideUp();
  } else {
    castSay("hb", "🤝 커피 마시면서 얘기하자");
    SFX.chat("f1");
    castTo("hb", 44, 1.0);
    castTo("td", 52, 1.0);
    await sleep(1100);
    showHandoff("🤝 커피 타임 협업!");
    await sleep(1200);
    hideHandoff();
    castHush("hb");
    castSay("hb", "👑 부장님들께 커피 갖다 드리고 올게!");
    castTo("hb", 82, 1.5);
    castTo("td", 87, 1.5);
    await sleep(1600);
    castSceneHide();
    liftRide(true);
    liftGo("f6", 1.9);
    await sleep(2000);
    SFX.ding("f6", "up");
    liftSay(true, "☕ 커피 들고 👑 대표실 보고");
    ceoSay("커피 맛 좋은데? 수고했어 👑", "ceo_haebyeong");
    ceoSay("나도 한잔 고마워 ☕", "ceo_tudeori");
    await sleep(1600);
    ceoRestore();
    liftSay(false);
    liftGo("f1", 1.6);
    await sleep(1750);
    liftRide(false);
    VENUE = "lobby";
    castPlace("hb", 82); castPlace("td", 87);
    castShow("hb"); castShow("td");
    await sleep(80);
    castCarry("hb", false); castCarry("td", false);
    castHome("hb", 1.7); castHome("td", 1.7);
    await sleep(1900);
  }
}

/* ---- 자율: 지하 휴게층에 놀러 갔다 오기 ---- */
async function sceneBasement() {
  castItem("hb", "🎤"); castItem("td", "🎮");
  castSay("hb", pickLine(["잠깐 쉬다 올게!", "🎤 한 곡 뽑고 올게!", "지하 휴게실 갔다 올게"]));
  SFX.chat("f1");
  castCarry("hb", true); castCarry("td", true);
  castTo("hb", 90, 1.8);
  castTo("td", 95, 1.8);
  await sleep(1900);
  castHush("hb");
  await rideDown();
  castCarry("hb", false); castCarry("td", false);
  const roll = Math.random();
  if (roll < 0.34) await actKaraoke();
  else if (roll < 0.68) await actArcade();
  else await actLounge();
  await rideUp();
}

/* ---- 1F 짧은 대화 · 산책 · 협업 ---- */
async function sceneMeet() {
  castItem("hb", "📨");
  castSay("hb", "오늘은 뭐부터 챙길까?");
  SFX.chat("f1");
  castTo("hb", 44, 2.0);
  castTo("td", 52, 2.0);
  await sleep(1200);
  castSay("td", "급한 것부터 같이 정리해 보자");
  SFX.chat("f1");
  await sleep(1000);
  castStand("hb"); castStand("td");
  castHush("hb"); castHush("td");
  await sleep(200);
  showHandoff(pickLine(HANDOFF_LINES));
  await sleep(1200);
  hideHandoff();
  castItem("td", "📊");
  castCarry("td", true);
  castSay("td", "그래, 나도 그렇게 맞출게!");
  SFX.chat("f1");
  await sleep(1200);
  castHush("td");
  castCarry("td", false);
  castHome("hb", 2.0); castHome("td", 2.0);
  await sleep(2100);
}

async function sceneStroll() {
  castSay("hb", "잠깐 바람 쐬고 올게");
  SFX.chat("f1");
  castTo("hb", 20 + Math.random() * 4, 1.7);
  castTo("td", 70 - Math.random() * 4, 1.7);
  await sleep(1000);
  castHush("hb");
  await sleep(800);
  castStand("hb"); castStand("td");
  await sleep(500);
  castHome("hb", 1.8); castHome("td", 1.8);
  await sleep(1900);
}

/* ---- 씬 정리 ---- */
function settleScene() {
  const pz = document.getElementById("pantry");
  if (pz) pz.classList.remove("brewing");
  const bz = document.getElementById("b1-room");
  if (bz) bz.classList.remove("singing", "playing");
  ["lob-handoff", "b1-handoff"].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.classList.remove("show");
  });
  ["b1-hb", "b1-td", "b1-hc"].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.classList.add("hidden");
  });
  /* 쉬는 사원 연출이 돌고 있을 때는 그 캐릭터를 지우지 않는다 */
  if (!staffBusy) ["lob-hc", "lob-hc2"].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.classList.add("hidden");
  });
  if (!b1StaffBusy) ["b1-hc2"].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.classList.add("hidden");
  });
  VENUE = "lobby";
  ["hb", "td"].forEach(k => {
    /* 연출에 없던 캐릭터와 업무 중 캐릭터는 조용히 제자리로 돌려 둔다 */
    if (!active(k)) placeHomeQuiet(k);
    castCarry(k, false);
    castSip(k, false);
    castHush(k);
    castHide(k, walkerPinned(k));
  });
  castHome("hb", 1.4);
  castHome("td", 1.4);
  liftRide(false);
  liftSay(false);
  if (LIFT_FLOOR && LIFT_FLOOR !== "f1") liftGo("f1", 1.2);
}

function corridorActive() {
  const working = document.querySelectorAll(".room.working").length;
  return working > 0 || !!COLLAB_ACTIVE;
}

async function lobShow() {
  /* 이번 연출에 나오는 캐릭터는 '일하지 않는(IDLE)' 캐릭터뿐이다 */
  P = freeWalkers();
  if (!P.length) { syncWalkerPins(); return; }
  const roll = Math.random();
  const pair = P.length > 1;
  if (VENUE !== "lobby") { settleScene(); await sleep(160); }
  /* 쉬는 캐릭터만 움직인다: 탕비실 · 지하 휴게실 · 대표실 보고(엘리베이터) · 잠깐 산책
     한 명만 쉬는 중이면 둘이서 하는 연출(대화·보고)은 건너뛴다 */
  const mode = !pair
    ? (roll < 0.44 ? "pantry" : roll < 0.76 ? "basement" : "stroll")
    : (roll < 0.30 ? "pantry" : roll < 0.52 ? "basement" : roll < 0.72 ? "meet" : roll < 0.90 ? "stroll" : "ride");

  castCarry("hb", false); castCarry("td", false);
  castSip("hb", false); castSip("td", false);

  if (mode === "pantry") await scenePantry();
  else if (mode === "basement") await sceneBasement();
  else if (mode === "ride") await sceneRide();
  else if (mode === "meet") await sceneMeet();
  else await sceneStroll();
}

function scheduleLobby(delay) {
  if (reduceMotion) return;
  if (collabTimer) clearTimeout(collabTimer);
  /* 업무 중에는 아예 움직이지 않고, 쉬는 캐릭터가 있어도 12~20초에 한 번만 움직인다
     (자리에서 반복해서 왔다갔다 하던 문제를 줄임) */
  const base = (typeof delay === "number") ? delay : (canRoam() ? 12000 : 20000);
  collabTimer = setTimeout(async () => {
    collabTimer = null;
    if (collabRunning) { scheduleLobby(1200); return; }
    /* 업무 중(WORK) 캐릭터만 있으면 이동 연출을 시작하지 않는다 */
    if (!canRoam()) { syncWalkerPins(); scheduleLobby(20000); return; }
    if (staffBusy || b1StaffBusy || staffRiding) { scheduleLobby(3000); return; }
    collabRunning = true;
    try { await lobShow(); }
    catch (e) {}
    finally { collabRunning = false; settleScene(); syncWalkerPins(); }
    scheduleLobby();
  }, base + Math.random() * 5000);
}

function applyCorridor() {
  const busy = corridorActive();
  if (!canRoam()) {
    /* 근무가 시작되면 나와 있던 캐릭터는 자기 자리로 복귀 */
    if (VENUE !== "lobby") settleScene();
    syncWalkerPins();
  } else {
    syncWalkerPins();
    if (busy && !collabWasBusy) scheduleLobby(600);
  }
  collabWasBusy = busy;
}

/* ================= 층별 잡담 · 자율 휴식 ================= */
const ROOM_TALK = {
  f5: [["brandconnect", "하나필터 원고 마무리됐어?"], ["commerce", "심사 결과만 기다리는 중이야"]],
  f4: [["tistory", "소화기 글 발행 준비됐지?"], ["haebyeongi_adsense", "응, 나는 11시 정보글부터 볼게"]],
  f3: [["novel", "10화 시놉시스부터 맞춰 보자"], ["ticket", "좋아, 나는 초대글 쪽 마무리할게"]],
  f2: [["ticket", "링크만 붙이면 되게 준비하자"], ["public_quiz", "응, 16:30 응모도 같이 챙길게"]]
};
let talkRunning = false;

async function roomTalk(floor) {
  const pairs = ROOM_TALK[floor];
  if (!pairs || talkRunning) return;
  const allIdle = pairs.every(([id]) => {
    const el = document.getElementById("room-" + id);
    return el && el.classList.contains("idle") && !el.classList.contains("break");
  });
  if (!allIdle) return;
  talkRunning = true;
  try {
    for (let i = 0; i < pairs.length; i++) {
      const id = pairs[i][0], text = pairs[i][1];
      const el = document.getElementById("room-" + id);
      const s = document.getElementById("say-" + id);
      if (!el || !el.classList.contains("idle") || !s) break;
      s.textContent = text;
      sceneSub(subNameOfRoom(id), text);
      SFX.chat(floor);
      await sleep(1800);
    }
  } finally {
    pairs.forEach(([id]) => {
      const r = rooms.find(x => x.id === id);
      const el = document.getElementById("room-" + id);
      const s = document.getElementById("say-" + id);
      if (s && r && el && el.classList.contains("idle") && !el.classList.contains("break")) s.textContent = r.say;
    });
    talkRunning = false;
  }
}

function roomTalkLoop() {
  if (reduceMotion) return;
  setTimeout(() => {
    if (!talkRunning) {
      const floors = Object.keys(ROOM_TALK);
      roomTalk(floors[Math.floor(Math.random() * floors.length)]);
    }
    roomTalkLoop();
  }, 24000 + Math.random() * 16000);
}

/* ---- 1F 탕비실에 들르는 '쉬는 사원' ----
   대기(IDLE) 중인 부서 사원 한 명만 커피를 뽑으러 나온다.
   업무 중(WORK) · 승인 대기(alert) · 자리 비움(break) 부서 사원은 나오지 않는다. */
function idleDeptRooms() {
  return rooms.filter(r => {
    if (r.ceo) return false;
    const el = document.getElementById("room-" + r.id);
    return !!el && el.classList.contains("idle") && !el.classList.contains("break") && !el.classList.contains("alert") && !AWAY.has(r.id);
  });
}

/* 쉬는 부서 사원이 1F 탕비실 · B1 휴게실을 실제로 오가는 연출.
   - WORK(working)·승인 대기(alert) 사원은 절대 나오지 않는다 (자리 지킴 유지).
   - 페이지를 열자마자 바로 시작하고, 그 뒤로도 짧은 주기로 계속 이어진다.
   - 나가 있는 도중 그 부서가 근무로 바뀌면 그 사원은 바로 복귀한다. */
let b1StaffBusy = false;

function shopHidden() {
  const b = document.getElementById("bldg-body");
  return !!b && b.classList.contains("vhide");
}

function staffStillIdle(room) {
  const el = document.getElementById("room-" + room.id);
  return !!el && el.classList.contains("idle") && !el.classList.contains("break") && !el.classList.contains("alert");
}

function staffPaint(el, sayEl, room, line, item) {
  const body = el.querySelector(".w-body");
  const who = el.querySelector(".w-who");
  const it = el.querySelector(".w-item");
  const label = String(room.title || room.name || "쉬는 사원").replace(/^[^\p{L}\p{N}]+/u, "");
  if (body) body.textContent = room.worker || "🙂";
  if (who) who.textContent = label;
  if (it && item) it.textContent = item;
  if (sayEl) sayEl.textContent = line;
  return label;
}

/* 자리를 비운 부서: 자리 아이콘을 숨기고 무슨 일 중인지 표시한다 (중복 표시 방지) */
const AWAY = new Set();
let staffRiding = false;

function staffAway(room, label) {
  const el = document.getElementById("room-" + room.id);
  AWAY.add(room.id);
  if (!el) return;
  el.classList.add("away");
  el.dataset.away = label;
  const stage = el.querySelector(".room-stage");
  if (stage) stage.dataset.away = label;
}

function staffHome(room) {
  const el = document.getElementById("room-" + room.id);
  AWAY.delete(room.id);
  if (!el) return;
  el.classList.remove("away");
  delete el.dataset.away;
  const stage = el.querySelector(".room-stage");
  if (stage) delete stage.dataset.away;
}

/* 부서 층 ↔ 1F·B1을 유리 엘리베이터로 실제 이동하는 연출 */
async function staffLift(from, to, line, emoji) {
  const lift = document.getElementById("lift");
  if (!lift) return;
  const st = document.getElementById("rider-st");
  staffRiding = true;
  try {
    liftGo(from, 0.8);
    liftSay(true, line);
    await sleep(850);
    if (st) { st.textContent = emoji || "🙂"; st.hidden = false; }
    lift.classList.add("riding", "staff-ride");
    SFX.ding(to, to === "b1" ? "down" : "up");
    liftGo(to, 1.35);
    await sleep(1450);
    if (st) st.hidden = true;
    lift.classList.remove("riding", "staff-ride");
    liftSay(false);
  } finally {
    staffRiding = false;
  }
}

async function staffPantryOne(room, slot, line) {
  const id = "lob-hc" + (slot === 2 ? "2" : "");
  const el = document.getElementById(id);
  const say = document.getElementById(id + "-say");
  if (!el || !staffStillIdle(room) || AWAY.has(room.id)) return;
  const emoji = room.worker || "🙂";
  const label = String(room.title || room.name || "쉬는 사원").replace(/^[^\p{L}\p{N}]+/u, "");
  const startPct = slot === 2 ? 58 : 20;
  const pz = document.getElementById("pantry");
  staffAway(room, "☕ 탕비실 가는 중");
  try {
    await staffLift(room.floor, "f1", "☕ " + label + " · 탕비실 가는 중", emoji);
    if (!staffStillIdle(room)) return;
    staffAway(room, "☕ 탕비실에서 쉬는 중");
    staffPaint(el, say, room, line, "☕");
    el.classList.remove("walking", "carrying", "sipping", "talking", "edge", "hidden");
    el.style.transitionDuration = "0s, 0.3s";
    el.style.left = startPct + "%";
    el.classList.add("resting");
    void el.offsetWidth;
    await sleep(120);
    soloWalk(el, 47, 1.4);
    await sleep(1550);
    el.classList.remove("walking");
    el.classList.add("resting");
    if (!staffStillIdle(room)) return;
    if (pz) pz.classList.add("brewing");
    SFX.coffee("f1");
    await sleep(1150);
    if (pz) pz.classList.remove("brewing");
    el.classList.add("carrying", "talking");
    if (say) say.textContent = "☕ " + label + " · 잠깐 쉬는 중";
    await sleep(1400);
    el.classList.add("sipping");
    await sleep(1300);
    el.classList.remove("talking", "sipping", "carrying");
    soloWalk(el, startPct, 1.4);
    await sleep(1500);
    el.classList.remove("walking");
    el.classList.add("resting");
  } finally {
    if (pz) pz.classList.remove("brewing");
    el.classList.add("hidden");
    el.classList.remove("walking", "talking", "carrying", "sipping");
    await staffLift("f1", room.floor, "🏢 " + label + " · 자리 복귀", emoji).catch(() => {});
    staffHome(room);
  }
}

async function staffBasementOne(room) {
  const el = document.getElementById("b1-hc2");
  const say = document.getElementById("b1-hc2-say");
  if (!el || !staffStillIdle(room) || AWAY.has(room.id)) return;
  const emoji = room.worker || "🙂";
  const label = String(room.title || room.name || "쉬는 사원").replace(/^[^\p{L}\p{N}]+/u, "");
  const karaoke = Math.random() < 0.55;
  const bz = document.getElementById("b1-room");
  const startPct = 96;
  staffAway(room, karaoke ? "🎤 B1 노래방 중" : "🛋️ B1 휴게 중");
  try {
    await staffLift(room.floor, "b1", (karaoke ? "🎤 " : "🛋️ ") + label + " · B1 내려가는 중", emoji);
    if (!staffStillIdle(room)) return;
    staffPaint(el, say, room, karaoke ? "🎤 한 곡만 부르고 갈게" : "🛋️ 소파에서 잠깐", karaoke ? "🎤" : "🛋️");
    el.classList.remove("walking", "talking", "edge", "hidden");
    el.style.transitionDuration = "0s, 0.3s";
    el.style.left = startPct + "%";
    el.classList.add("resting");
    void el.offsetWidth;
    await sleep(120);
    soloWalk(el, karaoke ? 50 : 24, 1.6);
    await sleep(1750);
    el.classList.remove("walking");
    el.classList.add("resting");
    if (!staffStillIdle(room)) return;
    if (karaoke) {
      if (bz) bz.classList.add("singing");
      SFX.karaoke("b1");
      if (say) say.textContent = "🎤 " + label + " · 한 곡 신나게!";
      el.classList.add("talking");
      await sleep(2300);
      if (say) say.textContent = "🎶 박수!";
      if (bz) bz.classList.remove("singing");
    } else {
      if (say) say.textContent = "🛋️ " + label + " · 잠깐 눕자";
      el.classList.add("talking");
      await sleep(2400);
    }
    el.classList.remove("talking");
    soloWalk(el, startPct, 1.4);
    await sleep(1550);
    el.classList.remove("walking");
    el.classList.add("resting");
  } finally {
    if (bz) bz.classList.remove("singing");
    el.classList.add("hidden");
    el.classList.remove("walking", "talking");
    await staffLift("b1", room.floor, "🏢 " + label + " · 자리 복귀", emoji).catch(() => {});
    staffHome(room);
  }
}

async function staffPantry() {
  if (staffBusy || collabRunning || reduceMotion || VENUE !== "lobby" || shopHidden()) return;
  const cands = idleDeptRooms();
  if (!cands.length) return;
  staffBusy = true;
  try {
    const pool = cands.slice();
    const want = pool.length >= 3 && Math.random() < 0.6 ? 2 : 1;
    const picked = [];
    while (picked.length < want && pool.length) picked.push(pool.splice(Math.floor(Math.random() * pool.length), 1)[0]);
    const lines = ["☕ 잠깐 커피 한잔", "☕ 커피 타임!", "☕ 한 잔 하고 올게"];
    await Promise.all(picked.map((r, i) => sleep(i * 500).then(() => staffPantryOne(r, i + 1, lines[i % lines.length]))));
  } finally {
    const pz = document.getElementById("pantry");
    if (pz) pz.classList.remove("brewing");
    staffBusy = false;
  }
}

async function staffBasement() {
  if (b1StaffBusy || soloBusy || collabRunning || reduceMotion || VENUE !== "lobby" || shopHidden()) return;
  const cands = idleDeptRooms();
  if (!cands.length) return;
  const room = cands[Math.floor(Math.random() * cands.length)];
  b1StaffBusy = true;
  try { await staffBasementOne(room); }
  finally {
    const bz = document.getElementById("b1-room");
    if (bz) bz.classList.remove("singing");
    b1StaffBusy = false;
  }
}

function staffLoop() {
  if (reduceMotion) return;
  setTimeout(() => { staffPantry(); staffLoop(); }, 9000 + Math.random() * 5000);
}

function b1StaffLoop() {
  if (reduceMotion) return;
  setTimeout(() => { staffBasement(); b1StaffLoop(); }, 11000 + Math.random() * 6000);
}

/* 페이지를 열자마자 쉬는 사원들이 1F 탕비실 · B1 휴게실로 움직인다 */
function startStaffLife() {
  if (reduceMotion) return;
  setTimeout(() => { staffPantry(); }, 500);
  setTimeout(() => { staffBasement(); }, 1500);
  staffLoop();
  b1StaffLoop();
}

/* 지하 오락실에 들른 최응모 사원 (혼자 방문) */
let soloBusy = false;function soloWalk(el, pct, dur) {
  el.style.transitionDuration = dur + "s, 0.3s";
  el.classList.remove("resting");
  el.classList.add("walking");
  el.classList.toggle("edge", pct > 78);
  el.style.left = pct + "%";
}
async function soloScene() {
  if (soloBusy || collabRunning || b1StaffBusy || VENUE === "b1") return;
  /* 지하 오락실은 쉬는(대기) 캐릭터만 간다 — 업무 중·자리 비움 중엔 가지 않는다 */
  const prizeRoom = document.getElementById("room-public_quiz");
  if (!prizeRoom || !prizeRoom.classList.contains("idle") || prizeRoom.classList.contains("break") || AWAY.has("public_quiz")) return;
  const el = document.getElementById("b1-hc");
  const room = document.getElementById("b1-room");
  if (!el) return;
  soloBusy = true;
  try {
    el.style.transitionDuration = "0s, 0.3s";
    el.style.left = "93%";
    el.classList.remove("hidden", "talking");
    void el.offsetWidth;
    soloWalk(el, 74, 1.6);
    await sleep(1700);
    el.classList.remove("walking");
    el.classList.add("resting");
    if (room) room.classList.add("playing");
    SFX.arcade("b1");
    const say = document.getElementById("b1-hc-say");
    if (say) say.textContent = "🕹️ 한 판만!";
    el.classList.add("talking");
    await sleep(2100);
    if (say) say.textContent = "🕹️ 이번엔 이긴다!";
    SFX.arcade("b1");
    await sleep(2000);
    el.classList.remove("talking");
    if (room) room.classList.remove("playing");
    soloWalk(el, 93, 1.5);
    await sleep(1600);
    el.classList.add("hidden");
  } finally {
    soloBusy = false;
  }
}

function soloLoop() {
  if (reduceMotion) return;
  setTimeout(() => { soloScene(); soloLoop(); }, 45000 + Math.random() * 30000);
}

/* 근무 중 키보드 소리 */
setInterval(() => {
  if (!SFX.enabled || document.hidden) return;
  const el = document.querySelector(".room.working");
  if (!el) return;
  const r = rooms.find(x => "room-" + x.id === el.id);
  if (!r) return;
  if (Math.random() < 0.5) SFX.click(r.floor);
}, 380);

/* ================= 서울 실시간 시계 ================= */
const SEOUL_CLOCK = new Intl.DateTimeFormat("ko-KR", {
  timeZone: "Asia/Seoul",
  year: "numeric", month: "2-digit", day: "2-digit", weekday: "short",
  hour: "2-digit", minute: "2-digit", second: "2-digit", hourCycle: "h23"
});

function paintClock() {
  const el = document.getElementById("clock");
  if (!el) return;
  const parts = SEOUL_CLOCK.formatToParts(new Date());
  const get = (t) => (parts.find(p => p.type === t) || {}).value || "";
  const text = get("year") + "." + get("month") + "." + get("day") + " (" + get("weekday") + ") " +
    get("hour") + ":" + get("minute") + ":" + get("second");
  el.textContent = text;
}

/* ================= 화면 꺼짐 방지 (Screen Wake Lock) ================= */
/* 휴대폰으로 사무실을 보는 동안 화면이 잠들지 않게 한다.
   개인정보 없음: 켜짐/꺼짐 선호(1/0)만 localStorage에 둔다. */
const WAKE_KEY = "liveoffice_wake";
let wakeWanted = true;
let wakeSentinel = null;
let wakePending = false;

function wakeSupported() {
  return !!(navigator.wakeLock && typeof navigator.wakeLock.request === "function");
}

function paintWakeUI(state, note) {
  const el = document.getElementById("wake-pill");
  if (!el) return;
  el.classList.toggle("on", state === "on");
  el.classList.toggle("warn", state === "warn" || state === "pending");
  el.classList.toggle("off", state === "off" || state === "unsupported");
  const mark = {
    on: ["🔆", "ON"], pending: ["🔆", "…"], warn: ["🔅", "재시도"],
    unsupported: ["🔅", "불가"], off: ["🌙", "OFF"]
  }[state] || ["🌙", "OFF"];
  const ico = el.querySelector(".wake-ico");
  const word = el.querySelector(".wake-word");
  const label = el.querySelector(".wake-state");
  if (ico && word && label) {
    ico.textContent = mark[0];
    label.textContent = mark[1];
    el.setAttribute("aria-label", "화면 유지 " + mark[1] + (state === "on" ? " · 눌러서 끄기" : " · 눌러서 켜기"));
  } else {
    el.textContent = mark[0] + " 화면유지 " + mark[1];
  }
  el.setAttribute("aria-pressed", state === "on" ? "true" : "false");
  el.title = note || (
    state === "on" ? "화면이 꺼지지 않게 유지 중 · 눌러서 끄기" :
    state === "off" ? "화면 꺼짐 방지가 꺼져 있어요 · 눌러서 켜기" :
    "화면을 한 번 탭하면 화면 유지를 다시 켭니다"
  );
}

async function acquireWakeLock() {
  if (!wakeWanted || document.visibilityState !== "visible") return;
  if (!wakeSupported()) {
    paintWakeUI("unsupported", "이 브라우저는 화면 유지(Wake Lock)를 지원하지 않아요");
    return;
  }
  if (wakeSentinel || wakePending) return;
  wakePending = true;
  try {
    const s = await navigator.wakeLock.request("screen");
    wakeSentinel = s;
    if (s && typeof s.addEventListener === "function") {
      s.addEventListener("release", () => {
        if (wakeSentinel === s) wakeSentinel = null;
        if (wakeWanted) paintWakeUI("warn", "화면 유지가 잠시 풀렸어요 · 다시 켜는 중");
      });
    }
    paintWakeUI("on");
  } catch (err) {
    wakeSentinel = null;
    if (wakeWanted) {
      paintWakeUI("warn", "화면을 한 번 탭하면 화면 유지를 다시 켭니다" +
        (err && err.name ? " (" + err.name + ")" : ""));
    }
  } finally {
    wakePending = false;
  }
}

function releaseWakeLock() {
  const s = wakeSentinel;
  wakeSentinel = null;
  if (s && typeof s.release === "function") {
    try { Promise.resolve(s.release()).catch(() => {}); } catch (e) {}
  }
}

function toggleWakeLock() {
  wakeWanted = !wakeWanted;
  try { localStorage.setItem(WAKE_KEY, wakeWanted ? "1" : "0"); } catch (e) {}
  if (wakeWanted) {
    paintWakeUI("pending");
    acquireWakeLock();
  } else {
    releaseWakeLock();
    paintWakeUI("off");
  }
}

(function initWakeLock() {
  try { if (localStorage.getItem(WAKE_KEY) === "0") wakeWanted = false; } catch (e) {}
  if (!wakeWanted) { paintWakeUI("off"); return; }
  paintWakeUI("pending");
  // 1) 로드 즉시 시도 (제스처 없이 허용되는 브라우저)
  acquireWakeLock();
  // 2) 제스처가 필요하면 탭이 끝난 뒤(click)에 재시도한다.
  //    터치 도중에 화면을 다시 그리면 그 탭이 취소되므로 pointerdown 계열은 쓰지 않는다.
  const kick = () => { if (wakeWanted && !wakeSentinel) acquireWakeLock(); };
  document.addEventListener("click", kick, { passive: true });
  // 3) 화면이 다시 보이면 재획득 (숨김 시 브라우저가 자동 해제)
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "visible" && wakeWanted) acquireWakeLock();
  });
  // 4) 배터리 절약 등으로 풀린 경우 조용히 재시도
  setInterval(() => {
    if (wakeWanted && !wakeSentinel && !wakePending && document.visibilityState === "visible") acquireWakeLock();
  }, 15000);
})();

/* ================= 시작 ================= */
render();
updatePill();
paintSoundUI();
paintClock();
setInterval(paintClock, 1000);
loadStatus();
loadPrizeProgress();
stockAutoStart();
setInterval(loadStatus, 60000);
/* 화면 전환: 주소(?view=shop) → 저장된 선택 → 기본 전체 빌딩 */
(function initView() {
  let v = null, open = null;
  try {
    const q = new URLSearchParams(location.search);
    v = q.get("view");
    open = q.get("open");
  } catch (e) {}
  if (!v) { try { v = localStorage.getItem("liveoffice_view"); } catch (e) {} }
  if (v === "shop") setView("shop");
  if (open && rooms.some(r => r.id === open)) openReport(open);
})();
document.addEventListener("keydown", (e) => {
  const room = e.target.closest?.('.room[role="button"]');
  if (room && e.target === room && (e.key === "Enter" || e.key === " ")) { e.preventDefault(); roomTap(e, room, room.id.replace("room-", "")); }
  if (e.key === "Escape") { closeReport(); }
  if (e.key === "Tab") {
    const modal = [...document.querySelectorAll('.modal:not([hidden])')].at(-1);
    if (!modal) return;
    const focusable = [...modal.querySelectorAll('button,a[href],input,textarea,select,[tabindex="0"]')].filter(x => x.getClientRects().length && !x.disabled);
    const first = focusable[0], last = focusable.at(-1);
    if (e.shiftKey && (document.activeElement === first || !modal.contains(document.activeElement))) {e.preventDefault(); last?.focus();}
    else if (!e.shiftKey && (document.activeElement === last || !modal.contains(document.activeElement))) {e.preventDefault(); first?.focus();}
  }
});
window.addEventListener("resize", () => { buildTicks(); liftPark(); });
// 다른 탭·창에서 승인·반려를 바꾸면 이 화면의 신호등·방 불빛도 같이 따라간다
window.addEventListener("storage", (e) => {
  if (e.key !== "liveoffice_chief_dec") return;
  CHIEF_DEC = null;
  syncDecisionLights();
});
// 로비 협업 연출: 처음엔 조용히 한 번, 이후 자연스러운 주기로 이어진다
setTimeout(() => liftPark(), 60);
scheduleLobby(1600);
roomTalkLoop();
soloLoop();
startStaffLife();
