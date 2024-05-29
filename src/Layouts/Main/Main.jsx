import Card from "../../components/Card/Card";
import Chart from "../../components/Chart/Chart";
import { useSelector, useDispatch } from "react-redux";
import { Skeleton } from "@mui/material";
import { useEffect } from "react";
import { fetchMainData } from "../../features/main/mainSlice";
import Cookies from "universal-cookie";

function Main() {
  const { data, status } = useSelector((state) => state.main);
  const dispatch = useDispatch();
  const token = new Cookies().get("token");
  const { userId } = useSelector((state) => state.user);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchMainData({ token, userId }));
    }
  }, [status, dispatch, token, userId]);

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
          {data.map((item) => (
            <Card key={item.id} name={item.name} price={item.price} />
          ))}
        </div>
      )}
      <Chart />
    </div>
  );
}
export default Main;
