import { Routes, Route, Navigate } from "react-router-dom";
import { Typography } from "antd";

import { ProtectedRoute } from "../components/HOC/ProtectedRoute";

import { Profile } from "../pages/Profile";
import { Login } from "../components/Login";
import { Logout } from "../components/Logout";
import { Settings } from "../components/Settings";
import { Home } from "@pages/Home/Home";
import { Signup } from "@components/Signup";

// import { ConfigCheck } from "../theme/Configchecker";

const { Text } = Typography;

export const AppRoutes = () => {
  return (
    <>
      {/* <ConfigCheck /> */}
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/settings" element={<Settings />} />

        <Route path="/home" element={<Navigate to="/" />} />
        <Route path="/like" element={<Text>Like</Text>} />
        <Route path="/messages" element={<Text>Messages</Text>} />
        <Route path="/post" element={<Text>Post</Text>} />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route path="/search" element={<Text>Search</Text>} />
        <Route path="*" element={<Text>404</Text>} />
      </Routes>
    </>
  );
};
