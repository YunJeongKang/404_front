import { CommonParagraphProps } from "@utils/common/props";
import { FunctionComponent as FC } from "react";

export const SignUpParagraph: FC<CommonParagraphProps> = (props) => {
  const { className, children, ...restProps } = props;
  return (
    <p {...restProps} className={`text-center w-[80%] ${className}`}>
      {children}
    </p>
  );
};
