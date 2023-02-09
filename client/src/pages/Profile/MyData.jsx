import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import * as api from "../../api/index";
const styles = {
  navLink:
    "flex justify-end gap-2 items-center py-4 border-b-[0.5px] border-gray-600 w-full pr-2",
  filed:
    "relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm",
};

const MyData = ({user}) => {
  const [formData, setFormData] = useState(user);
  const navigait = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();
    const {data} = await api.updateUserById(user.id, formData);
    localStorage.setItem("userEcommerce", JSON.stringify(data));
    //navigait("/");
  };
  const handleTextFieldChange = e => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  return (
    <form
      className="mt-8 w-[100%] lg:w-[500px] xl:w-[800px] bg-gray-100 p-6 rounded-lg flex flex-col gap-6"
      action="#"
      method="POST"
    >
      <div className="flex flex-col text-start">
        <label className="text-gray-500">First Name</label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          required
          className={styles.filed}
          placeholder="First Name"
          onChange={handleTextFieldChange}
          value={formData.firstName}
        />
      </div>
      <div className="flex flex-col text-start">
        <label className="text-gray-500">Last Name</label>
        <input
          id="lastName"
          name="lastName"
          type="text"
          required
          className={styles.filed}
          placeholder="Last Name"
          onChange={handleTextFieldChange}
          value={formData.lastName}
        />
      </div>
      <div className="flex flex-col text-start">
        <label className="text-gray-500">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          className={styles.filed}
          placeholder="Email"
          onChange={handleTextFieldChange}
          value={formData.email}
        />
      </div>
      <div className="flex flex-col text-start">
        <label className="text-gray-500">Mobile</label>
        <input
          id="mobile"
          name="mobile"
          type="mobile"
          autoComplete="mobile"
          required
          className={styles.filed}
          placeholder="Mobile Number"
          onChange={handleTextFieldChange}
          value={formData.mobileNumber}
        />
      </div>
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

export default MyData;
