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
  radioInput: any;
  labelChild: string;
  htmlFor: string;
}

export const RadioLabelTemplate = ({
  radioInput,
  labelChild,
  htmlFor,
}: RadioInputInterface) => {
  return (
    <>
      {radioInput}
      <LabelInput htmlFor={htmlFor}>{labelChild}</LabelInput>
    </>
  );
};
