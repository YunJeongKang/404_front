import { SelectType } from "@models/CPType";

export const daeguList: SelectType[] = [
  { regionInfoName: "남구", value: "f01" },
  { regionInfoName: "달서구", value: "f02" },
  { regionInfoName: "달성군", value: "f03" },
  { regionInfoName: "동구", value: "f04" },
  { regionInfoName: "북구", value: "f05" },
  { regionInfoName: "서구", value: "f06" },
  { regionInfoName: "수성구", value: "f07" },
  { regionInfoName: "중구", value: "f08" },
  { regionInfoName: "기타", value: "f00" },
];

Object.freeze(daeguList);
