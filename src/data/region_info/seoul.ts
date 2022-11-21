import { SelectType } from "@models/CPType";

export const seoulList: SelectType[] = [
  { regionInfoName: "강남구", value: "i01" },
  { regionInfoName: "강동구", value: "i02" },
  { regionInfoName: "강북구", value: "i03" },
  { regionInfoName: "강서구", value: "i04" },
  { regionInfoName: "관악구", value: "i05" },
  { regionInfoName: "광진구", value: "i06" },
  { regionInfoName: "구로구", value: "i07" },
  { regionInfoName: "금천구", value: "i08" },
  { regionInfoName: "노원구", value: "i09" },
  { regionInfoName: "도봉구", value: "i10" },
  { regionInfoName: "동대문구", value: "i11" },
  { regionInfoName: "동작구", value: "i12" },
  { regionInfoName: "마포구", value: "i13" },
  { regionInfoName: "서대문구", value: "i14" },
  { regionInfoName: "서초구", value: "i15" },
  { regionInfoName: "성동구", value: "i16" },
  { regionInfoName: "성북구", value: "i17" },
  { regionInfoName: "송파구", value: "i18" },
  { regionInfoName: "양천구", value: "i19" },
  { regionInfoName: "영등포구", value: "i20" },
  { regionInfoName: "용산구", value: "i21" },
  { regionInfoName: "은평구", value: "i22" },
  { regionInfoName: "종로구", value: "i23" },
  { regionInfoName: "중구", value: "i24" },
  { regionInfoName: "중랑구", value: "i25" },
  { regionInfoName: "기타", value: "i00" },
];

// 내용을 한 단계 depth 동결 시키는 것 -> 불변성 조금 보장 -> value 바뀔 수 있음.
Object.freeze(seoulList);
