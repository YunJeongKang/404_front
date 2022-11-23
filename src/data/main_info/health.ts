import { RadioType } from "@models/CPType";

export const healthList: RadioType[] = [
  { labelName: "숨쉬기 운동", htmlFor: "breath", value: "a" },
  { labelName: "월1-2회", htmlFor: "1-2month", value: "b" },
  { labelName: "주1-2회", htmlFor: "1-2week", value: "c" },
  { labelName: "주3회이상", htmlFor: "3week", value: "d" },
];

Object.freeze(healthList);
