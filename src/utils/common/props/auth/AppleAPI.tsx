import { SigninAnchor } from "@styles/indexAnchor";
import { AppleBtn } from "@styles/indexBtn";
import { SigninParagraph } from "@styles/indexParagraph";
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
