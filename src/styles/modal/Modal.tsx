import useModalStore from "@store/useModal";
import { CommonDivProps } from "@utils/common/props";
import { FunctionComponent as FC, useLayoutEffect } from "react";

interface ModalProps extends CommonDivProps {
  isOpen: boolean;
}

const Modal: FC<ModalProps> = (props) => {
  const { isOpen, children, className } = props;
  const { setOpen, setModal } = useModalStore();

  useLayoutEffect(() => {
    setOpen(isOpen);
    isOpen &&
      setModal(
        <div
          className={`select-none checked-bg:bg-gray-200 flex flex-col items-center h w-[26rem] absolute left-1/2 -translate-x-1/2 top-1/2 rounded-md -translate-y-1/2 border shadow-md bg-white ${className}`}
        >
          {children}
        </div>
      );
  }, [isOpen, children]);

  return <></>;
};

export default Modal;

interface ModalProviderProps {
  children?: React.ReactNode;
}

export const ModalProvider: FC<ModalProviderProps> = ({ children: app }) => {
  const { isOpen, modal } = useModalStore();

  return (
    <div className="relative z-0 min-h-screen">
      <div className="z-0">{app}</div>
      {isOpen && (
        <aside className="absolute left-0 right-0 top-0 bottom-0 bg-black bg-opacity-30 z-10" />
      )}
      {isOpen && (
        <aside className="absolute left-0 right-0 top-0 bottom-0 z-20">
          {modal}
        </aside>
      )}
    </div>
  );
};
