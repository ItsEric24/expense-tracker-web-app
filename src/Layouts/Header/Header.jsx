import logo from "./../../assets/logo/header-logo2.png";
import profile from "./../../assets/images/png-profile.png";
import { useSelector } from "react-redux";
import { useState } from "react";
import Logout from "../../components/Logout/Logout";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";

function Header() {
  const username = useSelector((state) => state.user.username);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="px-4 py-1 w-full relative bg-white shadow-sm">
      <div className="flex justify-between items-center p-4">
        <div className="flex items-center gap-1">
          <img className="w-[40px] h-[40px]" src={logo} alt="logo" />
          <h2 className="text-black font-bold font-nunito text-2xl">
            Trackify Dashboard
          </h2>
        </div>
        <div className="flex items-center gap-3">
          <img
            className="w-[70px] h-[70px] rounded-[30%]"
            src={profile}
            alt="profile"
          />
          <h3 className="text-black font-nunito font-semibold text-lg">
            Hi, {username}
          </h3>
          <MoreVertOutlinedIcon
            cursor="pointer"
            onClick={() => setIsOpen(!isOpen)}
          />
          {isOpen ? <Logout /> : null}
        </div>
      </div>
    </header>
  );
}
export default Header;
