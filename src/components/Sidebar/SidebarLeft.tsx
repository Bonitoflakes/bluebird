import { Switch } from "antd";
import Sider from "antd/es/layout/Sider";
import { useState } from "react";
import { Link } from "react-router-dom";
import { LogoIcon } from "../../Icons/logo";
import { useCustomTheme } from "../../contexts/CustomThemeContext";
import { useConfig } from "../../hooks/useToken";
import { SideNavBar } from "./SideNavbar";

import styles from "./styles/SidebarLeft.module.css";

export const SidebarLeft = ({ activeMenu }: { activeMenu: number }) => {
  const { token } = useConfig();
  const { darkMode, toggleDarkMode } = useCustomTheme();

  const [isCollapsed, setIsCollapsed] = useState(true);

  function handleCollapse() {
    setIsCollapsed((p) => !p);
  }

  return (
    <Sider
      className={styles.sidebar}
      collapsible
      trigger={null}
      collapsed={isCollapsed}
      onMouseEnter={handleCollapse}
      onMouseLeave={handleCollapse}
      width={225}
      theme={darkMode ? "dark" : "light"}
    >
      <nav
        style={{
          alignItems: isCollapsed ? "center" : "start",
          background: token.colorBgLayout,
        }}
        className={styles.nav}
      >
        <div>
          <div className={styles.logo}>
            <Link to="/">
              <LogoIcon style={{ color: token.colorPrimary }} />
            </Link>
          </div>

          <SideNavBar darkMode isCollapsed={isCollapsed} activeMenu={activeMenu} />
        </div>

        <div className={styles.settings}>
          <Switch checked={darkMode} onChange={toggleDarkMode} />
        </div>
      </nav>
    </Sider>
  );
};
