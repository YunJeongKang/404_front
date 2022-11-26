import { BsBellFill } from "react-icons/bs";

const Header = () => {
  return (
    <header className="flex justify-between bg-blue-600 shadow-sm border py-1">
      <span
        className="text-2xl px-3 text-center font-bold text-white"
        style={{ fontFamily: "ELAND_Choice_M" }}
      >
        After Like
      </span>
      <BsBellFill size="24" color="white" className="m-1 mx-2" />
    </header>
  );
};

export default Header;
