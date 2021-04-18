import { StackNavigationProp } from '@react-navigation/stack'
export type RootStackParamList = {
    Landing: { name: string },
    Register: { name: string },
    Login: {name: String}
};

export type LandingScreenNavigationProp = StackNavigationProp<
    RootStackParamList,
    'Landing'
>;

export type RegisterScreenNavigationProp = StackNavigationProp<
    RootStackParamList,
    'Register'
>;

export type LoginScreenNavigationProp = StackNavigationProp<
    RootStackParamList,
    'Login'
>;