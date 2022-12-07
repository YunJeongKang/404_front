import { Navigate, Route, Routes } from "react-router-dom";
import PATH from "@utils/routes/PATH";
import MainPage from "@components/home/Mainpage";
import RecommendPage from "@components/home/RecommendPage";
import LikePage from "@components/home/LikePage";
import ChatListPage from "@components/home/ChatListPage";
import UserSettingPage from "@components/home/UserSettingPage";
import UserInfoModify from "@components/home/UserInfoModify";

const { HOME, LIKE, RECOMMEND, CHAT, USER, MODIFY, LIKE_ME } = PATH;

const ProtectedRoutes = () => {
  return (
    <Routes>
      <Route path={HOME} element={<MainPage />} />
      <Route path={LIKE} element={<LikePage />} />
      <Route path={RECOMMEND} element={<RecommendPage />} />
      <Route path={CHAT} element={<ChatListPage />} />
      <Route path={USER} element={<UserSettingPage />} />
      <Route path={MODIFY} element={<UserInfoModify />} />
      <Route path={LIKE_ME} element={<div>이거</div>} />
      <Route path="*" element={<Navigate replace to={HOME} />} />
    </Routes>
  );
};

export default ProtectedRoutes;
