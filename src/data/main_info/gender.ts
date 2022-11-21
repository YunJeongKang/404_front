import { RadioType } from "@models/CPType";

export const genderList: RadioType[] = [
  { labelName: "남자", htmlFor: "male", value: "m" },
  { labelName: "여자", htmlFor: "female", value: "f" },
];
Object.freeze(genderList);
