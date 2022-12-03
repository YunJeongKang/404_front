import { FunctionComponent as FC } from "react";
import {
  CommonButtonProps,
  CommonDivProps,
  CommonSpanProps,
} from "@utils/common/props";

import { GrClose } from "react-icons/gr";

interface OutsideModalInterface extends CommonDivProps {
  isModal?: React.ReactNode;
}

const ModalH2: FC<OutsideModalInterface> = (props) => {
  const { children, className, ...restProps } = props;
  return (
    <h2
      {...restProps}
      className={`flex justify-center items-center w-4/6 h-[10%] text-center font-semibold text-3xl font-eland ${className}`}
    >
      {children}
    </h2>
  );
};

export default ModalH2;

export const OutsideModal: FC<CommonDivProps> = (props) => {
  const { children, className, ...restProps } = props;
  return (
    <div
      className={`relative flex flex-col flex-wrap justify-center items-center h-[110%] w-full gap-8 ${className}`}
      {...restProps}
    >
      {children}
    </div>
  );
};

interface ModalCloseButtonInterface {
  onClick?: () => void;
}

export const InfoModalCloseButton = ({
  onClick,
}: ModalCloseButtonInterface) => {
  return (
    <button
      onClick={onClick}
      className={`px-2 bg-success py-0.5 rounded-md text-lg z-50 text-white
       duration-150 hover:bg-green-400 cursor-pointer $`}
    >
      선택완료
    </button>
  );
};

export const SettingModalCloseButton = ({
  onClick,
}: ModalCloseButtonInterface) => {
  return (
    <button
      onClick={onClick}
      className={`absolute bottom-5 px-2 bg-success py-0.5 rounded-md text-lg z-50 text-white
       duration-150 cursor-pointer hover:bg-green-400 $`}
    >
      수정완료
    </button>
  );
};

export const ModalSpanDiv: FC<CommonDivProps> = (props) => {
  const { children, className, ...restProps } = props;
  return (
    <div className={`flex flex-raw gap-1 ${className}`} {...restProps}>
      {children}
    </div>
  );
};

export const ModalSpan: FC<CommonSpanProps> = (props) => {
  const { children, className, ...restProps } = props;
  return (
    <span
      className={`font-eland rounded-md border-2 text-sm border-blue-500 px-1 flex text-blue-600 ${className}`}
      {...restProps}
    >
      {children}
    </span>
  );
};
