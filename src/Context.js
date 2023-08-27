import { createContext, useState } from "react";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [searchInput, setSearchInput] = useState('');

  const values = { data, setData, searchInput, setSearchInput };

  return <Context.Provider value={values}>{children}</Context.Provider>;
};