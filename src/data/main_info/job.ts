import { JobSelectType } from "@models/CPType";

export const selectJobList: JobSelectType[] = [
  { jobName: "기타" },
  { jobName: "경영" },
  { jobName: "마케팅" },
  { jobName: "무역" },
  { jobName: "유통" },
  { jobName: "연구/개발" },
  { jobName: "기계" },
  { jobName: "전기" },
  { jobName: "자동차" },
  { jobName: "서비스" },
  { jobName: "교육" },
  { jobName: "금융" },
  { jobName: "영업" },
  { jobName: "문화/예술" },
  { jobName: "방송" },
  { jobName: "연극/영화" },
  { jobName: "IT관련식" },
  { jobName: "인터넷" },
  { jobName: "디자인" },
  { jobName: "건설" },
  { jobName: "의료/보건" },
  { jobName: "정부/행정" },
  { jobName: "농업" },
  { jobName: "자영업" },
  { jobName: "전문직/특수직" },
  { jobName: "취업준비" },
  { jobName: "창업준비" },
  { jobName: "프리랜서" },
  { jobName: "아르바이트" },
  { jobName: "학생" },
  { jobName: "법률" },
  { jobName: "공기업/기관" },
  { jobName: "군인/군무원" },
  { jobName: "스포츠" },
  { jobName: "사회복지" },
  { jobName: "운송" },
  { jobName: "물류/배송" },
  { jobName: "설치" },
  { jobName: "외국어/번역" },
  { jobName: "보안/경비/경호" },
  { jobName: "뷰티" },
  { jobName: "외식" },
  { jobName: "숙박" },
  { jobName: "조선" },
  { jobName: "판매" },
  { jobName: "증권" },
  { jobName: "회계/세무" },
  { jobName: "고객상담" },
  { jobName: "부동산/임대" },
  { jobName: "신문/잡지" },
  { jobName: "기획" },
  { jobName: "사무/관리" },
  { jobName: "홍보/광고" },
  { jobName: "정비/AS" },
  { jobName: "미용/이용" },
  { jobName: "예식" },
  { jobName: "장례" },
  { jobName: "프랜차이즈" },
  { jobName: "여행" },
  { jobName: "생산/제조" },
  { jobName: "전자" },
  { jobName: "가스/수도" },
  { jobName: "금속/재료" },
  { jobName: "섬유화학" },
  { jobName: "석유화학" },
  { jobName: "정유" },
  { jobName: "식품공학" },
  { jobName: "식품가공/제조" },
  { jobName: "의류" },
  { jobName: "유아/완구" },
  { jobName: "투자" },
  { jobName: "보험" },
  { jobName: "공연" },
  { jobName: "공예" },
  { jobName: "도서/출판" },
  { jobName: "사진" },
  { jobName: "인쇄/인화" },
  { jobName: "음악/악기" },
  { jobName: "엔터테인먼트" },
  { jobName: "게임" },
  { jobName: "만화/웹툰" },
  { jobName: "통신" },
  { jobName: "ICT관련직" },
  { jobName: "반도체" },
  { jobName: "LED/광산업" },
  { jobName: "환경" },
  { jobName: "모바일" },
  { jobName: "로봇" },
  { jobName: "나노" },
  { jobName: "바이오" },
  { jobName: "신소재" },
  { jobName: "신재생에너지" },
  { jobName: "우주/항공" },
  { jobName: "인테리어" },
  { jobName: "토목" },
  { jobName: "설계" },
  { jobName: "제약" },
  { jobName: "종교" },
  { jobName: "어업" },
  { jobName: "축산업" },
  { jobName: "임업" },
  { jobName: "광산업" },
  { jobName: "빅데이터" },
  { jobName: "낙농업" },
];

// 내용을 한 단계 depth 동결 시키는 것 -> 불변성 조금 보장 -바뀔 수 있음.
Object.freeze(selectJobList);
