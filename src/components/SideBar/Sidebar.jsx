import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PaymentsOutlinedIcon from "@mui/icons-material/PaymentsOutlined";
import DiamondOutlinedIcon from "@mui/icons-material/DiamondOutlined";

const data = [
  {
    id: 1,
    icon: <HomeOutlinedIcon />,
    name: "Home",
  },
  {
    id: 2,
    icon: <PaymentsOutlinedIcon />,
    name: "Income",
  },
  {
    id: 3,
    icon: <DiamondOutlinedIcon />,
    name: "Expenses",
  },
];

function Sidebar() {
  return (
    <div className="bg-white pt-10 px-5 w-[250px] flex flex-col gap-8 h-[100%] shadow-md rounded-md">
      {data.map((item) => (
        <div key={item.id} className="flex gap-5 items-center cursor-pointer">
          {item.icon}
          <span className="text-sm">{item.name}</span>
        </div>
      ))}
    </div>
  );
}
export default Sidebar;
