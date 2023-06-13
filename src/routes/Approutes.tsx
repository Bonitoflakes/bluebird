import { Routes, Route, Navigate } from "react-router-dom";
import { Profile } from "../pages/Profile";
import { ProtectedRoute } from "../components/HOC/ProtectedRoute";
import { Login } from "../pages/Login";
// import { ConfigCheck } from "../theme/Configchecker";

export const AppRoutes = () => {
  return (
    <>
      {/* <ConfigCheck /> */}
      <Routes>
        <Route path="/" element={<>Home</>} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Navigate to="/" />} />
        <Route path="/like" element={<>Like</>} />
        <Route path="/messages" element={<>Messages</>} />
        <Route path="/post" element={<>Post</>} />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route path="/search" element={<>Search</>} />
      </Routes>
    </>
  );
};
