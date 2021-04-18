import * as Font from 'expo-font'
import { StyleSheet } from 'react-native';
import { color } from 'react-native-reanimated';

export const getFonts = () => {
  return Font.loadAsync({
    'ubuntu-bold': require('../assets/fonts/Ubuntu-Bold.ttf'),
    'ubuntu-boldItalic': require('../assets/fonts/Ubuntu-BoldItalic.ttf'),
    'ubuntu-italic': require('../assets/fonts/Ubuntu-Italic.ttf'),
    'ubuntu-light': require('../assets/fonts/Ubuntu-Light.ttf'),
    'ubuntu-lightItalic': require('../assets/fonts/Ubuntu-LightItalic.ttf'),
    'ubuntu-medium': require('../assets/fonts/Ubuntu-Medium.ttf'),
    'ubuntu-mediumItalic': require('../assets/fonts/Ubuntu-MediumItalic.ttf'),
    'ubuntu-regular': require('../assets/fonts/Ubuntu-Regular.ttf')
  })
}

export const fontConfig = {
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
    },
    bold: {
      fontFamily: 'ubuntu-bold'
    },
    boldItalic: {
      fontFamily: 'ubuntu-boldItalic'
    },
    italic: {
      fontFamily: 'ubuntu-italic'
    },
    lightItalic: {
      fontFamily: 'ubuntu-lightItalic'
    },
    mediumItalic: {
      fontFamily: 'ubuntu-mediumItalic'
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
    },
    bold: {
      fontFamily: 'ubuntu-bold'
    },
    boldItalic: {
      fontFamily: 'ubuntu-boldItalic'
    },
    italic: {
      fontFamily: 'ubuntu-italic'
    },
    lightItalic: {
      fontFamily: 'ubuntu-lightItalic'
    },
    mediumItalic: {
      fontFamily: 'ubuntu-mediumItalic'
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
    },
    bold: {
      fontFamily: 'ubuntu-bold'
    },
    boldItalic: {
      fontFamily: 'ubuntu-boldItalic'
    },
    italic: {
      fontFamily: 'ubuntu-italic'
    },
    lightItalic: {
      fontFamily: 'ubuntu-lightItalic'
    },
    mediumItalic: {
      fontFamily: 'ubuntu-mediumItalic'
    }
  },
}

export const landingStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00ff5e'
  },
  text: {
    color: '#f6f6f6',
  },
  button: {
    width: '60%',
    margin: 15,
    backgroundColor: '#ffffff',
  },
  buttonText: {
    color: '#000000'
  },
  logo: {
    height: 350,
    width: 350,
  }
});

export const registerStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textInput: {
    backgroundColor: '#f2f2f2',
    width: '80%',
  },
  header: {
    fontSize: 50,
    marginBottom: 30,
    fontFamily: 'ubuntu-bold',
  },
  button: {
    width: '80%',
    backgroundColor: '#02c23c',
    marginTop: 40
  },
  buttonText: {
    color: '#f6f6f6'
  },
  errorMessage: {
    color: '#ff1100'
  }
})

export const loginStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textInput: {
    backgroundColor: '#f2f2f2',
    width: '80%',
  },
  button: {
    width: '80%',
    backgroundColor: '#02c23c',
    marginTop: 40
  },
  buttonText: {
    color: '#f6f6f6'
  },
  header: {
    fontSize: 50,
    marginBottom: 30,
    fontFamily: 'ubuntu-bold',
  },
  errorMessage: {
    color: '#ff1100'
  }
})