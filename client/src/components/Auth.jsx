import React, {useEffect, useState} from "react";
import {BiShowAlt, BiHide} from "react-icons/bi";
import {Navigate, useNavigate} from "react-router-dom";
import * as api from "../api/index";

const initialState = {
  fullName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const Auth = () => {
  const user = JSON.parse(localStorage.getItem("userEcommerce"));

  const [formData, setFormData] = useState(initialState);
  const [showPassword, setShowPassword] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const navigait = useNavigate();
  if (user) {
    return <Navigate to="/account" replace />;
  }
  const handleSubmit = async e => {
    e.preventDefault();
    const res = await api.signin(formData);
    localStorage.setItem("userEcommerce", JSON.stringify(res.data));
    navigait("/");
  };
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
          ! مرحبا. يرجى تسجيل الدخول
        </h2>
        <div className="flex justify-center items-center gap-2 text-gray-400 tracking-[-3px] ">
          <div className="w-20 h-[2px] bg-gray-400" />
          {"///"}
          <div className="w-20 h-[2px] bg-gray-400" />
        </div>
      </div>
      <div className="flex justify-between items-center rounded text-end p-20 bg-gray-100 rounded-lg w-full mx-20">
        <div className="w-full max-w-md space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              {isSignup ? "إنشاء حساب" : "لديك حساب"}
            </h2>
          </div>
          <form
            className="mt-8 space-y-6"
            action="#"
            method="POST"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="remember" defaultValue="true" />
            <div className=" rounded-md shadow-sm">
              {isSignup && (
                <div>
                  <label htmlFor="fullName" className="">
                    Full Name
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    required
                    className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    placeholder="First Name"
                    onChange={handleTextFieldChange}
                  />
                </div>
              )}
              <div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Email"
                  onChange={handleTextFieldChange}
                />
              </div>
              <div className="flex flex-col">
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
                {isSignup && (
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
                )}
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-[#214252] hover:text-[#214252]"
                >
                  نسيت كلمة المرور؟
                </a>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-black py-2 px-4 text-sm font-medium text-white hover:bg-black focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                {isSignup ? "إنشاء حساب" : "تسجيل دخول"}
              </button>
            </div>

            <div className="group relative flex w-full justify-center rounded-md border border-transparent py-2 px-4 text-sm font-medium text-[#214252]">
              {isSignup ? (
                <div>
                  Already have an account?{" "}
                  <button onClick={switchMode} className="font-bold">
                    تسجلي الدخول
                  </button>
                </div>
              ) : (
                <div>
                  Don't have an account?{" "}
                  <button
                    onClick={() => navigait("/register")}
                    className="font-bold"
                  >
                    إنشاء حساب
                  </button>
                </div>
              )}
            </div>
          </form>
        </div>
        <div>
          <img
            src="/images/abaya/login_img.png"
            alt="login"
            className="w-[300px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Auth;
