import Navlist from "./navlist";
import logo from "../../assets/Logo.png";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="w-full text-lg px-4 flex justify-between h-14 items-center border-b border-black/15">
      <Link to={"/"} className="gap-x-6 flex items-center">
        <img className="w-14 h-11" src={logo} alt="" />
        <div className="font-bold">Jobby</div>
      </Link>
      <Navlist data={["Post Job", "Company Review", "About Us"]} />
      <Link
        to={"/login"}
        className="rounded-full  border-yellow-400/70 p-2 border flex justify-items-center items-center"
      >
        sign i
      </Link>
    </div>
  );
};

export default NavBar;
