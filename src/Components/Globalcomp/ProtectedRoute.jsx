import { Navigate } from "react-router-dom";

const STORAGE_KEY = "valentine_access_granted";

const ProtectedRoute = ({ children }) => {
  const allowed = localStorage.getItem(STORAGE_KEY) === "true";

  if (!allowed) {
    return <Navigate to="/unlock" replace />;
  }

  return children;
};

export default ProtectedRoute;
