import { RadioType, SelectType } from "@models/CPType";

export const radioHealthList: RadioType[] = [
  { labelName: "숨쉬기 운동", htmlFor: "breath", value: "a" },
  { labelName: "월1-2회", htmlFor: "1-2month", value: "b" },
  { labelName: "주1-2회", htmlFor: "1-2week", value: "c" },
  { labelName: "주3회이상", htmlFor: "3week", value: "d" },
];

export const selectHealthList: SelectType[] = [
  { optionName: "숨쉬기 운동", value: "a" },
  { optionName: "월1-2회", value: "b" },
  { optionName: "주1-2회", value: "c" },
  { optionName: "주3회이상", value: "d" },
];

Object.freeze(radioHealthList);
Object.freeze(selectHealthList);
