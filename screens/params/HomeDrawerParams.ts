import { DrawerNavigationProp } from '@react-navigation/drawer'

export type HomeDrawerParamList = {
    Home: undefined
    Dashboard: undefined
    Landing: undefined
    EditBudget: undefined
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
    'EditBudget'
>;

export type LandingNavigationProp = DrawerNavigationProp<
    HomeDrawerParamList,
    'Landing'
>;