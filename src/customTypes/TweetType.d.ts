export interface ITweetCard {
  _id: string;
  content: string;
  mediaURL: string;
  mediaAlt: string;
  likes: TweetLikes;
  username: string;
  createdAt: string;
  updatedAt: string;
  comments: TweetComments[] | [];
}

export interface TweetLikes {
  likeCount: number;
  likedBy: {
    _id: string;
    firstName: string;
    lastName: string;
    username: string;
    profileAvatar: string;
  }[];
  dislikedBy: never[];
}

export interface TweetComments {
  _id: string;
  commentData: string;
  firstName: string;
  lastName: string;
  username: string;
  profileAvatar: string;
  createdAt: string;
  updatedAt: string;
}
