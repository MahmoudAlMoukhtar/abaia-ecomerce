import {useEffect, useState} from "react";
import * as api from "../../api/index";
import {useHistory} from "react-router-dom";
import "./featuredInfo.css";
//import { ArrowDownward, ArrowUpward } from "@material-ui/icons";

export default function FeaturedInfo() {
  const [data, setDataUsers] = useState();
  const [dataOrders, setDataOrders] = useState();
  const [dataSales, setDataSales] = useState();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useHistory();
  useEffect(() => {
    const makeRequest = async () => {
      try {
        const responseUser = await api.fetchAllUsers();
        setDataUsers(responseUser.data);
        const responseOrders = await api.fetchAllOrders();
        setDataOrders(responseOrders.data);
        const responseSales = await api.getMonthlyIncome();

        setDataSales(responseSales.data);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    makeRequest();
  }, []);

  if (error) return <h1 className="text-red-800">error</h1>;
  if (loading) return <h1 className="text-red-800">Loading</h1>;
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">USERS</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">{data.length}</span>
          <span className="featuredMoneyRate">+11.4</span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">ORDERS</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">{dataOrders.length}</span>
          <span className="featuredMoneyRate">-11.4</span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Revanue</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2,415</span>
          <span className="featuredMoneyRate">-11.4</span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Sales</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">${dataSales[0].total}</span>
          <span className="featuredMoneyRate">-1.4</span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
    </div>
  );
}
/* 
<ArrowUpward className="featuredIcon" />
<ArrowDownward className="featuredIcon negative" />
<ArrowDownward className="featuredIcon negative" />
*/

/* 
<div className="featuredItem">
        <span className="featuredTitle">Cost</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2,225</span>
          <span className="featuredMoneyRate">+2.4</span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
*/
