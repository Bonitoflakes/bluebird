import { ConfigProvider, theme } from "antd";

import { AppLayout } from "./layouts/AppLayout";
import { darkTheme, darkComponents, lightTheme } from "./theme";
import { useCustomTheme } from "@contexts/CustomThemeContext";

import "antd/dist/reset.css";

function App() {
  const { darkMode } = useCustomTheme();

  return (
    <ConfigProvider
      theme={{
        algorithm: darkMode ? theme.darkAlgorithm : theme.defaultAlgorithm,
        token: darkMode ? { ...darkTheme, ...darkComponents } : lightTheme,
      }}
    >
      <AppLayout />
    </ConfigProvider>
  );
}

export default App;
