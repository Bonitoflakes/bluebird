import { useState } from "react";
import { ConfigProvider, theme } from "antd";
import { Navigate, Route, Routes } from "react-router-dom";

import { AppLayout } from "./layouts/AppLayout";
import { darkTheme, darkComponents, lightTheme } from "./theme";
import { Profile } from "./pages/Profile";

import "antd/dist/reset.css";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <ConfigProvider
      theme={{
        algorithm: darkMode ? theme.darkAlgorithm : theme.defaultAlgorithm,
        token: darkMode ? { ...darkTheme, ...darkComponents } : lightTheme,
      }}
    >
      <AppLayout darkMode={darkMode} setDarkMode={setDarkMode} />
    </ConfigProvider>
  );
}

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

export default App;
