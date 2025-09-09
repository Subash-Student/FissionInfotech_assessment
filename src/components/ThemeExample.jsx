import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { useThemeClasses } from '../hooks/useThemeClasses';

const ThemeExample = () => {
  const { darkTheme, toggleTheme } = useTheme();
  const { backgroundClasses, textClasses, cardClasses } = useThemeClasses();

  return (
    <div className={`p-6 ${backgroundClasses} ${textClasses} transition-colors duration-300`}>
      <div className={`p-4 rounded-lg ${cardClasses} shadow-md`}>
        <h2 className="text-2xl font-bold mb-4">Theme Example Component</h2>
        <p className="mb-4">
          Current theme: <span className="font-semibold">{darkTheme ? 'Dark' : 'Light'}</span>
        </p>
        <button
          onClick={toggleTheme}
          className={`px-4 py-2 rounded-md font-medium transition-colors duration-200 ${
            darkTheme 
              ? 'bg-white hover:bg-gray-200 text-black' 
              : 'bg-black hover:bg-gray-800 text-white'
          }`}
        >
          Toggle Theme
        </button>
      </div>
    </div>
  );
};

export default ThemeExample;