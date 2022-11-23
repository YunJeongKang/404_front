import { SigninAnchor } from "@styles/indexStyle/indexAnchor";
import { FacebookBtn } from "@styles/indexStyle/indexBtn";
import { SigninParagraph } from "@styles/indexStyle/indexParagraph";
import { FaFacebook } from "react-icons/fa";

const FacebookAPI = () => {
  return (
    <SigninAnchor className="text-white">
      <FacebookBtn>
        <FaFacebook size="28" color="bg-facebook" />
        <SigninParagraph className="text-white">
          Facebook으로 시작하기
        </SigninParagraph>
      </FacebookBtn>
    </SigninAnchor>
  );
};

export default FacebookAPI;
