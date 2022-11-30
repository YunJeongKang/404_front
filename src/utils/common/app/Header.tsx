import { BsBellFill } from "react-icons/bs";
import { HiOutlineChevronLeft } from "react-icons/hi";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex justify-between bg-blue-500 shadow-sm border py-1">
      <span className="text-2xl px-3 text-center font-bold font-eland text-white">
        After Like
      </span>
      <BsBellFill size="24" color="white" className="m-1 mx-2" />
    </header>
  );
};
export default Header;

export const SubHeader = () => {
  return (
    <header className="relative flex justify-center bg-blue-500 shadow-lg border py-1">
      <Link to="/" className="absolute left-2 top-2">
        <HiOutlineChevronLeft size="25" color="white" />
      </Link>
      <span className="text-2xl px-3 text-center font-bold font-eland text-white">
        After Like
      </span>
    </header>
  );
};
