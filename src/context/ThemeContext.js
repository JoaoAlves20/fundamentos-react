import React, { useState, createContext } from "react";

export const ThemeContext = createContext()

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light')

  function handleToggleTheme() {
    setTheme((prevState) => prevState === 'dark' ? 'light' : 'dark')
  }

  return (
    <ThemeContext.Provider value={{
      theme,
      onToggleTheme: handleToggleTheme
    }}>
      {children}
    </ThemeContext.Provider>
  )
}