import { RadioType, SelectType } from "@models/CPType";

export const radioGenderList: RadioType[] = [
  { labelName: "남자", htmlFor: "male", value: "m" },
  { labelName: "여자", htmlFor: "female", value: "f" },
];

export const selectGenderList: SelectType[] = [
  { optionName: "남자", value: "m" },
  { optionName: "여자", value: "f" },
];

Object.freeze(radioGenderList);
Object.freeze(selectGenderList);
