import useModal from "@store/useModal";
import { CommonDivProps } from "@utils/common/props";
import { FunctionComponent as FC, useLayoutEffect } from "react";

interface ManAppearModalProps extends CommonDivProps {
  isAppearanceOpen: boolean;
}

interface ManPersonalityModalProps extends CommonDivProps {
  isPersonalityOpen: boolean;
}

interface ManFashionModalProps extends CommonDivProps {
  isFashionOpen: boolean;
}

interface WomanAppearModalProps extends CommonDivProps {
  isWomanAppearanceOpen: boolean;
}

interface WomanPersonalityModalProps extends CommonDivProps {
  isWomanPersonalityOpen: boolean;
}

interface WomanFashionModalProps extends CommonDivProps {
  isWomanFashionOpen: boolean;
}

const ManAppearanceModal: FC<ManAppearModalProps> = (props) => {
  const { isAppearanceOpen, children, className } = props;
  const { setAppearanceOpen, setAppearanceModal } = useModal();

  useLayoutEffect(() => {
    setAppearanceOpen(isAppearanceOpen);
    isAppearanceOpen &&
      setAppearanceModal(
        <div
          className={`select-none checked-bg:border-2 checked-bg:text-blue-600 checked-bg:border-blue-500 checked-bg:bg-white flex flex-col flex-wrap items-center justify-center h-[22rem] w-[24rem] absolute left-1/2 -translate-x-1/2 top-1/2 rounded-lg -translate-y-1/2 border shadow-md bg-white ${className}`}
        >
          {children}
        </div>
      );
  }, [isAppearanceOpen, children]);

  return <></>;
};

export default ManAppearanceModal;

export const ManPersonalityModal: FC<ManPersonalityModalProps> = (props) => {
  const { isPersonalityOpen, children, className } = props;
  const { setPersonalityOpen, setPersonalityModal } = useModal();

  useLayoutEffect(() => {
    setPersonalityOpen(isPersonalityOpen);
    isPersonalityOpen &&
      setPersonalityModal(
        <div
          className={`select-none checked-bg:border-2 checked-bg:text-blue-600 checked-bg:border-blue-500 checked-bg:bg-white flex flex-col flex-wrap items-center justify-center max-h-[27rem] w-[24rem] absolute left-1/2 -translate-x-1/2 top-1/2 rounded-lg -translate-y-1/2 border shadow-md bg-white ${className}`}
        >
          {children}
        </div>
      );
  }, [isPersonalityOpen, children]);

  return <></>;
};

export const ManFashionModal: FC<ManFashionModalProps> = (props) => {
  const { isFashionOpen, children, className } = props;
  const { setFashionOpen, setFashionModal } = useModal();

  useLayoutEffect(() => {
    setFashionOpen(isFashionOpen);
    isFashionOpen &&
      setFashionModal(
        <div
          className={`select-none checked-bg:border-2 checked-bg:text-blue-600 checked-bg:border-blue-500 checked-bg:bg-white flex flex-col flex-wrap items-center justify-center h-[38rem] w-[24rem] absolute left-1/2 -translate-x-1/2 top-1/2 rounded-lg -translate-y-1/2 border shadow-md bg-white ${className}`}
        >
          {children}
        </div>
      );
  }, [isFashionOpen, children]);

  return <></>;
};

export const WomanAppearanceModal: FC<WomanAppearModalProps> = (props) => {
  const { isWomanAppearanceOpen, children, className } = props;
  const { setWomanAppearanceModal, setWomanAppearanceOpen } = useModal();

  useLayoutEffect(() => {
    setWomanAppearanceOpen(isWomanAppearanceOpen);
    isWomanAppearanceOpen &&
      setWomanAppearanceModal(
        <div
          className={`select-none checked-bg:border-2 checked-bg:text-blue-600 checked-bg:border-blue-500 checked-bg:bg-white flex flex-col flex-wrap items-center justify-center h-[22rem] w-[24rem] absolute left-1/2 -translate-x-1/2 top-1/2 rounded-lg -translate-y-1/2 border shadow-md bg-white ${className}`}
        >
          {children}
        </div>
      );
  }, [isWomanAppearanceOpen, children]);

  return <></>;
};

