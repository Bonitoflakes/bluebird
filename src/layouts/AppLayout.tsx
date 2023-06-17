import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button, Grid, Layout, Space, Typography } from "antd";

import { SideBarLinks } from "../constants/Sidebarlinks";
import { AppRoutes } from "../routes/Approutes";

import { SidebarLeft, SidebarRight } from "../pages/Sidebar";

import { useAuth } from "@contexts/AuthContext";
import { useConfig } from "@hooks/useConfig";

export const AppLayout = () => {
  const location = useLocation();
  const { token } = useConfig();

  const { auth } = useAuth();
  const { lg } = Grid.useBreakpoint();

  const [activeMenu, setActiveMenu] = useState(1);

  const { pathname } = location;

  useEffect(() => {
    const stripPath = pathname.slice(1);

    const matchedLink = SideBarLinks.find((e) => {
      if (stripPath === "") return true;
      return e.label === stripPath.toLowerCase();
    });

    setActiveMenu((prev) => matchedLink?.id || prev);
  }, [pathname]);

  return (
    <div style={{ background: token.colorBgLayout }}>
      <Layout
        style={{
          minHeight: "100dvh",
          margin: "0 auto",
          maxWidth: "1200px",
        }}
      >
        <SidebarLeft activeMenu={activeMenu} />

        <Layout>
          <Layout.Content className="border-1-left border-1-right">
            <AppRoutes />
          </Layout.Content>
        </Layout>

        {lg ? <SidebarRight /> : null}
      </Layout>
      {!auth.isAuthenticated && <StickyFooter />}
    </div>
  );
};

export const StickyFooter = () => {
  const navigate = useNavigate();

  return (
    <footer style={{ position: "sticky", bottom: "0", background: "var(--primary)", width: "100%" }}>
      <div
        className="flex w-100 p-1 justify-between align-center"
        style={{ maxWidth: "1080px", margin: "0 auto" }}
      >
        <div>
          <Typography.Title level={3} className="m-0 ">
            Don’t miss what’s happening
          </Typography.Title>
          <Typography.Text>People on Twitter are the first to know.</Typography.Text>
        </div>
        <Space>
          <Button
            type="default"
            style={{ background: "var(--primary)", border: "1px solid white", borderRadius: "50px" }}
            className="weight-700 "
            size="large"
            onClick={() => {
              navigate("/login");
            }}
          >
            Login
          </Button>
          <Button type="primary" className="weight-700 " size="large" style={{ borderRadius: "50px" }}>
            Signup
          </Button>
        </Space>
      </div>
    </footer>
  );
};
