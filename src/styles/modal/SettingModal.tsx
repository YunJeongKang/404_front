import { useSettingModal } from "@store/useSettingModal";
import { CommonDivProps } from "@utils/common/props";
import { FunctionComponent as FC, useEffect } from "react";

interface IntroModalProps extends CommonDivProps {
  isIntroOpen: boolean;
}

export const IntroModal: FC<IntroModalProps> = (props) => {
  const { children, className, isIntroOpen } = props;
  const { setIntroOpen, setIntroModal } = useSettingModal();

  useEffect(() => {
    setIntroOpen(isIntroOpen);
    isIntroOpen &&
      setIntroModal(
        <div
          className={`select-none checked-bg:border-2 flex flex-col flex-wrap items-center  h-[22rem] w-[22rem] absolute left-1/2 -translate-x-1/2 top-1/2 rounded-lg -translate-y-1/2 border shadow-md bg-white ${className}`}
        >
          {children}
        </div>
      );
  }, [isIntroOpen, children]);
  return <></>;
};

interface SettingModalProviderProps extends CommonDivProps {
  children?: React.ReactNode;
}

export const SettingModalProvider: FC<SettingModalProviderProps> = ({
  children,
}) => {
  const { isIntroOpen, isIntroModal } = useSettingModal();
  return (
    <>
      {children}
      {isIntroOpen && (
        <aside className="absolute left-0 right-0 top-3 bottom-0 w-full h-[42.8rem] bg-black bg-opacity-30 z-10">
          <div className="absolute left-0 right-0 top-0 bottom-0 z-20">
            {isIntroModal}
          </div>
        </aside>
      )}
    </>
  );
};
