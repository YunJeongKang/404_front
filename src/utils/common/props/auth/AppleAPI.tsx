import { SignUpAnchor } from "@styles/indexStyle/indexAnchor";
import { SignUpBtn } from "@styles/indexStyle/indexBtn";
import { SignUpParagraph } from "@styles/indexStyle/indexParagraph";
import { SiApple } from "react-icons/si";

const AppleAPI = () => {
  return (
    <SignUpAnchor className="text-white">
      <SignUpBtn className="relative bg-black">
        <SiApple
          size="24"
          color="white"
          className="absolute inline-block left-3"
        />
        <SignUpParagraph className="text-white">
          Apple로 시작하기
        </SignUpParagraph>
      </SignUpBtn>
    </SignUpAnchor>
  );
};

export default AppleAPI;
