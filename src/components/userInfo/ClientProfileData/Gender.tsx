interface GenderInterface {
  checked: boolean;

  onChange: (evt: any) => void;
}

import { RadioLabelTemplate } from "@styles/indexLabel";

const Gender = ({ onChange, checked }: GenderInterface) => {
  const genderList = [
    { labelName: "남자", htmlFor: "male", value: "m" },
    { labelName: "여자", htmlFor: "female", value: "f" },
  ];
  return (
    <>
      {genderList.map(({ htmlFor, labelName, value }) => (
        <RadioLabelTemplate
          checked={checked}
          onChange={onChange}
          key={htmlFor}
          inputID={htmlFor}
          name="gender"
          value={value}
          labelChild={labelName}
          htmlFor={htmlFor}
        />
      ))}
    </>
  );
};

export default Gender;
