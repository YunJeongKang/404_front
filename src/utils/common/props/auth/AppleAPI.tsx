import { SigninAnchor } from "@styles/indexStyle/indexAnchor";
import { AppleBtn } from "@styles/indexStyle/indexBtn";
import { SigninParagraph } from "@styles/indexStyle/indexParagraph";
import { SiApple } from "react-icons/si";

const AppleAPI = () => {
  return (
    <SigninAnchor className="text-white">
      <AppleBtn>
        <SiApple size="28" color="white" />
        <SigninParagraph className="text-white">
          Apple로 로그인 하기
        </SigninParagraph>
      </AppleBtn>
    </SigninAnchor>
  );
};

export default AppleAPI;