export const WomanPersonalityModal: FC<WomanPersonalityModalProps> = (
  props
) => {
  const { isWomanPersonalityOpen, children, className } = props;
  const { setWomanPersonalityOpen, setWomanPersonalityModal } = useModal();

  useLayoutEffect(() => {
    setWomanPersonalityOpen(isWomanPersonalityOpen);
    isWomanPersonalityOpen &&
      setWomanPersonalityModal(
        <div
          className={`select-none checked-bg:border-2 checked-bg:text-blue-600 checked-bg:border-blue-500 checked-bg:bg-white flex flex-col flex-wrap items-center justify-center h-fit w-[24rem] absolute left-1/2 -translate-x-1/2 top-1/2 rounded-lg -translate-y-1/2 border shadow-md bg-white ${className}`}
        >
          {children}
        </div>
      );
  }, [isWomanPersonalityOpen, children]);

  return <></>;
};

export const WomanFashionModal: FC<WomanFashionModalProps> = (props) => {
  const { isWomanFashionOpen, children, className } = props;
  const { setWomanFashionOpen, setWomanFashionModal } = useModal();

  useLayoutEffect(() => {
    setWomanFashionOpen(isWomanFashionOpen);
    isWomanFashionOpen &&
      setWomanFashionModal(
        <div
          className={`select-none checked-bg:border-2 checked-bg:text-blue-600 checked-bg:border-blue-500 checked-bg:bg-white flex flex-col flex-wrap items-center justify-center h-[39rem] w-[24rem] absolute left-1/2 -translate-x-1/2 top-1/2 rounded-lg -translate-y-1/2 border shadow-md bg-white ${className}`}
        >
          {children}
        </div>
      );
  }, [isWomanFashionOpen, children]);

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
    isWomanAppearanceModal,
    isWomanAppearanceOpen,
    isWomanPersonalityOpen,
    isWomanPersonalityModal,
    isWomanFashionOpen,
    isWomanFashionModal,
  } = useModal();

  return (
    <>
      <div className="relative z-0 min-h-screen">
        <div className="z-0">{app}</div>
        {isAppearanceOpen && (
          <aside className="absolute left-0 right-0 top-0 bottom-0 bg-black bg-opacity-30 z-[10]" />
        )}
        {isAppearanceOpen && (
          <aside className="absolute left-0 right-0 top-0 bottom-0 z-[11]">
            {isAppearanceModal}
          </aside>
        )}
        {isPersonalityOpen && (
          <aside className="absolute left-0 right-0 top-0 bottom-0 bg-black bg-opacity-30 z-[12]" />
        )}
        {isPersonalityOpen && (
          <aside className="absolute left-0 right-0 top-0 bottom-0 z-[13]">
            {isPersonalityModal}
          </aside>
        )}
        {isFashionOpen && (
          <aside className="absolute left-0 right-0 top-0 bottom-0 bg-black bg-opacity-30 z-[14]" />
        )}
        {isFashionOpen && (
          <aside className="absolute left-0 right-0 top-0 bottom-0 z-[15]">
            {isFashionModal}
          </aside>
        )}
        {isWomanAppearanceOpen && (
          <aside className="absolute left-0 right-0 top-0 bottom-0 bg-black bg-opacity-30 z-[16]" />
        )}
        {isWomanAppearanceOpen && (
          <aside className="absolute left-0 right-0 top-0 bottom-0 z-[17]">
            {isWomanAppearanceModal}
          </aside>
        )}
        {isWomanPersonalityOpen && (
          <aside className="absolute left-0 right-0 top-0 bottom-0 bg-black bg-opacity-30 z-[18]" />
        )}
        {isWomanPersonalityOpen && (
          <aside className="absolute left-0 right-0 top-0 bottom-0 z-[19]">
            {isWomanPersonalityModal}
          </aside>
        )}
        {isWomanFashionOpen && (
          <aside className="absolute left-0 right-0 top-0 bottom-0 bg-black bg-opacity-30 z-[20]" />
        )}
        {isWomanFashionOpen && (
          <aside className="absolute left-0 right-0 top-0 bottom-0 z-[21]">
            {isWomanFashionModal}
          </aside>
        )}
      </div>
    </>
  );
};
