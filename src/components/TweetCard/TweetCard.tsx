import { SearchOutlined } from "@ant-design/icons";
import { Avatar, Button, Space, Typography } from "antd";
import { Link } from "react-router-dom";
const { Title, Text } = Typography;

export const TweetCard = () => {
  return (
    <div className="border-1-top border-1-bottom">
      <ReTweeted />
      <Tweet />
    </div>
  );
};

export const ReTweeted = () => {
  return <Text>ReTweeted</Text>;
};

export const Tweet = () => {
  return (
    <div className="flex align-start">
      <Space className="flex">
        <Avatar />
      </Space>

      <div className="flex column flex-1 align-start ">
        <Line1 />
        <Line2 />
        <Line3 />
      </div>
    </div>
  );
};

export const Line1 = () => {
  return (
    <>
      <div className="flex align-center justify-between blue w-100">
        <div className="flex ">
          <Title level={5} className="m-0">
            Harsh Mohite
          </Title>
          <Link to="/">
            <Text>@harsh_m09 . Jun 9</Text>
          </Link>
        </div>

        <Space>
          <Button>More</Button>
        </Space>
      </div>
    </>
  );
};

export const Line2 = () => {
  return (
    <>
      <Space>
        <Text>The hardest part of learning to code is not the code but consistency.</Text>
      </Space>
    </>
  );
};

const userInteractionsList = [
  {
    shape: <SearchOutlined />,
    count: 23,
  },
  {
    shape: <SearchOutlined />,
    count: 23,
  },
  {
    shape: <SearchOutlined />,
    count: 23,
  },
  {
    shape: <SearchOutlined />,
    count: 23,
  },
];

export const Line3 = () => {
  return (
    <>
      <Space className="flex justify-between w-100">
        <div>
          {userInteractionsList.map(({ shape, count }) => {
            return (
              <Space>
                <Link to="/">
                  <Button type="text" shape="circle" icon={shape} />
                  <Text>{count}</Text>
                </Link>
              </Space>
            );
          })}
        </div>

        <Space>
          <Link to="/">
            <Button>Share</Button>
          </Link>
        </Space>
      </Space>
    </>
  );
};
