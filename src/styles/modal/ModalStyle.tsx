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

const OutsideInModal: FC<OutsideModalInterface> = (props) => {
  const { children, className, ...restProps } = props;
  return (
    <div
      {...restProps}
      className={`w-4/6 my-8 text-center font-semibold text-3xl py-2 font-eland ${className}`}
    >
      {children}
    </div>
  );
};

export default OutsideInModal;

export const OutsideModal: FC<CommonDivProps> = (props) => {
  const { children, className, ...restProps } = props;
  return (
    <div
      className={`relative flex flex-col flex-wrap items-center h-full w-full gap-4 ${className}`}
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
      className={`absolute bottom-5 px-2 bg-success py-0.5 rounded-md text-lg z-50 text-white
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
