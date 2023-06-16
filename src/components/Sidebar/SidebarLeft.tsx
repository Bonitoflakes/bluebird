import { Avatar, Layout } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";

import { useCustomTheme } from "@contexts/CustomThemeContext";
import { useConfig } from "@hooks/useConfig";
import { Logo } from "@icons/logo";

import { SideNavBar } from "./SideNavbar";
import styles from "./styles/SidebarLeft.module.css";

export const SidebarLeft = ({ activeMenu }: { activeMenu: number }) => {
  const token = useConfig();
  const { darkMode } = useCustomTheme();

  const [isCollapsed, setIsCollapsed] = useState(true);

  function handleCollapse() {
    setIsCollapsed((p) => !p);
  }

  return (
    <Layout.Sider
      className={styles.sidebar}
      collapsible
      collapsedWidth={70}
      trigger={null}
      collapsed={isCollapsed}
      onMouseEnter={handleCollapse}
      onMouseLeave={handleCollapse}
      width={225}
      theme={darkMode ? "dark" : "light"}
    >
      <nav
        style={{
          background: token.colorBgLayout,
        }}
        className={styles.nav}
      >
        <div>
          <div className={styles.logo}>
            <Logo size={2} />
          </div>

          <SideNavBar darkMode isCollapsed={isCollapsed} activeMenu={activeMenu} />
        </div>

        <div className={styles.settings}>
          <Link to="/settings">
            <div
              className="flex gap-1"
              style={{
                borderRadius: "50px",
                padding: "0.5rem",
                // paddingLeft: isCollapsed ? "0" : "0.5rem",
              }}
            >
              <Avatar size={50} />

              <span className="flex justify-start column align-start">
                <h1 className="m-0 weight-600" style={{ fontSize: "24px", color: token.colorText }}>
                  {!isCollapsed && "unfold"}
                </h1>
                <p
                  style={{ fontSize: "14px", color: token.colorPrimaryHover, paddingRight: "1rem" }}
                  className="m-0"
                >
                  {!isCollapsed && "@unfoldco"}
                </p>
              </span>
            </div>
          </Link>
        </div>
      </nav>
    </Layout.Sider>
  );
};
