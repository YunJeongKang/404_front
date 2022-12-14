import { CommonDivProps } from "@utils/common/props";
import { FunctionComponent as FC } from "react";

const ModalEmptyDiv: FC<CommonDivProps> = (props) => {
  const { children, className, ...restProps } = props;
  return (
    <div className={`w-2/3 flex-raw flex gap-2 ${className}`} {...restProps}>
      {children}
    </div>
  );
};

export const HrDiv = () => {
  return <hr className="w-[26rem] h-4 mt-5" />;
};

export default ModalEmptyDiv;

export const UserDetail: FC<CommonDivProps> = (props) => {
  const { children, className, ...restProps } = props;
  return (
    <div className={`flex flex-col items-center ${className}`} {...restProps}>
      <div>{children}</div>
    </div>
  );
};
