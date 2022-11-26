import ImageStore from "@/images/Image";
import AppleAPI from "@utils/common/props/auth/AppleAPI";
import FacebookAPI from "@utils/common/props/auth/FacebookAPI";
import KakaoAPI from "@utils/common/props/auth/KakaoAPI";
import PATH from "@utils/routes/PATH";
import { Link } from "react-router-dom";

const EasyStartPage = () => {
  // const KAKAO_CODE = new URL(document.location).searchParams.get("code");

  const { LOGIN, SIGNUP } = PATH;
  const { CoupleImg } = ImageStore;
  return (
    <div className={`flex flex-col h-full w-full items-center`}>
      <div className="relative z-0 h-[64%] overflow-hidden">
        <img src={CoupleImg} alt="" />
        <div className="absolute z-10 left-0 right-0 top-0 bottom-0 bg-gradient-to-b via-transparent from-transparent to-white">
          <div className="flex justify-end">
            <div className="flex flex-col p-3 pr-5">
              <span className="text-white font-eland text-5xl font-medium drop-shadow-[0.08em_0.08em_0_rgba(0_0_0_/_0.8)] opacity-90">
                <span className="text-red-400">A</span>fter
              </span>
              <span className="flex text-blue-400 font-eland text-5xl font-medium justify-end drop-shadow-[0.09em_0.09em_0_rgba(0_0_0_/_0.8)] opacity-90">
                Like
              </span>
              <span className="text-white text-lg font-eland drop-shadow-[0.12em_0.09em_0_rgba(0_0_0_/_0.8)] w-32">
                인연이 있다
              </span>
              <span className="flex justify-end font-eland text-lg text-white drop-shadow-[0.1em_0.08em_0_rgba(0_0_0_/_0.8)]">
                결혼으로 잇다
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-2 bg-white rounded-md px-4 py-2">
        <Link to={SIGNUP}>
          <span className="text-sm underline">이메일로 간편가입</span>
        </Link>
        <KakaoAPI />
        <FacebookAPI />
        <AppleAPI />
        <div className="flex flex-raw items-center justify-around w-full">
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
    </div>
  );
};

export default EasyStartPage;
