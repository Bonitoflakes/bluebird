import { ConfigProvider, theme } from "antd";

import { AppLayout } from "./layouts/AppLayout";
import { darkTheme, darkComponents, lightTheme } from "./theme";

import "antd/dist/reset.css";
import { useCustomTheme } from "./contexts/CustomThemeContext";

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
