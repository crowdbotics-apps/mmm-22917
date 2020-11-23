import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps177955Navigator from '../features/Maps177955/navigator';
import Settings177933Navigator from '../features/Settings177933/navigator';
import Settings177918Navigator from '../features/Settings177918/navigator';
import NotificationList177917Navigator from '../features/NotificationList177917/navigator';
import Maps177916Navigator from '../features/Maps177916/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps177955: { screen: Maps177955Navigator },
Settings177933: { screen: Settings177933Navigator },
Settings177918: { screen: Settings177918Navigator },
NotificationList177917: { screen: NotificationList177917Navigator },
Maps177916: { screen: Maps177916Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
