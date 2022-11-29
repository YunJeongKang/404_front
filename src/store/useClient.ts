import create from "zustand";

interface ClientState {
  userEmail: string;
  isComplete: boolean;

  isNextStep: (isComplete: boolean) => void;
  setUserEmail: (userEmail: string) => void;
  getUserEmail: () => string | null;
}

const useClient = create<ClientState>((set, get) => ({
  userEmail: "",
  isComplete: false,

  setUserEmail: (userEmail) => {
    localStorage.setItem("userEmail", JSON.stringify(userEmail));
  },

  getUserEmail: () => {
    const username = localStorage.getItem("userEmail");
    return username;
  },

  isNextStep: (isComplete) => {
    console.log("isComplete :", isComplete);
    set({ isComplete });
  },
  // End of Create
}));

export default useClient;
