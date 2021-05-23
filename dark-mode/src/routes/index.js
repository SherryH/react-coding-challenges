import { useDarkMode } from '../hooks/useDarkMode';
import Home from './App';

// Use something like react-router-dom to manage multiple pages/routes
const RoutesHome = () => {
  const { DarkModeProvider } = useDarkMode();
  return (
    <DarkModeProvider>
      <Home />
    </DarkModeProvider>
  );
};

export default RoutesHome;
