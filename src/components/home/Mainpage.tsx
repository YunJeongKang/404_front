import useAuth from "@store/useAuth";

function MainPage() {
  const auth = useAuth();
  return <div className="flex flex-col flex-wrap">메인 페이지</div>;
}

export default MainPage;
