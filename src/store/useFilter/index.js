import React, { createContext, useState, useContext } from "react";

const FilterContext = createContext();

function FilterProvider({ children }) {
  const [filter, setFilter] = useState("");

  return (
    <FilterContext.Provider value={{ filter, setFilter }}>
      {children}
    </FilterContext.Provider>
  );
}

export function useFilter() {
  const context = useContext(FilterContext);
  if (!context)
    throw new Error("useFilter must be used within a FilterProvider");
  const { filter, setFilter } = context;
  return { filter, setFilter };
}

export default FilterProvider;
