import { Grid, Tooltip, Button, Typography } from "antd";
import { Link } from "react-router-dom";
import {
  CommentOutlined,
  RetweetOutlined,
  HeartOutlined,
  AlignCenterOutlined,
  UploadOutlined,
} from "@ant-design/icons";

import { useTweet } from "@contexts/TweetContext";

const { Text } = Typography;

export const TweetOptions = () => {
  const { likes, comments } = useTweet();

  const icons = [
    { name: "comment", shape: <CommentOutlined />, count: comments.length },
    { name: "retweet", shape: <RetweetOutlined />, count: Math.ceil(Math.random() * 10000 )},
    { name: "like", shape: <HeartOutlined />, count: likes.likeCount },
    { name: "view", shape: <AlignCenterOutlined />, count: Math.ceil(Math.random() * 9999 ), hideOnMobile: true },
    { name: "share", shape: <UploadOutlined /> },
  ];

  return (
    <>
      <div className="flex justify-between w-full m-0-75" style={{ marginLeft: "-6px" }}>
        {icons.map((icon, index) => (
          <RenderIcon
            key={index}
            name={icon.name}
            shape={icon.shape}
            count={icon.count}
            hideOnMobile={icon.hideOnMobile}
          />
        ))}
      </div>
    </>
  );
};

interface RenderIconProps {
  name: string;
  shape: React.ReactNode;
  count?: number;
  hideOnMobile?: boolean;
}

export const RenderIcon = ({ name, shape, count, hideOnMobile }: RenderIconProps) => {
  const handleClick = () => console.log("options");
  const xs = Grid.useBreakpoint().xs;

  return (
    <>
      {hideOnMobile && xs ? null : (
        <Link to="/" key={name}>
          <Tooltip title={name} arrow={false} color="gray" placement="top" style={{ fontSize: "0.5rem" }}>
            <Button type="text" icon={shape} onClick={handleClick} className={`action--${name}`}>
              {count !== undefined && <Text className={`action--${name}-text`}>{count}</Text>}
            </Button>
          </Tooltip>
        </Link>
      )}
    </>
  );
};
