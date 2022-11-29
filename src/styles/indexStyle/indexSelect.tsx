import { CommonSelectProps } from "@utils/common/props";
import { FunctionComponent as FC } from "react";

export const SelectInputTypeProto: FC<CommonSelectProps> = (props) => {
  const { children, className, ...restProps } = props;
  return (
    <select
      className={`text-left px-1 appearance-none !min-w-[4.5rem] outline-none text-gray-500 ${className}`}
      {...restProps}
    >
      {children}
    </select>
  );
};

interface SelectInputInterface {
  name: string;
  value: string;
  className?: string;
  children: React.ReactNode;

  onChange: (evt: any) => void;
}

export const SelectInput = ({
  name,
  value,
  onChange,
  children,
  className,
}: SelectInputInterface) => {
  return (
    <fieldset className={`flex flex-raw gap-2`}>
      <SelectInputTypeProto
        name={name}
        onChange={onChange}
        value={value}
        className={className}
        required
      >
        {children}
      </SelectInputTypeProto>
    </fieldset>
  );
};
