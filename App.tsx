import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { DefaultTheme, Provider as PaperProvider, configureFonts } from 'react-native-paper'
import { fontConfig, getFonts } from './styles'
import AppLoading from 'expo-app-loading'
import { AuthStackParamList } from './screens/params/AuthStackParams';
// @ts-ignore
import { API_KEY, AUTH_DOMAIN, PROJECT_ID, STORAGE_BUCKET, MESSAGING_SENDER_ID, APP_ID, MEASUREMENT_ID } from '@env'
import firebase from 'firebase'
import Landing from './screens/Landing';
import Register from './screens/Register';
import Login from './screens/Login';
import Home from './screens/Home';
import { Provider } from 'react-redux'
import store from './store'

// Configuration to connect to firebase
const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MESSAGING_SENDER_ID,
  appId: APP_ID,
  measurementId: MEASUREMENT_ID
};

// Check if firebase already running
if (firebase.apps.length === 0) firebase.initializeApp(firebaseConfig)

const Stack = createStackNavigator<AuthStackParamList>()

// UI Theme
export const theme = {
  ...DefaultTheme,
  roundness: 5,
  colors: {
    ...DefaultTheme.colors,
    primary: '#42f59e'
  },
  fonts: configureFonts(fontConfig),
}


export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false)
  const auth = firebase.auth()

  // Load fonts before loading app
  if (fontsLoaded) {
    return (
      <Provider store={store} >
        <PaperProvider theme={theme}>
          <NavigationContainer>
            <Stack.Navigator initialRouteName={auth.currentUser ? "Home" : "Home"} headerMode="none">
              <Stack.Screen name="Landing" component={Landing} />
              <Stack.Screen name="Register" component={Register} />
              <Stack.Screen name="Login" component={Login} />
              <Stack.Screen name="Home" component={Home} />
            </Stack.Navigator>
          </NavigationContainer>
        </PaperProvider>
      </Provider>
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