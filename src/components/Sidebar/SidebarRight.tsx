import Sider from "antd/es/layout/Sider";
import { SidebarColumn } from "./SidebarColumn";
import { useCustomTheme } from "../../contexts/CustomThemeContext";
import { useConfig } from "../../hooks/useToken";

import styles from "./styles/Sidebar.module.css";

export const SidebarRight = () => {
  const { token } = useConfig();
  const { darkMode } = useCustomTheme();

  return (
    <Sider
      className={styles.sidebar}
      width={350}
      theme={darkMode ? "dark" : "light"}
      breakpoint="lg"
      collapsedWidth="0"
      trigger={null}
      style={{
        background: token.colorBgLayout,
      }}
    >
      <SidebarColumn />
    </Sider>
  );
};
