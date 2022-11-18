import { Navigate, Route, Routes } from "react-router-dom";
import PATH from "@utils/routes/PATH";
import LoginPage from "@components/auth/LoginPage";
import EasyStartPage from "@components/auth/EasyStartPage";
import SignInPage from "@components/userInfo/SignInPage";
import UserInfoPage from "@components/userInfo/UserInfoPage";

const { TEST, UI, LOGIN, EASY_AUTH, SIGNIN } = PATH;

console.log(localStorage);

function UnauthedRoutes() {
  return (
    <Routes>
      <Route path={LOGIN} element={<LoginPage />} />
      <Route path={TEST} element={<div>test-미인증</div>} />
      <Route path={UI} element={<UserInfoPage />} />
      <Route path={SIGNIN} element={<SignInPage />} />
      <Route path={EASY_AUTH} element={<EasyStartPage />} />
      <Route path="*" element={<Navigate replace to={LOGIN} />} />
    </Routes>
  );
}

export default UnauthedRoutes;
