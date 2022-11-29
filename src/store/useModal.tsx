import create from "zustand";

interface ModalState {
  isAppearanceOpen: boolean;
  isAppearanceModal: React.ReactNode;
  setAppearanceOpen: (isAppearanceOpen: boolean) => void;
  setAppearanceModal: (isAppearanceModal: React.ReactNode) => void;

  isJobInfoOpen: boolean;
  jobInfoModal: React.ReactNode;
  setJonInfoOpen: (isJobInfoOpen: boolean) => void;
  setJobInfoModal: (jobInfoModal: React.ReactNode) => void;
}

const useModal = create<ModalState>((set, get) => ({
  isAppearanceOpen: false,
  isAppearanceModal: <div> Empty Modal</div>,
  setAppearanceOpen: (isAppearanceOpen) => set({ isAppearanceOpen }),
  setAppearanceModal: (isAppearanceModal) => set({ isAppearanceModal }),

  isJobInfoOpen: false,
  jobInfoModal: <div> Empty Modal</div>,
  setJonInfoOpen: (isJobInfoOpen) => set({ isJobInfoOpen }),
  setJobInfoModal: (jobInfoModal) => set({ jobInfoModal }),
}));

export default useModal;
