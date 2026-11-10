import React, { createContext, useContext, useState } from 'react';

export const colors = {
  primary: '#165250',
  primaryDark: '#0E4846',
  primaryLight: '#2B6766',
  primarySoft: 'rgba(22, 82, 80, 0.12)',
  secondary: '#2F778A',
  accentTeal: '#38908C',
  dark: '#171717',
  white: '#FFFFFF',
  textDark: '#171717',
  textMuted: '#656565',
  textLight: '#8A909A',
  border: '#ECECEC',
  borderDark: '#D8D8D8',
  background: '#F6F6F6',
  surface: '#FFFFFF',
  card: '#FFFFFF',
  success: '#1DC290',
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
};

export const radius = {
  sm: 8,
  md: 14,
  lg: 20,
  xl: 28,
  full: 9999,
};

export const palettes = {
  light: {
    bg: '#F6F6F6',
    surface: '#FFFFFF',
    surfaceSubtle: '#EAEAEA',
    card: '#FFFFFF',
    cardBorder: '#ECECEC',
    text: '#171717',
    subText: '#656565',
    iconColor: '#171717',
    divider: '#ECECEC',
    inputBg: '#FFFFFF',
  },
  dark: {
    bg: '#111818',
    surface: '#1A2424',
    surfaceSubtle: '#243030',
    card: '#1A2424',
    cardBorder: 'rgba(255, 255, 255, 0.08)',
    text: '#FFFFFF',
    subText: '#8A909A',
    iconColor: '#FFFFFF',
    divider: 'rgba(255, 255, 255, 0.12)',
    inputBg: '#243030',
  },
};

const ThemeContext = createContext({
  isDark: false,
  toggleTheme: () => {},
  theme: palettes.light,
});

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  const theme = isDark ? palettes.dark : palettes.light;

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
