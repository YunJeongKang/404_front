import { RadioType } from "@models/CPType";

export const religionList: RadioType[] = [
  { labelName: "기독교", htmlFor: "christian", value: "1" },
  { labelName: "불교", htmlFor: "buddhist", value: "2" },
  { labelName: "천주교", htmlFor: "catholic", value: "3" },
  { labelName: "원불교", htmlFor: "originBuddhist", value: "4" },
  { labelName: "무교", htmlFor: "none", value: "5" },
  { labelName: "유교", htmlFor: "confucianism", value: "6" },
  { labelName: "도교", htmlFor: "taoist", value: "7" },
  { labelName: "이슬람교", htmlFor: "muslim", value: "8" },
  { labelName: "힌두교", htmlFor: "hindu", value: "9" },
  { labelName: "기타", htmlFor: "other", value: "0" },
];
Object.freeze(religionList);
