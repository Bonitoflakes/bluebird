import { Menu } from "antd";
import { Link } from "react-router-dom";

import { useConfig } from "@hooks/useConfig";

import { SideBarLinks } from "../../constants/Sidebarlinks";
import styles from "./styles/SideNavbar.module.css";

export const SideNavBar = ({
  darkMode,
  activeMenu,
  isCollapsed,
}: {
  darkMode: boolean;
  activeMenu: number;
  isCollapsed: boolean;
}) => {
  const token = useConfig();

  function renderMenuItem({ icon, label, id }: { icon: string; label: string; id: number }) {
    const isActive = activeMenu === id;

    return (
      <Menu.Item
        key={String(id)}
        style={{
          fontWeight: isActive ? "700" : "400",
          background: isActive ? "#06acff3a" : "none",
          color: token.colorPrimary,
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
          />
          <span
            style={{
              marginLeft: !isCollapsed ? "10px" : "0",
              transition: "0.3s ease all",
            }}
          >
            {isCollapsed ? "" : label}
          </span>
        </Link>
      </Menu.Item>
    );
  }

  return (
    <>
      <Menu
        theme={darkMode ? "dark" : "light"}
        mode="vertical"
        style={{
          background: token.colorBgLayout,
        }}
      >
        {SideBarLinks.map(renderMenuItem)}
      </Menu>
    </>
  );
};
