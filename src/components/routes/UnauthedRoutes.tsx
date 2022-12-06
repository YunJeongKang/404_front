import { Navigate, Route, Routes } from "react-router-dom";
import PATH from "@utils/routes/PATH";
import LoginPage from "@components/auth/LoginPage";
import EasyStartPage from "@components/auth/EasyStartPage";
import SignUnPage from "@components/auth/SignUpPage";
import UserInfoPage from "@components/userInfo/UserInfoPage";
import { useLayoutEffect } from "react";
import { useState } from "react";
import useAuth from "@store/useAuth";
import UserImgFile from "@components/userInfo/UserImgFile";
import useClient from "@store/useClient";
import API_PATH from "@utils/routes/api/API_PATH";

const { LOGIN, EASY_AUTH, SIGNUP, INPUT, USER_IMAGE } = PATH;
const { KAKAO_API } = API_PATH;

function UnauthedRoutes() {
  const auth = useAuth();
  const client = useClient();
  // 사용자 정보 입력에 따른 삼항연상자
  const autoStep = auth.getReady();
  const complete = client.authComplete();
  const [currentRoute, setCurrentRoute] = useState<React.ReactNode | null>(
    null
  );
  const [currentPath, setCurrentPath] = useState<string>("");

  useLayoutEffect(() => {
    // 컴포넌트 렌더링 -> 회원가입창 또는 정보입력창
    const currentRoute = auth.isReady ? <UserInfoPage /> : <SignUnPage />;
    setCurrentRoute(currentRoute);

    //경로 렌더링 -> 회원가입창 또는 정보입력창
    const currentPath = auth.isReady ? INPUT : SIGNUP;
    setCurrentPath(currentPath);
  }, [autoStep, INPUT, SIGNUP]);

  return (
    <Routes>
      <Route path={EASY_AUTH} element={<EasyStartPage />} />
      <Route path={LOGIN} element={<LoginPage />} />
      <Route path={currentPath} element={currentRoute} />
      <Route path={INPUT} element={<UserInfoPage />} />
      <Route path={USER_IMAGE} element={<UserImgFile />} />
      <Route
        path="*"
        element={
          <Navigate
            replace
            to={client.isComplete ? USER_IMAGE : autoStep ? INPUT : EASY_AUTH}
          />
        }
      />
    </Routes>
  );
}

export default UnauthedRoutes;
