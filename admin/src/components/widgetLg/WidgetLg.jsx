import {useEffect, useState} from "react";
import {useHistory} from "react-router-dom";
import * as api from "../../api/index";
import "./widgetLg.css";
import moment from "moment";
export default function WidgetLg() {
  const [data, setDataUsers] = useState();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useHistory();
  useEffect(() => {
    const makeRequest = async () => {
      try {
        const response = await api.fetchAllOrders();
        setDataUsers(response.data);
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
  const Button = ({type}) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Product</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
        </tr>

        {data.map(order => (
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <span className="widgetLgName text-xs">{order.Username}</span>
            </td>
            <td className="widgetLgStatus">
              <Button type={order.nameProduct} />
            </td>
            <td className="widgetLgDate text-xs">
              {moment(order.createdAt).format("YYYY-MM-DD")}
            </td>
            <td className="widgetLgAmount">{order.price}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}
