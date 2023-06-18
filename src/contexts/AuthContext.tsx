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

  const handleLogin = (user: User) => {
    console.log("Setting auth", user);

    if (user) return setAuth((prev) => ({ isAuthenticated: !prev.isAuthenticated, user }));

    throw new Error("Something went wrong, please check the user object");
  };

  const handleLogout = () => {
    setAuth(initialState);
  };

  return (
    <>
      <AuthContext.Provider value={{ auth, handleLogin, handleLogout }}>{children}</AuthContext.Provider>
    </>
  );
};

export const useAuth = () => {
  const userContext = useContext(AuthContext);

  if (!userContext) {
    throw new Error("useCurrentUser has to be used within <CurrentUserContext.Provider>");
  }

  const { auth, handleLogin, handleLogout } = userContext;

  return { auth, handleLogin, handleLogout };
};
