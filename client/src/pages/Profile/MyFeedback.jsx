import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import {useLangauges} from "../../contexts/Langauges";

const styles = {
  navLink:
    "flex justify-end gap-2 items-center py-4 border-b-[0.5px] border-gray-600 w-full pr-2",
  filed:
    "relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm",
};

const initialState = {
  fullName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const MyFeedBack = () => {
  const langaugesContext = useLangauges();
  const [formData, setFormData] = useState(initialState);

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
    <section>
      <h1 className="text-center font-bold text-2xl mb-20">
        {langaugesContext.langauge === "ar"
          ? "لم تقم بكتابة اى تقييمات بعد"
          : "You have not written any reviews yet"}
      </h1>
    </section>
  );
};

export default MyFeedBack;
