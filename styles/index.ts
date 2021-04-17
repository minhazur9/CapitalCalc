import * as Font from 'expo-font'

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