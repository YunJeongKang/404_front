import create from "zustand";

interface ModalState {
  isOpen: boolean;
  modal: React.ReactNode;

  setOpen: (isOpen: boolean) => void;
  setModal: (modal: React.ReactNode) => void;
}

const useModal = create<ModalState>((set, get) => ({
  isOpen: false,
  modal: <div> Empty Modal</div>,
  setOpen: (isOpen) => set({ isOpen }),
  setModal: (modal) => set({ modal }),
}));

export default useModal;
