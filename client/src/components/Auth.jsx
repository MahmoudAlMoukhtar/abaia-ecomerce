import React, {useEffect, useState} from "react";
import {BiShowAlt, BiHide} from "react-icons/bi";
import {Navigate, useNavigate} from "react-router-dom";
import * as api from "../api/index";

const initialState = {
  email: "",
  password: "",
};
const STATUS = {
  IDLE: "IDLE",
  SUBMITTING: "SUBMITTING",
  SUBMITTED: "SUBMITTED",
  COMPLETED: "COMPLETED",
};
const Auth = () => {
  const user = JSON.parse(localStorage.getItem("userEcommerce"));

  const [formData, setFormData] = useState(initialState);
  const [showPassword, setShowPassword] = useState(false);

  const [saveError, setSaveError] = useState(null);
  const [touche, setTouche] = useState({});
  const [status, setStatus] = useState(STATUS.IDLE);
  const navigait = useNavigate();
  if (user) {
    return <Navigate to="/account" replace />;
  }
  //Derived state
  const errors = getErrors(formData);
  const isValid = Object.keys(errors).length === 0;

  function handleBlur(event) {
    const {id} = event.target;
    setTouche(curTouche => {
      return {...curTouche, [id]: true};
    });
  }

  function getErrors(formData) {
    const result = {};
    if (!formData.email) result.email = "Email is required";
    if (!formData.password) result.password = "Password is required";
    return result;
  }

  const handleSubmit = async e => {
    setStatus(STATUS.SUBMITTED);
    if (isValid) {
      e.preventDefault();
      try {
        const res = await api.signin(formData);
        localStorage.setItem("userEcommerce", JSON.stringify(res.data));
        setSaveError();
        setStatus(STATUS.COMPLETED);
        navigait("/");
      } catch (err) {
        setSaveError(err);
        setStatus(STATUS.SUBMITTED);
      }
    } else {
      setStatus(STATUS.SUBMITTED);
    }
  };
  const handleTextFieldChange = e => {
    e.persist();
    setFormData({...formData, [e.target.name]: e.target.value});
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
              {"إنشاء حساب"}
            </h2>
          </div>
          <form className="mt-8 space-y-6" action="#" method="POST">
            {status === STATUS.COMPLETED && (
              <p className="bg-green-300 p-2 rounded-md text-white font-semibold text-center">
                Sign in successfully!
              </p>
            )}
            {!isValid && status === STATUS.SUBMITTED && (
              <div role="alert text-start">
                <p className="text-start font-bold text-xl text-red-600">
                  Please fix the following errors:
                </p>
                <ul className="text-start">
                  {Object.keys(errors).map((keyObj, index) => {
                    return (
                      <li key={keyObj}>{`${index + 1}- ${errors[keyObj]}`}</li>
                    );
                  })}
                </ul>
              </div>
            )}
            <input type="hidden" name="remember" defaultValue="true" />
            <div className=" rounded-md shadow-sm">
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
                  onBlur={handleBlur}
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
                    onBlur={handleBlur}
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
                onClick={handleSubmit}
              >
                {"تسجيل دخول"}
              </button>
            </div>

            <div className="group relative flex w-full justify-center rounded-md border border-transparent py-2 px-4 text-sm font-medium text-[#214252]">
              {
                <div>
                  Don't have an account?{" "}
                  <button
                    onClick={() => navigait("/register")}
                    className="font-bold"
                  >
                    إنشاء حساب
                  </button>
                </div>
              }
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
