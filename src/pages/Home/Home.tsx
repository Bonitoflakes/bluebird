import { TweetCard } from "@components/TweetCard/TweetCard";
// FIX: Remove direct import, useEffect DB Call.
import { posts } from "../../backend/db/posts";

export const Home = () => {
  return (
    <div>
      {posts.map((post) => (
        <TweetCard key={post._id} post={post} />
      ))}
    </div>
  );
};
