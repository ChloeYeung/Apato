import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function RequireAuthSup(props) {
  const isAuthenticatedSup = useSelector((state) => state.authSup.isAuthenticatedSup);
  return isAuthenticatedSup ? props.children : <Navigate to="/support/login" />;
}
