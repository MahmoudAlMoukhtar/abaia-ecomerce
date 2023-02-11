import React, {useState} from "react";
import {Navigate} from "react-router-dom";

const PrivaitRoute = ({children}) => {
  const user = JSON.parse(localStorage.getItem("userEcommerce"));

  if (!user) {
    return <Navigate to="/auth" replace />;
  }

  return children;
};

export default PrivaitRoute;
