import { SigninAnchor } from "@styles/indexStyle/indexAnchor";
import { KakaoBtn } from "@styles/indexStyle/indexBtn";
import { SigninParagraph } from "@styles/indexStyle/indexParagraph";
import { RiKakaoTalkFill } from "react-icons/ri";

const KakaoAPI = () => {
  const REST_API_KEY = "7322cb3ea2f99d8f6f701ca21958dfff";
  const REDIRECT_URL = "http://localhost:3050/auth/kakao/callback";
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URL}&response_type=code`;
  return (
    <SigninAnchor href={KAKAO_AUTH_URL}>
      <KakaoBtn>
        <RiKakaoTalkFill size="28" className="" />
        <SigninParagraph>카카오로 시작하기</SigninParagraph>
      </KakaoBtn>
    </SigninAnchor>
  );
};

export default KakaoAPI;
