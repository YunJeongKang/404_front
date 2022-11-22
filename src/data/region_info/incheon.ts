import { SelectType } from "@models/CPType";

export const incheonList: SelectType[] = [
  { regionInfoName: "강화군", value: "k01" },
  { regionInfoName: "계양구", value: "k02" },
  { regionInfoName: "미추홀구", value: "k03" },
  { regionInfoName: "남동구", value: "k04" },
  { regionInfoName: "동구", value: "k05" },
  { regionInfoName: "부평구", value: "k06" },
  { regionInfoName: "서구", value: "k07" },
  { regionInfoName: "연수구", value: "k08" },
  { regionInfoName: "옹진군", value: "k09" },
  { regionInfoName: "중구", value: "k10" },
  { regionInfoName: "기타", value: "k00" },
];

Object.freeze(incheonList);
