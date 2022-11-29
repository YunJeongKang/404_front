import { CommonFieldProps, CommonInputProps } from "@utils/common/props";
import { FunctionComponent as FC } from "react";

interface RadioInputTemplateInterface {
  RadioLabelTemplate: React.ReactNode;
}

export const RequiredRadioInputTemplate = ({
  RadioLabelTemplate,
}: RadioInputTemplateInterface) => {
  return (
    <>
      <fieldset className="w-2/3 flex flex-wrap flex-raw justify-start items-center gap-2 p-[3px]">
        {RadioLabelTemplate}
      </fieldset>
      <hr className="py-0.5 my-1" />
    </>
  );
};

export const RadioInputTemplate = ({
  RadioLabelTemplate,
}: RadioInputTemplateInterface) => {
  return (
    <>
      <fieldset className="w-2/3 flex flex-wrap flex-raw justify-start items-center gap-2 p-[3px]">
        {RadioLabelTemplate}
      </fieldset>
      <hr className="py-0.5 my-1" />
    </>
  );
};

export const CheckBoxInputTemplate: FC<CommonFieldProps> = (props) => {
  const { children, className, ...restProps } = props;
  return (
    <>
      <fieldset
        className={`w-[90%] h-[55%] flex flex-wrap flex-raw justify-center items-center gap-5 p-[3px] ${className}`}
        {...restProps}
      >
        {children}
      </fieldset>
    </>
  );
};

export interface CheckBoxInputInterface extends CommonInputProps {}

export const CheckBoxInput: FC<CheckBoxInputInterface> = (props) => {
  const {
    children,
    id,
    className,
    value,
    onChange,
    name,
    checked,
    ...restProps
  } = props;
  return (
    <>
      <input
        type="checkbox"
        id={id}
        value={value}
        onChange={onChange}
        name={name}
        checked={checked}
        className={`hidden ${className}`}
        {...restProps}
      />
      <label
        htmlFor={id}
        className="px-2 py-0.5 border-2 text-gray-500 bg-gray-50 rounded-md"
      >
        {children}
      </label>
    </>
  );
};
