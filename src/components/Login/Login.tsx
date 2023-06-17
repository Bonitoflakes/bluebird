import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { Form, Modal } from "antd";

import { useAuth } from "@contexts/AuthContext";
import { Logo } from "@customIcons/Logo";
import { API_ROUTES } from "@constants/Route_Constants";

import "./login.css";
import { StepOne } from "./StepOne";
import { StepTwo } from "./StepTwo";

export interface ICreds {
  username: {
    value: string;
    status: "" | "error" | "success" | "warning" | "validating" | undefined;
    help: string | null;
  };
  password: {
    value: string;
    status: "" | "error" | "success" | "warning" | "validating" | undefined;
    help: string | null;
  };
}

export const Login = () => {
  const { handleLogin } = useAuth();

  const location = useLocation();
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(true);
  const [step, setStep] = useState(1);
  const [disabledSave, setDisabledSave] = useState(true);

  const [creds, setCreds] = useState<ICreds>({
    username: {
      value: "",
      status: "",
      help: null,
    },
    password: {
      value: "",
      status: "",
      help: null,
    },
  });

  const [form] = Form.useForm<{ username: string; password: string }>();

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setIsOpen(false);
    navigate(-1);
  };

  const handleAuth = async (username: string, password: string) => {
    try {
      setDisabledSave((p) => !p);
      setCreds((prev) => ({
        ...prev,
        password: {
          ...prev.password,
          status: "validating",
          help: null,
        },
      }));

      const { data } = await axios.post(API_ROUTES.LOGIN, { username, password });
      const delay = new Promise((resolve) => setTimeout(resolve, 2000));
      await delay;

      if (!data) {
        setDisabledSave((p) => !p);
        setCreds((prev) => ({
          ...prev,
          password: {
            ...prev.password,
            status: "error",
            help: "Username or Password mismatch",
          },
        }));
      }

      handleLogin(data);
      return navigate(location.state?.from || "/");
    } catch (error) {
      console.error(error);
      return setCreds((prev) => ({
        ...prev,
        password: { ...prev.password, status: "error", help: "Something went wrong" },
      }));
    }
  };

  const validateUsername = async (value: string) => {
    setCreds((prev) => ({
      ...prev,
      username: { ...prev.username, value },
    }));

    if (!value) {
      return setCreds((prev) => ({
        ...prev,
        username: {
          ...prev.username,
          status: "error",
          help: "Username is required",
        },
      }));
    }

    if (value.length < 6) {
      return setCreds((prev) => ({
        ...prev,
        username: {
          ...prev.username,
          status: "warning",
          help: "Username is too short",
        },
      }));
    }

    setCreds((prev) => ({
      ...prev,
      username: { ...prev.username, status: "validating", help: null },
    }));

    try {
      const { data: isValidUser } = await axios.post(API_ROUTES.VALIDATE_USER, { username: value });

      if (!isValidUser) {
        return setCreds((prev) => ({
          ...prev,
          username: {
            ...prev.username,
            status: "error",
            help: "Username is invalid",
          },
        }));
      }

      setCreds((prev) => ({
        ...prev,
        username: { ...prev.username, status: "success", help: null },
      }));

      return setStep(2);
    } catch (error) {
      console.log(error);
      return setCreds((prev) => ({
        ...prev,
        username: { ...prev.username, status: "error", help: "Something went wrong" },
      }));
    }
  };

  const handleFormChange = () => {
    const hasErrors = form.getFieldsError().some(({ errors }) => errors.length);
    setDisabledSave(hasErrors);
  };

  const onFinish = async (values: any) => {
    console.log(values);

    const username = values.username?.trim();
    const password = values.password;

    if (step === 1) {
      await validateUsername(username).then(() => {
        console.log("finished validating username....");
      });
    }

    if (step === 2) {
      await handleAuth(creds.username.value, password).then(() => {
        console.log("Finishing Login.... ");
      });
    }
  };

  const onFinishFailed = (errorInfo: unknown) => {
    console.log("Finish Failed :", errorInfo);
  };

  return (
    <div>
      <Modal open={isOpen} width={600} footer={null} onCancel={handleCancel} centered>
        <div className="flex p-2 column align-center">
          <Logo />

          <Form
            form={form}
            name="login-form"
            className="w-full h-600"
            onFieldsChange={handleFormChange}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            {step === 1 && <StepOne username={creds.username} disabledSave={disabledSave} />}

            {step === 2 && (
              <StepTwo
                username={creds.username.value}
                password={creds.password}
                disabledSave={disabledSave}
              />
            )}
          </Form>
        </div>
      </Modal>
    </div>
  );
};
