/* eslint-disable react/prop-types */
import { PieChart } from "@mui/x-charts/PieChart";

function PieChartComponent({ data }) {
  const transformDataForPieChart = (backendData) => {
    return backendData.map((item) => ({
      id: item.id,
      label: item.name,
      value: item.price,
    }));
  };

  // Transform the data
  const pieChartData = transformDataForPieChart(data);
  return (
    <div className="bg-white pl-3 p-5 w-[800px] border-2 border-gray-100 rounded-2xl shadow-md">
      <h1 className="text-2xl font-bold font-nunito text-gray-500 mb-5">
        Spendings by category
      </h1>
      <PieChart width={700} height={250} series={[{ data: pieChartData }]} />
    </div>
  );
}
export default PieChartComponent;
