import { CommonHeadingProps } from "@utils/common/props";
import { FunctionComponent as FC } from "react";

const H2: FC<CommonHeadingProps> = (props) => {
  const { children, className, ...restProps } = props;
  return (
    <h2
      className={`text-3xl font-bold bg-cyan-200 inline-block ${className}`}
      {...restProps}
    >
      {children}
    </h2>
  );
};

export default H2;
