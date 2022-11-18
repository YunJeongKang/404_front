import { RadioInputTemplate } from "@styles/indexInput";
import { RadioLabelTemplate } from "@styles/indexLabel";

const Region = () => {
  const RegionList = [
    { labelName: "강원도", htmlFor: "kangwon", value: "a" },
    { labelName: "경기도", htmlFor: "gyungki", value: "b" },
    { labelName: "경상남도", htmlFor: "gyungnam", value: "c" },
    { labelName: "경상북도", htmlFor: "gyungbuk", value: "d" },
    { labelName: "광주", htmlFor: "gwangju", value: "e" },
    { labelName: "대구", htmlFor: "daegu", value: "f" },
    { labelName: "대전", htmlFor: "daejeon", value: "g" },
    { labelName: "부산", htmlFor: "busan", value: "h" },
    { labelName: "서울", htmlFor: "seoul", value: "i" },
    { labelName: "세종", htmlFor: "sejong", value: "z" },
    { labelName: "울산", htmlFor: "ulsan", value: "j" },
    { labelName: "인천", htmlFor: "incheon", value: "k" },
    { labelName: "전라남도", htmlFor: "jeonnam", value: "l" },
    { labelName: "전라북도", htmlFor: "jeonbuk", value: "n" },
    { labelName: "제주도", htmlFor: "jeju", value: "m" },
    { labelName: "충청남도", htmlFor: "chungnam", value: "o" },
    { labelName: "충청북도", htmlFor: "chungbuk", value: "p" },
    { labelName: "해외", htmlFor: "foreign", value: "q" },
  ];
  return (
    <section>
      <RadioInputTemplate
        query="지역을 선택 하세요"
        RadioLabelTemplate={
          <>
            {RegionList.map(({ htmlFor, labelName, value }) => (
              <RadioLabelTemplate
                key={htmlFor}
                inputID={htmlFor}
                name="region"
                value={value}
                labelChild={labelName}
                htmlFor={htmlFor}
              />
            ))}
          </>
        }
      />
    </section>
  );
};
export default Region;
