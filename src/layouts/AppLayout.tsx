import home from "../assets/home.svg";
import like from "../assets/like.svg";
import messages from "../assets/messages.svg";
import post from "../assets/post.svg";
import profile from "../assets/profile.svg";
import search from "../assets/search.svg";
import logo from "../assets/logo.svg";

import { useEffect, useState } from "react";
import { Layout, Menu } from "antd";
import { Link, useLocation } from "react-router-dom";

import { AppRoutes } from "../App";
import styles from "./sidebar.module.css";
import { SidebarRight } from "../components/Sidebar/SidebarRight";

const { Header, Content, Footer, Sider } = Layout;

const SideBarLinks = [
  {
    icon: home,
    label: "home",
    id: 1,
  },
  {
    icon: like,
    label: "like",
    id: 2,
  },
  {
    icon: messages,
    label: "messages",
    id: 3,
  },
  {
    icon: post,
    label: "post",
    id: 4,
  },
  {
    icon: profile,
    label: "profile",
    id: 5,
  },
  {
    icon: search,
    label: "search",
    id: 6,
  },
];

export const AppLayout = () => {
  const { pathname } = useLocation();

  const [activeMenu, setActiveMenu] = useState(1);
  const [isCollapsed, setIsCollapsed] = useState(true);

  useEffect(() => {
    const stripPath = pathname.slice(1);

    const inas = SideBarLinks.find((e) => {
      if (stripPath === "") return true;
      return e.label === stripPath.toLowerCase();
    });

    setActiveMenu((prev) => inas?.id || prev);
  }, [pathname]);

  function handleSelect({ key }: { key: string }) {
    setActiveMenu(Number(key) + 1);
  }

  function handleCollapse() {
    setIsCollapsed((p) => !p);
  }

  function renderMenuItem({ icon, label }: { icon: string; label: string }, index: number) {
    const isActive = activeMenu === index + 1;

    return (
      <Menu.Item
        key={String(index + 1)}
        style={{
          fontWeight: isActive ? "700" : "400",
          background: isActive ? "#e7e9ea1a" : "none",
          color: "white",
        }}
        className={styles.menuItem}
      >
        <Link to={`/${label.toLowerCase()}`} style={{ display: "flex", alignItems: "center" }}>
          <img
            src={icon}
            style={{
              height: "26.5px",
              filter: isActive
                ? "invert(47%) sepia(37%) saturate(5171%) hue-rotate(180deg) brightness(101%) contrast(106%)"
                : "",
            }}
            alt={label}
            className="menu-icon"
          />
          <span
            style={{
              marginLeft: !isCollapsed ? "10px" : "0",
              transition: "0.4s ease all",
            }}
          >
            {isCollapsed ? "" : label}
          </span>
        </Link>
      </Menu.Item>
    );
  }

  return (
    <Layout style={{ minHeight: "100vh", maxWidth: "1180px", margin: "0 auto" }}>
      <Sider
        className={styles.sidebar}
        collapsible
        trigger={null}
        collapsed={isCollapsed}
        onMouseEnter={handleCollapse}
        onMouseLeave={handleCollapse}
        width={225}
      >
        <div className={styles.logo} style={{ color: "white" }}>
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </div>

        <Menu
          className={styles.menu}
          defaultSelectedKeys={[activeMenu.toString()]}
          // onSelect={handleSelect}
          mode="vertical"
        >
          {SideBarLinks.map(renderMenuItem)}
        </Menu>
      </Sider>

      <Layout style={{ background: "black" }}>
        <Content
          style={{ background: "black", border: "1px solid #404040", maxWidth: "600px", margin: "0 auto" }}
        >
          <AppRoutes />
        </Content>
      </Layout>

      <Sider className={styles.sidebar} width={350}>
        <SidebarRight />
      </Sider>
      {/*  */}
    </Layout>
  );
};
