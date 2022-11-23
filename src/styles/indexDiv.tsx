import { CommonDivProps } from "@utils/common/props";
import { FunctionComponent as FC } from "react";

const SelectDiv: FC<CommonDivProps> = (props) => {
  const { children, className, ...restProps } = props;
  return (
    <div
      className={`w-2/3 flex-raw flex flex-wrap ${className}`}
      {...restProps}
    >
      {children}
    </div>
  );
};

export default SelectDiv;
