import { Navigate, Route, Routes, Link } from "react-router-dom";
import PATH from "@utils/routes/PATH";
import useAuth from "@store/useAuth";

const { HOME, TEST, UI } = PATH;

const ProtectedRoutes = () => {
  const auth = useAuth();
  const { isAuthenticated } = auth;

  return (
    <Routes>
      <Route path={HOME} element={<div>홈</div>} />
      <Route path={TEST} element={<div>테스트</div>} />
      <Route path={UI} element={<div>UI</div>} />
      <Route path="*" element={<Navigate replace to={HOME} />} />
    </Routes>
  );
};

export default ProtectedRoutes;
