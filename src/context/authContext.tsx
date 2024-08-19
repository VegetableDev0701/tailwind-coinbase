'use client'
import React, { createContext, useState, ReactNode } from 'react';

// Define the shape of the context state
interface ThemeContextType {
  theme: {
    record_id: string
  };
  setTheme: (theme: {
    record_id: string
  }) => void;
}

// Create the context with an empty default value
export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Define the props for the provider component
interface ThemeProviderProps {
  children: ReactNode;
}

// Create the provider component
export const ThemeProvider:React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<{
    record_id: string
  }>({
    record_id: ''
  });

  return (
    <ThemeContext.Provider value={{ theme, setTheme }} >
      {children}
    </ThemeContext.Provider>
  );
};