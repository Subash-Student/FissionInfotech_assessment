import { useTheme } from '../context/ThemeContext';

export const useThemeClasses = () => {
  const { darkTheme } = useTheme();

  const getThemeClasses = (lightClasses, darkClasses) => {
    return darkTheme ? darkClasses : lightClasses;
  };

  const backgroundClasses = darkTheme ? 'bg-black' : 'bg-white';
  const textClasses = darkTheme ? 'text-white' : 'text-black';
  const borderClasses = darkTheme ? 'border-gray-600' : 'border-gray-300';
  const cardClasses = darkTheme ? 'bg-gray-900' : 'bg-white';

  return {
    darkTheme,
    getThemeClasses,
    backgroundClasses,
    textClasses,
    borderClasses,
    cardClasses,
  };
};