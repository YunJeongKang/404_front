import { RadioInputTemplate } from "@styles/indexInput";
import { RadioLabelTemplate } from "@styles/indexLabel";

const Gender = () => {
  const genderList = [
    { labelName: "남자", htmlFor: "male", value: "m" },
    { labelName: "여자", htmlFor: "female", value: "f" },
  ];
  return (
    <section>
      <RadioInputTemplate
        query="성별을 선택해주세요"
        RadioLabelTemplate={
          <>
            {genderList.map(({ htmlFor, labelName, value }) => (
              <RadioLabelTemplate
                key={htmlFor}
                inputID={htmlFor}
                name="gender"
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

export default Gender;
