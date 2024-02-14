import { useState, createContext, useEffect } from "react"
import toast from "react-hot-toast";

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
        name: "David Fawzy",
        id: "1"
      },
      {
        addedOn: new Date(),
        history: [new Date(), new Date()],
        name: "Johnny Fawzy",
        id: "2"
      },
      {
        addedOn: new Date(),
        history: [new Date(), new Date()],
        name: "Sadie Fawzy",
        id: "3"
      }
    ]},
    { name: "Grade 12", id: "2", entries: [] },
    { name: "Youth", id: "3", entries: [] }
  ]);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode])

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