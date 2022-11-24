import { CommonSpanProps } from "@utils/common/props";
import React, { FunctionComponent as FC } from "react";

const RequiredMark: FC<CommonSpanProps> = (props) => {
  const { children, className, ...restProps } = props;
  return (
    <span {...restProps} className={`text-red-700 ${className}`} text-lg>
      *{children}
    </span>
  );
};

export default RequiredMark;
