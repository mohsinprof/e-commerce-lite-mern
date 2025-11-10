// src/DarkmodeToggle.jsx

import React, { useEffect, useState } from 'react';

const DarkmodeToggle = () => {
  // 1. Initial State: Check localStorage or system preference
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check if 'theme' is explicitly set to 'dark' in localStorage
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark') return true;
    
    // Check if 'theme' is explicitly set to 'light' (if so, return false)
    if (storedTheme === 'light') return false;
    
    // Otherwise, default to the user's system preference
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  // 2. Effect: Update the <html> element class and localStorage when isDarkMode changes
  useEffect(() => {
    const root = document.documentElement; // This is the <html> tag

    if (isDarkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }

    // This ensures the button text updates when the system preference changes
    // (though in manual mode, localStorage takes priority)
    return () => {
        // Cleanup function if needed, but not strictly necessary here
    };
  }, [isDarkMode]);

  // 3. Handler: Function to toggle the state when the button is clicked
  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  // 4. Render: The button that toggles the state
  return (
    <button
      onClick={toggleDarkMode}
      // Apply Tailwind classes: default is light, dark: prefix is for dark mode
      className="p-2 rounded font-semibold transition-colors duration-300
                 bg-gray-200 text-gray-800 
                 dark:bg-gray-800 dark:text-gray-100"
    >
      {/* Change button text based on current mode */}
      {isDarkMode ? '🌞 Light Mode' : '🌙 Dark Mode'}
    </button>
  );
};

export default DarkmodeToggle;