import { LineChart } from "@mui/x-charts/LineChart";
import { useSelector, useDispatch } from "react-redux";
import { Skeleton } from "@mui/material";
import { useEffect } from "react";
import Cookies from "universal-cookie";
import { fetchChartData } from "../../features/chart/chartDataSlice";

function Chart() {
  const chartData = useSelector((state) => state.chart.data);
  const status = useSelector((state) => state.chart.status);
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const dispatch = useDispatch();
  const token = new Cookies().get("token");

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchChartData({ token }));
    }
  }, [status, dispatch, token]);

  return (
    <div className="bg-white pl-3 p-5 w-[860px] rounded-2xl shadow-md">
      <h1 className="text-2xl font-bold font-nunito text-gray-500">
        Weekly spendings
      </h1>
      {status === "loading" ? (
        <Skeleton
          variant="rectangular"
          sx={{ bgcolor: "white" }}
          width={800}
          height={380}
        />
      ) : (
        <LineChart
          xAxis={[
            {
              data: days,
              scaleType: "band",
            },
          ]}
          series={[{ data: chartData }]}
          width={800}
          height={380}
        />
      )}
    </div>
  );
}

export default Chart;
