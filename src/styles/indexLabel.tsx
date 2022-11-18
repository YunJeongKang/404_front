import { CommonLabelProps } from "@utils/common/props";
import { FunctionComponent as FC } from "react";

const LabelInput: FC<CommonLabelProps> = (props) => {
  const { children, className, ...restProps } = props;
  return (
    <label
      className={`border rounded-md shadow-md px-1.5 py-1 cursor-pointer duration-150 hover:bg-gray-200 active:scale-[0.92] select-none ${className}`}
      {...restProps}
    >
      {children}
    </label>
  );
};

interface RadioInputInterface {
  value: string;
  name: string;
  inputID: string;
  labelChild: string;
  htmlFor: string;

  onChange?: (evt: any) => void;
}

export const RadioLabelTemplate = ({
  value,
  name,
  inputID,
  htmlFor,
  labelChild,
  onChange,
}: RadioInputInterface) => {
  return (
    <>
      <input
        className="hidden"
        type="radio"
        value={value}
        name={name}
        id={inputID}
        onChange={onChange}
      />
      <LabelInput htmlFor={htmlFor}>{labelChild}</LabelInput>
    </>
  );
};
