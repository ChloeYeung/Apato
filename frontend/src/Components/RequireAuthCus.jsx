import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function RequireAuthCom(props) {
  const isAuthenticatedCus = useSelector((state) => state.authCus.isAuthenticatedCus);
  return isAuthenticatedCus ? props.children : <Navigate to="/customer/login" />;
}
