import { RadioType } from "@models/CPType";

export const womanAppearanceList: RadioType[] = [
  { labelName: "평범함", htmlFor: "w-normal", value: "1" },
  { labelName: "청순함", htmlFor: "w-pure", value: "2" },
  { labelName: "귀여움", htmlFor: "w-cute", value: "3" },
  { labelName: "섹시함", htmlFor: "w-sexy", value: "4" },
  { labelName: "날씬함", htmlFor: "w-slim", value: "5" },
  { labelName: "통통함", htmlFor: "w-semi-fat", value: "6" },
  { labelName: "뚱뚱함", htmlFor: "w-fat", value: "7" },
  { labelName: "깔끔함", htmlFor: "w-clean", value: "8" },
  { labelName: "털털함", htmlFor: "w-easy-going", value: "9" },
  { labelName: "꽃미녀", htmlFor: "w-flower", value: "10" },
  { labelName: "패션왕", htmlFor: "w-fashion", value: "11" },
  { labelName: "시크함", htmlFor: "w-chic", value: "12" },
  { labelName: "뇌순녀", htmlFor: "w-idiot", value: "13" },
  { labelName: "뇌섹녀", htmlFor: "w-smart", value: "14" },
];

Object.freeze(womanAppearanceList);
