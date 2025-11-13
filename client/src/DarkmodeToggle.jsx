import React, { useEffect, useState } from 'react';

const DarkmodeToggle = () => {
  // 1. Initial State Logic remains the same
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark') return true;
    if (storedTheme === 'light') return false;
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  // 2. Effect Logic remains the same
  useEffect(() => {
    const root = document.documentElement;

    if (isDarkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  // 3. Handler Logic remains the same
  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  // 4. Render: The beautiful animated switch
  return (
    <div className="flex items-center">
      <button
        onClick={toggleDarkMode}
        // Base container for the switch track
        className={`
          w-14 h-8 flex items-center rounded-full p-1 
          transition-all duration-300 ease-in-out
          ${isDarkMode ? 'bg-body-bgdark' : 'bg-gray-300'}
        `}
        aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
      >
        {/* The Animated Thumb (Circle) */}
        <div
          className={`
            bg-white w-6 h-6 rounded-full shadow-md
            transform transition-transform duration-300 ease-in-out
            relative
            ${isDarkMode ? 'translate-x-6' : 'translate-x-0'}
          `}
        >
          {/* Icons inside the thumb (optional, but adds detail) */}
          <span 
            className={`
              absolute inset-0 flex items-center justify-center text-lg hover:text-[40px] transition-all 
              transition-opacity duration-300
              ${isDarkMode ? 'opacity-100 text-yellow-400' : 'opacity-100 text-orange-400'}
            `}
          >
             {isDarkMode ? '☀️' : '🌙'} 
          </span>
        </div>
      </button>
    </div>
  );
};

export default DarkmodeToggle;