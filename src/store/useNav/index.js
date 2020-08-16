import React, { createContext, useState, useContext } from "react";

const NavContext = createContext();

function NavProvider({ children }) {
  const [nav, setNav] = useState();

  return (
    <NavContext.Provider value={{ nav, setNav }}>
      {children}
    </NavContext.Provider>
  );
}

export function useNav() {
  const context = useContext(NavContext);
  if (!context) throw new Error("useNav must be used within a NavProvider");
  const { nav, setNav } = context;
  return { nav, setNav };
}

export default NavProvider;
