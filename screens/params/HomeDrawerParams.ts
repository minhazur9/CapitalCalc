import { DrawerNavigationProp } from '@react-navigation/drawer'

export type MainStackParamList = {
    Dashboard: undefined
    Landing: undefined
};

export type DashboardNavigationProp = DrawerNavigationProp<
    MainStackParamList,
    'Dashboard'
>;

export type LandingNavigationProp = DrawerNavigationProp<
    MainStackParamList,
    'Landing'
>;