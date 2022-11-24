import useAuth from "@store/useAuth";

function MainPage() {
  const auth = useAuth();
  return (
    <div className="flex flex-col flex-wrap">
      메인 페이지
      <button
        className="bg-indigo-400 rounded-md shadow"
        onClick={() => auth.logout()}
      >
        로그아웃
      </button>
    </div>
  );
}

export default MainPage;
