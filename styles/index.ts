import * as Font from 'expo-font'
import { StyleSheet } from 'react-native';


// Loads the fonts
export const getFonts = () => {
  return Font.loadAsync({
    'ubuntu-bold': require('../assets/fonts/Ubuntu-Bold.ttf'),
    'ubuntu-boldItalic': require('../assets/fonts/Ubuntu-BoldItalic.ttf'),
    'ubuntu-italic': require('../assets/fonts/Ubuntu-Italic.ttf'),
    'ubuntu-light': require('../assets/fonts/Ubuntu-Light.ttf'),
    'ubuntu-lightItalic': require('../assets/fonts/Ubuntu-LightItalic.ttf'),
    'ubuntu-medium': require('../assets/fonts/Ubuntu-Medium.ttf'),
    'ubuntu-mediumItalic': require('../assets/fonts/Ubuntu-MediumItalic.ttf'),
    'ubuntu-regular': require('../assets/fonts/Ubuntu-Regular.ttf'),
    'montserrat-regular': require('../assets/fonts/Montserrat-Regular.ttf'),
    'montserrat-extraLight': require('../assets/fonts/Montserrat-ExtraLight.ttf'),
    'montserrat-light': require('../assets/fonts/Montserrat-Light.ttf')
  })
}

// font configuration to load
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
    },
    montserratRegular: {
      fontFamily: 'montserrat-regular'
    },
    montserratLight: {
      fontFamily: 'montserrat-light'
    },
    montserratExtraLight: {
      fontFamily: 'montserrat-extraLight'
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
    },
    montserratRegular: {
      fontFamily: 'montserrat-regular'
    },
    montserratLight: {
      fontFamily: 'montserrat-light'
    },
    montserratExtraLight: {
      fontFamily: 'montserrat-extraLight'
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
    },
    montserratRegular: {
      fontFamily: 'montserrat-regular'
    },
    montserratLight: {
      fontFamily: 'montserrat-light'
    },
    montserratExtraLight: {
      fontFamily: 'montserrat-extraLight'
    }
  },
}

// Styles for the landing screen
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

// Styles for the registration screen
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
  },
})

// Styles for the login screen
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

// Styles for the dashboard
export const dashboardStyles = StyleSheet.create({
  container: {
    flex: 0.5,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
})

// Styles for the pie chart
export const pieChartStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  budgetText: {
    fontSize: 40,
    fontFamily: 'montserrat-light',
    color: '#3483fa',
    position: 'absolute',
    textAlign: 'center',
  },
  currencyText: {
    color: '#3483fa',
    fontFamily: 'montserrat-light',
    fontSize: 40,
  }
})

// Styles for the edit budget screen
export const editBudgetStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  columnContainer: {
    flex: 1
  },
  columns: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 5,
    paddingBottom: 2,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
  firstColumn: {
    flex: 1.5,
  },
  secondColumn: {
    flex: 1.5,
  },
  thirdColumn: {
    flex: 2,
  },
  columnText: {
    fontFamily: 'ubuntu-bold',
    color: '#9c9c9c',
    textAlign: 'center'
  },
  itemList: {
    flex: 19,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginTop: 2
  },
  item: {
    flexDirection: 'row',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    paddingTop: 10,
    paddingBottom: 10,
  },
  symbolColumn: {
    flex: 1.5,
  },
  titleColumn: {
    flex: 1.5,
  },
  amountColumn: {
    flex: 2,
  },
  symbolData: {
    textAlign: 'center',
    fontSize: 20,
    color: '#3483fa'
  },
  nameData: {
    textAlign: 'center',
    fontSize: 20,
    color: '#3483fa'
  },
  amountData: {
    textAlign: 'center',
    fontSize: 20,
    color: '#3483fa',
  },
  costData: {
    textAlign: 'center',
    fontSize: 20,
    color: '#e00000'
  },
})

// Styles for the custom drawer
export const drawerStyles = StyleSheet.create({
  container: {
    paddingTop: 20
  },
  options: {
    position: 'absolute',
    bottom: 0,
    width: '100%'
  }
})