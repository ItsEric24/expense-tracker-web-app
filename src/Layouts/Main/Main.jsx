import { useEffect } from "react";
import Card from "../../components/Card/Card";
import Chart from "../../components/Chart/Chart";
import Cookies from "universal-cookie";
import { useSelector } from "react-redux";
import { getTotalAmount } from "../../utils/request";
import { useState } from "react";
import { Loader } from "rsuite";

function Main() {
  const token = new Cookies().get("token");
  const { userId } = useSelector((state) => state.user);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const categories = ["food", "bills", "entertainment"];
      const totalData = [];
      try {
        for (let i = 0; i < categories.length; i++) {
          const totalAmount = await getTotalAmount(
            token,
            userId,
            categories[i]
          );
          totalData.push({
            id: i + 1,
            name:
              categories[i].charAt(0).toUpperCase() + categories[i].slice(1),
            price: totalAmount.totalAmount,
          });
        }
        setData(totalData);
      } catch (error) {
        console.error("Error fetching total amount:", error);
      }
    };
    fetchData();
  }, [token, userId]);
  return (
    <div className="flex flex-col gap-8 items-center">
      {data.length === 0 ? (
        <Loader content="Loading..." size="md" />
      ) : (
        <div className="flex items-center gap-5">
          {data.map((item) => (
            <Card
              key={item.id}
              name={item.name || "Total Amount"}
              price={item.price || 0}
            />
          ))}
        </div>
      )}
      <Chart />
    </div>
  );
}
export default Main;
