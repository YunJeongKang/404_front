import { RadioType } from "@models/CPType";

export const vehicleList: RadioType[] = [
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
Object.freeze(vehicleList);
