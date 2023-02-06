import React, {useEffect, useState} from "react";
import {BiShowAlt, BiHide} from "react-icons/bi";
import {useNavigate} from "react-router-dom";
import * as api from "../api/index";
//import {gapi} from "gapi-script";
//import {GoogleLogin} from "react-google-login";

const initialState = {
  fullName: "",
  email: "",
  password: "",
  mobileNumber: 0,
  confirmPassword: "",
};
const styles = {
  filed:
    "relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm",
};

const AuthRegister = () => {
  const [formData, setFormData] = useState(initialState);
  const [showPassword, setShowPassword] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const navigait = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();

    const {data} = await api.signup(formData);
    localStorage.setItem("userEcommerce", JSON.stringify(data));
    const response = await api.createCart();
    navigait("/");
  };
  const handleTextFieldChange = e => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const switchMode = () => {
    setIsSignup(!isSignup);
  };

  return (
    <div className="flex flex-col justify-center items-center text-end">
      <div>
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
          حساب جديد
        </h2>
        <div className="flex justify-center items-center gap-2 text-gray-400 tracking-[-3px] ">
          <div className="w-20 h-[2px] bg-gray-400" />
          {"///"}
          <div className="w-20 h-[2px] bg-gray-400" />
        </div>
      </div>
      <form
        className="mt-8 w-[800px] bg-gray-100 p-10 rounded-lg flex flex-col gap-6"
        action="#"
        method="POST"
        onSubmit={handleSubmit}
      >
        <input
          id="firstName"
          name="firstName"
          type="text"
          required
          className={styles.filed}
          placeholder="First Name"
          onChange={handleTextFieldChange}
        />
        <input
          id="lastName"
          name="lastName"
          type="text"
          required
          className={styles.filed}
          placeholder="Last Name"
          onChange={handleTextFieldChange}
        />

        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          className={styles.filed}
          placeholder="Email"
          onChange={handleTextFieldChange}
        />
        <input
          id="mobileNumber"
          name="mobileNumber"
          type="mobileNumber"
          autoComplete="mobileNumber"
          required
          className={styles.filed}
          placeholder="Mobile Number"
          onChange={handleTextFieldChange}
        />

        <div className="flex gap-2 items-center appearance-none rounded-none rounded-b-md border border-gray-300">
          <input
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            autoComplete="current-password"
            required
            className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            placeholder="Password"
            onChange={handleTextFieldChange}
          />
          {!showPassword ? (
            <BiShowAlt
              onClick={() => setShowPassword(!showPassword)}
              className="cursor-pointer "
              size={20}
            />
          ) : (
            <BiHide
              onClick={() => setShowPassword(!showPassword)}
              className="cursor-pointer "
              size={20}
            />
          )}
        </div>

        <div className="flex gap-2 items-center appearance-none rounded-none rounded-b-md border border-gray-300">
          <input
            id="confirmPassword"
            name="confirmPassword"
            type={showPassword ? "text" : "password"}
            autoComplete="current-password"
            required
            className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            placeholder="Confirm Password"
            onChange={handleTextFieldChange}
          />
          {!showPassword ? (
            <BiShowAlt
              onClick={() => setShowPassword(!showPassword)}
              className="cursor-pointer "
              size={20}
            />
          ) : (
            <BiHide
              onClick={() => setShowPassword(!showPassword)}
              className="cursor-pointer "
              size={20}
            />
          )}
        </div>

        <div>
          <button
            type="submit"
            className="group relative flex w-full justify-center rounded-md border border-transparent bg-black py-2 px-4 text-sm font-medium text-white hover:bg-black focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            إنشاء حساب
          </button>
        </div>
      </form>
    </div>
  );
};

export default AuthRegister;
