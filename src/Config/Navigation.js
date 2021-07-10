import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { TransitionSpecs } from '@react-navigation/stack';
import { TransitionPresets } from '@react-navigation/stack';
import Home from '../Screens/Home';
import Camera from '../Screens/Camera';

const Stack = createStackNavigator();

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
          name="Camera"
          component={Camera}
          options={{
            ...TransitionPresets.SlideFromRightIOS,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
