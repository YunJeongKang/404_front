import { RadioInput } from "@styles/indexInput";
import { RadioLabelTemplate } from "@styles/indexLabel";
import { RadioInputTemplate } from "@utils/common/props/userInfo/TotalFormTemplate";

const Married = () => {
  const marriedList = [
    { labelName: "초혼", htmlFor: "firstMarriage", value: "w" },
    { labelName: "재혼", htmlFor: "reMarriage", value: "r" },
  ];
  return (
    <section>
      <RadioInputTemplate
        query="결혼유무를 선택해주세요"
        RadioLabelTemplate={
          <>
            {marriedList.map(({ htmlFor, labelName, value }) => (
              <RadioLabelTemplate
                key={htmlFor}
                labelChild={labelName}
                htmlFor={htmlFor}
                radioInput={
                  <RadioInput
                    key={value}
                    name="결혼유무"
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

export default Married;
