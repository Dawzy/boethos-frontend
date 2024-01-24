"use client"

import { useState, createContext, useEffect } from "react"

const defaultState = {
  sheets: null,
  darkMode: null,
  setSheets: () => {},
  setDarkMode: () => {}
};

const AppContext = createContext(defaultState);

const AppProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [sheets, setSheets] = useState([
    { name: "Grade 11", id: "1", entries: [
      {
        addedOn: new Date(),
        history: [new Date(), new Date()],
        name: "David Fawzy"
      },
      {
        addedOn: new Date(),
        history: [new Date(), new Date()],
        name: "Johnny Fawzy"
      },
      {
        addedOn: new Date(),
        history: [new Date(), new Date()],
        name: "Sadie Fawzy"
      }
    ]},
    { name: "Grade 12", id: "2", entries: [] },
    { name: "Youth", id: "3", entries: [] }
  ]);

  return (
    <AppContext.Provider
      value={{
        sheets,
        darkMode,
        setSheets,
        setDarkMode
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppContext;
export { AppProvider }