import { CommonOptionProps } from "@utils/common/props";
import { FunctionComponent as FC } from "react";

export const OptionInput: FC<CommonOptionProps> = (props) => {
  const { children, className, ...restProps } = props;
  return (
    <option className={`outline-none ${className}`} {...restProps}>
      {children}
    </option>
  );
};
