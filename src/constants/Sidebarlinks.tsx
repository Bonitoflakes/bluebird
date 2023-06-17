import home from "@assets/home.svg";
import like from "@assets/like.svg";
import messages from "@assets/messages.svg";
import post from "@assets/post.svg";
import profile from "@assets/profile.svg";
import search from "@assets/search.svg";

export const SideBarLinks = [
  {
    icon: home,
    label: "home",
    id: 1,
    publicRoute: true,
  },
  {
    icon: like,
    label: "like",
    id: 2,
    publicRoute: false,
  },
  {
    icon: messages,
    label: "messages",
    id: 3,
    publicRoute: false,
  },
  {
    icon: post,
    label: "post",
    id: 4,
    publicRoute: false,
  },
  {
    icon: profile,
    label: "profile",
    id: 5,
    publicRoute: false,
  },
  {
    icon: search,
    label: "search",
    id: 6,
    publicRoute: true,
  },
];
