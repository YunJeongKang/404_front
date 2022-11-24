import { CommonLabelProps } from "@utils/common/props";
import { FunctionComponent as FC } from "react";

const LabelInput: FC<CommonLabelProps> = (props) => {
  const { children, className, ...restProps } = props;
  return (
    <label
      className={`rounded-md shadow-md px-1.5 py-1 cursor-pointer duration-150 hover:bg-blue-100 active:scale-[0.92] ${className}`}
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
  checked: boolean;
  className?: string;

  onChange: (evt: React.ChangeEvent<HTMLInputElement>) => void;
}

export const RadioLabelTemplate = ({
  value,
  name,
  inputID,
  htmlFor,
  labelChild,
  onChange,
  checked,
  className,
}: RadioInputInterface) => {
  return (
    <>
      <input
        className={`hidden ${className}`}
        type="radio"
        value={value}
        name={name}
        id={inputID}
        onChange={onChange}
        checked={checked}
      />
      <LabelInput htmlFor={htmlFor}>
        <>{labelChild}</>
      </LabelInput>
    </>
  );
};
