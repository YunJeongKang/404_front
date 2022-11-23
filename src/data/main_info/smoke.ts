import { RadioType } from "@models/CPType";

export const smokeList: RadioType[] = [
  { labelName: "비흡연", htmlFor: "non-smoking", value: "a" },
  { labelName: "금연", htmlFor: "stop-smoking", value: "b" },
  { labelName: "흡연", htmlFor: "smoking", value: "c" },
];

Object.freeze(smokeList);
