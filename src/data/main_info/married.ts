import { RadioType } from "@models/CPType";

export const marriedList: RadioType[] = [
  { labelName: "초혼", htmlFor: "firstMarriage", value: "w" },
  { labelName: "재혼", htmlFor: "reMarriage", value: "r" },
];

Object.freeze(marriedList);
