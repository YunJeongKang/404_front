import { CommonSelectProps } from "@utils/common/props";
import { FunctionComponent as FC } from "react";

export const SelectInputTypeProto: FC<CommonSelectProps> = (props) => {
  const { children, className, ...restProps } = props;
  return (
    <select
      className={`border shadow rounded-md px-2 py-1.5${className}`}
      {...restProps}
    >
      {children}
    </select>
  );
};

interface SelectInputInterface {
  name: string;
  value: string;
  children: any;
  labelQuery: string;
  className?: string;

  onChange: (evt: any) => void;
}

export const SelectInput = ({
  value,
  onChange,
  children,
  name,
  labelQuery,
  className,
}: SelectInputInterface) => {
  return (
    <fieldset className="flex flex-raw gap-2">
      <label>{labelQuery}</label>
      <SelectInputTypeProto
        name={name}
        onChange={onChange}
        value={value}
        className={className}
      >
        {children}
      </SelectInputTypeProto>
      <hr className="py-0.5 my-1" />
    </fieldset>
  );
};
