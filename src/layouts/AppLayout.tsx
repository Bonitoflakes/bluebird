import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Layout, Menu, Switch, theme } from "antd";

import { AppRoutes } from "../App";
import { SidebarRight } from "../components/Sidebar/SidebarRight";
import { SideBarLinks } from "../constants/Sidebarlinks";

import styles from "./sidebar.module.css";
import { LogoIcon } from "../Icons/logo";
import { SidebarLeft } from "../components/Sidebar/SidebarLeft";

interface IAppLayout {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const { Content, Sider } = Layout;
const { useToken } = theme;

export const AppLayout = ({ darkMode, setDarkMode }: IAppLayout) => {
  const { token } = useToken();
  const { pathname } = useLocation();

  const [activeMenu, setActiveMenu] = useState(1);
  const [isCollapsed, setIsCollapsed] = useState(true);

  useEffect(() => {
    const stripPath = pathname.slice(1);

    const matchedLink = SideBarLinks.find((e) => {
      if (stripPath === "") return true;
      return e.label === stripPath.toLowerCase();
    });

    setActiveMenu((prev) => matchedLink?.id || prev);
  }, [pathname]);

  function handleCollapse() {
    setIsCollapsed((p) => !p);
  }

  return (
    <Layout
      style={{
        minHeight: "100dvh",
        margin: "0 auto",
        // maxWidth: "1180px"
      }}
    >
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
          }}
          className={styles.nav}
        >
          {/* Just a wrapper*/}
          <div>
            <div className={styles.logo}>
              <Link to="/">
                <LogoIcon style={{ color: token.colorPrimary }} />
              </Link>
            </div>

            <Menu theme={darkMode ? "dark" : "light"} mode="vertical">
              <SidebarLeft darkMode isCollapsed={isCollapsed} activeMenu={activeMenu} />
            </Menu>
          </div>

          <div className={styles.settings}>
            <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
          </div>
        </nav>
      </Sider>

      <Layout>
        <Content className="border-1">
          <AppRoutes />
        </Content>
      </Layout>

      <Sider
        className={styles.sidebar}
        width={350}
        theme={darkMode ? "dark" : "light"}
        breakpoint="lg"
        collapsedWidth="0"
        trigger={null}
      >
        <SidebarRight />
      </Sider>
      {/*  */}
    </Layout>
  );
};
