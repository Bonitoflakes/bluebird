import { Avatar, Layout } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";

import { useCustomTheme } from "@contexts/CustomThemeContext";
import { Logo } from "@customIcons/Logo";

import { SideNavBar } from "./SideNavbar";
import styles from "./styles/SidebarLeft.module.css";
import { useAuth } from "@contexts/AuthContext";
import { useConfig } from "@hooks/useConfig";

export const SidebarLeft = ({ activeMenu }: { activeMenu: number }) => {
  const { auth } = useAuth();
  const { darkMode } = useCustomTheme();
  const { token } = useConfig();

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
        <div className="p-0-5">
          <div className={styles.logo}>
            <Logo size={2} />
          </div>

          <SideNavBar isCollapsed={isCollapsed} activeMenu={activeMenu} />
        </div>

        {auth.isAuthenticated && (
          <div className={styles.settings}>
            <Link to="/settings">
              <div
                className="flex gap-1"
                style={{
                  borderRadius: "50px",
                  padding: "0.5rem",
                }}
              >
                <Avatar size={50} />

                <span className="flex justify-start flex-col align-start">
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
        )}
      </nav>
    </Layout.Sider>
  );
};
