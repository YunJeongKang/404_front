import ImageStore from "@/images/Image";
import useAuth from "@store/useAuth";
import AppleAPI from "@utils/common/props/auth/AppleAPI";
import FacebookAPI from "@utils/common/props/auth/FacebookAPI";
import KakaoAPI from "@utils/common/props/auth/KakaoAPI";
import PATH from "@utils/routes/PATH";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import useClient from "@store/useClient";

const EasyStartPage = () => {
  const auth = useAuth();
  const client = useClient();
  const navigate = useNavigate();
  const { LOGIN, SIGNUP, EASY_AUTH, INPUT, URL } = PATH;
  const { CoupleImg } = ImageStore;

  // JS SDK 로그인
  const [idToken, setToken] = useState<string>("");
  const [kakaoEmail, setKakaoEmail] = useState<string>("");
  const InitKakao = async () => {
    const jsKey = import.meta.env.VITE_KAKO_JS_SDK_KEY;

    if (Kakao && !Kakao.isInitialized()) {
      await Kakao.init(jsKey);
      console.log(`카카오 초기화 ${Kakao.isInitialized()}`);
    }
  };
  const Kakao = (window as any).Kakao;
  const kakaoLogin = async () => {
    console.log("보내는 데이터:", {
      email: kakaoEmail,
      password: idToken,
    });
    await Kakao.Auth.login({
      success(res: any) {
        Kakao.Auth.setAccessToken(res.access_token);
        setToken(res.access_token);
        console.log("카카오 로그인 성공");

        Kakao.API.request({
          url: "/v2/user/me",
          success(res: any) {
            console.log("카카오 인가 요청 성공");
            const kakaoAccount = res.kakao_account;
            setKakaoEmail(`[kakao]${kakaoAccount.email}`);
            client.setUserEmail(`[kakao]${kakaoAccount.email}`);
            axios
              .post(`${URL}${EASY_AUTH}`, {
                email: kakaoEmail,
                password: idToken,
              })
              .then((res) => {
                console.log(res.data);
                res.data.isLogin
                  ? auth.setAutoLogin(res.data.isLogin)
                  : navigate(`${INPUT}`);
                res.data.isReady && navigate(`${URL}${INPUT}`);
              });
          },
          fail(err: any) {
            console.error(err);
          },
        });
      },
      fail(err: any) {
        console.error(err);
      },
    });
  };

  useEffect(() => {
    InitKakao();
  }, []);

  return (
    <div className={`flex flex-col h-full w-full items-center select-none`}>
      {/* 배경화면 부분 */}
      <div className="relative z-0 h-[64%] overflow-hidden">
        <img src={CoupleImg} alt="" />
        <div className="absolute z-10 left-0 right-0 top-0 bottom-0 bg-gradient-to-b via-transparent from-transparent to-white">
          {/* 글씨 부분 */}
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
        {/* 이메일 간편가입 이동 */}
        <Link
          to={SIGNUP}
          className="text-sm underline underline-offset-2 hover:text-blue-500"
        >
          이메일로 간편가입
        </Link>
        {/* 로그인 API 클릭 컴포넌트 */}
        <KakaoAPI onClick={kakaoLogin} />
        <FacebookAPI />
        <AppleAPI />
        <div className="flex flex-raw items-center justify-around w-full">
          <span className="ml-6 text-sm text-gray-500">
            이미 계정이 있으신가요?
          </span>
          <Link
            to={LOGIN}
            className="mr-6 text-left text-xs text-gray-700 underline underline-offset-2 hover:text-blue-500"
          >
            기존 회원 로그인
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EasyStartPage;
