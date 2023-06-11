import { useState } from "react";
import { ConfigProvider, theme } from "antd";

import { AppLayout } from "./layouts/AppLayout";
import { darkTheme, darkComponents, lightTheme } from "./theme";

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

export default App;
