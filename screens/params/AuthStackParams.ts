import { StackNavigationProp } from '@react-navigation/stack'

export type AuthStackParamList = {
    Landing: undefined,
    Register: undefined,
    Login: undefined,
    Home: undefined
};

export type LandingScreenNavigationProp = StackNavigationProp<
    AuthStackParamList,
    'Landing'
>;

export type RegisterScreenNavigationProp = StackNavigationProp<
    AuthStackParamList,
    'Register'
>;

export type LoginScreenNavigationProp = StackNavigationProp<
    AuthStackParamList,
    'Login'
>;

export type HomeNavigationProp = StackNavigationProp<
    AuthStackParamList,
    'Home'
>;