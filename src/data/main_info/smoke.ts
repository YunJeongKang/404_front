import { RadioType, SelectType } from "@models/CPType";

export const radioSmokeList: RadioType[] = [
  { labelName: "비흡연", htmlFor: "non-smoking", value: "a" },
  { labelName: "금연", htmlFor: "stop-smoking", value: "b" },
  { labelName: "흡연", htmlFor: "smoking", value: "c" },
];

export const selectSmokeList: SelectType[] = [
  { optionName: "비흡연", value: "a" },
  { optionName: "금연", value: "b" },
  { optionName: "흡연", value: "c" },
];

Object.freeze(radioSmokeList);
Object.freeze(selectSmokeList);
