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

  isWomanAppearanceOpen: boolean;
  isWomanAppearanceModal: React.ReactNode;
  setWomanAppearanceOpen: (isWomanAppearanceOpen: boolean) => void;
  setWomanAppearanceModal: (isWomanAppearanceModal: React.ReactNode) => void;

  isWomanPersonalityOpen: boolean;
  isWomanPersonalityModal: React.ReactNode;
  setWomanPersonalityOpen: (isWomanPersonalityOpen: boolean) => void;
  setWomanPersonalityModal: (isWomanPersonalityModal: React.ReactNode) => void;

  isWomanFashionOpen: boolean;
  isWomanFashionModal: React.ReactNode;
  setWomanFashionOpen: (isWomanFashionOpen: boolean) => void;
  setWomanFashionModal: (isWomanFashionModal: React.ReactNode) => void;
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

  isWomanAppearanceOpen: false,
  isWomanAppearanceModal: <div> Empty Modal</div>,
  setWomanAppearanceOpen: (isWomanAppearanceOpen) =>
    set({ isWomanAppearanceOpen }),
  setWomanAppearanceModal: (isWomanAppearanceModal) =>
    set({ isWomanAppearanceModal }),

  isWomanPersonalityOpen: false,
  isWomanPersonalityModal: <div> Empty Modal</div>,
  setWomanPersonalityOpen: (isWomanPersonalityOpen) =>
    set({ isWomanPersonalityOpen }),
  setWomanPersonalityModal: (isWomanPersonalityModal) =>
    set({ isWomanPersonalityModal }),

  isWomanFashionOpen: false,
  isWomanFashionModal: <div> Empty Modal</div>,
  setWomanFashionOpen: (isWomanFashionOpen) => set({ isWomanFashionOpen }),
  setWomanFashionModal: (isWomanFashionModal) => set({ isWomanFashionModal }),
}));

export default useModal;
