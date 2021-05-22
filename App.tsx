import React from 'react';
import Routes from './src/routes';

import {
  useFonts,
  RobotoCondensed_300Light,
  RobotoCondensed_400Regular,
  RobotoCondensed_700Bold
} from '@expo-google-fonts/roboto-condensed';

import { Dark, Light } from './src/styles/themes';
import { Load } from './src/components/Load';
import { ThemeProvider } from './src/contexts/ThemeContext';
import { usePersistedState } from './src/utils/usePeristedState';

export default function App() {
  const [fontsLoaded] = useFonts({
    RobotoCondensed_300Light,
    RobotoCondensed_400Regular,
    RobotoCondensed_700Bold
  });

  return (
    <ThemeProvider defaultTheme={Dark}>
      { fontsLoaded ? <Routes /> : <Load /> }
    </ThemeProvider>
  );
}
