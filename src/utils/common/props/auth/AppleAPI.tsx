import { SigninAnchor } from "@styles/indexStyle/indexAnchor";
import { AppleBtn } from "@styles/indexStyle/indexBtn";
import { SignUpParagraph } from "@styles/indexStyle/indexParagraph";
import { SiApple } from "react-icons/si";

const AppleAPI = () => {
  return (
    <SigninAnchor className="text-white">
      <AppleBtn>
        <SiApple size="24" color="white" />
        <SignUpParagraph className="text-white">
          Apple로 시작하기
        </SignUpParagraph>
      </AppleBtn>
    </SigninAnchor>
  );
};

export default AppleAPI;
