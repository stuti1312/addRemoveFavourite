import { View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import StackNavigator from './src/navigators/StackNavigator';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </View>
  );
};

export default App;
