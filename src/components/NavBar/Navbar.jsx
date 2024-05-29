import logo from "./../../assets/logo/header-logo2.png";
import Cookies from "universal-cookie";
import { Link } from "react-router-dom";

function Navbar() {
  const token = new Cookies().get("token");
  return (
    <div className="flex justify-between items-center px-10 py-4">
      <div className="flex gap-4 p-4 items-center">
        <img src={logo} alt="logo-img" className="w-[40px]" />
        <h1 className="text-3xl text-black font-nunito font-bold">
          <Link to="/">Trackify</Link>
        </h1>
      </div>
      <div className="flex items-center gap-10 p-4">
        <Link
          to="/about"
          className="text-black text-base font-nunito font-semibold"
        >
          About Trackify?
        </Link>
        <Link
          to={token ? "/dashboard" : "/login"}
          className="py-3 px-8 bg-black text-white text-lg rounded-lg"
        >
          {token ? "Dashboard" : "Login"}
        </Link>
      </div>
    </div>
  );
}
export default Navbar;
