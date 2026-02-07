import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const isAllowed = localStorage.getItem("valentine_access_granted");

  if (!isAllowed) {
    return <Navigate to="/unlock" replace />;
  }

  return children;
};

export default ProtectedRoute;
