import { CommonButtonProps } from "@utils/common/props";
import { FunctionComponent as FC } from "react";

export const SignUpBtn: FC<CommonButtonProps> = (props) => {
  const { children, className, ...restProps } = props;
  return (
    <button
      {...restProps}
      className={`flex flex-wrap flex-raw duration-200 justify-center active:scale-95 items-center w-[22rem] gap-4 shadow-md rounded-[15px] h-[40px] ${className}`}
    >
      {children}
    </button>
  );
};
