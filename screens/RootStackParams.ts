import { StackNavigationProp } from '@react-navigation/stack'
export type RootStackParamList = {
    Landing: { name: string }
    Register: { name: string }
};

export type LandingScreenNavigationProp = StackNavigationProp<
    RootStackParamList,
    'Landing'
>;

export type RegisterScreenNavigationProp = StackNavigationProp<
    RootStackParamList,
    'Register'
>;