import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function RequireAuthCom(props) {
  const isAuthenticated = useSelector((state) => state.authCom.isAuthenticated);
  return isAuthenticated ? props.children : <Navigate to="/company/login" />;
}
