import {useEffect, useState} from "react";
import "./widgetSm.css";
import {useHistory, Link} from "react-router-dom";
import * as api from "../../api/index";

// import { Visibility } from "@material-ui/icons";

const UserCard = ({user}) => (
  <li className="widgetSmListItem">
    <img
      src={
        user.image
          ? user.image
          : "/depositphotos_137014128-stock-illustration-user-profile-icon.jpg"
      }
      alt=""
      className="widgetSmImg"
    />
    <div className="widgetSmUser">
      <span className="widgetSmUsername">{user.firstName}</span>
      <span className="widgetSmUserTitle">{user.mobileNumber}</span>
    </div>
    <Link
      to={`/user/${user._id}`}
      className="widgetSmButton hover:bg-green-600 hover:text-white"
    >
      Display
    </Link>
  </li>
);

export default function WidgetSm() {
  const [data, setDataUsers] = useState();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useHistory();
  useEffect(() => {
    const makeRequest = async () => {
      try {
        const response = await api.fetchAllUsers();
        const sortedUsers = response.data.sort((a, b) => {
          if (a?.createdAt > b?.createdAt) {
            return -1;
          } else if (a?.createdAt < b?.createdAt) {
            return 1;
          } else {
            return 0;
          }
        });
        setDataUsers(sortedUsers);
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
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        {data.map(user => <UserCard user={user} key={user._id} />).slice(0, 6)}
      </ul>
    </div>
  );
}

/* 
<Visibility className="widgetSmIcon" />
*/
