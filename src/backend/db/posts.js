import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    content: "Enjoy the night city.",
    mediaURL: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    mediaAlt: "sunset over mountains",
    likes: {
      likeCount: 120,
      likedBy: [],
      dislikedBy: [],
    },
    username: "naturelover",
    createdAt: "2023-01-26T18:25:08.239Z",
    updatedAt: formatDate(),
    comments: [],
  },
  {
    _id: uuid(),
    content: "Tears of steel.",
    mediaURL: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
    mediaAlt: "sunset over mountains",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "naturelover",
    createdAt: "2023-01-26T18:25:08.239Z",
    updatedAt: formatDate(),
    comments: [],
  },
  {
    _id: uuid(),
    content:
      "The beauty of nature never ceases to amaze me. Each time I step outside, I'm greeted by vibrant flowers, towering trees, and the melody of birdsong. It's a reminder of the wonders that exist beyond our everyday lives.",
    mediaURL:
      "https://images.pexels.com/photos/756780/pexels-photo-756780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    mediaAlt: "sunset over mountains",
    likes: {
      likeCount: 12,
      likedBy: [],
      dislikedBy: [],
    },
    username: "naturelover",
    createdAt: "2020-01-26T18:25:08.239Z",
    updatedAt: formatDate(),
    comments: [],
  },
  {
    _id: uuid(),
    content:
      "Food has a way of bringing people together. Whether it's a simple family dinner or a grand feast with friends, the act of sharing a meal creates a bond. It's a time for laughter, conversation, and the joy of discovering new flavors.",
    mediaURL:
      "https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    mediaAlt: "table set for a dinner",
    likes: {
      likeCount: 8,
      likedBy: [],
      dislikedBy: [],
    },
    username: "foodie",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [],
  },
  {
    _id: uuid(),
    content:
      "The power of literature lies in its ability to transport us to different worlds. With each turn of the page, we embark on new adventures, meet intriguing characters, and explore the depths of the human experience. Books have the power to ignite our imagination and broaden our horizons.",
    mediaURL: "https://images.pexels.com/photos/1215714/pexels-photo-1215714.jpeg",
    mediaAlt: "stack of books",
    likes: {
      likeCount: 20,
      likedBy: [],
      dislikedBy: [],
    },
    username: "bookworm",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [],
  },
  {
    _id: uuid(),
    content:
      "Traveling is a passport to adventure and self-discovery. Exploring new cultures, witnessing breathtaking landscapes, and connecting with people from different walks of life opens our minds and enriches our souls. It's a constant reminder of how vast and diverse the world truly is.",
    mediaURL:
      "https://images.pexels.com/photos/417273/pexels-photo-417273.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    mediaAlt: "person standing on a mountain peak",
    likes: {
      likeCount: 16,
      likedBy: [],
      dislikedBy: [],
    },
    username: "wanderlust",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [],
  },
  {
    _id: uuid(),
    content:
      "Music is the universal language of emotions. It has the power to uplift our spirits, soothe our souls, and bring people together in harmony. Whether it's through singing, dancing, or simply listening, music allows us to express ourselves and connect on a deeper level.",
    mediaURL:
      "https://images.pexels.com/photos/168014/pexels-photo-168014.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    mediaAlt: "person playing guitar",
    likes: {
      likeCount: 10,
      likedBy: [],
      dislikedBy: [],
    },
    username: "musiclover",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [],
  },
  {
    _id: uuid(),
    content:
      "The art of photography captures fleeting moments and turns them into timeless treasures. Through a single frame, photographers can convey emotions, tell stories, and showcase the beauty of the world. Each photograph is a work of art that invites us to see the world through a different lens.",
    mediaURL:
      "https://images.pexels.com/photos/1036808/pexels-photo-1036808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    mediaAlt: "camera and photography equipment",
    likes: {
      likeCount: 6,
      likedBy: [],
      dislikedBy: [],
    },
    username: "shutterbug",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [],
  },
];
