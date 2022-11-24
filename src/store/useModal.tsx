import create from "zustand";

interface ModalState {
  isIntroduceOpen: boolean;
  introduceModal: React.ReactNode;
  setIntroduceOpen: (isIntroduceOpen: boolean) => void;
  setIntroduceModal: (introduceModal: React.ReactNode) => void;

  isJobInfoOpen: boolean;
  jobInfoModal: React.ReactNode;
  setJonInfoOpen: (isJobInfoOpen: boolean) => void;
  setJobInfoModal: (jobInfoModal: React.ReactNode) => void;
}

const useModal = create<ModalState>((set, get) => ({
  isIntroduceOpen: false,
  introduceModal: <div> Empty Modal</div>,
  setIntroduceOpen: (isIntroduceOpen) => set({ isIntroduceOpen }),
  setIntroduceModal: (introduceModal) => set({ introduceModal }),

  isJobInfoOpen: false,
  jobInfoModal: <div> Empty Modal</div>,
  setJonInfoOpen: (isJobInfoOpen) => set({ isJobInfoOpen }),
  setJobInfoModal: (jobInfoModal) => set({ jobInfoModal }),
}));

export default useModal;
