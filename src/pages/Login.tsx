import { useAuth } from "../contexts/AuthContext";
import { Button, Input, Modal, Typography } from "antd";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useConfig } from "../hooks/useToken";
import { LogoIcon } from "../Icons/logo";
import { AppleFilled, GoogleOutlined } from "@ant-design/icons";
import { useState } from "react";

import "./login.css";

const { Title, Text } = Typography;

const dummyUser = {
  id: "121",
  name: "dummy ",
  email: "dummmy@gmail.com",
  bio: "Sup ...",
  avatar:
    "https://images.pexels.com/photos/16982012/pexels-photo-16982012/free-photo-of-sea-sunset-fashion-beach.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
};

export const Login = () => {
  const { handleLogin, handleLogout, auth } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const { token } = useConfig();

  const [isOpen, setIsOpen] = useState(true);

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setIsOpen(false);
    navigate("/");
  };

  const handleAuth = () => {
    if (!auth.isAuthenticated) {
      handleLogin(dummyUser);
      navigate(location.state.from);
    } else {
      handleLogout();
      navigate("/");
    }
  };

  return (
    <div>
      <Modal open={isOpen} width={600} centered footer={null} onCancel={handleCancel}>
        <div className="flex column align-center" style={{ margin: "0 88px", padding: "0 32px" }}>
          <div>
            <Link to="/">
              <LogoIcon style={{ color: token.colorPrimary }} />
            </Link>
          </div>

          <div className="flex align-start column w-100">
            <Title level={3} style={{ fontSize: "31px", fontWeight: "700", margin: "1rem 0" }}>
              Sign in to Twitter
            </Title>

            <Button
              icon={<GoogleOutlined />}
              size="large"
              block
              shape="round"
              style={{ margin: "12px 0" }}
              type="primary"
            >
              Sign in with Google
            </Button>

            <Button
              icon={<AppleFilled />}
              size="large"
              block
              shape="round"
              style={{ margin: "12px 0", fontWeight: "600" }}
              type="primary"
            >
              Sign in with Apple
            </Button>

            <Line />

            <Input
              placeholder="Phone, email, or username"
              style={{ margin: "12px 0" }}
              size="large"
              className="login-input"
            />

            <Button
              size="large"
              block
              shape="round"
              style={{ margin: "12px 0", fontWeight: "600" }}
              type="primary"
            >
              Next
            </Button>

            <Button
              style={{
                margin: "12px 0",
                background: token.colorBgLayout,
                color: token.colorPrimary,
                fontWeight: "600",
              }}
              type="default"
              size="large"
              block
              shape="round"
            >
              Forgot Password
            </Button>

            <Text style={{ margin: "40px 0" }}>
              Don't have an account? <Link to="/signup">Signup</Link>
            </Text>

            <Button
              size="large"
              block
              shape="round"
              style={{ margin: "12px 0" }}
              type="primary"
              onClick={handleAuth}
            >
              {auth.isAuthenticated ? "Logout" : "Login"}
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export const Line = () => {
  return (
    <div className="flex align-center w-100">
      <div style={{ margin: "8px 0", height: "1px", background: "gray", width: "100px", flex: "1" }}></div>
      <p className="m-0" style={{ padding: "0 0.25rem", fontSize: "17px" }}>
        or
      </p>
      <div style={{ margin: "8px 0", height: "1px", background: "gray", width: "100px", flex: "1" }}></div>
    </div>
  );
};
