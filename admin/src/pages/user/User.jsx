// import {
//   CalendarToday,
//   LocationSearching,
//   MailOutline,
//   PermIdentity,
//   PhoneAndroid,
//   Publish,
// } from "@material-ui/icons";
import {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import * as api from "../../api/index";
import {HiOutlineMail, HiOutlineLocationMarker} from "react-icons/hi";
import {HiDevicePhoneMobile} from "react-icons/hi2";
import "./user.css";

export default function User() {
  const {userId} = useParams();
  const [userData, setuserData] = useState();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await api.fetchUserById(userId);
        setuserData(res.data);
        console.log(res.data);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    makeRequest();
  }, []);

  const handleUpdate = async e => {
    e.preventDefault();
    const resUserUpdated = await api.updateUserById(userId, userData);
    setuserData(resUserUpdated.data);
  };

  if (error) return <h1 className="text-red-800">error</h1>;
  if (loading) return <h1 className="text-red-800">Loading</h1>;
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
        <Link to="/newUser">
          <button className="userAddButton">Create</button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img
              src={
                userData.image
                  ? User.image
                  : "/depositphotos_137014128-stock-illustration-user-profile-icon.jpg"
              }
              alt=""
              className="userShowImg"
            />
            <div className="userShowTopTitle">
              <span className="userShowUsername">{userData.fullName}</span>
              <span className="userShowUserTitle">Software Engineer</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Account Details</span>
            <div className="userShowInfo">
              <span className="userShowInfoTitle">
                {userData.firstName + " " + userData.lastName}
              </span>
            </div>
            <div className="userShowInfo">
              <span className="userShowInfoTitle">{userData._id}</span>
            </div>
            <span className="userShowTitle">Contact Details</span>
            <div className="userShowInfo">
              <HiDevicePhoneMobile />
              <span className="userShowInfoTitle">{userData.mobileNumber}</span>
            </div>
            <div className="userShowInfo">
              <HiOutlineMail />
              <span className="userShowInfoTitle">{userData.email}</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>First Name</label>
                <input
                  type="text"
                  placeholder="annabeck99"
                  className="userUpdateInput"
                  onChange={e =>
                    setuserData({...userData, firstName: e.target.value})
                  }
                />
              </div>
              <div className="userUpdateItem">
                <label>Last Name</label>
                <input
                  type="text"
                  placeholder="Anna Becker"
                  className="userUpdateInput"
                  onChange={e =>
                    setuserData({...userData, lastName: e.target.value})
                  }
                />
              </div>
              <div className="userUpdateItem">
                <label>Email</label>
                <input
                  type="text"
                  placeholder="annabeck99@gmail.com"
                  className="userUpdateInput"
                  onChange={e =>
                    setuserData({...userData, email: e.target.value})
                  }
                />
              </div>
              <div className="userUpdateItem">
                <label>Phone</label>
                <input
                  type="text"
                  placeholder="+1 123 456 67"
                  className="userUpdateInput"
                  onChange={e =>
                    setuserData({...userData, mobileNumber: e.target.value})
                  }
                />
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img
                  className="userUpdateImg"
                  src={
                    userData.image
                      ? User.image
                      : "/depositphotos_137014128-stock-illustration-user-profile-icon.jpg"
                  }
                  alt=""
                />
                <label htmlFor="file"></label>
                <input type="file" id="file" style={{display: "none"}} />
              </div>
              <button className="userUpdateButton" onClick={handleUpdate}>
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

/* 
<PermIdentity className="userShowIcon" />
<CalendarToday className="userShowIcon" />
<PhoneAndroid className="userShowIcon" />
<MailOutline className="userShowIcon" />
<LocationSearching className="userShowIcon" />
<Publish className="userUpdateIcon" />
*/

/* 
 <div className="userShowInfo">
              <HiOutlineLocationMarker />
              <span className="userShowInfoTitle">{userData.city}</span>
            </div>
*/
/* 
<div className="userUpdateItem">
                <label>Address</label>
                <input
                  type="text"
                  placeholder="New York | USA"
                  className="userUpdateInput"
                />
              </div>
*/
