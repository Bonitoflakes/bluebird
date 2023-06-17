import { Menu } from "antd";
import { Link } from "react-router-dom";

import { SideBarLinks } from "../../constants/Sidebarlinks";
import styles from "./styles/SideNavbar.module.css";
import { useCustomTheme } from "@contexts/CustomThemeContext";
import { useConfig } from "@hooks/useConfig";
import { useAuth } from "@contexts/AuthContext";

export const SideNavBar = ({ activeMenu, isCollapsed }: { activeMenu: number; isCollapsed: boolean }) => {
  const { darkMode } = useCustomTheme();
  const { token } = useConfig();
  const { auth } = useAuth();

  const isLoggedIn = auth.isAuthenticated;

  function renderMenuItem({
    icon,
    label,
    id,
    publicRoute,
  }: {
    icon: string;
    label: string;
    id: number;
    publicRoute: boolean;
  }) {
    const isActive = activeMenu === id;

    return (
      (publicRoute || isLoggedIn) && (
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
      )
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
