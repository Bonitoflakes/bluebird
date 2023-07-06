import { Button, Form, Input, Typography } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

import { ICreds } from "./Login";

import "./login.css";

interface IStepTwo {
  username: string;
  password: ICreds["password"];
  disabledSave: boolean;
}

const { Title, Text } = Typography;

export const StepTwo = ({ username, password, disabledSave }: IStepTwo) => {
  return (
    <>
      <div className="flex justify-between w-full h-full align-start flex-col">
        <div className="w-full">
          <Title level={3} className="my-1 weight-700 text-2">
            Sign in to Twitter
          </Title>

          <Input
            placeholder="Phone, email, or username"
            size="large"
            className="my-1 login-input-disabled"
            disabled
            value={username}
          />

          <Form.Item
            name="password"
            help={password.help}
            validateStatus={password.status}
            className="w-full m-0"
          >
            <Input.Password placeholder="Password" size="large" className="password-input my-0-75" />
          </Form.Item>

          <Text style={{ marginTop: "-10px" }}>
            <Link to="/signup">Forgot password?</Link>
          </Text>
        </div>

        <div className="w-full">
          <Button
            size="large"
            block
            shape="round"
            className="my-0-75"
            type="primary"
            htmlType="submit"
            disabled={disabledSave}
          >
            {password.status === "validating" ? <LoadingOutlined /> : "Login"}
          </Button>

          <Text className="my-2-5">
            Don't have an account? <Link to="/signup">Sign Up</Link>
          </Text>
        </div>
      </div>
    </>
  );
};
