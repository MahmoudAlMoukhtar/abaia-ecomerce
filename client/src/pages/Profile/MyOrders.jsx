import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import * as api from "../../api/index";
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

const Order = ({order}) => {
  return (
    <div>
      <h1>{order.nameProduct}</h1>
    </div>
  );
};

const MyOrders = ({user}) => {
  const [formData, setFormData] = useState(initialState);
  const [showPassword, setShowPassword] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
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

  const [dataOrders, setDataOrders] = useState();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fun = async () => {
      try {
        const {data} = await api.getUserOrder(user.id);
        setDataOrders(data);
        console.log(data);
      } catch (e) {
        if (e) setError(e);
      } finally {
        setLoading(false);
      }
    };
    fun();
  }, []);

  if (error) throw error;
  if (loading)
    return <h1 className="text-center font-bold text-5xl my-40">Loading...</h1>;

  return (
    <section>
      <ul>
        {dataOrders.map(order => (
          <Order order={order} />
        ))}
      </ul>
    </section>
  );
};

export default MyOrders;
