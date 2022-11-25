import create from "zustand";

interface AuthState {
  username: string;
  password: string;
  isAuthenticated: boolean;
  isReady: boolean;

  setUserName: (username: string) => void;
  setPassword: (password: string) => void;

  login: () => void;
  logout: () => void;

  setAutoLogin: (isAuthenticated: boolean) => void;
  isAutoLogin: () => string | null;
}

const useAuth = create<AuthState>((set, get) => {
  const checkFromDB = (username: string, password: string) =>
    username === username && password === password;
  return {
    username: "",
    password: "",
    isReady: false,
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
    // End of create
  };
});

export default useAuth;
