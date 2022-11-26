import { CommonAnchorProps } from "@utils/common/props";
import { FunctionComponent as FC } from "react";

export const SignUpAnchor: FC<CommonAnchorProps> = (props) => {
  const { children, className, ...restProps } = props;
  return (
    <a
      {...restProps}
      className={`text-[18px] text-center font-normal ${className}`}
    >
      {children}
    </a>
  );
};
