import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { DefaultTheme, Provider as PaperProvider, configureFonts } from 'react-native-paper'
import * as Font from 'expo-font'
import AppLoading from 'expo-app-loading'

import Landing from './screens/Landing';

const getFonts = () => {
  return Font.loadAsync({
    'ubuntu-bold': require('./assets/fonts/Ubuntu-Bold.ttf'),
    'ubuntu-boldItalic': require('./assets/fonts/Ubuntu-BoldItalic.ttf'),
    'ubuntu-italic': require('./assets/fonts/Ubuntu-Italic.ttf'),
    'ubuntu-light': require('./assets/fonts/Ubuntu-Light.ttf'),
    'ubuntu-lightItalic': require('./assets/fonts/Ubuntu-LightItalic.ttf'),
    'ubuntu-medium': require('./assets/fonts/Ubuntu-Medium.ttf'),
    'ubuntu-mediumItalic': require('./assets/fonts/Ubuntu-MediumItalic.ttf'),
    'ubuntu-regular': require('./assets/fonts/Ubuntu-Regular.ttf')
  })
}

const Stack = createStackNavigator()

const fontConfig = {
  web: {
    regular: {
      fontFamily: 'ubuntu-regular',
    },
    medium: {
      fontFamily: 'ubuntu-medium',
    },
    light: {
      fontFamily: 'ubuntu-light',
    },
    thin: {
      fontFamily: 'ubuntu-normal',
    }
  },
  android: {
    regular: {
      fontFamily: 'ubuntu-regular',
    },
    medium: {
      fontFamily: 'ubuntu-medium',
    },
    light: {
      fontFamily: 'ubuntu-light',
    },
    thin: {
      fontFamily: 'ubuntu-normal',
    }
  },
  ios: {
    regular: {
      fontFamily: 'ubuntu-regular',
    },
    medium: {
      fontFamily: 'ubuntu-medium',
    },
    light: {
      fontFamily: 'ubuntu-light',
    },
    thin: {
      fontFamily: 'ubuntu-regular',
    }
  },
}

const theme = {
  ...DefaultTheme,
  roundness: 5,
  colors: {
    ...DefaultTheme.colors
  },
  fonts: configureFonts(fontConfig),
}


export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false)
  if (fontsLoaded) {
    return (
      <PaperProvider theme={theme}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Login" headerMode="none">
            <Stack.Screen name="Landing" component={Landing} />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    );
  }
  else {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)}
        onError={() => setFontsLoaded(true)}
      />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
