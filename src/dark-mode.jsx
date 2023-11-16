import React, { createContext, useState, useContext, useEffect } from 'react';

// Create a new context instance for managing dark mode state
const DarkModeContext = createContext();

// Custom hook for consuming the DarkModeContext
export const useDarkMode = () => useContext(DarkModeContext);

// DarkModeProvider component that provides dark mode state to its children
export const DarkModeProvider = ({ children }) => {
  // State variable to track whether dark mode is enabled
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Function to toggle the dark mode state
  const toggleDarkMode = () => {
    // Use the previous state to toggle the value
    setIsDarkMode(prev => !prev);
  };

  // Side effect to update the body class based on isDarkMode state
  useEffect(() => {
    if (isDarkMode) {
      // Add 'dark-body' class to the body if dark mode is enabled
      document.body.classList.add('dark-body');
    } else {
      // Remove 'dark-body' class from the body if dark mode is not enabled
      document.body.classList.remove('dark-body');
    }
  }, [isDarkMode]);

  // Provide the DarkModeContext to its children with the current state and toggle function
  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

// Export the DarkModeProvider component as the default export
export default DarkModeProvider;