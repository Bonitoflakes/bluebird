import { Button, Space, Typography } from "antd";
import { UserInfo } from "../components/UserInfo/UserInfo";
import { ArrowLeftOutlined } from "@ant-design/icons";
const { Title, Text } = Typography;

export const Profile = () => {
  return (
    // <div style={{ maxWidth: "600px" }}>
    <div>
      <Space className="gap-1">
        <Button style={{ border: "none" }} shape="circle">
          <ArrowLeftOutlined style={{}} />
        </Button>

        <Space.Compact direction="vertical" style={{ padding: "1rem 0 1rem 0" }}>
          <Title style={{ margin: "0" }} level={5}>
            unfoldco
          </Title>
          <Text type="secondary">888 Tweets</Text>
        </Space.Compact>
      </Space>

      <UserInfo />
    </div>
  );
};
