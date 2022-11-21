import { SelectType } from "@models/CPType";

export const gwangjuList: SelectType[] = [
  { regionInfoName: "광산구", value: "e01" },
  { regionInfoName: "남구", value: "e02" },
  { regionInfoName: "동구", value: "e03" },
  { regionInfoName: "북구", value: "e04" },
  { regionInfoName: "서구", value: "e05" },
  { regionInfoName: "기타", value: "e00" },
];

Object.freeze(gwangjuList);
