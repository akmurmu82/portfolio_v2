import { createContext, useState } from "react";

export const NavContext = createContext();

function MyContextProvider({ children }) {
  const [isBarVisible, setBarVisibility] = useState(false);

  function toggleBar() {
    setBarVisibility(!isBarVisible);
  }

  return (
    <NavContext.Provider value={{ isBarVisible, toggleBar }}>
      {children}
    </NavContext.Provider>
  );
}

export default MyContextProvider;
