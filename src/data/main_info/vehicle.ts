import { RadioType } from "@models/CPType";

export const vehicleList: RadioType[] = [
  { labelName: "소형", htmlFor: "", value: "1" },
  { labelName: "준중형", htmlFor: "", value: "2" },
  { labelName: "중형", htmlFor: "", value: "3" },
  { labelName: "대형", htmlFor: "", value: "4" },
  { labelName: "수입", htmlFor: "", value: "5" },
  { labelName: "SUV", htmlFor: "", value: "6" },
  { labelName: "승합", htmlFor: "", value: "7" },
  { labelName: "", htmlFor: "", value: "8" },
  { labelName: "없음", htmlFor: "", value: "9" },
  { labelName: "기타", htmlFor: "other", value: "0" },
];
Object.freeze(vehicleList);
