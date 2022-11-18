import AppleAPI from "@utils/common/props/auth/AppleAPI";
import KakaoAPI from "@utils/common/props/auth/KakaoAPI";
import PATH from "@utils/routes/PATH";
import { Link } from "react-router-dom";

const EasyStartPage = () => {
  // const KAKAO_CODE = new URL(document.location).searchParams.get("code");
  const { LOGIN, SIGNUP: SIGNIN } = PATH;
  return (
    <div className="flex flex-col items-center gap-2">
      <KakaoAPI />
      <AppleAPI />
      <div className="flex flex-raw items-center justify-around w-full">
        <Link to={SIGNIN} className="w-[35%]">
          이메일로 가입하기
        </Link>
        <div>|</div>
        <Link to={LOGIN} className="w-1/3">
          로그인하기
        </Link>
      </div>
    </div>
  );
};

export default EasyStartPage;
