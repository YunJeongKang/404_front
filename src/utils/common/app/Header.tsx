import PATH from "@utils/routes/PATH";
import { AiOutlineClose } from "react-icons/ai";
import { BsBellFill } from "react-icons/bs";
import { HiOutlineChevronLeft } from "react-icons/hi";
import { Link } from "react-router-dom";

const { HOME, USER, LIKE, LIKE_YOU } = PATH;

const Header = () => {
  return (
    <header className="flex justify-between bg-blue-500 shadow-sm border py-1">
      <span className="text-2xl px-3 text-center font-bold font-eland text-white">
        After Like
      </span>
      <BsBellFill size="24" color="white" className="m-1 mx-2 cursor-pointer" />
    </header>
  );
};
export default Header;

export const SubHeader = () => {
  return (
    <header
      className={`relative flex justify-center shadow-lg border py-1 ${
        location.pathname === LIKE || location.pathname === LIKE_YOU
          ? "bg-white"
          : "bg-blue-500"
      }`}
    >
      <Link
        to={location.pathname === LIKE_YOU ? USER : HOME}
        className="absolute left-2 top-2"
      >
        {location.pathname === LIKE || location.pathname === LIKE_YOU ? (
          <HiOutlineChevronLeft size="25" />
        ) : (
          <HiOutlineChevronLeft size="25" color="white" />
        )}
      </Link>
      <span
        className={`${
          location.pathname === LIKE || location.pathname === LIKE_YOU
            ? "text-xl py-0.5 text-black"
            : "text-2xl text-white"
        } px-3 text-center font-bold font-eland `}
      >
        {location.pathname === LIKE
          ? "내가 받은 관심"
          : location.pathname === LIKE_YOU
          ? "보낸 관심표현 목록"
          : "After Like"}
      </span>
    </header>
  );
};

export const ModifyHeader = () => {
  return (
    <header className="relative flex justify-center bg-white shadow-lg border py-1">
      <Link to={USER} className="absolute left-2 top-2">
        <AiOutlineClose size="25" color="black" />
      </Link>
      <span className="text-xl pt-1 text-center font-bold font-eland text-black">
        프로필 정보
      </span>
    </header>
  );
};
