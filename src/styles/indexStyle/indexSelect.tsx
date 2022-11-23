import { CommonSelectProps } from "@utils/common/props";
import { FunctionComponent as FC } from "react";

export const SelectInputTypeProto: FC<CommonSelectProps> = (props) => {
  const { children, className, ...restProps } = props;
  return (
    <select
      className={`text-center border shadow rounded-md px-2 py-1.5${className}`}
      {...restProps}
    >
      {children}
    </select>
  );
};

interface SelectInputInterface {
  name: string;
  value: string;
  children: React.ReactNode;

  onChange: (evt: any) => void;
}

export const SelectInput = ({
  value,
  onChange,
  children,
  name,
}: SelectInputInterface) => {
  return (
    <fieldset className="flex flex-raw gap-2">
      <SelectInputTypeProto
        name={name}
        onChange={onChange}
        value={value}
        required
      >
        {children}
      </SelectInputTypeProto>
    </fieldset>
  );
};
