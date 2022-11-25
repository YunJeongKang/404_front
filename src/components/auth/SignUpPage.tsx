import UserInfoForm from "@styles/indexStyle/indexForm";
import { TextInputTemplate } from "@utils/common/props/userInfo/TotalFormTemplate";
import axios from "axios";
import { useEffect, useState } from "react";
import PATH from "@utils/routes/PATH";
import { AuthInterface } from "@models/user/UserDetail";
import { Link } from "react-router-dom";

const SignInPage = () => {
  const [values, setValues] = useState<AuthInterface>({
    nickname: "",
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

  const { URL, SIGNUP, INPUT } = PATH;

  function onSubmit() {
    axios.post(`${URL}${SIGNUP}`, { ...values });
    console.log({ ...values, checkPW });
    useEffect(() => {
      axios.get(`${URL}${SIGNUP}`).then((response) => {
        console.log(response);
      });
    }, []);
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
        value={values.nickname || ""}
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
      <fieldset className="flex gap-2 p-[3px]">
        <span>비밀번호 재입력</span>
        <div className="flex flex-col items-start gap-1">
          <input
            className="border peer dark:text-dark px-1"
            type="password"
            value={checkPW}
            pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,16}$"
            name="checked-password"
            placeholder="비밀번호 재입력"
            required
            onChange={(evt) => {
              setCheckPW(evt.target.value);
              console.log("password", values.password);
              console.log("checkPW", checkPW);
            }}
          />
          <span className="hidden peer-invalid:block">
            {values.password === checkPW ? (
              <></>
            ) : (
              <span className="text-danger text-sm">
                위의 비밀번호를 똑같이 입력하세요
              </span>
            )}
          </span>
        </div>
      </fieldset>

      <button
        type="submit"
        className="border px-3 py-1 rounded-md shadow-md duration-200 active:scale-95"
      >
        <Link to={INPUT}>제출</Link>
      </button>
    </UserInfoForm>
  );
};

export default SignInPage;
