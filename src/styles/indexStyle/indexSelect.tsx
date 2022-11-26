import { CommonSelectProps } from "@utils/common/props";
import { FunctionComponent as FC } from "react";

export const SelectInputTypeProto: FC<CommonSelectProps> = (props) => {
  const { children, className, ...restProps } = props;
  return (
    <select
      className={`text-center scrollbar-hide border shadow rounded-md px-1 appearance-none ${className}`}
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
