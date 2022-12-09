const StorageKey = {
  AUTO_LOGIN: "AutoLogin",
  KAKAO_TOKEN: "kakaoToken",
  STICKY: {
    // Relative on the device.
    DEVICE_TOKEN: "DEVICE_TOKEN", // 기기 고유 정보
    AOS_VERSION: "AOS_VERSION", // for web view
    IOS_VERSION: "IOS_VERSION", // for web view
  } as const,
} as const;

export default StorageKey;
