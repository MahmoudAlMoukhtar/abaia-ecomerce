import React, {useState} from "react";
import {useNavigate} from "react-router-dom";

const styles = {
  navLink:
    "flex justify-end gap-2 items-center py-4 border-b-[0.5px] border-gray-600 w-full pr-2",
  filed:
    "relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm",
};

const initialState = {
  oldPassword: "",
  newPassword: "",
  confirmPassword: "",
};

const MyPasswordChange = () => {
  const [formData, setFormData] = useState(initialState);
  const navigait = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();

    // const {data} = await api.signin(formData);
    // localStorage.setItem("userEcommerce", JSON.stringify(data));
    // navigait("/");
  };
  const handleTextFieldChange = e => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  return (
    <form
      className="mt-8 w-[800px] bg-gray-100 p-10 rounded-lg flex flex-col gap-6"
      action="#"
      method="POST"
      onSubmit={handleSubmit}
    >
      <input
        id="oldPassword"
        name="oldPassword"
        type="text"
        autoComplete="current-password"
        required
        className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        placeholder="Old Password"
        onChange={handleTextFieldChange}
      />
      <input
        id="newPassword"
        name="newPassword"
        type={"text"}
        autoComplete="current-password"
        required
        className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        placeholder="New Password"
        onChange={handleTextFieldChange}
      />
      <input
        id="confirmPassword"
        name="confirmPassword"
        type={"text"}
        autoComplete="current-password"
        required
        className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        placeholder="Confirm Password"
        onChange={handleTextFieldChange}
      />
      <button
        type="submit"
        className="group relative flex w-full justify-center rounded-md border border-transparent bg-black py-2 px-4 text-sm font-medium text-white hover:bg-black focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        حفظ
      </button>
    </form>
  );
};
export default MyPasswordChange;
