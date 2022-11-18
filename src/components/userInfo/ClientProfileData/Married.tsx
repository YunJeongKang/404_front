import { RadioInputTemplate } from "@styles/indexInput";
import { RadioLabelTemplate } from "@styles/indexLabel";

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
                inputID={htmlFor}
                name="married"
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

export default Married;
