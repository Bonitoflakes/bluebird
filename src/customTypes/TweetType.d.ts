export interface ITweetCard {
  _id: any;
  content: string;
  mediaURL: string;
  mediaAlt: string;
  likes: {
    likeCount: number;
    likedBy: never[];
    dislikedBy: never[];
  };
  username: string;
  createdAt: string;
  updatedAt: string;
  comments: never[];
}
