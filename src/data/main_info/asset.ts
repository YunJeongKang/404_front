import { RadioType } from "@models/CPType";

export const assetList: RadioType[] = [
  { labelName: "3천만원 미만", htmlFor: "30bD", value: "b" },
  { labelName: "3천만원~7천만원 미만", htmlFor: "30b-70b", value: "c" },
  { labelName: "7천만원~1억 미만", htmlFor: "70b-100b", value: "d" },
  { labelName: "1억~3억 미만", htmlFor: "100bk-300b", value: "e" },
  { labelName: "3억~5억 미만", htmlFor: "300b-500b", value: "f" },
  { labelName: "5억~10억 미만", htmlFor: "500b-1m", value: "g" },
  { labelName: "10억~20억 미만", htmlFor: "1m-2m", value: "h" },
  { labelName: "20억~30억 미만", htmlFor: "2m-3m", value: "m" },
  { labelName: "30억~50억 미만", htmlFor: "3m-5m", value: "i" },
  { labelName: "50억~100억 미만", htmlFor: "5m-10m", value: "j" },
  { labelName: "100억~300억 미만", htmlFor: "10m-30m", value: "k" },
  { labelName: "300억~500억 미만", htmlFor: "30m-50m", value: "l" },
  { labelName: "500억 이상", htmlFor: "50mU", value: "n" },
];
Object.freeze(assetList);
