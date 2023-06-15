import { ChangeEvent, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button, Form, Input, Modal, Typography } from "antd";
import { AppleFilled, GoogleOutlined } from "@ant-design/icons";

import { useConfig } from "../hooks/useToken";
import { useAuth } from "../contexts/AuthContext";
import { LogoIcon } from "../Icons/logo";

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

interface IUsername {
  username: string;
  status: "" | "error" | "success" | "warning" | "validating" | undefined;
  help: string;
}

interface IStepOne {
  username: IUsername;
  handleUsername: (e: ChangeEvent<HTMLInputElement>) => void;
}

interface IStepTwo {
  handleAuth: () => void;
  username: string;
}

export const Login = () => {
  const { handleLogin, auth } = useAuth();

  const location = useLocation();
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(true);
  const [username, setUsername] = useState<IUsername>({
    username: "",
    status: "",
    help: "",
  });

  const [step, setStep] = useState(1);
  const [form] = Form.useForm<{ username: string; password: string }>();

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setIsOpen(false);
    navigate("/");
  };

  const handleAuth = () => {
    // TODO: Validate whether the password is valid, make a fetch req, update error state.

    // TODO: Update the auth context state based on this.

    if (auth.isAuthenticated) {
      handleLogin(dummyUser);
      return navigate(location.state.from);
    }

    return navigate("/");
  };

  const onUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername({ ...username, username: e.target.value });
  };

  const validateUsername = async () => {
    const value = username.username;

    if (value === undefined || value === "") {
      return setUsername({ ...username, status: "error", help: "Username is required" });
    }

    if (value.length < 6) {
      return setUsername({ ...username, status: "error", help: "Username is too short" });
    }

    // make a call to DB.
    const delay = new Promise((resolve) => setTimeout(resolve, 5000));
    setUsername({ ...username, status: "validating" });
    await delay;

    // if user not found, return error
    if (value !== "rishab.khivsara@gmail.com") {
      return setUsername({ ...username, status: "error", help: "Username is invalid" });
    }

    setUsername({ ...username, status: "success", help: "" });
    return setStep(2);
  };

  const onFinish = () => {
    validateUsername().then(() => {
      console.log("finished validating username....");
    });
  };

  const onFinishFailed = (errorInfo: unknown) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div>
      <Modal open={isOpen} width={600} footer={null} onCancel={handleCancel}>
        <div className="flex column align-center px-2 h-600">
          <Logo />

          <Form
            form={form}
            onFinish={onFinish}
            name="login-form"
            onFinishFailed={onFinishFailed}
            className="w-full h-full px-5-5"
          >
            {step === 1 && <StepOne handleUsername={onUsernameChange} username={username} />}

            {step === 2 && <StepTwo handleAuth={handleAuth} username={username.username} />}
          </Form>
        </div>
      </Modal>
    </div>
  );
};

export const StepOne = ({ username, handleUsername }: IStepOne) => {
  const { token } = useConfig();

  return (
    <>
      <div className="flex align-start column w-full">
        <Title level={3} className="text-2 my-1 weight-600">
          Sign in to Twitter
        </Title>

        <Button icon={<GoogleOutlined />} size="large" block shape="round" className="my-1" type="primary">
          Sign in with Google
        </Button>

        <Button
          icon={<AppleFilled />}
          size="large"
          block
          shape="round"
          className="my-1 weight-600"
          type="primary"
        >
          Sign in with Apple
        </Button>

        <Line />

        <Form.Item
          required
          name="username"
          className="w-full m-0"
          validateStatus={username.status}
          help={username.help}
          hasFeedback
        >
          <Input
            placeholder="Phone, email, or username"
            className="my-1 login-input"
            name="username"
            size="large"
            value={username.username}
            onChange={handleUsername}
          />
        </Form.Item>

        <Button size="large" block shape="round" className="my-1 weight-600" type="primary" htmlType="submit">
          Next
        </Button>

        <Button
          style={{
            background: token.colorBgLayout,
            color: token.colorPrimary,
          }}
          className="my-1 weight-600"
          type="default"
          size="large"
          block
          shape="round"
        >
          Forgot Password
        </Button>

        <Text className="my-2-5">
          Don't have an account? <Link to="/signup">Signup</Link>
        </Text>
      </div>
    </>
  );
};

export const StepTwo = ({ handleAuth, username }: IStepTwo) => {
  return (
    <>
      <div className="flex align-start column w-full justify-between h-full">
        <div className="w-full">
          <Title level={3} className="weight-700 my-1 text-2">
            Sign in to Twitter
          </Title>

          <Input
            placeholder="Phone, email, or username"
            size="large"
            className="login-input my-0-75"
            disabled
            value={username}
          />

          <Form.Item name="password" rules={[{ required: true, message: "Please input your Password!" }]}>
            <Input.Password placeholder="Password" size="large" className="password-input my-0-75" />
          </Form.Item>

          <Text style={{ marginTop: "-10px" }}>
            <Link to="/signup">Forgot password?</Link>
          </Text>
        </div>

        <div className="w-full">
          <Button size="large" block shape="round" className="my-0-75" type="primary" onClick={handleAuth}>
            Login
          </Button>

          <Text className="my-2-5">
            Don't have an account? <Link to="/signup">Sign Up</Link>
          </Text>
        </div>
      </div>
    </>
  );
};

export const Line = () => {
  return (
    <div className="flex align-center w-full">
      <div style={{ margin: "8px 0", height: "1px", background: "gray", width: "100px", flex: "1" }}></div>
      <p className="m-0" style={{ padding: "0 0.25rem", fontSize: "17px" }}>
        or
      </p>
      <div style={{ margin: "8px 0", height: "1px", background: "gray", width: "100px", flex: "1" }}></div>
    </div>
  );
};

export const Logo = () => {
  const { token } = useConfig();

  return (
    <div>
      <Link to="/">
        <LogoIcon style={{ color: token.colorPrimary }} />
      </Link>
    </div>
  );
};
