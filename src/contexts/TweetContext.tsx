import { createContext, useContext } from "react";
import { ITweetCard } from "@customTypes/TweetType";

export const TweetContext = createContext<ITweetCard | null>(null);

export const TweetContextProvider = ({ children, post }: { children: JSX.Element; post: ITweetCard }) => {
  return <TweetContext.Provider value={post}>{children}</TweetContext.Provider>;
};

export const useTweet = () => {
  const context = useContext(TweetContext);
  if (!context) {
    throw new Error("useTweet must be used within a TweetContextProvider");
  }
  return useContext(TweetContext);
};
