import { LineChart } from "@mui/x-charts/LineChart";
import { useEffect } from "react";
import { getChartData } from "../../utils/request";
import Cookies from "universal-cookie";
import { useState } from "react";
import { Loader } from "rsuite";

function Chart() {
  const [chartData, setChartData] = useState([]);
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const token = new Cookies().get("token");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getChartData(token);
        const chartData = new Array(7).fill(0);

        for (let i = 0; i < data.length; i++) {
          chartData[data[i]._id - 1] = data[i].total;
        }
        setChartData(chartData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [token]);
  return (
    <div className="bg-white pl-3 p-5 w-[800px] rounded-2xl shadow-md">
      {chartData.length === 0 ? (
        <Loader center content="Loading..." size="lg" />
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
