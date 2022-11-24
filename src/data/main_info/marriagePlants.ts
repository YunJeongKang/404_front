import { RadioType, SelectType } from "@models/CPType";

export const radioMarriagePlanList: RadioType[] = [
  { labelName: "1달", htmlFor: "1month", value: "1m" },
  { labelName: "3달", htmlFor: "3month", value: "3m" },
  { labelName: "6달", htmlFor: "6month", value: "6m" },
  { labelName: "1년", htmlFor: "1year", value: "1y" },
  { labelName: "언제든지", htmlFor: "always", value: "a" },
];

export const selectMarriagePlanList: SelectType[] = [
  { optionName: "1달", value: "1m" },
  { optionName: "3달", value: "3m" },
  { optionName: "6달", value: "6m" },
  { optionName: "1년", value: "1y" },
  { optionName: "언제든지", value: "a" },
];

Object.freeze(radioMarriagePlanList);
Object.freeze(selectMarriagePlanList);
