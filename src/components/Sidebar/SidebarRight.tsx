import { Layout } from "antd";

import { useCustomTheme } from "@contexts/CustomThemeContext";

import { SidebarColumn } from "./SidebarColumn";
import styles from "./styles/Sidebar.module.css";
import { useConfig } from "@hooks/useConfig";

export const SidebarRight = () => {
  const { darkMode } = useCustomTheme();
  const { token } = useConfig();
  return (
    <Layout.Sider
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
    </Layout.Sider>
  );
};
