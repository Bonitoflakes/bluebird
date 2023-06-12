import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Layout } from "antd";

import { SideBarLinks } from "../constants/Sidebarlinks";

import { AppRoutes } from "../routes/Approutes";
import { SidebarLeft } from "../components/Sidebar/SidebarLeft";
import { SidebarRight } from "../components/Sidebar/SidebarRight";

const { Content } = Layout;

export const AppLayout = () => {
  const { pathname } = useLocation();

  const [activeMenu, setActiveMenu] = useState(1);

  useEffect(() => {
    const stripPath = pathname.slice(1);

    const matchedLink = SideBarLinks.find((e) => {
      if (stripPath === "") return true;
      return e.label === stripPath.toLowerCase();
    });

    setActiveMenu((prev) => matchedLink?.id || prev);
  }, [pathname]);

  return (
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
        <Content className="border-1-left border-1-right">
          <AppRoutes />
        </Content>
      </Layout>

      <SidebarRight />
      {/*  */}
    </Layout>
  );
};
