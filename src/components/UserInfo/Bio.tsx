import { Avatar, Space, Tag, Tooltip, Typography } from "antd";
import { Link } from "react-router-dom";
import {
  AntDesignOutlined,
  CalendarOutlined,
  DisconnectOutlined,
  EnvironmentOutlined,
  UserOutlined,
} from "@ant-design/icons";

const { Title, Paragraph, Text } = Typography;

export const Bio = () => {
  return (
    <div style={{ margin: "2.2rem 1rem" }}>
      <Title style={{ margin: "0" }} level={4}>
        unfold
      </Title>

      <Space align="center">
        <Paragraph type="secondary" style={{ margin: "0" }}>
          @unfoldco
        </Paragraph>
        <Tag style={{ border: "none" }}>Follows you</Tag>
      </Space>

      <Space style={{ marginTop: "1rem" }}>
        <Paragraph style={{ margin: "0" }}>
          Design more gooder. Creative design agency creating solutions for brands like Solana, Facebook,
          Ripple, Merck, Adobe, Figma, & more. Working on <Link to="/">@DroniesNFT.</Link>
        </Paragraph>
      </Space>

      <Space style={{ width: "100%", marginTop: "1rem", gap: "2.25rem" }}>
        <Space>
          <EnvironmentOutlined style={{ color: "#6E7377" }} />
          <Text type="secondary">Sarasota, FL</Text>
        </Space>

        <Space>
          <DisconnectOutlined style={{ color: "#6E7377" }} />
          <Text type="secondary">
            <Link to="www.google.com">dribble.com/abcd</Link>
          </Text>
        </Space>

        <Space>
          <CalendarOutlined style={{ color: "#6E7377" }} />
          <Text type="secondary">Joined Sepetember, 2018</Text>
        </Space>
      </Space>

      <Space style={{ marginTop: "1rem", width: "100%" }}>
        <Link to="/followers" style={{}}>
          <b>122</b> <Text type="secondary">followers</Text>
        </Link>
        <Link to="/following">
          <b>4873</b> <Text type="secondary">following</Text>
        </Link>
      </Space>

      <Space style={{ marginTop: "1rem" }}>
        <Avatar.Group size="small" maxCount={10} maxStyle={{ display: "none" }}>
          <Avatar
            src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1"
            style={{ border: "1px solid gray" }}
          />
          <Link to="https://ant.design">
            <Avatar style={{ backgroundColor: "#f56a00", border: "1px solid gray" }}>K</Avatar>
          </Link>
          <Tooltip title="Ant User" placement="top">
            <Avatar
              style={{ backgroundColor: "#87d068", border: "1px solid gray" }}
              icon={<UserOutlined />}
            />
          </Tooltip>
          <Avatar
            style={{ backgroundColor: "#1677ff", border: "1px solid gray" }}
            icon={<AntDesignOutlined />}
          />{" "}
          <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1" />
          <Link to="https://ant.design">
            <Avatar style={{ backgroundColor: "#f56a00", border: "1px solid gray" }}>K</Avatar>
          </Link>
          <Tooltip title="Ant User" placement="top">
            <Avatar
              style={{ backgroundColor: "#87d068", border: "1px solid gray" }}
              icon={<UserOutlined />}
            />
          </Tooltip>
          <Avatar
            style={{ backgroundColor: "#1677ff", border: "1px solid gray" }}
            icon={<AntDesignOutlined />}
          />{" "}
          <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1" />
          <Link to="https://ant.design">
            <Avatar style={{ backgroundColor: "#f56a00", border: "1px solid gray" }}>K</Avatar>
          </Link>
          <Tooltip title="Ant User" placement="top">
            <Avatar
              style={{ backgroundColor: "#87d068", border: "1px solid gray" }}
              icon={<UserOutlined />}
            />
          </Tooltip>
          <Avatar
            style={{ backgroundColor: "#1677ff", border: "1px solid gray" }}
            icon={<AntDesignOutlined />}
          />
        </Avatar.Group>

        <Text type="secondary" style={{ fontSize: "11px" }}>
          Followed by New Meta World Peace, Chi Birmingham, and 20 others you follow
        </Text>
      </Space>
    </div>
  );
};
