import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { DefaultTheme, Provider as PaperProvider, configureFonts } from 'react-native-paper'
import { fontConfig, getFonts } from './styles'
import AppLoading from 'expo-app-loading'

import Landing from './screens/Landing';

const Stack = createStackNavigator()

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
