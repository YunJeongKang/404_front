import { CommonButtonProps } from "@utils/common/props";
import { FunctionComponent as FC } from "react";

const SigninBtnInterface: FC<CommonButtonProps> = (props) => {
  const { children, className, ...restProps } = props;
  return (
    <button
      {...restProps}
      className={`flex flex-wrap flex-raw duration-200 justify-center active:scale-95 items-center w-[388px] gap-4 shadow-md rounded-[15px] h-[50px] border ${className}`}
    >
      {children}
    </button>
  );
};

export const KakaoBtn: FC<CommonButtonProps> = (props) => {
  const { children, className, ...restProps } = props;
  return (
    <SigninBtnInterface className={`bg-kakao ${className}`} {...restProps}>
      {children}
    </SigninBtnInterface>
  );
};

export const FacebookBtn: FC<CommonButtonProps> = (props) => {
  const { children, className, ...restProps } = props;
  return (
    <SigninBtnInterface className={`bg-facebook ${className}`} {...restProps}>
      {children}
    </SigninBtnInterface>
  );
};

export const AppleBtn: FC<CommonButtonProps> = (props) => {
  const { children, className, ...restProps } = props;
  return (
    <SigninBtnInterface className={`bg-black ${className}`} {...restProps}>
      {children}
    </SigninBtnInterface>
  );
};
