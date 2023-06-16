import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Grid, Layout } from "antd";

import { SideBarLinks } from "../constants/Sidebarlinks";
import { AppRoutes } from "../routes/Approutes";

import { SidebarLeft, SidebarRight } from "@components/Sidebar";

import { useConfig } from "@hooks/useConfig";

export const AppLayout = () => {
  const location = useLocation();
  const token = useConfig();
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
        {/*  */}
        <SidebarLeft activeMenu={activeMenu} />

        <Layout>
          <Layout.Content className="border-1-left border-1-right">
            <AppRoutes />
          </Layout.Content>
        </Layout>

        {lg ? <SidebarRight /> : null}
        {/*  */}
      </Layout>
    </div>
  );
};
