import create from "zustand";

interface ClientState {
  userEmail: string;

  setUserEmail: (userEmail: string) => void;
  getUserEmail: () => string | null;
}

const useClient = create<ClientState>((set, get) => ({
  userEmail: "",

  setUserEmail: (userEmail) => {
    localStorage.setItem("userEmail", JSON.stringify(userEmail));
  },

  getUserEmail: () => {
    const username = localStorage.getItem("userEmail");
    return username;
  },
  // End of Create
}));

export default useClient;
