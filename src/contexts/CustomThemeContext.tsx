import { ReactNode, createContext, useContext, useState } from "react";

interface ICustomTheme {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const CustomThemeContext = createContext<ICustomTheme | null>(null);

export const CustomThemeProvider = ({ children }: { children: ReactNode }) => {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => setDarkMode((p) => !p);

  return (
    <CustomThemeContext.Provider value={{ darkMode, toggleDarkMode }}>{children}</CustomThemeContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useCustomTheme = () => {
  const value = useContext(CustomThemeContext);

  if (!value) {
    throw new Error("useCustomTheme has to be used within <CustomThemeContext.Provider>");
  }

  const { darkMode, toggleDarkMode } = value;

  return { darkMode, toggleDarkMode };
};
