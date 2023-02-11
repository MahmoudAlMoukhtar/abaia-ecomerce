import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import * as api from "../../api/index";

const initialState = {
  oldPassword: "",
  newPassword: "",
  confirmPassword: "",
};

const STATUS = {
  IDLE: "IDLE",
  SUBMITTING: "SUBMITTING",
  SUBMITTED: "SUBMITTED",
  COMPLETED: "COMPLETED",
};

const MyPasswordChange = ({user}) => {
  const [formData, setFormData] = useState(initialState);
  const [saveError, setSaveError] = useState(null);
  const [touche, setTouche] = useState({});
  const [status, setStatus] = useState(STATUS.IDLE);

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
    if (!formData.newPassword) result.newPassword = "New Password is required";
    if (!formData.confirmPassword)
      result.confirmPassword = "Confirm Password is required";
    if (!formData.oldPassword) result.oldPassword = "Old Password is required";
    return result;
  }

  const handleSubmit = async e => {
    setStatus(STATUS.SUBMITTED);
    if (isValid) {
      e.preventDefault();
      try {
        const {data} = await api.updatePasswordUserById(user.id, formData);
        localStorage.setItem("userEcommerce", JSON.stringify(data));
        setSaveError();
        setStatus(STATUS.COMPLETED);
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

  if (saveError) throw saveError;
  return (
    <form
      className="mt-8 w-full lg:w-[700px] bg-gray-100 p-10 rounded-lg flex flex-col gap-6"
      action="#"
      method="POST"
    >
      {status === STATUS.COMPLETED && (
        <p className="bg-green-300 p-2 rounded-md text-white font-semibold text-center">
          Your password Changed in successfully!
        </p>
      )}
      {!isValid && status === STATUS.SUBMITTED && (
        <div role="alert text-start">
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
      <input
        id="oldPassword"
        name="oldPassword"
        type="text"
        autoComplete="current-password"
        required
        className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        placeholder="Old Password"
        onChange={handleTextFieldChange}
        onBlur={handleBlur}
      />
      <p role="alert" className="text-start text-red-800">
        {(touche.oldPassword || status === STATUS.SUBMITTED) &&
          errors.oldPassword}
      </p>
      <input
        id="newPassword"
        name="newPassword"
        type={"text"}
        autoComplete="current-password"
        required
        className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        placeholder="New Password"
        onChange={handleTextFieldChange}
        onBlur={handleBlur}
      />
      <p role="alert" className="text-start text-red-800">
        {(touche.newPassword || status === STATUS.SUBMITTED) &&
          errors.newPassword}
      </p>
      <input
        id="confirmPassword"
        name="confirmPassword"
        type={"text"}
        autoComplete="current-password"
        required
        className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        placeholder="Confirm Password"
        onChange={handleTextFieldChange}
        onBlur={handleBlur}
      />
      <p role="alert" className="text-start text-red-800">
        {(touche.confirmPassword || status === STATUS.SUBMITTED) &&
          errors.confirmPassword}
      </p>
      <button
        type="submit"
        className="group relative flex w-full justify-center rounded-md border border-transparent bg-black py-2 px-4 text-sm font-medium text-white hover:bg-black focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        onClick={handleSubmit}
      >
        حفظ
      </button>
    </form>
  );
};
export default MyPasswordChange;
