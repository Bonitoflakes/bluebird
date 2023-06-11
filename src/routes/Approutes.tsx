import { Routes, Route, Navigate } from "react-router-dom";
import { Profile } from "../pages/Profile";
import { ConfigCheck } from "../theme/Configchecker";

export const AppRoutes = () => {
  return (
    <>
      {/* <ConfigCheck /> */}
      <Routes>
        <Route path="/" element={<>Home</>} />
        <Route path="/home" element={<Navigate to="/" />} />
        <Route path="/like" element={<>Like</>} />
        <Route path="/messages" element={<>Messages</>} />
        <Route path="/post" element={<>Post</>} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/search" element={<>Search</>} />
      </Routes>
    </>
  );
};
