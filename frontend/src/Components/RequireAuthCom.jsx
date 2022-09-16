import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function RequireAuthCom(props) {
  const isAuthenticatedCom = useSelector((state) => state.authCom.isAuthenticatedCom);
  return isAuthenticatedCom ? props.children : <Navigate to="/company/login" />;
}
