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

export const ModalCloseButton = ({ onClick }: ModalCloseButtonInterface) => {
  return (
    <GrClose
      size="20"
      onClick={onClick}
      className={`absolute top-5 right-5 text-lg font-black z-50 text-gray-500 duration-150 active:scale-90 hover:text-black cursor-pointer $`}
    />
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
