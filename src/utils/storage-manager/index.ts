import StorageKey from "./storage-key";

const storageManager = {
  setItem: (key: string, value: string) => localStorage.setItem(key, value),
  getItem: (key: string) => localStorage.getItem(key),
  /** STICKY한 목록은 남기고 다른 건 지우는 코드 */
  clear: () => {
    const { STICKY } = StorageKey;

    const stickyList = Object.values(STICKY) as string[];
    const allKeysOnStorage = Object.keys(localStorage);

    const unstickyKeys = allKeysOnStorage.filter(
      (keyName) => !stickyList.includes(keyName)
    );

    unstickyKeys.forEach((keyName) => localStorage.removeItem(keyName));
  },
};

export default storageManager;
