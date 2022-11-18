import { useState, useRef, useEffect } from "react";
import useAuth from "@store/useAuth";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import PATH from "@utils/routes/PATH";

const { EASY_AUTH } = PATH;

function LoginPage() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const usernameRef = useRef<HTMLInputElement | null>(null);
  const auth = useAuth();
  const { username, password, setUserName, setPassword, login } = auth;

  useEffect(() => {
    if (usernameRef.current === null) {
      return;
    }

    usernameRef.current.focus();
  }, []);

  return (
    <div className="w-[50vw] max-w-[28rem]  flex flex-col items-center gap-4">
      <h1>LOGIN page</h1>
      <section className="border rounded-md px-8 py-2 max-w-[26rem] w-[100vw]">
        <form
          className="flex flex-col gap-y-2 "
          onSubmit={(evt) => {
            evt.preventDefault();
            login();
          }}
        >
          <fieldset className="flex justify-between gap-2">
            <span>ID</span>
            <input
              name="username"
              value={username}
              ref={usernameRef}
              autoComplete="on"
              className="w-4/5 border px-2 py-1 rounded-md"
              onChange={(evt) => {
                setUserName(evt.target.value);
              }}
            />
          </fieldset>
          <fieldset className="relative flex justify-between gap-2">
            <span>PW</span>
            <input
              value={password}
              autoComplete="on"
              type={showPassword ? "text" : "password"}
              name="password"
              className="w-4/5 border px-2 py-1 rounded-md"
              onChange={(evt) => {
                setPassword(evt.target.value);
              }}
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
            <input
              value="LOGIN"
              type="submit"
              className="border bg-primary text-main-contra font-bold rounded-md duration-150 active:scale-95 px-2 py-1"
            />
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
