import create from "zustand";

interface ClientState {
  userEmail: string;
  isComplete: boolean;

  setComplete: (isComplete: boolean) => void;
  authComplete: () => boolean;
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

  setComplete: (isComplete) => {
    console.log("isComplete :", isComplete);
    set({ isComplete });
    localStorage.setItem("isCompete", JSON.stringify(isComplete));
  },

  authComplete: () => {
    const completeState = localStorage.getItem("isComplete") === "true";
    return completeState;
  },
  // End of Create
}));

export default useClient;
