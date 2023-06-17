import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button, Modal, Typography } from "antd";

import { useAuth } from "@contexts/AuthContext";

import { Logo } from "@customIcons/Logo";

import "./Logout.css";
import { useConfig } from "@hooks/useConfig";

const { Title, Paragraph } = Typography;

export const Logout = () => {
  const { handleLogout } = useAuth();
  const { token } = useConfig();

  const location = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(true);

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setIsOpen(false);
    navigate(location?.state?.from || -1);
  };

  const onClickLogout = () => {
    console.log("logging user out....");

    handleLogout();
    navigate("/");
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
        className="w-full gap-1 p-2 centered column"
        style={{ background: token.colorBgLayout, borderRadius: "20px" }}
      >
        <Logo />
        <div className="flex column align-start">
          <Title level={4} className="weight-700" style={{ color: token.colorTextBase }}>
            Log out of Twitter?
          </Title>
          <Paragraph className="color-gray">
            You can always log back in at any time. If you just want to switch accounts, you can do that by
            adding an existing account.
          </Paragraph>

          <Button
            block
            type="primary"
            className="my-1 h-42 weight-700"
            onClick={onClickLogout}
            style={{ border: "10px solid black !important" }}
          >
            Log out
          </Button>

          <Button block type="default" className="h-42 weight-600" onClick={() => navigate(-1)}>
            Cancel
          </Button>
        </div>
      </div>
    </Modal>
  );
};
