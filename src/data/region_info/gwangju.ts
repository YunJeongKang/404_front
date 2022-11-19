import { CPType } from "@models/CPType";

export const gwangjuList: CPType[] = [
  { labelName: "광산구", htmlFor: "gwangsan", value: "e01" },
  { labelName: "남구", htmlFor: "gj-namgu", value: "e02" },
  { labelName: "동구", htmlFor: "gj-donggu", value: "e03" },
  { labelName: "북구", htmlFor: "gj-bukgu", value: "e04" },
  { labelName: "서구", htmlFor: "gj-seogu", value: "e05" },
  { labelName: "기타", htmlFor: "other", value: "e00" },
];

Object.freeze(gwangjuList);
