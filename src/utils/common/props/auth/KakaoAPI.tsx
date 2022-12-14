import { SignUpAnchor } from "@styles/indexStyle/indexAnchor";
import { SignUpBtn } from "@styles/indexStyle/indexBtn";
import { SignUpParagraph } from "@styles/indexStyle/indexParagraph";
import { RiKakaoTalkFill } from "react-icons/ri";

interface KakaoAPIInterface {
  href?: string;
  onClick: () => void;
}

const KakaoAPI = ({ href, onClick }: KakaoAPIInterface) => {
  return (
    <SignUpAnchor href={href}>
      <SignUpBtn className="relative bg-kakao" onClick={onClick}>
        <RiKakaoTalkFill
          size="24"
          className="absolute inline-block bg-kakao left-6"
        />
        <SignUpParagraph>카카오로 시작하기</SignUpParagraph>
      </SignUpBtn>
    </SignUpAnchor>
  );
};

export default KakaoAPI;
