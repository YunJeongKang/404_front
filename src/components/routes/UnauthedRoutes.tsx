import { Navigate, Route, Routes } from "react-router-dom";
import PATH from "@utils/routes/PATH";
import LoginPage from "@components/auth/LoginPage";
import EasyStartPage from "@components/auth/EasyStartPage";
import SignUnPage from "@components/auth/SignUpPage";
import UserInfoPage from "@components/userInfo/UserInfoPage";
import { useEffect } from "react";
import { useState } from "react";
import useAuth from "@store/useAuth";

const { LOGIN, EASY_AUTH, SIGNUP, INPUT } = PATH;

function UnauthedRoutes() {
  const auth = useAuth();
  // 사용자 정보 입력에 따른 삼항연상자
  const autoInput = auth.getReady();
  const [currentRoute, setCurrentRoute] = useState<React.ReactNode | null>(
    null
  );
  const [currentPath, setCurrentPath] = useState<string>("");

  useEffect(() => {
    // 컴포넌트 렌더링 -> 회원가입창 또는 정보입력창
    const currentRoute = autoInput ? <UserInfoPage /> : <SignUnPage />;
    setCurrentRoute(currentRoute);

    //경로 렌더링 -> 회원가입창 또는 정보입력창
    const currentPath = autoInput ? INPUT : SIGNUP;
    setCurrentPath(currentPath);
  }, [autoInput, INPUT, SIGNUP]);

  return (
    <Routes>
      <Route path={EASY_AUTH} element={<EasyStartPage />} />
      <Route path={LOGIN} element={<LoginPage />} />
      <Route path={currentPath} element={currentRoute} />
      <Route path={INPUT} element={<UserInfoPage />} />
      <Route
        path="*"
        element={<Navigate replace to={autoInput ? INPUT : EASY_AUTH} />}
      />
    </Routes>
  );
}

export default UnauthedRoutes;
