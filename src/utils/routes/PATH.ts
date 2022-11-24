const PATH = {
  URL: "http://localhost:8000",
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
