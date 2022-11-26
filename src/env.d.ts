interface ImportMetaEnv {
  // VITE_로 시작하는 이름이어야 함.
  readonly VITE_BASE_URL: string;

  // OAUTH
  readonly VITE_KAKAO_API_KEY: string;
  readonly VITE_FACEBOOK_API_KEY: string;
  readonly VITE_APPLE_API_KEY: string;

  // API Server
  readonly VITE_API_BASE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
