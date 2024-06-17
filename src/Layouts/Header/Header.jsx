import logo from "./../../assets/logo/header-logo2.png";
import profile from "./../../assets/images/png-profile.png";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import Logout from "../../components/Logout/Logout";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import { changeCurrency } from "../../features/user/userSlice";

function Header() {
  const { username, currency } = useSelector((state) => state.user);
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(changeCurrency(event.target.value));
  };
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
          <div className="flex items-center gap-3">
            <p className="text-black font-nunito font-semibold">Currency: </p>
            <select
              name="currency"
              value={currency}
              onChange={handleChange}
              className="text-black outline-none border border-gray-300 py-1 px-3 rounded-md font-nunito font-semibold"
            >
              <option value="USD">USD</option>
              <option value="INR">INR</option>
              <option value="EUR">EUR</option>
              <option value="JPY">JPY</option>
              <option value="KES">KES</option>
              <option value="CNY">CNY</option>
              <option value="GBP">GBP</option>
              <option value="AUD">AUD</option>
              <option value="CAD">CAD</option>
              <option value="RUB">RUB</option>
              <option value="BRL">BRL</option>
              <option value="TRY">TRY</option>
              <option value="ZAR">ZAR</option>
            </select>
          </div>
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
