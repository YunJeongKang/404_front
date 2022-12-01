import { CommonHeadingProps } from "@utils/common/props";
import { FunctionComponent as FC } from "react";

const UserInfoH2: FC<CommonHeadingProps> = (props) => {
  const { children, className, ...restProps } = props;
  return (
    <h2
      className={`w-[25%] text-left text-lg font-bold inline-block ${className}`}
      {...restProps}
    >
      {children}
    </h2>
  );
};

export default UserInfoH2;

export const NickNameH1: FC<CommonHeadingProps> = (props) => {
  const { children, className, ...restProps } = props;
  return (
    <h1 className={`font-extrabold text-2xl ${className}`} {...restProps}>
      {children}
    </h1>
  );
};

export const SubInfoH3: FC<CommonHeadingProps> = (props) => {
  const { children, className, ...restProps } = props;
  return (
    <h1 className={`font-medium text-lg ${className}`} {...restProps}>
      {children}
    </h1>
  );
};
