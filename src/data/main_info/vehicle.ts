import { RadioType, SelectType } from "@models/CPType";

export const radioVehicleList: RadioType[] = [
  { labelName: "소형", htmlFor: "sm", value: "1" },
  { labelName: "준중형", htmlFor: "sm-md", value: "2" },
  { labelName: "중형", htmlFor: "md", value: "3" },
  { labelName: "대형", htmlFor: "lg", value: "4" },
  { labelName: "수입", htmlFor: "foreign", value: "5" },
  { labelName: "SUV", htmlFor: "suv", value: "6" },
  { labelName: "승합", htmlFor: "van", value: "7" },
  { labelName: "없음", htmlFor: "none", value: "9" },
  { labelName: "기타", htmlFor: "other", value: "0" },
];

export const selectVehicleList: SelectType[] = [
  { optionName: "소형", value: "1" },
  { optionName: "준중형", value: "2" },
  { optionName: "중형", value: "3" },
  { optionName: "대형", value: "4" },
  { optionName: "수입", value: "5" },
  { optionName: "SUV", value: "6" },
  { optionName: "승합", value: "7" },
  { optionName: "없음", value: "9" },
  { optionName: "기타", value: "0" },
];

Object.freeze(radioVehicleList);
Object.freeze(selectVehicleList);
