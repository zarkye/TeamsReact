import { StatusBar } from 'react-native';

import { Teams } from './src/screens/Teams';
import { NewTeam } from './src/screens/NewTeam';
import { AddMembers } from './src/screens/AddMembers';

import { ThemeProvider } from 'styled-components/native';

import theme from './src/theme/index';

import { Roboto_400Regular, Roboto_700Bold, useFonts } from '@expo-google-fonts/roboto';

import { Loading } from './src/components/Loading';

export default function App() {
  const [fontsLoaded] =  useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar 
        barStyle="light-content"
        backgroundColor="transparent"
        translucent 
      />
      { fontsLoaded ? <AddMembers /> : <Loading /> }
    </ThemeProvider>
  );
}
