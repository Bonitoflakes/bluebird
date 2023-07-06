import { Avatar, Space } from "antd";
import { TweetContextProvider } from "@contexts/TweetContext";
import { ITweetCard } from "@customTypes/TweetType";

import { TweetContent } from "./TweetContent";
import { UserDetails } from "./UserDetails";
import { TweetOptions } from "./TweetOptions";

import "./TweetCard.css";

export const TweetCard = ({ post }: { post: ITweetCard }) => {
  return (
    <div className="p-1 border-1-bottom">
      <TweetContextProvider post={post}>
        <TweetLayout />
      </TweetContextProvider>
    </div>
  );
};

export const TweetLayout = () => {
  return (
    <div className="flex align-start gap-0-75">
      <Space className="flex">
        <Avatar size={48} />
      </Space>

      <div className="flex flex-1 flex-col align-start ">
        <UserDetails />
        <TweetContent />
        <TweetOptions />
      </div>
    </div>
  );
};
