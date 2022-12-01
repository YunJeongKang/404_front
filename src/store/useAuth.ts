import create from "zustand";

interface AuthState {
  username: string;
  password: string;
  isAuthenticated: boolean;
  isCompleted: boolean;
  isReady: boolean;

  setUserName: (username: string) => void;
  setPassword: (password: string) => void;

  login: () => void;
  logout: () => void;

  setAutoLogin: (isAuthenticated: boolean) => void;
  isAutoLogin: () => boolean;

  setReady: (isReady: boolean) => void;
  getReady: () => boolean;
}

const useAuth = create<AuthState>((set, get) => {
  const checkFromDB = (username: string, password: string) =>
    username === username && password === password;
  return {
    username: "",
    password: "",
    isAuthenticated: false,
    isCompleted: false,
    isReady: false,

    setUserName: (username) => set({ username }),
    setPassword: (password) => set({ password }),

    login: () => {
      const state = get();
      const { username, password } = state;

      if (username.length < 3) {
        return;
      }

      const isAuthenticated = checkFromDB(username, password);
      console.debug("isAuthenticated", isAuthenticated);
      set({ isAuthenticated });
    },

    logout: () => {
      set({ isAuthenticated: false });
      localStorage.clear();
    },

    setAutoLogin: (isAuthenticated) => {
      localStorage.setItem("AutoLogin", JSON.stringify(isAuthenticated));
    },

    isAutoLogin: () => localStorage.getItem("AutoLogin") === "true",

    setReady: (isReady) => {
      set({ isReady });
      localStorage.setItem("isReady", JSON.stringify(isReady));
    },

    getReady: () => localStorage.getItem("isReady") === "true",
    // End of create
  };
});

export default useAuth;
