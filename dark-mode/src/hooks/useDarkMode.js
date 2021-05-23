import { createContext, useState, useContext } from 'react';

const DarkModeContext = createContext('');

const DarkModeProvider = ({ children, ...rest }) => {
  const [darkMode, setDarkMode] = useState('');
  const toggleDarkMode = () => {
    setDarkMode((darkMode) => {
      return !darkMode ? 'dark-mode' : '';
    });
  };
  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }} {...rest}>
      <div className={darkMode}>{children}</div>
    </DarkModeContext.Provider>
  );
};

export const useDarkMode = () => {
  const theme = useContext(DarkModeContext);

  return {
    DarkModeProvider,
    darkMode: theme.darkMode,
    toggleDarkMode: theme.toggleDarkMode,
  };
};
