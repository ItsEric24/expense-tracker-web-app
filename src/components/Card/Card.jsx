/* eslint-disable react/prop-types */
import FastfoodOutlinedIcon from "@mui/icons-material/FastfoodOutlined";
import LiveTvOutlinedIcon from "@mui/icons-material/LiveTvOutlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import DirectionsCarFilledOutlinedIcon from "@mui/icons-material/DirectionsCarFilledOutlined";
import { useSelector } from "react-redux";

function Card({ name, price }) {
  const currency = useSelector((state) => state.user.currency);
  function selectIcon() {
    switch (name) {
      case "Food":
        return (
          <FastfoodOutlinedIcon style={{ fontSize: "30px", opacity: "0.5" }} />
        );
      case "Bills":
        return (
          <AttachMoneyOutlinedIcon
            style={{ fontSize: "30px", opacity: "0.5" }}
          />
        );
      case "Entertainment":
        return (
          <LiveTvOutlinedIcon style={{ fontSize: "30px", opacity: "0.5" }} />
        );
      case "Luxuries":
        return (
          <DirectionsCarFilledOutlinedIcon
            style={{ fontSize: "30px", opacity: "0.5" }}
          />
        );
      default:
        return null;
    }
  }
  const icon = selectIcon();
  const formatedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency,
    maximumSignificantDigits: 3,
  });
  return (
    <div className="bg-white p-8 w-full shadow-md border-2 border-gray-100 rounded-2xl">
      <div className="flex flex-col gap-3">
        <span className="text-sm text-gray-500 flex justify-between items-center">
          <p className="flex items-center text-base font-nunito font-semibold gap-3">
            {name}
          </p>
          {icon}
        </span>
        <h3 className="font-bold text-xl font-nunito">
          {formatedPrice.format(price)}
        </h3>
      </div>
    </div>
  );
}
export default Card;
