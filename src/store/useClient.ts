import create from "zustand";

interface ClientState {
  userNum: string;

  setUserNum: (userNum: string) => void;
}

const useClient = create<ClientState>((set, get) => ({
  userNum: "",

  setUserNum: (userNum) => set({ userNum }),
}));

export default useClient;
