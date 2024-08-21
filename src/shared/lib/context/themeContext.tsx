import { createContext, ReactNode, useState } from 'react';

type ThemeContextType = {
  isDark: boolean;
  toggleTheme: () => void;
};

type Undefinedable<T> = T | undefined;

export const ThemeContext = createContext<Undefinedable<ThemeContextType>>(undefined);

type ThemeProvProps = {
  children: ReactNode;
};

export const ThemeProvider = ({ children }: ThemeProvProps) => {
  const [isDark, setIsDark] = useState(false);
  const toggleTheme = () => setIsDark((prev) => !prev);

  return <ThemeContext.Provider value={{ isDark, toggleTheme }}>{children}</ThemeContext.Provider>;
};
