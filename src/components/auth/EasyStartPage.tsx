import AppleAPI from "@utils/common/props/auth/AppleAPI";
import FacebookAPI from "@utils/common/props/auth/FacebookAPI";
import KakaoAPI from "@utils/common/props/auth/KakaoAPI";
import PATH from "@utils/routes/PATH";
import { Link } from "react-router-dom";

const EasyStartPage = () => {
  // const KAKAO_CODE = new URL(document.location).searchParams.get("code");
  const { LOGIN, SIGNUP } = PATH;
  return (
    <div className="flex flex-col items-center gap-2 bg-white rounded-md px-4 py-2">
      <Link to={SIGNUP}>
        <span className="text-sm underline">이메일로 간편하게 회원가입</span>
      </Link>
      <KakaoAPI />
      <FacebookAPI />
      <AppleAPI />
      <div className="flex flex-raw items-center justify-around w-full ">
        <span className="ml-6 text-sm text-gray-500">
          이미 계정이 있으신가요?
        </span>
        <Link to={LOGIN}>
          <span className="mr-6 text-left text-xs text-gray-700 underline underline-offset-2">
            기존 회원 로그인
          </span>
        </Link>
      </div>
    </div>
  );
};

export default EasyStartPage;
