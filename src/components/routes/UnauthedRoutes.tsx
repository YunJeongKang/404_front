import { Navigate, Route, Routes } from "react-router-dom";
import PATH from "@utils/routes/PATH";
import LoginPage from "@components/auth/LoginPage";
import EasyStartPage from "@components/auth/EasyStartPage";
import SignUnPage from "@components/auth/SignUpPage";
import UserInfoPage from "@components/userInfo/UserInfoPage";

import UserImgFile from "@components/userInfo/UserImgFile";

const { LOGIN, EASY_AUTH, SIGNUP, INPUT, USER_IMAGE } = PATH;

function UnauthedRoutes() {
  return (
    <Routes>
      <Route path={EASY_AUTH} element={<EasyStartPage />} />
      <Route path={LOGIN} element={<LoginPage />} />
      <Route path={SIGNUP} element={<SignUnPage />} />
      <Route path={INPUT} element={<UserInfoPage />} />
      <Route path={USER_IMAGE} element={<UserImgFile />} />
      <Route path="*" element={<Navigate replace to={EASY_AUTH} />} />
    </Routes>
  );
}

export default UnauthedRoutes;
