import { useState, useRef, useEffect } from "react";
import useAuth from "@store/useAuth";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import PATH from "@utils/routes/PATH";
import axios from "axios";

const { EASY_AUTH, URL, LOGIN } = PATH;

function LoginPage() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const usernameRef = useRef<HTMLInputElement | null>(null);
  const auth = useAuth();
  const { setUserName, setPassword, login } = auth;
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

  return (
    <div className="w-[50vw] max-w-[28rem]  flex flex-col items-center gap-4">
      <h1>LOGIN page</h1>
      <section className="rounded-md px-8 py-2 max-w-[26rem] w-[100vw]">
        <form
          className="flex flex-col gap-y-2 "
          onSubmit={(evt) => {
            evt.preventDefault();
            axios.post(`${URL}${LOGIN}`, { ...loginInfo });
            console.log({ ...loginInfo });
            login();
          }}
        >
          <fieldset className="flex justify-between gap-2">
            <span>ID</span>
            <input
              name="email"
              value={loginInfo.email}
              ref={usernameRef}
              autoComplete="on"
              className="w-4/5 border px-2 py-1 rounded-md"
              onChange={onChange}
            />
          </fieldset>
          <fieldset className="relative flex justify-between gap-2">
            <span>PW</span>
            <input
              value={loginInfo.password}
              type={showPassword ? "text" : "password"}
              name="password"
              className="w-4/5 border px-2 py-1 rounded-md"
              onChange={onChange}
            />
            <div
              onClick={(evt) => evt.preventDefault()}
              onMouseDown={() => setShowPassword(true)}
              onMouseUp={() => setShowPassword(false)}
              className="absolute right-2 top-1/2 -translate-y-1/2"
            >
              {!showPassword ? <BsEyeSlashFill /> : <BsEyeFill />}
            </div>
          </fieldset>
          <div className="flex flex-col">
            <button
              type="submit"
              className="border bg-primary text-main-contra font-bold rounded-md duration-150 active:scale-95 px-2 py-1"
            >
              LOGIN
            </button>
          </div>
        </form>
        <div className="py-2">
          <Link to={EASY_AUTH}>
            <button className="bg-secondary text-white rounded-md px-2 py-1 active:scale-95 font-bold border">
              회원가입
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default LoginPage;
