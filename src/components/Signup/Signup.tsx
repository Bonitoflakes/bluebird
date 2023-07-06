import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Form, Modal, Typography } from "antd";
import axios from "axios";

import "./signup.css";
import { StepOne } from "./StepOne";
import { StepTwo } from "./StepTwo";
import { API_ROUTES } from "@constants/Route_Constants";
import { useAuth } from "@contexts/AuthContext";

const { Title } = Typography;

export interface ICreds {
  username: {
    value: string;
    status: "" | "error" | "success" | "warning" | "validating" | undefined;
    help: string | null;
  };
  email: {
    value: string;
    status: "" | "error" | "success" | "warning" | "validating" | undefined;
    help: string | null;
  };
  dob: {
    value: string;
    status: "" | "error" | "success" | "warning" | "validating" | undefined;
    help: string | null;
  };
  password: {
    value: string;
    status: "" | "error" | "success" | "warning" | "validating" | undefined;
    help: string | null;
  };
  confirmPassword: {
    value: string;
    status: "" | "error" | "success" | "warning" | "validating" | undefined;
    help: string | null;
  };
}

function checkUsernameAvailable(fieldValue: string) {
  // make a DB call to check if the username is available
  console.log(fieldValue);
  return true;
  throw new Error("Function not implemented.");
}

export const Signup = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { handleLogin } = useAuth();

  const [isOpen, setIsOpen] = useState(true);
  const [step, setStep] = useState<1 | 2 | 3 | 4 | 5>(1);
  const [disabledSave, setDisabledSave] = useState(true);

  const [creds, setCreds] = useState<ICreds>({
    username: {
      value: "",
      status: "",
      help: null,
    },
    email: {
      value: "",
      status: "",
      help: null,
    },
    dob: {
      value: "",
      status: "",
      help: null,
    },
    password: {
      value: "",
      status: "",
      help: null,
    },
    confirmPassword: {
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

  const handleFormChange = async (currField: any) => {
    const fieldName = currField[0]?.name[0];
    const fieldValue = currField[0]?.value;
    // console.log(fieldName, fieldValue);

    if (fieldName === "name") {
      // make a DB call to check if the username is available
      setCreds((prev) => {
        return {
          ...prev,
          username: {
            value: fieldValue,
            status: "validating",
            help: null,
          },
        };
      });
      const delay = new Promise((resolve) => setTimeout(resolve, 2000));
      await delay;
      const available: boolean = await checkUsernameAvailable(fieldValue);

      if (!available) {
        setCreds((prev) => {
          return {
            ...prev,
            username: {
              value: fieldValue,
              status: "error",
              help: "Username is already taken.",
            },
          };
        });
      } else {
        setCreds((prev) => {
          return {
            ...prev,
            username: {
              value: fieldValue,
              status: "",
              help: null,
            },
          };
        });
      }
    }

    if (fieldName === "email") {
      setCreds((prev) => {
        return {
          ...prev,
          email: {
            value: fieldValue,
            status: "",
            help: null,
          },
        };
      });
    }

    if (fieldName === "password") {
      setCreds((prev) => {
        return {
          ...prev,
          password: {
            value: fieldValue,
            status: "",
            help: null,
          },
        };
      });
    }

    if (fieldName === "confirmPassword") {
      console.log(fieldValue, "confirm Password ");
      if (fieldValue !== creds.password.value) {
        return setCreds((prev) => {
          return {
            ...prev,
            confirmPassword: {
              value: fieldValue,
              status: "error",
              help: "Passwords do not match.",
            },
          };
        });
      }

      setCreds((prev) => {
        return {
          ...prev,
          confirmPassword: {
            value: fieldValue,
            status: "",
            help: null,
          },
        };
      });
    }

    const hasErrors = form.getFieldsError().some(({ errors }) => errors.length);
    // console.log("hasErrors", hasErrors);
    setDisabledSave(hasErrors);
  };

  const handleAuth = async (username: string, password: string) => {
    try {
      setDisabledSave((p) => !p);

      const { data } = await axios.post(API_ROUTES.LOGIN, { username, password });
      const delay = new Promise((resolve) => setTimeout(resolve, 2000));
      await delay;

      console.log("User found:---", data);

      if (data) {
        handleLogin(data);
        return navigate(location.state?.from || "/");
      } else {
        setDisabledSave((p) => !p);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const saveUser = async (username: string, email: string, password: string) => {
    console.log(username, email, password);

    try {
      const data = await axios.post(API_ROUTES.SIGNUP, {
        username,
        password,
      });
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  const onFinish = async () => {
    switch (step) {
      case 1:
        setStep(2);
        break;

      case 2: {
        try {
          // make a call to the DB and save the User.
          await saveUser(creds.username.value, creds.email.value, creds.password.value);
          // Login the user and navigate to the home page
          await handleAuth(creds.username.value, creds.password.value);
        } catch (error) {
          console.log(error);
        }
        break;
      }

      default:
        break;
    }
    setStep(2);
  };

  const onFinishFailed = (errorInfo: unknown) => {
    console.log("Finish Failed :", errorInfo);
  };

  return (
    <div>
      <Modal open={isOpen} width={600} footer={null} onCancel={handleCancel} centered>
        <div className="flex p-2 flex-col align-center">
          <Title level={5} className="weight-900 text-1 self-start">
            Step {step} of 5
          </Title>

          <Form
            form={form}
            name="login-form"
            className="w-full h-600"
            onFieldsChange={handleFormChange}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            {step === 1 && <StepOne creds={creds} disabledSave={disabledSave} />}

            {step === 2 && <StepTwo creds={creds} disabledSave={disabledSave} />}
          </Form>
        </div>
      </Modal>
    </div>
  );
};
