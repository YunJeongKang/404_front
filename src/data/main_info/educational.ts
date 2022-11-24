import { RadioType, SelectType } from "@models/CPType";

export const radioEducationList: RadioType[] = [
  { labelName: "초/중학교", htmlFor: "elem-mid", value: "1" },
  { labelName: "고등학교", htmlFor: "high", value: "2" },
  { labelName: "대학교(4년)", htmlFor: "univ4", value: "3" },
  { labelName: "대학원", htmlFor: "grad", value: "4" },
  { labelName: "박사과정", htmlFor: "ph-program", value: "5" },
  { labelName: "대학교(2년)", htmlFor: "univ2", value: "6" },
  { labelName: "대학재학", htmlFor: "univ-ing", value: "7" },
  { labelName: "대학중퇴", htmlFor: "univ-drop", value: "8" },
  { labelName: "대학원재학", htmlFor: "grad-ing", value: "9" },
  { labelName: "대학원중퇴", htmlFor: "grad-drop", value: "10" },
  { labelName: "박사학위", htmlFor: "ph-degree", value: "11" },
  { labelName: "대학(3년)", htmlFor: "univ3", value: "12" },
  { labelName: "기타", htmlFor: "other", value: "0" },
];

export const selectEducationList: SelectType[] = [
  { optionName: "초/중학교", value: "1" },
  { optionName: "고등학교", value: "2" },
  { optionName: "대학교(4년)", value: "3" },
  { optionName: "대학원", value: "4" },
  { optionName: "박사과정", value: "5" },
  { optionName: "대학교(2년)", value: "6" },
  { optionName: "대학재학", value: "7" },
  { optionName: "대학중퇴", value: "8" },
  { optionName: "대학원재학", value: "9" },
  { optionName: "대학원중퇴", value: "10" },
  { optionName: "박사학위", value: "11" },
  { optionName: "대학(3년)", value: "12" },
  { optionName: "기타", value: "0" },
];

Object.freeze(radioEducationList);
Object.freeze(selectEducationList);
