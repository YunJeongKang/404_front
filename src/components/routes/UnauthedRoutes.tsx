import { Navigate, Route, Routes } from "react-router-dom";
import PATH from "@utils/routes/PATH";
import LoginPage from "@components/auth/LoginPage";
import EasyStartPage from "@components/auth/EasyStartPage";
import SignInPage from "@components/auth/SignUpPage";
import UserInfoPage from "@components/userInfo/UserInfoPage";

const { LOGIN, EASY_AUTH, SIGNUP, INPUT, USER } = PATH;

function UnauthedRoutes() {
  return (
    <Routes>
      <Route path={LOGIN} element={<LoginPage />} />
      <Route path={USER} element={<UserInfoPage />} />
      <Route path={SIGNUP} element={<SignInPage />} />
      <Route path={EASY_AUTH} element={<EasyStartPage />} />
      <Route path="*" element={<Navigate replace to={EASY_AUTH} />} />
    </Routes>
  );
}

export default UnauthedRoutes;
