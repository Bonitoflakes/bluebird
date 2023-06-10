/* eslint-disable react-refresh/only-export-components */
import { ReactNode, createContext, useContext, useState } from "react";
import { AuthContextType, User } from "../types/AuthType";

export const initialState = {
  isAuthenticated: false,
  user: {
    id: "",
    name: "",
    email: "",
    bio: "",
    avatar: "",
  },
};

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [auth, setAuth] = useState(initialState);

  const setAuthenticated = (user: User) => {
    console.log("Setting auth", user);
    setAuth((prev) => {
      return { isAuthenticated: !prev.isAuthenticated, user };
    });
  };

  return (
    <>
      <AuthContext.Provider value={{ auth, setAuthenticated }}>{children}</AuthContext.Provider>
    </>
  );
};

export const useAuth = () => {
  const userContext = useContext(AuthContext);

  if (!userContext) {
    throw new Error("useCurrentUser has to be used within <CurrentUserContext.Provider>");
  }

  const { auth, setAuthenticated } = userContext;

  return { auth, setAuthenticated };
};
