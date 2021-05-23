import { createContext, useState, useContext } from 'react';

const DarkModeContext = createContext('');

export const useDarkMode = () => {
  const [darkMode, setDarkMode] = useState('');
  const toggleDarkMode = () => {
    setDarkMode((darkMode) => {
      return !darkMode ? 'dark-mode' : '';
    });
  };
  const theme = useContext(DarkModeContext);

  const DarkModeProvider = ({ children, ...rest }) => {
    return (
      <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }} {...rest}>
        <div className={darkMode}>{children}</div>
      </DarkModeContext.Provider>
    );
  };

  return {
    DarkModeProvider,
    darkMode: theme.darkMode,
    toggleDarkMode: theme.toggleDarkMode,
  };
};
