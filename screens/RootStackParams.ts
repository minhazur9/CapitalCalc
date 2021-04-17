import { StackNavigationProp } from '@react-navigation/stack'
export type RootStackParamList = {
    Landing: { name: string }
};

export type LandingScreenNavigationProp = StackNavigationProp<
    RootStackParamList,
    'Landing'
>;
