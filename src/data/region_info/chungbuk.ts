import { SelectType } from "@models/CPType";

export const chungbukList: SelectType[] = [
  { regionInfoName: "괴산군", value: "p01" },
  { regionInfoName: "단양군", value: "p02" },
  { regionInfoName: "보은군", value: "p03" },
  { regionInfoName: "영동군", value: "p04" },
  { regionInfoName: "옥천군", value: "p05" },
  { regionInfoName: "음성군", value: "p06" },
  { regionInfoName: "제천시", value: "p07" },
  { regionInfoName: "제천시", value: "p0" }, // FIXME : 값 들어오면 나중에 바꿔야 함.
  { regionInfoName: "진천군", value: "p09" },
  { regionInfoName: "청주시 상당구", value: "p10" },
  { regionInfoName: "청주시 청원구", value: "p11" },
  { regionInfoName: "청주시 홍덕구", value: "p12" },
  { regionInfoName: "충주시", value: "p13" },
  { regionInfoName: "증평군", value: "p14" },
  { regionInfoName: "청주시 서원구", value: "p15" },
];

Object.freeze(chungbukList);
