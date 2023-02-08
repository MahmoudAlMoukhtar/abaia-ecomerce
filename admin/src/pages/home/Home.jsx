import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
import {userData} from "../../dummyData";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import * as api from "../../api";
import {useEffect} from "react";
import {useState} from "react";
import moment from "moment";
const Home = () => {
  const [salesData, setSalesData] = useState();

  useEffect(() => {
    const makeRequest = async () => {
      const responseSales = await api.getMonthlyIncome();

      const mappedDate = responseSales.data.map(m => ({
        SalesProducts: m.total,
        name: moment(`${m._id}`, "M").format("MMM"),
      }));

      setSalesData(mappedDate);
      console.log(mappedDate);
    };
    makeRequest();
  }, []);
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart
        data={salesData}
        title="Sales Analytics"
        grid
        dataKey="SalesProducts"
      />
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
};
export default Home;
