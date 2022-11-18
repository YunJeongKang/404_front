import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import PATH from "@utils/routes/PATH";
import ProtectedRoutes from "@components/routes/ProtectedRoutes";
import UnauthedRoutes from "@components/routes/UnauthedRoutes";
import useAuth from "@store/useAuth";

function App() {
  const auth = useAuth();
  const location = useLocation();
  const { HOME, TEST, UI, LOGIN } = PATH;
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
      <div className="h-screen w-[28rem] z-10 scrollbar-hide">
        <header>
          <nav className="flex flex-row justify-center gap-4 py-2">
            <Link to={HOME}>홈</Link>
            <Link to={TEST}>테스트</Link>
            <Link to={UI}>UI</Link>
          </nav>
        </header>
        <main className="flex flex-col items-center border shadow-md rounded-lg">
          {currentRoutes}
        </main>
      </div>
    </div>
  );
}

export default App;
