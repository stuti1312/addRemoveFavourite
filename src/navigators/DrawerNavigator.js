import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/dist/Ionicons';

import TabNavigator from './TabNavigator';
import Favourites from '../screens/Favourites';
import Notifications from '../screens/Notifications';
import Jobs from '../screens/Jobs';
import Networks from '../screens/Networks';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={({ route }) => ({
        drawerStyle: { width: "50%" },
        drawerIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'people';
            color = focused ? 'blue' : 'gray';
            size = focused ? 30 : 25;
          } else if (route.name === 'Networks') {
            iconName = 'people';
            size = focused ? 30 : 25;
            color = focused ? 'blue' : 'gray';
          } else if (route.name === 'Favourites') {
            iconName = 'folder-open';
            size = focused ? 30 : 25;
            color = focused ? 'blue' : 'gray';
          } else if (route.name === 'Notifications') {
            iconName = 'notifications';
            size = focused ? 30 : 25;
            color = focused ? 'blue' : 'gray';
          } else if (route.name === 'Jobs') {
            iconName = 'briefcase';
            size = focused ? 30 : 20;
            color = focused ? 'blue' : 'gray';
          }
          return <Icon name={iconName} color={color} size={size} />;
        },
        drawerItemStyle: { backgroundColor: 'lightgray' },
        drawerLabelStyle: { fontSize: 15, },
      })}>
      <Drawer.Screen name="Home" component={TabNavigator} />
      <Drawer.Screen name="Favourites" component={Favourites} />
      <Drawer.Screen name="Networks" component={Networks} />
      <Drawer.Screen name="Notifications" component={Notifications} />
      <Drawer.Screen name="Jobs" component={Jobs} />
    </Drawer.Navigator>
  );
};
export default DrawerNavigator;
