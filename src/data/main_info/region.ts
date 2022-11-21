import { SelectType } from "@models/CPType";

export const regionList: SelectType[] = [
  { regionInfoName: "강원도", value: "a" },
  { regionInfoName: "경기도", value: "b" },
  { regionInfoName: "경상남도", value: "c" },
  { regionInfoName: "경상북도", value: "d" },
  { regionInfoName: "광주", value: "e" },
  { regionInfoName: "대구", value: "f" },
  { regionInfoName: "대전", value: "g" },
  { regionInfoName: "부산", value: "h" },
  { regionInfoName: "서울", value: "i" },
  { regionInfoName: "세종", value: "z" },
  { regionInfoName: "울산", value: "j" },
  { regionInfoName: "인천", value: "k" },
  { regionInfoName: "전라남도", value: "l" },
  { regionInfoName: "전라북도", value: "n" },
  { regionInfoName: "제주도", value: "m" },
  { regionInfoName: "충청남도", value: "o" },
  { regionInfoName: "충청북도", value: "p" },
  { regionInfoName: "해외", value: "q" },
];

// 내용을 한 단계 depth 동결 시키는 것 -> 불변성 조금 보장 -> value 바뀔 수 있음.
Object.freeze(regionList);
