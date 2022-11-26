const PATH = {
  URL: import.meta.env.VITE_API_BASE_URL,
  // Sign-up routes
  LOGIN: "/login",
  EASY_AUTH: "/login/easy-auth",
  SIGNUP: "/login/easy-auth/sign-up",
  INPUT: "/user-data-input",

  //main routes
  HOME: "/",
  LIKE: "/like",
  RECOMMEND: "/recommend",
  CHAT: "/chat",
  USER: "/user-setting",
};

Object.freeze(PATH);

export default PATH;
