import { CPType } from "@models/CPType";

export const seoulList: CPType[] = [
  { labelName: "강남구", htmlFor: "gangnam", value: "i01" },
  { labelName: "강동구", htmlFor: "gangdong", value: "i02" },
  { labelName: "강북구", htmlFor: "gangbuk", value: "i03" },
  { labelName: "강서구", htmlFor: "gangseo", value: "i04" },
  { labelName: "관악구", htmlFor: "gwanak", value: "i05" },
  { labelName: "광진구", htmlFor: "gwangjin", value: "i06" },
  { labelName: "구로구", htmlFor: "guro", value: "i07" },
  { labelName: "금천구", htmlFor: "geumcheon", value: "i08" },
  { labelName: "노원구", htmlFor: "nowon", value: "i09" },
  { labelName: "도봉구", htmlFor: "dobong", value: "i10" },
  { labelName: "동대문구", htmlFor: "dogdaemoon", value: "i11" },
  { labelName: "동작구", htmlFor: "dongjak", value: "i12" },
  { labelName: "마포구", htmlFor: "mapo", value: "i13" },
  { labelName: "서대문구", htmlFor: "seodaemoon", value: "i14" },
  { labelName: "서초구", htmlFor: "seocho", value: "i15" },
  { labelName: "성동구", htmlFor: "sungdong", value: "i16" },
  { labelName: "성북구", htmlFor: "sungbuk", value: "i17" },
  { labelName: "송파구", htmlFor: "songpa", value: "i18" },
  { labelName: "양천구", htmlFor: "yangchoen", value: "i19" },
  { labelName: "영등포구", htmlFor: "yuongdeungpo", value: "i20" },
  { labelName: "용산구", htmlFor: "yongsan", value: "i21" },
  { labelName: "은평구", htmlFor: "eunpyung", value: "i22" },
  { labelName: "종로구", htmlFor: "jongro", value: "i23" },
  { labelName: "중구", htmlFor: "junggu", value: "i24" },
  { labelName: "중랑구", htmlFor: "jungrang", value: "i25" },
  { labelName: "기타", htmlFor: "other", value: "i00" },
];

// 내용을 한 단계 depth 동결 시키는 것 -> 불변성 조금 보장 -> value 바뀔 수 있음.
Object.freeze(seoulList);
