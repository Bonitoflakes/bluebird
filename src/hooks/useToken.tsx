import { theme } from "antd";

const { useToken } = theme;

export const useConfig = () => {
  const { token } = useToken();
  return { token };
};
