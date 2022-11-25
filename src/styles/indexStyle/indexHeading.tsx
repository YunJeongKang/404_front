import { CommonHeadingProps } from "@utils/common/props";
import { FunctionComponent as FC } from "react";

const H2: FC<CommonHeadingProps> = (props) => {
  const { children, className, ...restProps } = props;
  return (
    <h2
      className={`w-[22%] text-center text-lg font-bold inline-block ${className}`}
      {...restProps}
    >
      {children}
    </h2>
  );
};

export default H2;
