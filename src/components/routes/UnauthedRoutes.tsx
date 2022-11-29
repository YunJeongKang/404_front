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

const { LOGIN, EASY_AUTH, SIGNUP, INPUT, USER_IMAGE } = PATH;

function UnauthedRoutes() {
  const auth = useAuth();
  const client = useClient();
  // 사용자 정보 입력에 따른 삼항연상자
  const autoStep = auth.getReady();
  const [currentRoute, setCurrentRoute] = useState<React.ReactNode | null>(
    null
  );
  const [currentPath, setCurrentPath] = useState<string>("");
  const [currentImgRoute, setCurrentImgRoute] =
    useState<React.ReactNode | null>(null);
  const [currentImgPath, setCurrentImgPath] = useState<string>("");

  useLayoutEffect(() => {
    // 컴포넌트 렌더링 -> 회원가입창 또는 정보입력창
    const currentRoute = auth.isReady ? <UserInfoPage /> : <SignUnPage />;
    setCurrentRoute(currentRoute);

    //경로 렌더링 -> 회원가입창 또는 정보입력창
    const currentPath = auth.isReady ? INPUT : SIGNUP;
    setCurrentPath(currentPath);
  }, [autoStep, INPUT, SIGNUP]);

  useLayoutEffect(() => {
    const gotoProfileImg = client.isComplete;
    const userImgFileRoutes = gotoProfileImg ? (
      <UserImgFile />
    ) : (
      <UserInfoPage />
    );
    const userImgFilePath = gotoProfileImg ? USER_IMAGE : INPUT;
    setCurrentImgPath(userImgFilePath);
    setCurrentImgRoute(userImgFileRoutes);
  }, [client.isComplete, USER_IMAGE, INPUT]);

  return (
    <Routes>
      <Route path={EASY_AUTH} element={<EasyStartPage />} />
      <Route path={LOGIN} element={<LoginPage />} />
      <Route path={currentPath} element={currentRoute} />
      <Route path={currentImgPath} element={currentImgRoute} />
      <Route path={USER_IMAGE} element={<UserImgFile />} />
      <Route
        path="*"
        element={<Navigate replace to={autoStep ? INPUT : EASY_AUTH} />}
      />
    </Routes>
  );
}

export default UnauthedRoutes;
