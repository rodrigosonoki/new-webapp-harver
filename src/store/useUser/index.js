import React, { createContext, useState, useContext } from "react";

const UserContext = createContext();

const data = {
  name: "Rodrigo Sonoki",
  email: "rodrigo@harver.com.br",
};

function UserProvider({ children }) {
  const [user, setUser] = useState(data);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (!context) throw new Error("useUser must be used within a UserProvider");
  const { user, setUser } = context;
  return { user, setUser };
}

export default UserProvider;
