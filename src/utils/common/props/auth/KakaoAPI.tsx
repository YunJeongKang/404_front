import { SigninAnchor } from "@styles/indexStyle/indexAnchor";
import { KakaoBtn } from "@styles/indexStyle/indexBtn";
import { SignUpParagraph } from "@styles/indexStyle/indexParagraph";
import { RiKakaoTalkFill } from "react-icons/ri";

const KakaoAPI = () => {
  const REST_API_KEY = "7322cb3ea2f99d8f6f701ca21958dfff";
  const REDIRECT_URL = "http://localhost:3000/auth/kakao/callback";
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URL}&response_type=code`;
  return (
    <SigninAnchor href={KAKAO_AUTH_URL}>
      <KakaoBtn>
        <RiKakaoTalkFill size="24" className="" />
        <SignUpParagraph>카카오로 시작하기</SignUpParagraph>
      </KakaoBtn>
    </SigninAnchor>
  );
};

export default KakaoAPI;
