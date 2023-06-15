import {
  AlignCenterOutlined,
  CommentOutlined,
  HeartOutlined,
  RetweetOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import { Avatar, Button, Space, Tooltip, Typography } from "antd";
import { Link } from "react-router-dom";
import { ReactComponent as dots } from "../../assets/dots.svg";
import Icon from "@ant-design/icons/lib/components/Icon";
import { useConfig } from "../../hooks/useToken";

const { Title, Text } = Typography;

export const TweetCard = () => {
  return (
    <div className="border-1-top border-1-bottom p-1">
      {/* <ReTweeted /> */}
      <Tweet />
    </div>
  );
};

export const ReTweeted = () => {
  return <Text>ReTweeted</Text>;
};

export const Tweet = () => {
  return (
    <div className="flex align-start gap-0-75">
      <Space className="flex">
        <Avatar size={48} />
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
      <div className="flex align-center justify-between  w-full">
        <div className="flex gap-0-25">
          <Title level={5} className="m-0" style={{ fontSize: "13px", fontWeight: "800" }}>
            Harsh Mohite
          </Title>
          <Link to="/">
            <Text style={{ fontSize: "13px", fontWeight: "400", color: "gray" }}>@harsh_m09 . Jun 9</Text>
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

export const Line2 = () => {
  const { token } = useConfig();
  return (
    <>
      <Space style={{ marginRight: "2rem", marginBottom: "1rem" }}>
        <Text style={{ color: token.colorPrimary, fontSize: "15px" }}>
          We know you're busy and there's a lot to learn out there.
          <br />
          <br />
          Let us know what content you're interested in learning and we'll make sure <br /> to create it for
          you ❤️
          <br />
          <br />
          <a>https://d1t6fjrywdb.typeform.com/to/qLuXDLvr</a>
        </Text>
      </Space>
    </>
  );
};

const userInteractionsList = [
  {
    name: "comment",
    shape: <CommentOutlined />,
    count: 23,
  },
  {
    name: "retweet",
    shape: <RetweetOutlined />,
    count: 23,
  },
  {
    name: "like",
    shape: <HeartOutlined />,
    count: 23,
  },
  {
    name: "view",
    shape: <AlignCenterOutlined rotate={90} />,
    count: 23,
  },
  {
    name: "share",
    shape: <UploadOutlined />,
  },
];

export const Line3 = () => {
  return (
    <>
      <div className="flex  w-full justify-between m-0-75" style={{ marginLeft: "-6px" }}>
        {userInteractionsList.map(({ shape, count, name }) => {
          return (
            <div className={`action--${name}`}>
              <Link to="/">
                <Tooltip
                  title={name}
                  arrow={false}
                  color="gray"
                  placement="top"
                  style={{ fontSize: "0.5rem" }}
                >
                  <Button type="text" shape="circle" icon={shape} />
                  {count ? <Text className={`action--${name}-text`}>{count}</Text> : null}
                </Tooltip>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};
