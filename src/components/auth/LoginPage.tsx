import { useState, useRef, useEffect } from "react";
import useAuth from "@store/useAuth";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import PATH from "@utils/routes/PATH";
import API_PATH from "@utils/routes/api/API_PATH";
import axios from "axios";
import useClient from "@store/useClient";

const { EASY_AUTH } = PATH;
const { URL, LOGIN } = API_PATH;

function LoginPage() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const usernameRef = useRef<HTMLInputElement | null>(null);
  const auth = useAuth();
  const client = useClient();
  const { setUserName, setPassword } = auth;
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });
  const onChange: React.ChangeEventHandler<HTMLInputElement> = (evt) => {
    const { name, value } = evt.target;
    name === "email" ? setUserName(value) : setPassword(value);
    setLoginInfo({
      ...loginInfo,
      [name]: value,
    });
  };

  useEffect(() => {
    if (usernameRef.current === null) {
      return;
    }

    usernameRef.current.focus();
  }, []);

  const onSubmit: React.ChangeEventHandler<HTMLFormElement> = (evt) => {
    evt.preventDefault();
    axios
      .post(`${URL}${LOGIN}`, { ...loginInfo })
      .then((res) => {
        console.log("들어오는 값: ", res.data);
        auth.setAutoLogin(res.data.isAuthenticated);
        client.setUserEmail(res.data.email);
        auth.isAutoLogin()
          ? (auth.isAuthenticated = true) && auth.login()
          : alert("아이디나 비밀번호가 틀렸습니다.");
      })
      .catch(() => {
        alert("인터넷이 원활하지 않거나 서버에 이상이 있습니다");
        console.log("로그인 통신 실패");
      });
    console.log("로그인 페이지 보내지는 정보 : ", { ...loginInfo });
  };

  return (
    <div className="w-[50vw] max-w-[24rem] flex flex-col items-center  gap-4">
      <section className="rounded-md px-8 py-2 max-w-[24rem] w-[100vw] bg-white">
        <form className="flex flex-col gap-y-2 " onSubmit={onSubmit}>
          <fieldset className="flex justify-between gap-2">
            <input
              name="email"
              value={loginInfo.email}
              ref={usernameRef}
              autoComplete="on"
              className="w-full px-2 py-1 bg-white border-b-2 outline-none"
              onChange={onChange}
              placeholder="이메일"
            />
          </fieldset>
          <fieldset className="relative flex justify-between gap-2">
            <input
              value={loginInfo.password}
              type={showPassword ? "text" : "password"}
              name="password"
              className="w-full px-2 py-1 bg-white border-b-2 outline-none"
              onChange={onChange}
              autoComplete="on"
              placeholder="비밀번호"
            />
            <div
              onClick={(evt) => evt.preventDefault()}
              onMouseDown={() => setShowPassword(true)}
              onMouseUp={() => setShowPassword(false)}
              className="absolute right-0 top-5 -translate-y-1/2 "
            >
              {!showPassword ? <BsEyeSlashFill /> : <BsEyeFill />}
            </div>
          </fieldset>
          <div className="flex flex-col">
            <button
              type="submit"
              className="border bg-sky-200 font-bold rounded-3xl duration-150 active:scale-95 px-2 py-1"
            >
              LOGIN
            </button>
          </div>
        </form>
        <div className="flex justify-center gap-6 pt-2">
          <span className="text-sm text-gray-500">혹시 계정이 없으신가요?</span>
          <Link
            className="underline text-blue-500 underline-offset-2 text-xs py-0.5"
            to={EASY_AUTH}
          >
            간편 계정 로그인
          </Link>
        </div>
      </section>
    </div>
  );
}

export default LoginPage;
