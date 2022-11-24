import { RadioType, SelectType } from "@models/CPType";

export const radioBloodList: RadioType[] = [
  { labelName: "A형", htmlFor: "a", value: "1" },
  { labelName: "B형", htmlFor: "b", value: "2" },
  { labelName: "O형", htmlFor: "o", value: "3" },
  { labelName: "AB형", htmlFor: "ab", value: "4" },
];

export const selectBloodList: SelectType[] = [
  { optionName: "A형", value: "1" },
  { optionName: "B형", value: "2" },
  { optionName: "O형", value: "3" },
  { optionName: "AB형", value: "4" },
];
Object.freeze(radioBloodList);
Object.freeze(selectBloodList);
