# Theme Context System

This theme context system provides a centralized way to manage dark/light theme across your entire application.

## Features

- **Persistent Theme**: Saves user's theme preference to localStorage
- **System Preference Detection**: Automatically detects user's system theme preference
- **Global State Management**: All components can access and update theme state
- **Smooth Transitions**: Built-in CSS transitions for theme changes

## Usage

### 1. Basic Theme Access

```jsx
import { useTheme } from "../context/ThemeContext";

const MyComponent = () => {
  const { darkTheme, toggleTheme, theme } = useTheme();

  return (
    <div
      className={`${
        darkTheme ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      <button onClick={toggleTheme}>
        Switch to {darkTheme ? "Light" : "Dark"} Mode
      </button>
    </div>
  );
};
```

### 2. Using Theme Classes Hook

```jsx
import { useThemeClasses } from "../hooks/useThemeClasses";

const MyComponent = () => {
  const { backgroundClasses, textClasses, cardClasses } = useThemeClasses();

  return (
    <div className={`${backgroundClasses} ${textClasses}`}>
      <div className={cardClasses}>Content here</div>
    </div>
  );
};
```

### 3. Conditional Theme Classes

```jsx
import { useTheme } from "../context/ThemeContext";

const MyComponent = () => {
  const { darkTheme } = useTheme();

  return (
    <div
      className={`
      ${darkTheme ? "bg-gray-900 text-white" : "bg-white text-black"}
      transition-colors duration-300
    `}
    >
      Content adapts to theme
    </div>
  );
};
```

## Theme Context API

- `darkTheme`: Boolean indicating if dark theme is active
- `toggleTheme()`: Function to toggle between light and dark themes
- `theme`: String value ('dark' or 'light')

## Setup

The ThemeProvider is already wrapped around your app in `main.jsx`. All components inside can access the theme context.

## Best Practices

1. Always add `transition-colors duration-300` for smooth theme transitions
2. Use consistent color schemes (gray-900/white for backgrounds, etc.)
3. Test both themes to ensure good contrast and readability
4. Consider using the `useThemeClasses` hook for common theme patterns
