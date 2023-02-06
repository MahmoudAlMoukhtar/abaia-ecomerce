import React, {useEffect, useState} from "react";
import {BiShowAlt, BiHide} from "react-icons/bi";
import {NavLink, Route, Routes, useNavigate} from "react-router-dom";
import {IoPersonOutline} from "react-icons/io5";
import {BsArrowRightShort} from "react-icons/bs";
import MyData from "./MyData";
import MyAddress from "./MyAddress";
import MyOrders from "./MyOrders";
import MyFeedBack from "./MyFeedback";
import MyPasswordChange from "./MyPasswordChange";
import jwt_decode from "jwt-decode";

const styles = {
  navLink:
    "flex justify-end gap-2 items-center py-4 border-b-[0.5px] border-gray-600 w-full pr-2",
  filed:
    "relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm",
};

const Profile = () => {
  const user = jwt_decode(
    JSON.parse(localStorage.getItem("userEcommerce")).token
  );
  console.log(user);
  const [formData, setFormData] = useState(user);
  const [isSignup, setIsSignup] = useState(false);
  const navigait = useNavigate();

  // const handleSubmit = async e => {

  // };
  const handleTextFieldChange = e => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const switchMode = () => {
    setIsSignup(!isSignup);
  };

  return (
    <div className="flex flex-col items-center text-end">
      <div className="flex flex-col gap-2">
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
          معلوماتك الشخصية
        </h2>
        <div className="flex justify-center items-center gap-2 text-gray-400 tracking-[-3px] ">
          <div className="w-20 h-[2px] bg-gray-400" />
          {"///"}
          <div className="w-20 h-[2px] bg-gray-400" />
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:items-start rounded text-end p-8 lg:p-20 bg-gray-100 rounded-lg w-full ">
        <div className="w-full max-w-md space-y-8">
          <Routes>
            <Route path="" element={<MyData user={user} />} />
            <Route path="myAddress" element={<MyAddress user={user} />} />
            <Route path="myOrders" element={<MyOrders user={user} />} />
            <Route
              path="myPasswordChange"
              element={<MyPasswordChange user={user} />}
            />
            <Route path="myfeedbacks" element={<MyFeedBack user={user} />} />
          </Routes>
        </div>
        <div>
          <section className="flex flex-col justify-center items-center gap-4 bg-black p-4 pr-0 text-white w-80">
            <div className="flex flex-col justify-end items-end gap-4 p-4 pr-0 text-white w-full">
              <NavLink
                to={"/account"}
                className={
                  "flex justify-between w-full items-center hover:border-r-4 border-white transtion duration-100"
                }
              >
                <BsArrowRightShort />
                <div className={styles.navLink}>
                  البيانات الشخصية
                  <IoPersonOutline />
                </div>
              </NavLink>
              <NavLink
                to={"/account/myAddress"}
                className={
                  "flex justify-between w-full items-center hover:border-r-4 border-white transtion duration-100"
                }
              >
                <BsArrowRightShort />
                <div className={styles.navLink}>
                  عناويني
                  <IoPersonOutline />
                </div>
              </NavLink>
              <NavLink
                to={"/account/myOrders"}
                className={
                  "flex justify-between w-full items-center hover:border-r-4 border-white transtion duration-100"
                }
              >
                <BsArrowRightShort />
                <div className={styles.navLink}>
                  طلباتي
                  <IoPersonOutline />
                </div>
              </NavLink>
              <NavLink
                to={"/"}
                className={
                  "flex justify-between w-full items-center hover:border-r-4 border-white transtion duration-100"
                }
              >
                <BsArrowRightShort />
                <div className={styles.navLink}>
                  نقاط المكافئة
                  <IoPersonOutline />
                </div>
              </NavLink>
              <NavLink
                to={"/account/myPasswordChange"}
                className={
                  "flex justify-between w-full items-center hover:border-r-4 border-white transtion duration-100"
                }
              >
                <BsArrowRightShort />
                <div className={styles.navLink}>
                  تغيير كلمة المرور
                  <IoPersonOutline />
                </div>
              </NavLink>
              <NavLink
                to={"/account/myfeedbacks"}
                className={
                  "flex justify-between w-full items-center hover:border-r-4 border-white transtion duration-100"
                }
              >
                <BsArrowRightShort />
                <div className={styles.navLink}>
                  تقييماتي
                  <IoPersonOutline />
                </div>
              </NavLink>
            </div>
            <button
              className="bg-white py-2 px-6 text-red-600 text-center rounded-lg"
              onClick={() => {
                localStorage.removeItem("userEcommerce");
                navigait("/");
              }}
            >
              تسجيل خروج
            </button>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Profile;
