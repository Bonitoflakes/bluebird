import { initialState } from "@contexts/AuthContext";

type InitalStateType = typeof initialState;

export type User = {
  id: string;
  name: string;
  email: string;
  bio: string;
  avatar: string;
};

export type AuthContextType = {
  auth: InitalStateType;
  handleLogin: (user: User) => void;
  handleLogout: () => void;
};
