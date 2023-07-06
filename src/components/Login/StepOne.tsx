import { GoogleOutlined, AppleFilled } from "@ant-design/icons";
import { Button, Form, Grid, Input, Typography } from "antd";
import { Link } from "react-router-dom";
import { ICreds } from "./Login";

import "./login.css";
import { useConfig } from "@hooks/useConfig";

const { Title, Text } = Typography;

interface IStepOne {
  username: ICreds["username"];
  disabledSave: boolean;
}

export const StepOne = ({ username, disabledSave }: IStepOne) => {
  const { token } = useConfig();
  const { md } = Grid.useBreakpoint();

  return (
    <>
      <div className={`flex w-full align-start flex-col ${md ? "px-5-5" : ""}`}>
        <Title level={3} className="my-1 text-2 weight-600">
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
          />
        </Form.Item>

        <Button
          size="large"
          block
          shape="round"
          className="my-1 weight-600"
          type="primary"
          htmlType="submit"
          disabled={disabledSave}
        >
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

const Line = () => {
  return (
    <div className="flex w-full align-center">
      <div style={{ margin: "8px 0", height: "1px", background: "gray", width: "100px", flex: "1" }}></div>
      <p className="m-0" style={{ padding: "0 0.25rem", fontSize: "17px" }}>
        or
      </p>
      <div style={{ margin: "8px 0", height: "1px", background: "gray", width: "100px", flex: "1" }}></div>
    </div>
  );
};
