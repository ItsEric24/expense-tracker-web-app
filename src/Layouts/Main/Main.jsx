import Card from "../../components/Card/Card";
import Chart from "../../components/Chart/Chart";
import { useSelector } from "react-redux";
import { Skeleton } from "@mui/material";

function Main() {
  const { mainData, status } = useSelector((state) => state.main);

  return (
    <div className="flex flex-col w-full gap-8 items-center">
      {status === "loading" ? (
        <Skeleton
          variant="rectangular"
          sx={{ bgcolor: "white", borderRadius: "10px" }}
          width={800}
          height={380}
        />
      ) : (
        <div className="flex items-center gap-5">
          {mainData.map((item) => (
            <Card key={item.id} name={item.name} price={item.price} />
          ))}
        </div>
      )}
      <Chart />
    </div>
  );
}
export default Main;
