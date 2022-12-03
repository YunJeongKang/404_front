import create from "zustand";

interface SettingModalState {
  isIntroOpen: boolean;
  isIntroModal: React.ReactNode;
  setIntroOpen: (isIntroOpen: boolean) => void;
  setIntroModal: (isIntroModal: React.ReactNode) => void;
}

export const useSettingModal = create<SettingModalState>((set, get) => ({
  isIntroOpen: false,
  isIntroModal: <div>텅 빈 모달창</div>,
  setIntroOpen: (isIntroOpen) => set({ isIntroOpen }),
  setIntroModal: (isIntroModal) => set({ isIntroModal }),
}));
