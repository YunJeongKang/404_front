import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiHome } from "react-icons/fi";
import { CgHeart } from "react-icons/cg";
import { GiLovers } from "react-icons/gi";
import { RiChat1Line } from "react-icons/ri";
import { AiOutlineUser } from "react-icons/ai";
import PATH from "@utils/routes/PATH";
import ProtectedRoutes from "@components/routes/ProtectedRoutes";
import UnauthedRoutes from "@components/routes/UnauthedRoutes";
import useAuth from "@store/useAuth";

function App() {
  const auth = useAuth();
  const location = useLocation();
  const { HOME, LIKE, RECOMMEND, CHAT, USER } = PATH;
  const [currentRoutes, setCurrentRoutes] = useState<React.ReactNode | null>(
    null
  );

  useEffect(() => {
    console.log("추적 가능한 경로", location.pathname);
  }, [location.pathname]);

  useEffect(() => {
    const currentRoutes = auth.isAuthenticated ? (
      <ProtectedRoutes />
    ) : (
      <UnauthedRoutes />
    );
    setCurrentRoutes(currentRoutes);
  }, [auth.isAuthenticated]);

  return (
    <div className="App flex flex-row justify-center overflow-x-hidden scrollbar-hide">
      <div className="h-screen max-w-[28rem] z-10 scrollbar-hide">
        <main className="flex flex-col items-center w-[28rem] border shadow-inner drop-shadow">
          {currentRoutes}
        </main>
        {/* {auth.isAuthenticated === true ? ( */}
        <footer>
          <nav className="flex flex-row justify-center gap-16 border shadow-md py-2">
            <Link to={HOME}>
              <FiHome size="30" />
            </Link>
            <Link to={LIKE}>
              <CgHeart size="30" />
            </Link>
            <Link to={RECOMMEND}>
              <GiLovers size="30" />
            </Link>
            <Link to={CHAT}>
              <RiChat1Line size="30" />
            </Link>
            <Link to={USER}>
              <AiOutlineUser size="30" />
            </Link>
          </nav>
        </footer>
        {/* ) : null} */}
      </div>
    </div>
  );
}

export default App;
