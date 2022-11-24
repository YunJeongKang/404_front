import { RadioType, SelectType } from "@models/CPType";

export const radioAlcoholList: RadioType[] = [
  { labelName: "음주안함", htmlFor: "non-alcohol", value: "a" },
  { labelName: "월1~2회", htmlFor: "1-2month", value: "b" },
  { labelName: "주1~2회", htmlFor: "1-2week", value: "c" },
  { labelName: "주3회 이상", htmlFor: "3week", value: "d" },
];

export const selectAlcoholList: SelectType[] = [
  { optionName: "음주안함", value: "a" },
  { optionName: "월1~2회", value: "b" },
  { optionName: "주1~2회", value: "c" },
  { optionName: "주3회 이상", value: "d" },
];

Object.freeze(radioAlcoholList);
Object.freeze(selectAlcoholList);
