import { SearchOutlined } from "@ant-design/icons";
import { Avatar, Button, Input, Space, Typography } from "antd";
const { Title, Text } = Typography;

import { ReactComponent as X } from "../../assets/x.svg";

export const SidebarRight = () => {
  return (
    <div style={{ maxWidth: "350px", background: "black", color: "white" }}>
      <Search />
      <Suggestions />
      <Trending />
    </div>
  );
};

export const Suggestions = () => {
  return (
    <div style={{ background: "#202327", padding: "1rem", borderRadius: "1.125rem", margin: "1rem 0" }}>
      <Title level={5} style={{ color: "white", fontSize: "20px", fontWeight: "900" }}>
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
      <Space className="gap-12">
        <Avatar
          src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1"
          style={{ border: "1px solid gray" }}
          size={48}
        />

        <Space direction="vertical" className="gap-0">
          <Title style={{ color: "white", margin: "0" }} level={5}>
            unfoldco
          </Title>
          <Text style={{ color: "#6E7377" }}>@thxdr</Text>
        </Space>
      </Space>

      <Button style={{ borderRadius: "100px", background: "white", color: "black" }}>Follow</Button>
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
        background: "black",
        color: "white",
        width: "100%",
        paddingLeft: "1rem!important",
      }}
      allowClear={{
        clearIcon: (
          <X
            style={{
              color: "black",
              height: "1.6rem",
              width: "1.6rem",
              background: "rgb(29, 156, 240)",
              borderRadius: "100%",
              padding: "0.4rem",
              marginBottom: "-5px",
            }}
          />
        ),
      }}
      size="large"
      prefix={<SearchOutlined size={48} style={{}} />}
    />
  );
};

export const Trending = () => {
  return <div style={{ background: "#202327", padding: "1rem", borderRadius: "1.125rem" }}>Trending</div>;
};
