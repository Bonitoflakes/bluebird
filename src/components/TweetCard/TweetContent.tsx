import { useTweet } from "@contexts/TweetContext";
import { useConfig } from "@hooks/useConfig";
import { Typography } from "antd";

const { Text } = Typography;

export const TweetContent = () => {
  const { token } = useConfig();
  const { content, mediaAlt, mediaURL } = useTweet();

  const isVideo = mediaURL.endsWith(".mp4") 

  const media = isVideo ? (
    <video controls muted preload="metadata" controlsList="nofullscreen nodownload" className="tweet-video">
      <source src={mediaURL} type="video/mp4" />
    </video>
  ) : (
    <img src={mediaURL} alt={mediaAlt} className="reset-img tweet-img" />
  );

  return (
    <>
      <div>
        <Text style={{ color: token.colorPrimary, fontSize: "15px" }}>{content}</Text>
        <div className="my-1">
          {media}
        </div>
      </div>
    </>
  );
};
