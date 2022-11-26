import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { AiFillHome, AiOutlineHome } from "react-icons/ai";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { RiChat1Line, RiChat1Fill } from "react-icons/ri";
import {
  HiBadgeCheck,
  HiOutlineBadgeCheck,
  HiUser,
  HiOutlineUser,
} from "react-icons/hi";
import PATH from "@utils/routes/PATH";

const Footer = () => {
  const { HOME, LIKE, RECOMMEND, CHAT, USER } = PATH;
  const location = useLocation();

  return (
    <footer>
      <nav className="flex flex-row bg-white justify-center gap-14 border shadow-md py-2 ">
        <Link to={HOME}>
          {location.pathname === HOME ? (
            <AiFillHome size="30" />
          ) : (
            <AiOutlineHome size="30" />
          )}
        </Link>
        <Link to={LIKE}>
          {location.pathname === LIKE ? (
            <FaHeart size="30" />
          ) : (
            <FaRegHeart size="30" />
          )}
        </Link>
        <Link to={RECOMMEND}>
          {location.pathname === RECOMMEND ? (
            <HiBadgeCheck size="30" />
          ) : (
            <HiOutlineBadgeCheck size="30" />
          )}
        </Link>
        <Link to={CHAT}>
          {location.pathname === CHAT ? (
            <RiChat1Fill size="30" />
          ) : (
            <RiChat1Line size="30" />
          )}
        </Link>
        <Link to={USER}>
          {location.pathname === USER ? (
            <HiUser size="30" />
          ) : (
            <HiOutlineUser size="30" />
          )}
        </Link>
      </nav>
    </footer>
  );
};

export default Footer;
