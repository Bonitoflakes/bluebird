import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

export const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const { auth } = useAuth();
  const { pathname } = useLocation();

  if (!auth.isAuthenticated) {
    return <Navigate to="/login" state={{ from: pathname }} />;
  }

  return children;
};
