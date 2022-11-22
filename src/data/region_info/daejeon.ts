import { SelectType } from "@models/CPType";

export const daejeonList: SelectType[] = [
  { regionInfoName: "대덕구", value: "g01" },
  { regionInfoName: "동구", value: "g02" },
  { regionInfoName: "서구", value: "g03" },
  { regionInfoName: "유성구", value: "g04" },
  { regionInfoName: "중구", value: "g05" },
  { regionInfoName: "기타", value: "g00" },
];

Object.freeze(daejeonList);
