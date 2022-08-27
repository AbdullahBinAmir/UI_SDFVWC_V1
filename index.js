/**
 * @format
 */
 import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import * as React from 'react';
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';
import App from './App';
import {name as appName} from './app.json';

const theme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
      ...DefaultTheme.colors,
      primary: '#0da2ff',
      accent: '#f1c40f',
      background:'white',
      placeholder:'#5e6977',
      dark:false
    },
  };

export default function Main() {
    return (
      <PaperProvider theme={theme}>
        <App />
      </PaperProvider>
    );
  }

AppRegistry.registerComponent(appName, () => Main);
