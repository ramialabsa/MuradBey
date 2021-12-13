import React from 'react';
import {StyleSheet, View} from 'react-native';
import IntroScreen from './src/Screens/Auth/IntroScreen/IntroScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignUpScreen from './src/Screens/Auth/SignupScreen/SignUpScreen';
import LoginScreen from './src/Screens/Auth/LoginScreen/LoginScreen';
import HomeScreen from './src/Screens/HomeScreen/HomeScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {/* <Stack.Screen name="IntroPage" component={IntroScreen} /> */}
        {/* <Stack.Screen name="SignUpScreen" component={SignUpScreen} /> */}
        {/* <Stack.Screen name="SignUpScreen" component={LoginScreen} /> */}
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    height: '100%',
    width: '100%',
  },
});

export default App;
