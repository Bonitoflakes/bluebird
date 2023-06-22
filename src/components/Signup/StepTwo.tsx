import { Button, Form, Input, Typography } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

import { ICreds } from "./Signup";

import "./signup.css";

interface IStepTwo {
  creds: ICreds;
  disabledSave: boolean;
}

const { Title, Text } = Typography;

export const StepTwo = ({ creds, disabledSave }: IStepTwo) => {
  return (
    <>
      <div className="flex justify-between w-full h-full align-start column">
        <div className="w-full">
          <Title level={3} className="my-1 weight-700 text-2">
            Set up your password
          </Title>

          <Form.Item
            name="password"
            help={creds.password.help}
            validateStatus={creds.password.status}
            hasFeedback
            className="w-full m-0"
          >
            <Input.Password placeholder="Password" size="large" className="password-input my-0-75" />
          </Form.Item>

          <Form.Item
            name="confirmPassword"
            help={creds.confirmPassword.help}
            hasFeedback
            validateStatus={creds.confirmPassword.status}
            className="w-full m-0"
          >
            <Input.Password placeholder="confirm Password" size="large" className="password-input my-0-75" />
          </Form.Item>
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
            {creds.confirmPassword.status === "validating" ? <LoadingOutlined /> : "Next"}
          </Button>
        </div>
      </div>
    </>
  );
};
