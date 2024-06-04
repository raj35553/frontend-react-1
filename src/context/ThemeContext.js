import React, {useState,createContext} from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children}) => {
 const [theme, setTheme] = useState("light");
 const [textColor, setTextColor] = useState("white-text");

 const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));

    setTextColor(theme === "light" ? "black-text" : "white-text");
}
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, textColor }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContext