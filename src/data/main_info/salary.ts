import { RegionSelectType } from "@models/CPType";

export const salaryList: RegionSelectType[] = [
  { regionInfoName: "적음", value: "1" },
  { regionInfoName: "2천미만", value: "12" },
  { regionInfoName: "2천대", value: "2" },
  { regionInfoName: "3천대", value: "3" },
  { regionInfoName: "4천대", value: "4" },
  { regionInfoName: "5천대", value: "5" },
  { regionInfoName: "6천대", value: "6" },
  { regionInfoName: "7천대", value: "7" },
  { regionInfoName: "8천대", value: "8" },
  { regionInfoName: "9천대", value: "9" },
  { regionInfoName: "1-3억", value: "10" },
  { regionInfoName: "3-5억", value: "13" },
  { regionInfoName: "5-10억", value: "14" },
  { regionInfoName: "10-20억", value: "15" },
  { regionInfoName: "20-30억", value: "18" },
  { regionInfoName: "30억", value: "16" },
];

Object.freeze(salaryList);
