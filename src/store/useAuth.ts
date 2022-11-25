import create from "zustand";

interface AuthState {
  username: string;
  password: string;
  isAuthenticated: boolean;

  setUserName: (username: string) => void;
  setPassword: (password: string) => void;

  login: () => void;
  logout: () => void;

  setAutoLogin: (isAuthenticated: boolean) => void;
  isAutoLogin: () => string | null;

  setReady: (isReady: boolean) => void;
  getReady: () => string | null;
}

const useAuth = create<AuthState>((set, get) => {
  const checkFromDB = (username: string, password: string) =>
    username === username && password === password;
  return {
    username: "",
    password: "",
    isAuthenticated: false,

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
      localStorage.removeItem("AutoLogin");
    },

    setAutoLogin: (isAuthenticated) => {
      localStorage.setItem("AutoLogin", JSON.stringify(isAuthenticated));
    },

    isAutoLogin: () => localStorage.getItem("AutoLogin"),

    setReady: (isReady) => {
      isReady === true ? set({ isReady: true }) : set({ isReady: false });
      localStorage.setItem("isReady", JSON.stringify(isReady));
    },

    getReady: () => localStorage.getItem("isReady"),
    // End of create
  };
});

export default useAuth;
