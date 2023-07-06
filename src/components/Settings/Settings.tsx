import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button, Modal, Switch, Typography } from "antd";

import { Logo } from "@customIcons/Logo";
import { useCustomTheme } from "@contexts/CustomThemeContext";
import { useConfig } from "@hooks/useConfig";

const { Title, Paragraph } = Typography;

export const Settings = () => {
  const { darkMode, toggleDarkMode } = useCustomTheme();
  const { token } = useConfig();

  const location = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(true);

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setIsOpen(false);
    navigate(location?.state?.from || -1);
  };

  return (
    <Modal
      destroyOnClose={true}
      maskStyle={{ background: "rgba(91,112,131,0.4)" }}
      open={isOpen}
      onCancel={handleCancel}
      centered
      closable={false}
      width={320}
      footer={null}
    >
      <div
        className="w-full gap-1 p-2 centered flex-col"
        style={{ background: token.colorBgLayout, borderRadius: "22px" }}
      >
        <Logo />
        <div className="flex w-full flex-col align-start">
          <Title level={4} className="weight-700" style={{ color: token.colorPrimaryText }}>
            Settings
          </Title>

          <div className="flex justify-between w-full">
            <Paragraph className="color-gray">Toggle DarkMode</Paragraph>
            <Switch checked={darkMode} onChange={toggleDarkMode} />
          </div>

          <div className="flex justify-between w-full">
            <Button className="mt-1 color-gray" type="primary" block onClick={() => navigate("/logout")}>
              Logout
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
};
