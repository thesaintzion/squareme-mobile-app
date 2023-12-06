import React, { useState } from "react";
import { UserContextType, UserType } from "../models";


export const UserContext = React.createContext<any | null>(null);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserType | null>(null);
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  const consumerPayload: UserContextType = {
    user,
    setUser,
    isAuthenticated,
    setIsAuthenticated
  };

  return <UserContext.Provider value={consumerPayload}>{children}</UserContext.Provider>;
};

export const useUserContext = (): UserContextType => {
  const res = React.useContext(UserContext) as UserContextType;
  return res;
};
