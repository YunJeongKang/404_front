import { SignUpAnchor } from "@styles/indexStyle/indexAnchor";
import { SignUpBtn } from "@styles/indexStyle/indexBtn";
import { SignUpParagraph } from "@styles/indexStyle/indexParagraph";
import { FaFacebook } from "react-icons/fa";

const FacebookAPI = () => {
  return (
    <SignUpAnchor className="text-white">
      <SignUpBtn className="relative bg-facebook">
        <FaFacebook
          size="24"
          color="bg-facebook"
          className="absolute inline-block left-6"
        />
        <SignUpParagraph className="text-white">
          Facebook으로 시작하기
        </SignUpParagraph>
      </SignUpBtn>
    </SignUpAnchor>
  );
};

export default FacebookAPI;
