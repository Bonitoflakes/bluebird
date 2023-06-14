import { useAuth } from "../contexts/AuthContext";
import { Button, Input, Modal, Typography } from "antd";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useConfig } from "../hooks/useToken";
import { LogoIcon } from "../Icons/logo";
import { AppleFilled, GoogleOutlined } from "@ant-design/icons";
import { ChangeEvent, useState } from "react";

import "./login.css";

const { Title, Text } = Typography;

const dummyUser = {
  id: "121",
  name: "dummy",
  email: "dummmy@gmail.com",
  bio: "Sup ...",
  avatar:
    "https://images.pexels.com/photos/16982012/pexels-photo-16982012/free-photo-of-sea-sunset-fashion-beach.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
};

export const Login = () => {
  const { handleLogin, auth } = useAuth();
  const { token } = useConfig();

  const location = useLocation();
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(true);
  const [userCreds, setUserCreds] = useState({
    name: "",
    password: "",
  });
  const [step, setStep] = useState(1);

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setIsOpen(false);
    navigate("/");
  };

  const handleValidateUser = () => {
    // TODO: Validate whether the user is valid and present in DB, make a fetch req, update error state.
    setStep(2);
  };

  const handleUserName = (e: ChangeEvent<HTMLInputElement>) => {
    setUserCreds((prev) => {
      return { ...prev, name: e.target.value };
    });
  };

  const handlePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setUserCreds((prev) => {
      return { ...prev, password: e.target.value };
    });
  };

  const handleAuth = () => {
    // TODO: Validate whether the password is valid, make a fetch req, update error state.
    // TODO: Update the auth context state based on this.

    if (!auth.isAuthenticated) {
      handleLogin(dummyUser);
      return navigate(location.state.from);
    }

    return navigate("/");
  };

  return (
    <div>
      <Modal
        open={isOpen}
        width={600}
        style={{ height: "600px" }}
        centered
        footer={null}
        onCancel={handleCancel}
      >
        <div className="flex column align-center" style={{ padding: "0 32px", height: "600px" }}>
          <div>
            <Link to="/">
              <LogoIcon style={{ color: token.colorPrimary }} />
            </Link>
          </div>

          {step === 1 && (
            <div className="flex align-start column w-100" style={{ padding: "0 88px" }}>
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
                value={userCreds.name}
                onChange={handleUserName}
              />

              <Button
                size="large"
                block
                shape="round"
                style={{ margin: "12px 0", fontWeight: "600" }}
                type="primary"
                onClick={handleValidateUser}
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
            </div>
          )}

          {step === 2 && (
            <div className="flex align-start column w-100 justify-between h-100">
              <div className="w-100">
                <Title level={3} style={{ fontSize: "31px", fontWeight: "700", margin: "1rem 0" }}>
                  Sign in to Twitter
                </Title>

                <Input
                  placeholder="Phone, email, or username"
                  style={{ margin: "12px 0" }}
                  size="large"
                  className="login-input"
                  value={userCreds.name}
                  disabled
                />

                <Input.Password
                  placeholder="Password"
                  style={{ margin: "12px 0" }}
                  size="large"
                  className="password-input"
                  value={userCreds.password}
                  onChange={handlePassword}
                />

                <Text style={{ marginTop: "-10px" }}>
                  <Link to="/signup">Forgot password?</Link>
                </Text>
              </div>

              <div className="w-100">
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

                <Text style={{ margin: "40px 0" }}>
                  Don't have an account? <Link to="/signup">Sign Up</Link>
                </Text>
              </div>
            </div>
          )}
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
