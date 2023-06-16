import { Layout } from "antd";

import { useCustomTheme } from "@contexts/CustomThemeContext";
import { useConfig } from "@hooks/useConfig";

import { SidebarColumn } from "./SidebarColumn";
import styles from "./styles/Sidebar.module.css";

export const SidebarRight = () => {
  const token = useConfig();
  const { darkMode } = useCustomTheme();

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
