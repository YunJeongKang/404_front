import { Navigate, Route, Routes } from "react-router-dom";
import PATH from "@utils/routes/PATH";
import LoginPage from "@components/auth/LoginPage";
import EasyStartPage from "@components/auth/EasyStartPage";
import SignUnPage from "@components/auth/SignUpPage";
import UserInfoPage from "@components/userInfo/UserInfoPage";
import useAuth from "./../../store/useAuth";

const { LOGIN, EASY_AUTH, SIGNUP, INPUT } = PATH;

function UnauthedRoutes() {
  const auth = useAuth();
  const autoInput = auth.getReady() === "true";
  return (
    <Routes>
      <Route path={EASY_AUTH} element={<EasyStartPage />} />
      <Route path={LOGIN} element={<LoginPage />} />
      <Route
        path={autoInput ? INPUT : SIGNUP}
        element={autoInput ? <UserInfoPage /> : <SignUnPage />}
      />
      <Route path={INPUT} element={<UserInfoPage />} />
      <Route
        path="*"
        element={<Navigate replace to={autoInput ? INPUT : EASY_AUTH} />}
      />
    </Routes>
  );
}

export default UnauthedRoutes;
