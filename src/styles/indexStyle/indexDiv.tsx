import { CommonDivProps } from "@utils/common/props";
import { FunctionComponent as FC } from "react";

const ModalEmptyDiv: FC<CommonDivProps> = (props) => {
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

export const HrDiv = () => {
  return <hr className="w-[26rem] h-4 mt-5" />;
};

export default ModalEmptyDiv;
