import { RadioType, SelectType } from "@models/CPType";

export const radioSalaryList: RadioType[] = [
  { labelName: "적음", htmlFor: "row", value: "1" },
  { labelName: "2천 미만 ", htmlFor: "20mD", value: "12" },
  { labelName: "2천대", htmlFor: "20m", value: "2" },
  { labelName: "3천대", htmlFor: "30m", value: "3" },
  { labelName: "4천대", htmlFor: "40m", value: "4" },
  { labelName: "5천대", htmlFor: "50m", value: "5" },
  { labelName: "6천대", htmlFor: "60m", value: "6" },
  { labelName: "7천대", htmlFor: "70m", value: "7" },
  { labelName: "8천대", htmlFor: "80m", value: "8" },
  { labelName: "9천대", htmlFor: "90m", value: "9" },
  { labelName: "1-3억", htmlFor: "100m-300m", value: "10" },
  { labelName: "3-5억", htmlFor: "300m-500m", value: "13" },
  { labelName: "5-10억 ", htmlFor: "500m-1b", value: "14" },
  { labelName: "10-20 억", htmlFor: "1b-2b", value: "15" },
  { labelName: "20-30 억", htmlFor: "2b-3b", value: "18" },
  { labelName: "30억 이 상", htmlFor: "3bU", value: "16" },
];

export const selectSalaryList: SelectType[] = [
  { optionName: "적음", value: "1" },
  { optionName: "2천 미만 ", value: "12" },
  { optionName: "2천대", value: "2" },
  { optionName: "3천대", value: "3" },
  { optionName: "4천대", value: "4" },
  { optionName: "5천대", value: "5" },
  { optionName: "6천대", value: "6" },
  { optionName: "7천대", value: "7" },
  { optionName: "8천대", value: "8" },
  { optionName: "9천대", value: "9" },
  { optionName: "1-3억", value: "10" },
  { optionName: "3-5억", value: "13" },
  { optionName: "5-10억", value: "14" },
  { optionName: "10-20 억", value: "15" },
  { optionName: "20-30 억", value: "18" },
  { optionName: "30억 이 상", value: "16" },
];

Object.freeze(radioSalaryList);
Object.freeze(selectSalaryList);
