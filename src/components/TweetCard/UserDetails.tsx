import Icon from "@ant-design/icons";
import { Button, Space, Typography } from "antd";
import { Link } from "react-router-dom";

import { ReactComponent as dots } from "@assets/dots.svg";
import { useTweet } from "@contexts/TweetContext";

const { Text, Title } = Typography;

export const UserDetails = () => {
  const { username, createdAt } = useTweet();

  const formatDate = (createdAt: string) => {
    const currentYear = new Date().getFullYear();
    const createdDate = new Date(createdAt);

    if (currentYear !== createdDate.getFullYear()) {
      return createdDate.toDateString().slice(4);
    }
    return createdDate.toDateString().slice(4, 10);
  };

  //   console.log(formatDate(createdAt));
  const postCreatedDate = formatDate(createdAt);

  return (
    <>
      <div className="flex justify-between w-full align-center">
        <div className="flex gap-0-25">
          <Title level={5} className="m-0 weight-800 text-0-75 items-center">
            {username}
          </Title>
          <Link to="/">
            <Text
              style={{ fontSize: "13px", fontWeight: "400", color: "gray" }}
              className="flex align-center gap-0-25"
            >
              @harsh_m09
              <div
                style={{ width: "0.25rem", height: "0.25rem", borderRadius: "50%", backgroundColor: "gray" }}
              ></div>
              {postCreatedDate}
            </Text>
          </Link>
        </div>

        <Space>
          <Button shape="circle">
            <Icon component={dots} />
          </Button>
        </Space>
      </div>
    </>
  );
};
