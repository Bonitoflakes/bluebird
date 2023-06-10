import { Navigate, Route, Routes } from "react-router-dom";
import { AppLayout } from "./layouts/AppLayout";
import "antd/dist/reset.css";
import { Profile } from "./pages/Profile";

function App() {
  return <AppLayout />;
}

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<>Home</>} />
      <Route path="/home" element={<Navigate to="/" />} />
      <Route path="/like" element={<>Like</>} />
      <Route path="/messages" element={<>Messages</>} />
      <Route path="/post" element={<>Post</>} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/search" element={<>Search</>} />
    </Routes>
  );
};

export default App;
