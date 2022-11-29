import useModal from "@store/useModal";
import { CommonDivProps } from "@utils/common/props";
import { FunctionComponent as FC, useLayoutEffect } from "react";

interface ModalProps extends CommonDivProps {
  isOpen: boolean;
}

const AppearanceModal: FC<ModalProps> = (props) => {
  const { isOpen, children, className } = props;
  const { setAppearanceOpen, setAppearanceModal } = useModal();

  useLayoutEffect(() => {
    setAppearanceOpen(isOpen);
    isOpen &&
      setAppearanceModal(
        <div
          className={`select-none checked-bg:border-2 checked-bg:text-blue-600 checked-bg:border-blue-500 checked-bg:bg-white flex flex-col flex-wrap items-center  h-[26rem] w-[24rem] absolute left-1/2 -translate-x-1/2 top-1/2 rounded-lg -translate-y-1/2 border shadow-md bg-white ${className}`}
        >
          {children}
        </div>
      );
  }, [isOpen, children]);

  return <></>;
};

export default AppearanceModal;

interface ModalProviderProps extends CommonDivProps {
  children?: React.ReactNode;
  onClick: React.MouseEventHandler;
}

export const ModalProvider: FC<ModalProviderProps> = (
  { children: app },
  onClick
) => {
  const { isAppearanceOpen, isAppearanceModal, setAppearanceOpen } = useModal();

  return (
    <div className="relative z-0 min-h-screen">
      <div className="z-0">{app}</div>
      {isAppearanceOpen && (
        <aside
          className="absolute left-0 right-0 top-0 bottom-0 bg-black bg-opacity-30 z-10"
          // onClick={(evt) => {
          //   evt.preventDefault();
          //   onClick && setAppearanceOpen(false);
          // }}
        />
      )}
      {isAppearanceOpen && (
        <aside className="absolute left-0 right-0 top-0 bottom-0 z-20">
          {isAppearanceModal}
        </aside>
      )}
    </div>
  );
};
