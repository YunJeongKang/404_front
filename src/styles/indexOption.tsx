import { CommonOptionProps } from "@utils/common/props";
import { FunctionComponent as FC } from "react";

export const OptionInput: FC<CommonOptionProps> = (props) => {
  const { children, className, ...restProps } = props;
  return (
    <option className={`${className}`} {...restProps}>
      {children}
    </option>
  );
};
