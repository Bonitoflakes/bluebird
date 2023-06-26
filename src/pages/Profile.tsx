import { Button, Space, Typography } from "antd";
import { UserInfo } from "./UserInfo/UserInfo";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { TweetCard } from "../components/TweetCard/TweetCard";
const { Title, Text } = Typography;

export const Profile = () => {
  return (
    // <div style={{ maxWidth: "600px" }}>
    <div>
      <UserHeader />
      <UserInfo />

      <div>
        <TweetCard />
      </div>
    </div>
  );
};

export const UserHeader = () => {
  return (
    <Space className="gap-1">
      <Button style={{ border: "none" }} shape="circle">
        <ArrowLeftOutlined />
      </Button>

      <Space.Compact direction="vertical" className="py-1">
        <Title className="m-0" level={5}>
          unfoldco
        </Title>
        <Text type="secondary">888 Tweets</Text>
      </Space.Compact>
    </Space>
  );
};
