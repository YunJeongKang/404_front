import useModal from "@store/useModal";
import { CommonDivProps } from "@utils/common/props";
import { FunctionComponent as FC, useLayoutEffect } from "react";

interface AppearModalProps extends CommonDivProps {
  isAppearanceOpen: boolean;
}

interface PersonalityModalProps extends CommonDivProps {
  isPersonalityOpen: boolean;
}

interface FashionModalProps extends CommonDivProps {
  isFashionOpen: boolean;
}

const AppearanceModal: FC<AppearModalProps> = (props) => {
  const { isAppearanceOpen, children, className } = props;
  const { setAppearanceOpen, setAppearanceModal } = useModal();

  useLayoutEffect(() => {
    setAppearanceOpen(isAppearanceOpen);
    isAppearanceOpen &&
      setAppearanceModal(
        <div
          className={`select-none checked-bg:border-2 checked-bg:text-blue-600 checked-bg:border-blue-500 checked-bg:bg-white flex flex-col flex-wrap items-center  h-[26rem] w-[24rem] absolute left-1/2 -translate-x-1/2 top-1/2 rounded-lg -translate-y-1/2 border shadow-md bg-white ${className}`}
        >
          {children}
        </div>
      );
  }, [isAppearanceOpen, children]);

  return <></>;
};

export default AppearanceModal;

export const PersonalityModal: FC<PersonalityModalProps> = (props) => {
  const { isPersonalityOpen, children, className } = props;
  const { setPersonalityOpen, setPersonalityModal } = useModal();

  useLayoutEffect(() => {
    setPersonalityOpen(isPersonalityOpen);
    isPersonalityOpen &&
      setPersonalityModal(
        <div
          className={`select-none checked-bg:border-2 checked-bg:text-blue-600 checked-bg:border-blue-500 checked-bg:bg-white flex flex-col flex-wrap items-center  max-h-[34rem] w-[24rem] absolute left-1/2 -translate-x-1/2 top-1/2 rounded-lg -translate-y-1/2 border shadow-md bg-white ${className}`}
        >
          {children}
        </div>
      );
  }, [isPersonalityOpen, children]);

  return <></>;
};

export const FashionModal: FC<FashionModalProps> = (props) => {
  const { isFashionOpen, children, className } = props;
  const { setFashionOpen, setFashionModal } = useModal();

  useLayoutEffect(() => {
    setFashionOpen(isFashionOpen);
    isFashionOpen &&
      setFashionModal(
        <div
          className={`select-none checked-bg:border-2 checked-bg:text-blue-600 checked-bg:border-blue-500 checked-bg:bg-white flex flex-col flex-wrap items-center  h-[26rem] w-[24rem] absolute left-1/2 -translate-x-1/2 top-1/2 rounded-lg -translate-y-1/2 border shadow-md bg-white ${className}`}
        >
          {children}
        </div>
      );
  }, [isFashionOpen, children]);

  return <></>;
};

// root provider

interface ModalProviderProps extends CommonDivProps {
  children?: React.ReactNode;
}

export const ModalProvider: FC<ModalProviderProps> = ({ children: app }) => {
  const {
    isAppearanceModal,
    isAppearanceOpen,
    isPersonalityOpen,
    isPersonalityModal,
    isFashionOpen,
    isFashionModal,
  } = useModal();

  return (
    <>
      <div className="relative z-0 min-h-screen">
        <div className="z-0">{app}</div>
        {isAppearanceOpen && (
          <aside className="absolute left-0 right-0 top-0 bottom-0 bg-black bg-opacity-30 z-[10]" />
        )}
        {isAppearanceOpen && (
          <aside className="absolute left-0 right-0 top-0 bottom-0 z-[12]">
            {isAppearanceModal}
          </aside>
        )}
        {isPersonalityOpen && (
          <aside className="absolute left-0 right-0 top-0 bottom-0 bg-black bg-opacity-30 z-[14]" />
        )}
        {isPersonalityOpen && (
          <aside className="absolute left-0 right-0 top-0 bottom-0 z-[16]">
            {isPersonalityModal}
          </aside>
        )}
      </div>
    </>
  );
};
