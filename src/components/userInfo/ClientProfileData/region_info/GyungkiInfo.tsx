import { RadioInput } from "@styles/indexInput";
import { RadioLabelTemplate } from "@styles/indexLabel";
import { RadioInputTemplate } from "@utils/common/props/userInfo/TotalFormTemplate";

const GyungkiInfoRegion = () => {
  const GyungkiInfoList = [
    { labelName: "기타", htmlFor: "other", value: "b00" },
    { labelName: "가평군", htmlFor: "gapyung", value: "b01" },
    { labelName: "고양시 덕양구", htmlFor: "gy-dukyang", value: "b02" },
    { labelName: "고양시 일산동구", htmlFor: "gy-ilsandonggu", value: "b03" },
    { labelName: "고양시 일산서구", htmlFor: "gy-ilsanseogu", value: "b04" },
    { labelName: "과천시", htmlFor: "gwacheon", value: "b05" },
    { labelName: "광명시", htmlFor: "gwangmyung", value: "b06" },
    { labelName: "광주시", htmlFor: "gwangju2", value: "b07" },
    { labelName: "구리시", htmlFor: "guri", value: "b08" },
    { labelName: "군포시", htmlFor: "gunpo", value: "b09" },
    { labelName: "김포시", htmlFor: "gimpo", value: "b10" },
    { labelName: "남양주시", htmlFor: "namyangju", value: "b11" },
    { labelName: "동두천시", htmlFor: "dongducheon", value: "b12" },
    { labelName: "부천시", htmlFor: "bucheon", value: "b13" },
    { labelName: "성남시 분당구", htmlFor: "sn-bundang", value: "b16" },
    { labelName: "성남시 수정구", htmlFor: "sn-sujeong", value: "b17" },
    { labelName: "성남시 중원구", htmlFor: "sn-jungwon", value: "b18" },
    { labelName: "수원시 권선구", htmlFor: "sw-kwonsun", value: "b19" },
    { labelName: "수원시 영통구", htmlFor: "sw-youngtong", value: "b20" },
    { labelName: "수원시 장안구", htmlFor: "sw-jangan", value: "b21" },
    { labelName: "수원시 팔달구", htmlFor: "sw-paldal", value: "b22" },
    { labelName: "시흥시", htmlFor: "siheung", value: "b23" },
    { labelName: "안산시 단원구", htmlFor: "as-danwon", value: "b24" },
    { labelName: "안산시 상록수", htmlFor: "as-sangrok", value: "b25" },
    { labelName: "안성시", htmlFor: "ansung", value: "b26" },
    { labelName: "안양시 동안구", htmlFor: "ay-dongan", value: "b27" },
    { labelName: "안양시 만안구", htmlFor: "ay-manan", value: "b28" },
    { labelName: "양주시", htmlFor: "yangju", value: "b29" },
    { labelName: "양평군", htmlFor: "yangpyung", value: "b30" },
    { labelName: "여주시", htmlFor: "yeoju", value: "b31" },
    { labelName: "연천군", htmlFor: "yeoncheon", value: "b32" },
    { labelName: "오산시", htmlFor: "ohsan", value: "b33" },
    { labelName: "용인시 기흥구", htmlFor: "yi-giheung", value: "b34" },
    { labelName: "용인시 수지구", htmlFor: "yi-suji", value: "b35" },
    { labelName: "용인시 처인구", htmlFor: "yi-cheoin", value: "b36" },
    { labelName: "의왕시", htmlFor: "uiwang", value: "b37" },
    { labelName: "의정부시", htmlFor: "uijungbu", value: "b38" },
    { labelName: "이천시", htmlFor: "yicheon", value: "b39" },
    { labelName: "파주시", htmlFor: "paju", value: "b40" },
    { labelName: "평택시", htmlFor: "pyungtak", value: "b41" },
    { labelName: "포천시", htmlFor: "pocheon", value: "b42" },
    { labelName: "하남시", htmlFor: "hanam", value: "b43" },
    { labelName: "화성시", htmlFor: "hwasung", value: "b44" },
  ];
  return (
    <section>
      <RadioInputTemplate
        query="경기도 지역 상세"
        RadioLabelTemplate={
          <>
            {GyungkiInfoList.map(({ htmlFor, labelName, value }) => (
              <RadioLabelTemplate
                key={htmlFor}
                labelChild={labelName}
                htmlFor={htmlFor}
                radioInput={
                  <RadioInput
                    key={value}
                    name="경기지역상세"
                    value={value}
                    inputID={htmlFor}
                  />
                }
              />
            ))}
          </>
        }
      />
    </section>
  );
};

export default GyungkiInfoRegion;
