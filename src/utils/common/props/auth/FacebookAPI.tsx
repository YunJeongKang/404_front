import { SigninAnchor } from "@styles/indexAnchor";
import { FacebookBtn } from "@styles/indexBtn";
import { SigninParagraph } from "@styles/indexParagraph";
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
