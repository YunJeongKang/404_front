import UserInfoForm from "@styles/indexStyle/indexForm";
import { TextInputTemplate } from "@utils/common/props/userInfo/TotalFormTemplate";
import axios from "axios";
import { useState } from "react";
import PATH from "@utils/routes/PATH";
import { AuthInterface } from "@models/user/UserDetail";
import useAuth from "@store/useAuth";
import useClient from "@store/useClient";
import { Link } from "react-router-dom";

const SignUnPage = () => {
  const auth = useAuth();
  const client = useClient();
  const { URL, SIGNUP, EASY_AUTH } = PATH;

  // value 상태관리
  const [values, setValues] = useState<AuthInterface>({
    email: "",
    password: "",
  });

  const onChange: React.ChangeEventHandler<HTMLInputElement> = (evt) => {
    const { value, name } = evt.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  // 비밀번호 확인
  const [checkPW, setCheckPW] = useState<string>("");

  function onSubmit() {
    // 회원가입 axios
    axios
      .post(`${URL}${SIGNUP}`, { ...values })
      .then((res) => {
        console.log("넘어 온 값 :  ", res.data);
        // isReady 상태변경
        !res.data.repeat && alert("이메일이 중복되었습니다.");
        auth.setReady(res.data.isReady);
        const userEmail = res.data.email;
        client.setUserEmail(userEmail);
      })
      .catch(() => alert("서버나 인터넷의 연결이 불안정합니다"));

    console.log({ ...values, checkPW });
  }

  return (
    /* query: string;
      pattern: string;
      name: string;
      dangerText?: string;
      type?: string;
      value?: string; 
      placeholder?: string; */

    <UserInfoForm
      className="flex flex-col justify-end items-center py-4 px-8 gap-2 !w-[98%] h-full bg-white"
      onSubmit={onSubmit}
    >
      <div className="flex justify-center items-center text-6xl w-full h-1/6">
        <div className="flex flex-col p-3 pr-5">
          <span className="text-white font-eland font-medium drop-shadow-[0.04em_0.04em_0_rgba(0_0_0_/_0.5)] opacity-90">
            <span className="text-red-400 drop-shadow-[0.06em_0.06em_0_rgba(255_163_191_/_0.8)]">
              A
            </span>
            <span className="drop-shadow-[0.09em_0.09em_0_rgba(0_0_0_/_0.1)]">
              fter
            </span>
          </span>
          <span className="flex text-blue-400 font-eland font-medium justify-end drop-shadow-[0.03em_0.03em_0_rgba(0_0_0_/_0.5)] opacity-90">
            <span className="drop-shadow-[0.06em_0.06em_0_rgba(158_179_255_/_0.8)]">
              Like
            </span>
          </span>
        </div>
      </div>
      <div className="flex flex-col w-full h-[50%] justify-center items-center">
        <TextInputTemplate
          onChange={onChange}
          value={values.email || ""}
          query="이메일 주소"
          pattern="([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$"
          name="email"
          dangerText="올바른 이메일 형식을 입력하세요"
          placeholder="이메일을 입력하세요"
        />
        <TextInputTemplate
          onChange={onChange}
          value={values.password || ""}
          query="비밀번호"
          pattern="(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,16}$"
          name="password"
          type="password"
          dangerText="숫자, 영문, 특수문자를 각 1개 이상 포함한 8자리 이상의 비밀번호를 입력하세요"
          placeholder="비밀번호를 입력하세요"
          autoComplete="off"
        />
        <fieldset className="flex justify-between gap-2 w-full p-[3px]">
          <span className="font-bold text-sm w-1/3">비밀번호 재입력</span>
          <div className="flex flex-col items-start gap-1 w-2/3">
            <input
              className="border-b w-full peer dark:text-dark px-1"
              type="password"
              value={checkPW}
              name="checked-password"
              pattern="(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,16}$"
              placeholder="비밀번호 재입력"
              required
              autoComplete="false"
              onChange={(evt) => {
                setCheckPW(evt.target.value);
                console.log("password", values.password);
                console.log("checkPW", checkPW);
              }}
            />
            {values.password !== checkPW && (
              <span className="text-danger text-xs">
                위의 비밀번호를 똑같이 입력하세요
              </span>
            )}
          </div>
        </fieldset>
        <div className="flex flex-col justify-center items-center w-full h-1/3">
          <button
            type="submit"
            className="text-center mt-6 bg-blue-600 active:bg-blue-400 text-white px-3 py-1 rounded-md shadow-md duration-100 active:scale-95 w-5/6"
          >
            회원가입
          </button>
          <Link
            to={EASY_AUTH}
            className="text-sm underline underline-offset-2 text-gray-500 py-2 hover:text-blue-500"
          >
            간편가입으로 돌아가기
          </Link>
        </div>
      </div>
      <div className="h-[10%]"></div>
    </UserInfoForm>
  );
};

export default SignUnPage;
