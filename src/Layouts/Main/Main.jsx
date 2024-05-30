import Card from "../../components/Card/Card";
import { useSelector } from "react-redux";
import { Skeleton } from "@mui/material";

function Main() {
  const { mainData, status } = useSelector((state) => state.main);

  return (
    <div className="w-full">
      {status === "loading" ? (
        <Skeleton
          variant="rectangular"
          sx={{ bgcolor: "white", borderRadius: "10px" }}
          width={1200}
          height={150}
        />
      ) : (
        <div className="flex items-center gap-5">
          {mainData.map((item) => (
            <Card key={item.id} name={item.name} price={item.price} />
          ))}
        </div>
      )}
    </div>
  );
}
export default Main;
