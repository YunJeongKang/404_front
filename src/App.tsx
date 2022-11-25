import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { AiFillHome, AiOutlineHome } from "react-icons/ai";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import {
  HiBadgeCheck,
  HiOutlineBadgeCheck,
  HiUser,
  HiOutlineUser,
} from "react-icons/hi";
import { RiChat1Line, RiChat1Fill } from "react-icons/ri";
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

  const isTrue = auth.isAuthenticated || auth.isAutoLogin() === "true";

  useEffect(() => {
    const currentRoutes = isTrue ? <ProtectedRoutes /> : <UnauthedRoutes />;
    setCurrentRoutes(currentRoutes);
  }, [auth.isAuthenticated, auth.isAutoLogin()]);

  return (
    <div className="App flex flex-row justify-center overflow-x-hidden scrollbar-hide">
      <div className="h-screen max-w-[28rem] z-10 scrollbar-hide">
        <main
          className={`flex flex-col items-center w-[26rem] border shadow-inner drop-shadow ${
            isTrue
              ? "min-h-[41.6rem] max-h-[41.6rem]"
              : "min-h-[44.6rem] max-h-[44.6rem]"
          } overflow-hidden overflow-y-auto scrollbar-hide justify-center bg-blue-200`}
        >
          {currentRoutes}
        </main>
        {isTrue ? (
          <footer>
            <nav className="flex flex-row justify-center gap-14 border shadow-md py-2 ">
              <Link to={HOME}>
                {location.pathname === HOME ? (
                  <AiFillHome size="30" />
                ) : (
                  <AiOutlineHome size="30" />
                )}
              </Link>
              <Link to={LIKE}>
                {location.pathname === LIKE ? (
                  <FaHeart size="30" />
                ) : (
                  <FaRegHeart size="30" />
                )}
              </Link>
              <Link to={RECOMMEND}>
                {location.pathname === RECOMMEND ? (
                  <HiBadgeCheck size="30" />
                ) : (
                  <HiOutlineBadgeCheck size="30" />
                )}
              </Link>
              <Link to={CHAT}>
                {location.pathname === CHAT ? (
                  <RiChat1Fill size="30" />
                ) : (
                  <RiChat1Line size="30" />
                )}
              </Link>
              <Link to={USER}>
                {location.pathname === USER ? (
                  <HiUser size="30" />
                ) : (
                  <HiOutlineUser size="30" />
                )}
              </Link>
            </nav>
          </footer>
        ) : null}
      </div>
    </div>
  );
}

export default App;
