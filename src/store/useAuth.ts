import storageManager from "@utils/storage-manager";
import StorageKey from "@utils/storage-manager/storage-key";
import create from "zustand";

interface AuthState {
  username: string;
  password: string;
  isAuthenticated: boolean;
  isCompleted: boolean;

  setUserName: (username: string) => void;
  setPassword: (password: string) => void;

  login: () => void;
  logout: () => void;

  setAutoLogin: (isAuthenticated: boolean) => void;
  isAutoLogin: () => boolean;

  setKakaoToken: (token: string) => void;
}

const useAuth = create<AuthState>((set, get) => {
  const checkFromDB = (username: string, password: string) =>
    username === username && password === password;
  return {
    username: "",
    password: "",
    isAuthenticated: false,
    isCompleted: false,

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
      storageManager.clear();
    },

    setAutoLogin: (isAuthenticated) => {
      storageManager.setItem(
        StorageKey.AUTO_LOGIN,
        JSON.stringify(isAuthenticated)
      );
      set({ isAuthenticated });
    },

    isAutoLogin: () => storageManager.getItem(StorageKey.AUTO_LOGIN) === "true",

    setKakaoToken: (kakaoToken) => {
      storageManager.setItem(
        StorageKey.KAKAO_TOKEN,
        JSON.stringify(kakaoToken)
      );
    },
    // End of create
  };
});

export default useAuth;
