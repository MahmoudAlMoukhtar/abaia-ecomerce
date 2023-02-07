import "./sidebar.css";
// import {
//   LineStyle,
//   Timeline,
//   TrendingUp,
//   PermIdentity,
//   Storefront,
//   AttachMoney,
//   BarChart,
//   MailOutline,
//   DynamicFeed,
//   ChatBubbleOutline,
//   WorkOutline,
//   Report,
// } from "@material-ui/icons";
import {Link} from "react-router-dom";

export default function Sidebar({theme, selectTheme}) {
  return (
    <div
      className={theme === "black" ? "sidebar bg-zinc-800" : "sidebar bg-white"}
    >
      <div
        className={
          theme === "black"
            ? "sidebarWrapper bg-zinc-800"
            : "sidebarWrapper bg-white"
        }
      >
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
              <li className="sidebarListItem active">Home</li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <Link to="/users" className="link">
              <li className="sidebarListItem">Users</li>
            </Link>
            <Link to="/products" className="link">
              <li className="sidebarListItem">Products</li>
            </Link>
            <Link to="/oreders" className="sidebarListItem">
              Orders
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">Mail</li>
            <li className="sidebarListItem">Feedback</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

/* 

<LineStyle className="sidebarIcon" />
<Timeline className="sidebarIcon" />
<TrendingUp className="sidebarIcon" />
<PermIdentity className="sidebarIcon" />
<Storefront className="sidebarIcon" />
<AttachMoney className="sidebarIcon" />
<BarChart className="sidebarIcon" />
<MailOutline className="sidebarIcon" />
<DynamicFeed className="sidebarIcon" />
<ChatBubbleOutline className="sidebarIcon" />
<WorkOutline className="sidebarIcon" />
<Timeline className="sidebarIcon" />
<Report className="sidebarIcon" />
*/
/* 
            <li className="sidebarListItem">Transactions</li>

*/
/* 
 <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">Manage</li>
            <li className="sidebarListItem">Analytics</li>
          </ul>
        </div>

*/
/* 
            <li className="sidebarListItem">Messages</li>
<li className="sidebarListItem">Reports</li>
*/

/* 


            <li className="sidebarListItem">Analytics</li>
            <li className="sidebarListItem">Sales</li>
*/
