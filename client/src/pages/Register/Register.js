import React, {useEffect, useState} from "react";
import {BiShowAlt, BiHide} from "react-icons/bi";
import {useNavigate} from "react-router-dom";
import * as api from "../../api/index";
import {useLangauges} from "../../contexts/Langauges";

const styles = {
  filed:
    "relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm",
};

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  mobileNumber: 0,
  confirmPassword: "",
};

const STATUS = {
  IDLE: "IDLE",
  SUBMITTING: "SUBMITTING",
  SUBMITTED: "SUBMITTED",
  COMPLETED: "COMPLETED",
};

const AuthRegister = () => {
  const langaugesContext = useLangauges();
  const [formData, setFormData] = useState(initialState);
  const [showPassword, setShowPassword] = useState(false);
  const [saveError, setSaveError] = useState(null);
  const [touche, setTouche] = useState({});
  const [status, setStatus] = useState(STATUS.IDLE);
  const navigait = useNavigate();

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
    if (!formData.firstName) result.firstName = "firstName is required";
    if (!formData.lastName) result.lastName = "lastName is required";
    if (!formData.email) result.email = "email is required";
    if (!formData.password) result.password = "password is required";
    if (!formData.mobileNumber)
      result.mobileNumber = "mobileNumber is required";
    if (!formData.confirmPassword)
      result.confirmPassword = "confirmPassword is required";
    return result;
  }

  const handleSubmit = async e => {
    setStatus(STATUS.SUBMITTED);
    if (isValid) {
      e.preventDefault();
      try {
        const {data} = await api.signup(formData);
        localStorage.setItem("userEcommerce", JSON.stringify(data));
        const response = await api.createCart();
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
    <div className="flex flex-col justify-center items-center text-end">
      <div>
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
          {langaugesContext.langauge === "ar" ? "حساب جديد" : "New account"}
        </h2>
        <div className="flex justify-center items-center gap-2 text-gray-400 tracking-[-3px] ">
          <div className="w-20 h-[2px] bg-gray-400" />
          {"///"}
          <div className="w-20 h-[2px] bg-gray-400" />
        </div>
      </div>
      {status === STATUS.COMPLETED && (
        <p className="bg-green-300 p-2 rounded-md text-white font-semibold text-center">
          {langaugesContext.langauge === "ar"
            ? "تم تسجيل دخولك بنجاح"
            : "Your account created successfully!"}
        </p>
      )}
      {!isValid && status === STATUS.SUBMITTED && (
        <div role="alert text-start w-full">
          <p className="text-start font-bold text-xl text-red-600">
            Please fix the following errors:
          </p>
          <ul className="text-start">
            {Object.keys(errors).map((keyObj, index) => {
              return <li key={keyObj}>{`${index + 1}- ${errors[keyObj]}`}</li>;
            })}
          </ul>
        </div>
      )}
      <form
        className="mt-8 w-[800px] bg-gray-100 p-10 rounded-lg flex flex-col gap-6"
        action="#"
        method="POST"
      >
        <input
          id="firstName"
          name="firstName"
          type="text"
          required
          className={styles.filed}
          placeholder="First Name"
          onChange={handleTextFieldChange}
          onBlur={handleBlur}
        />
        <input
          id="lastName"
          name="lastName"
          type="text"
          required
          className={styles.filed}
          placeholder="Last Name"
          onChange={handleTextFieldChange}
          onBlur={handleBlur}
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
          onBlur={handleBlur}
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
          onBlur={handleBlur}
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

        <div>
          <button
            type="submit"
            className="group relative flex w-full justify-center rounded-md border border-transparent bg-black py-2 px-4 text-sm font-medium text-white hover:bg-black focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            onClick={handleSubmit}
          >
            {langaugesContext.langauge === "ar"
              ? "إنشاء حساب"
              : "Create account"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AuthRegister;
