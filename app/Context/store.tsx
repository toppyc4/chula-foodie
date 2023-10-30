"use client";
import { useState, createContext, useContext } from "react";
import { useUserData } from "../../lib/hooks";

export const UserContext = createContext<{
  userData: any;
  //   user: any;
  //   username: any;
  //   string | null;
  //   line: string | null;
  //   facebook: string | null;
  // admin: boolean
}>({
  userData: {},
  //   user: null,
  //   username: null,
  //   line: null,
  //   facebook: null,
  //  admin: false
});

//@ts-ignore
export const UserContextProvider = ({ children }) => {
  const userData = useUserData();
  console.log(`userData ${userData}`);
  const [user, setUser] = useState("");
  const [username, setUsername] = useState("");

  return (
    <UserContext.Provider value={{ userData }}>{children}</UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
