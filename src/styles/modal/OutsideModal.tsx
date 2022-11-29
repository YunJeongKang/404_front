import { FunctionComponent as FC } from "react";

interface OutsideModalInterface extends CommonDivProps {
  isModal?: React.ReactNode;
}

import { CommonButtonProps, CommonDivProps } from "@utils/common/props";

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
      className={`relative flex flex-col items-center h-full w-full gap-4 ${className}`}
      {...restProps}
    >
      {children}
    </div>
  );
};

interface ModalCloseButtonInterface {
  onClick: () => void;
}

export const ModalCloseButton = ({ onClick }: ModalCloseButtonInterface) => {
  return (
    <button
      onClick={onClick}
      className={`absolute top-6 right-8 text-lg font-black text-gray-500 duration-150 active:scale-90 hover:text-black`}
    >
      X
    </button>
  );
};
