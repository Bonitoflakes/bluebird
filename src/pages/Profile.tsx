import { Button, Space, Typography } from "antd";
import { UserInfo } from "../components/UserInfo/UserInfo";
import { ArrowLeftOutlined } from "@ant-design/icons";
const { Title, Text } = Typography;

export const Profile = () => {
  return (
    <div style={{ maxWidth: "600px" }}>
      <Space style={{gap:"16px"}}>
        
        <Button style={{ background: "transparent", border: "none" }} shape="circle">
          <ArrowLeftOutlined style={{ color: "white" }} />
        </Button>

        <Space.Compact direction="vertical" style={{ padding: "1rem 0 1rem 0" }}>
          <Title style={{ color: "white", margin: "0" }} level={5}>
            unfoldco
          </Title>
          <Text style={{ color: "#6E7377" }}>888 Tweets</Text>
        </Space.Compact>
      </Space>
      <UserInfo />
    </div>
  );
};
