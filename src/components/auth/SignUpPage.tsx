import UserInfoForm from "@styles/indexStyle/indexForm";
import { TextInputTemplate } from "@utils/common/props/userInfo/TotalFormTemplate";
import axios from "axios";
import { useState } from "react";
import PATH from "@utils/routes/PATH";
import { AuthInterface } from "@models/user/UserDetail";
import useAuth from "@store/useAuth";
import useClient from "@store/useClient";

const SignUnPage = () => {
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

  const auth = useAuth();
  const client = useClient();
  const { URL, SIGNUP } = PATH;

  function onSubmit() {
    // 회원가입 axios
    axios
      .post(`${URL}${SIGNUP}`, { ...values })
      .then((res) => {
        console.log("넘어 온 값 :  ", res.data);
        // isReady 상태변경
        auth.setReady(res.data.isReady);
        const userEmail = res.data.email;
        client.setUserEmail(userEmail);
      })
      .catch(() => console.log("이메일이 중복되었습니다"));

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

    <UserInfoForm className="py-4 px-10 gap-2 bg-white" onSubmit={onSubmit}>
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
      <fieldset className="flex gap-2 p-[3px]">
        <span>비밀번호 재입력</span>
        <div className="flex flex-col items-start gap-1">
          <input
            className="border peer dark:text-dark px-1"
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
            <span className="text-danger text-sm">
              위의 비밀번호를 똑같이 입력하세요
            </span>
          )}
        </div>
      </fieldset>

      <button
        type="submit"
        className="border px-3 py-1 rounded-md shadow-md duration-200 active:scale-95"
      >
        제출
      </button>
    </UserInfoForm>
  );
};

export default SignUnPage;
