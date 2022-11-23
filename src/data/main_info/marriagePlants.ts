import { RadioType } from "@models/CPType";

export const marriagePlanList: RadioType[] = [
  { labelName: "1달", htmlFor: "1month", value: "1m" },
  { labelName: "3달", htmlFor: "3month", value: "3m" },
  { labelName: "6달", htmlFor: "6month", value: "6m" },
  { labelName: "1년", htmlFor: "1year", value: "1y" },
  { labelName: "언제든지", htmlFor: "always", value: "a" },
];

Object.freeze(marriagePlanList);
