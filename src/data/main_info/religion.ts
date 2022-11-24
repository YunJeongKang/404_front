import { RadioType, SelectType } from "@models/CPType";

export const radioReligionList: RadioType[] = [
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

export const selectReligionList: SelectType[] = [
  { optionName: "기독교", value: "1" },
  { optionName: "불교", value: "2" },
  { optionName: "천주교", value: "3" },
  { optionName: "원불교", value: "4" },
  { optionName: "무교", value: "5" },
  { optionName: "유교", value: "6" },
  { optionName: "도교", value: "7" },
  { optionName: "이슬람교", value: "8" },
  { optionName: "힌두교", value: "9" },
  { optionName: "기타", value: "0" },
];
Object.freeze(radioReligionList);
Object.freeze(selectReligionList);
