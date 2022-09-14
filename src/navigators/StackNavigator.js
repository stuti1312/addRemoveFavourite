import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Splash from '../screens/Splash';
import DrawerNavigator from './DrawerNavigator';

const Stack = createNativeStackNavigator();

export default StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="splash">
      <Stack.Screen name="splash" component={Splash} options={{ headerShown: false }} />
      <Stack.Screen name="drawer" component={DrawerNavigator} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};
