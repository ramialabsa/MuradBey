import React from 'react';
import {ScreenNames} from './ScreenNames';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        transitionSpec: {
          duration: 100,
          useNativeDriver: true,
        },
      }}>
      <Stack.Screen name={ScreenNames.NAVIGATION_} />
    </Stack.Navigator>
  );
}
