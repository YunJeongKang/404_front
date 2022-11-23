import { RadioType } from "@models/CPType";

export const alcoholList: RadioType[] = [
  { labelName: "음주안함", htmlFor: "non-alcohol", value: "a" },
  { labelName: "월1~2회", htmlFor: "1-2month", value: "b" },
  { labelName: "주1~2회", htmlFor: "1-2week", value: "c" },
  { labelName: "주3회 이상", htmlFor: "3week", value: "d" },
];

Object.freeze(alcoholList);
