import { Navigate, Route, Routes, Link } from "react-router-dom";
import PATH from "@utils/routes/PATH";
import useAuth from "@store/useAuth";
import MainPage from "@components/home/Mainpage";
import RecommendPage from "@components/home/RecommendPage";
import LikePage from "@components/home/LikePage";
import ChatPage from "@components/home/ChatPage";
import UserSettingPage from "@components/home/UserSettingPage";

const { HOME, LIKE, RECOMMEND, CHAT, USER } = PATH;

const ProtectedRoutes = () => {
  const auth = useAuth();
  const { isAuthenticated } = auth;

  return (
    <Routes>
      <Route path={HOME} element={<MainPage />} />
      <Route path={LIKE} element={<LikePage />} />
      <Route path={RECOMMEND} element={<RecommendPage />} />
      <Route path={CHAT} element={<ChatPage />} />
      <Route path={USER} element={<UserSettingPage />} />
      <Route path="*" element={<Navigate replace to={HOME} />} />
    </Routes>
  );
};

export default ProtectedRoutes;
