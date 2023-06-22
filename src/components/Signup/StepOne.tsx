import { Button, Form, Grid, Input, Select, Typography } from "antd";
import { ICreds } from "./Signup";

import "./signup.css";
const { Title, Text } = Typography;

interface IStepOne {
  creds: ICreds;
  disabledSave: boolean;
}

const DOB_DATES = [
  {
    label: "January",
    days: 31,
  },
  {
    label: "February",
    days: 28,
  },
  {
    label: "March",
    days: 31,
  },
  {
    label: "April",
    days: 30,
  },
  {
    label: "May",
    days: 31,
  },
  {
    label: "June",
    days: 30,
  },
  {
    label: "July",
    days: 31,
  },
  {
    label: "August",
    days: 31,
  },
  {
    label: "September",
    days: 30,
  },
  {
    label: "October",
    days: 31,
  },
  {
    label: "November",
    days: 30,
  },
  {
    label: "December",
    days: 31,
  },
];

export const StepOne = ({ creds, disabledSave }: IStepOne) => {
  const { md } = Grid.useBreakpoint();

  return (
    <>
      <div className={`flex w-full align-start column ${md ? "px-4" : ""}`}>
        <Title level={3} className="my-1 text-2 weight-700">
          Create your account
        </Title>

        <Form.Item
          required
          name="name"
          className="w-full m-0"
          validateStatus={creds.username.status}
          help={creds.username.help}
          hasFeedback
        >
          <Input
            placeholder="Name"
            className="my-1 login-input"
            name="name"
            size="large"
            maxLength={20}
            showCount
          />
        </Form.Item>

        <Form.Item
          required
          name="email"
          className="w-full m-0"
          validateStatus={creds.email.status}
          help={creds.email.help}
          hasFeedback
        >
          <Input placeholder="Email" className="my-1 login-input" name="email" size="large" />
        </Form.Item>

        <div className="DOB mt-1">
          <Title level={5}>Date of Birth</Title>
          <Text>
            This will not be shown publicly. Confirm your own age, even if this account is for a business, a
            pet, or something else.
          </Text>

          <div className="DOB-input-container flex gap-1 w-full ">
            <Form.Item required name="month" className=" m-0 flex-2">
              <Select
                className="my-1 flex-1-5 signup-select"
                size="large"
                placeholder="Month"
                options={DOB_DATES.map((date) => ({ value: date.label, label: date.label }))}
              />
            </Form.Item>

            <Form.Item required name="day" className="flex-1 m-0">
              <Select
                className="my-1 signup-select"
                size="large"
                placeholder="Day"
                options={[...Array(31)].map((_, i) => ({ value: i + 1, label: i + 1 }))}
              />
            </Form.Item>

            <Form.Item required name="year" className="flex-1 m-0">
              <Select
                className="my-1 signup-select"
                size="large"
                placeholder="Year"
                options={[...Array(2023 - 1940 + 1)].map((_, i) => ({ value: 2023 - i, label: 2023 - i }))}
              />
            </Form.Item>
          </div>
        </div>

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
      </div>
    </>
  );
};
