import UserInfoForm from "@styles/indexForm";
import { TextInputTemplate } from "@utils/common/props/userInfo/TotalFormTemplate";
import axios from "axios";
import { useState } from "react";
import PATH from "@utils/routes/PATH";
import { AuthInterface } from "@models/user/UserDetail";

const SignInPage = () => {
  const [values, setValues] = useState<AuthInterface>({
    nickName: "",
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

  const [checkPW, setCheckPW] = useState<string>("");

  const { URL, SIGNUP } = PATH;

  function onSubmit() {
    axios.post(`${URL}${SIGNUP}`, { ...values });
    console.log({ ...values });
  }

  return (
    /* query: string;
      pattern: string;
      name: string;
      dangerText?: string;
      type?: string;
      value?: string; 
      placeholder?: string; */

    <UserInfoForm className="py-4 px-12 gap-2" onSubmit={onSubmit}>
      <TextInputTemplate
        onChange={onChange}
        value={values.nickName}
        query="닉네임"
        pattern="[가-힣A-Za-z0-9]{3,8}$"
        name="nickname"
        dangerText="3~8자의 올바른 닉네임을 입력하세요(자모음소X)"
        placeholder="닉네임을 입력하세요"
      />
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
      />
      <button
        type="submit"
        className="border px-3 py-1 rounded-md shadow-md duration-150 active:scale-95"
      >
        제출
      </button>
    </UserInfoForm>
  );
};

export default SignInPage;
