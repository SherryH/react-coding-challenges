import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { faSun } from '@fortawesome/free-solid-svg-icons';

export const DarkModeToggle = ({ darkMode, toggleDarkMode }) => {
  const icon = darkMode ? faSun : faMoon;

  return (
    <>
      {/* --The button that should toggle dark mode-- */}
      <button className="app__dark-mode-btn icon level-right">
        <FontAwesomeIcon
          icon={icon}
          onClick={toggleDarkMode}
          color={darkMode && '#FFA500'}
        />
      </button>
    </>
  );
};
