import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ProtectedRoutes from "@components/routes/ProtectedRoutes";
import UnauthedRoutes from "@components/routes/UnauthedRoutes";
import useAuth from "@store/useAuth";
import Footer from "@utils/common/app/Footer";
import Header from "@utils/common/app/Header";

function App() {
  const auth = useAuth();
  const location = useLocation();
  const [currentRoutes, setCurrentRoutes] = useState<React.ReactNode | null>(
    null
  );

  const authPageUI = "min-h-[37.5rem] h-[37.5rem] max-h-[37.5rem]";
  const authOtherUI = "min-h-[40.15rem] h-[40.15rem] max-h-[40.15rem]";
  const unAuthPageUI = "min-h-[43rem] h-[43rem] max-h-[43rem]";
  useEffect(() => {
    console.log("추적 가능한 경로", location.pathname);
  }, [location.pathname]);

  const isTrue = auth.isAuthenticated || auth.isAutoLogin();

  useEffect(() => {
    const currentRoutes = isTrue ? <ProtectedRoutes /> : <UnauthedRoutes />;
    setCurrentRoutes(currentRoutes);
  }, [auth.isAuthenticated, auth.isAutoLogin()]);

  return (
    <div className="App flex flex-row justify-center overflow-x-hidden scrollbar-hide bg-slate-200">
      <div className="h-screen max-w-[28rem] z-[10] scrollbar-hide py-3">
        {isTrue && location.pathname === "/" && <Header />}
        <main
          className={`flex flex-col items-center w-[26rem] border-x shadow-sm drop-shadow ${
            isTrue
              ? location.pathname === "/"
                ? authPageUI
                : authOtherUI
              : unAuthPageUI
          } overflow-hidden overflow-y-auto scrollbar-hide justify-center border bg-white`}
        >
          {currentRoutes}
        </main>
        {isTrue ? <Footer /> : null}
      </div>
    </div>
  );
}

export default App;
