import { DrawerNavigationProp } from '@react-navigation/drawer'

export type HomeDrawerParamList = {
    'Home': undefined
    'Dashboard': undefined
    'Landing': undefined
    'Edit Budget': undefined
};

export type HomeNavigationProp = DrawerNavigationProp<
    HomeDrawerParamList,
    'Home'
>;

export type DashboardNavigationProp = DrawerNavigationProp<
    HomeDrawerParamList,
    'Dashboard'
>;

export type EditBudgetNavigationProp = DrawerNavigationProp<
    HomeDrawerParamList,
    'Edit Budget'
>;

export type LandingNavigationProp = DrawerNavigationProp<
    HomeDrawerParamList,
    'Landing'
>;