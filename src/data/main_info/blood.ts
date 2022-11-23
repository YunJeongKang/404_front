import { RadioType } from "@models/CPType";

export const bloodList: RadioType[] = [
  { labelName: "A형", htmlFor: "a", value: "1" },
  { labelName: "B형", htmlFor: "b", value: "2" },
  { labelName: "O형", htmlFor: "o", value: "3" },
  { labelName: "AB형", htmlFor: "ab", value: "4" },
];
Object.freeze(bloodList);
