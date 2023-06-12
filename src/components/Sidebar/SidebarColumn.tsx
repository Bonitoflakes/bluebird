import { SearchOutlined } from "@ant-design/icons";
import { Avatar, Button, Input, Space, Typography } from "antd";
const { Title, Text } = Typography;

import { ReactComponent as X } from "../../assets/x.svg";

import styles from "./styles/SidebarColumn.module.css";

export const SidebarColumn = () => {
  return (
    <div style={{ maxWidth: "350px", padding: "1rem" }}>
      <Search />
      <Suggestions />
      <Trending />
    </div>
  );
};

export const Suggestions = () => {
  return (
    <div style={{ margin: "1rem 0" }}>
      <Title level={5} style={{ fontSize: "20px", fontWeight: "900" }}>
        You might like
      </Title>
      <SuggestionTile />
      <SuggestionTile />
      <SuggestionTile />
    </div>
  );
};

export const SuggestionTile = () => {
  return (
    <Space style={{ width: "100%", justifyContent: "space-between", marginBottom: "24px" }}>
      <Space className="gap-0-75">
        <Avatar
          src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1"
          className="border-1"
          size={48}
        />

        <Space direction="vertical" className="gap-0">
          <Title style={{ margin: "0" }} level={5}>
            unfoldco
          </Title>
          <Text type="secondary">@thxdr</Text>
        </Space>
      </Space>

      <Button type="primary">Follow</Button>
    </Space>
  );
};

export const Search = () => {
  return (
    <Input
      placeholder="Search Twitter"
      style={{
        margin: "1rem 0",
        borderRadius: "100px",
        width: "100%",
      }}
      allowClear={{
        clearIcon: <X className={styles.xIcon} />,
      }}
      size="large"
      prefix={<SearchOutlined size={48} style={{}} />}
    />
  );
};

export const Trending = () => {
  return <div style={{ borderRadius: "1.125rem" }}>Trending</div>;
};
