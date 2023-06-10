import { Menu, theme } from "antd";
import { SideBarLinks } from "../../constants/Sidebarlinks";
import { Link } from "react-router-dom";

import styles from "../Sidebar/SidebarLeft.module.css";

const { useToken } = theme;

export const SidebarLeft = ({
  darkMode,
  activeMenu,
  isCollapsed,
}: {
  darkMode: boolean;
  activeMenu: number;
  isCollapsed: boolean;
}) => {
  const { token } = useToken();

  function renderMenuItem({ icon, label }: { icon: string; label: string }, index: number) {
    const isActive = activeMenu === index + 1;
    console.log(isCollapsed);

    return (
      <Menu.Item
        key={String(index + 1)}
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
      <Menu theme={darkMode ? "dark" : "light"} mode="vertical">
        {SideBarLinks.map(renderMenuItem)}
      </Menu>
    </>
  );
};
