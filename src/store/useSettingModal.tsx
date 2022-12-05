import create from "zustand";

interface SettingModalState {
  isIntroOpen: boolean;
  isIntroModal: React.ReactNode;
  setIntroOpen: (isIntroOpen: boolean) => void;
  setIntroModal: (isIntroModal: React.ReactNode) => void;

  isWantedOpen: boolean;
  isWantedModal: React.ReactNode;
  setWantedOpen: (isWantedOpen: boolean) => void;
  setWantedModal: (isWantedModal: React.ReactNode) => void;
}

export const useSettingModal = create<SettingModalState>((set, get) => ({
  isIntroOpen: false,
  isIntroModal: <div>텅 빈 모달창</div>,
  setIntroOpen: (isIntroOpen) => set({ isIntroOpen }),
  setIntroModal: (isIntroModal) => set({ isIntroModal }),

  isWantedOpen: false,
  isWantedModal: <div>텅 빈 모달창</div>,
  setWantedOpen: (isWantedOpen) => set({ isWantedOpen }),
  setWantedModal: (isWantedModal) => set({ isWantedModal }),
}));
