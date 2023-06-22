import React, { useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { Button, Grid, Layout, Typography } from "antd";

import { SideBarLinks } from "@constants/Sidebarlinks";
import { AppRoutes } from "../routes/Approutes";

import { SidebarLeft, SidebarRight } from "@pages/Sidebar";

import { useAuth } from "@contexts/AuthContext";
import { useConfig } from "@hooks/useConfig";
import {
  HomeOutlined,
  HomeFilled,
  BellFilled,
  BellOutlined,
  SettingFilled,
  SettingOutlined,
} from "@ant-design/icons";

import { RiSearch2Line, RiSearch2Fill } from "react-icons/ri";

export const AppLayout = () => {
  const location = useLocation();
  const { token } = useConfig();

  const { auth } = useAuth();
  const { lg, md, sm } = Grid.useBreakpoint();

  const [activeMenu, setActiveMenu] = useState(1);

  const { pathname } = location;

  useEffect(() => {
    const stripPath = pathname.slice(1);

    const matchedLink = SideBarLinks.find(({ label }) => {
      if (stripPath === "") return true;
      if (stripPath === label) return true;
    });

    console.log("matchedLink", matchedLink);

    setActiveMenu((prev) => matchedLink?.id || prev);
  }, [pathname]);

  const borderClasses = lg ? "border-1-right border-1-left" : md ? " border-1-left" : "";

  return (
    <div style={{ background: token.colorBgLayout }}>
      <Layout
        style={{
          minHeight: "100dvh",
          margin: "0 auto",
          maxWidth: "1200px",
        }}
      >
        {md ? <SidebarLeft activeMenu={activeMenu} /> : null}

        <Layout>
          <Layout.Content className={borderClasses}>
            <AppRoutes />
          </Layout.Content>
        </Layout>

        {lg ? <SidebarRight /> : null}
      </Layout>
      {!auth.isAuthenticated && <StickyFooter />}
      {auth.isAuthenticated && !sm && <MobileNav />}
    </div>
  );
};

export const StickyFooter = () => {
  const navigate = useNavigate();
  const { md } = Grid.useBreakpoint();

  return (
    <footer style={{ position: "sticky", bottom: "0", background: "var(--primary)", width: "100%" }}>
      <div
        className="flex justify-between gap-1 p-1 w-100 align-center"
        style={{ maxWidth: "1080px", margin: "0 auto" }}
      >
        {md && (
          <div>
            <Typography.Title level={3} className="m-0 ">
              Don’t miss what’s happening
            </Typography.Title>
            <Typography.Text>People on Twitter are the first to know.</Typography.Text>
          </div>
        )}

        <div className="flex justify-end flex-1 gap-1">
          <Button
            type="default"
            style={{ background: "var(--primary)", border: "1px solid white", borderRadius: "50px" }}
            className="weight-700 "
            size="large"
            block={!md}
            onClick={() => {
              navigate("/login");
            }}
          >
            Login
          </Button>
          <Button
            type="primary"
            className="weight-700 "
            size="large"
            style={{ borderRadius: "50px" }}
            block={!md}
            onClick={() => {
              navigate("/signup");
            }}
          >
            Signup
          </Button>
        </div>
      </div>
    </footer>
  );
};

const mobileIcons = [
  {
    key: "home",
    outlined: <HomeOutlined />,
    filled: <HomeFilled />,
  },
  {
    key: "search",
    outlined: <RiSearch2Line />,
    filled: <RiSearch2Fill />,
  },
  {
    key: "like",
    outlined: <BellOutlined />,
    filled: <BellFilled />,
  },
  {
    key: "settings",
    outlined: <SettingOutlined />,
    filled: <SettingFilled />,
    disabled: true,
  },
];

const MobileNav = () => {
  const { token } = useConfig();
  const [current, setCurrent] = useState("home");

  // useEffect(() => {
  //   const trimmedPath = pathname.slice(1);
  //   console.log(trimmedPath);

  //   const isValidMobileNav = mobileIcons.find(({ key }) => {
  //     if (trimmedPath === "") return true;
  //     if (trimmedPath === key) return true;
  //     return false;
  //   });
  //   setCurrent((prevPath) => (isValidMobileNav ? trimmedPath : prevPath));
  // }, [pathname]);

  const activeStyles = {
    color: token.colorPrimary,
    fontWeight: "bold",
    cursor: "pointer",
    textDecoration: "underline",
  };

  const inactiveStyles = {
    color: token.colorPrimary,
    fontWeight: "normal",
    cursor: "pointer",
    textDecoration: "none",
  };

  return (
    <div
      style={{
        position: "sticky",
        bottom: 0,
        left: 0,
        right: 0,
        width: "100%",
        justifyContent: "space-between",
        background: token.colorBgLayout,
      }}
    >
      <nav
        className="flex w-full p-1 justify-evenly align-center border-1-top"
        style={{ background: token.colorBgLayout }}
      >
        {mobileIcons.map(({ key, outlined, filled }) => {
          const isActive = current === key;
          const icon = isActive ? filled : outlined;
          const iconStyles = isActive ? activeStyles : inactiveStyles;

          return (
            <NavLink to={key} key={key} onClick={() => setCurrent(key)}>
              {React.cloneElement(icon, { style: iconStyles })}
            </NavLink>
          );
        })}
      </nav>
    </div>
  );
};
