import create from "zustand";

interface ModalState {
  isAppearanceOpen: boolean;
  isAppearanceModal: React.ReactNode;
  setAppearanceOpen: (isAppearanceOpen: boolean) => void;
  setAppearanceModal: (isAppearanceModal: React.ReactNode) => void;

  isPersonalityOpen: boolean;
  isPersonalityModal: React.ReactNode;
  setPersonalityOpen: (isPersonalityOpen: boolean) => void;
  setPersonalityModal: (isPersonalityModal: React.ReactNode) => void;

  isFashionOpen: boolean;
  isFashionModal: React.ReactNode;
  setFashionOpen: (isFashionOpen: boolean) => void;
  setFashionModal: (isFashionModal: React.ReactNode) => void;
}

const useModal = create<ModalState>((set, get) => ({
  isAppearanceOpen: false,
  isAppearanceModal: <div> Empty Modal</div>,
  setAppearanceOpen: (isAppearanceOpen) => set({ isAppearanceOpen }),
  setAppearanceModal: (isAppearanceModal) => set({ isAppearanceModal }),

  isPersonalityOpen: false,
  isPersonalityModal: <div> Empty Modal</div>,
  setPersonalityOpen: (isPersonalityOpen) => set({ isPersonalityOpen }),
  setPersonalityModal: (isPersonalityModal) => set({ isPersonalityModal }),

  isFashionOpen: false,
  isFashionModal: <div> Empty Modal</div>,
  setFashionOpen: (isFashionOpen) => set({ isFashionOpen }),
  setFashionModal: (isFashionModal) => set({ isFashionModal }),
}));

export default useModal;
