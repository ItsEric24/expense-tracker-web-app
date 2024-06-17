import { BarChart } from "@mui/x-charts/BarChart";
import { useSelector } from "react-redux";
import { Skeleton } from "@mui/material";

function Chart() {
  const { chartData, status } = useSelector((state) => state.chart);

  // Generate labels and data points from chartData
  const labels = chartData.map((item) => item.label);
  const dataPoints = chartData.map((item) => item.total);

  return (
    <div className="bg-white pl-3 p-5 w-[800px] border-2 border-gray-100 rounded-2xl shadow-md">
      <h1 className="text-2xl font-bold font-nunito text-gray-500">
        Total Monthly Spendings
      </h1>
      {status === "loading" ? (
        <Skeleton
          variant="rectangular"
          sx={{ bgcolor: "white" }}
          width={800}
          height={380}
        />
      ) : (
        <div className="w-full p-2 flex flex-col gap-2">
          <BarChart
            xAxis={[{ scaleType: "band", data: labels }]}
            series={[{ data: dataPoints }]}
            width={800}
            height={400}
          />
        </div>
      )}
    </div>
  );
}

export default Chart;
