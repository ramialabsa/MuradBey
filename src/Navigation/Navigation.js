import React, {useEffect, useState, useMemo, useContext} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import LoginScreen from '../Screens/Auth/LoginScreen/LoginScreen';
import SignUpScreen from '../Screens/Auth/SignupScreen/SignUpScreen';
import HomeScreen from '../Screens/HomeScreen/HomeScreen';
import CategoriesProducts from '../Screens/Products/CategoriesProducts';
import {StyleSheet, View} from 'react-native';
import ProfileScreen from '../Screens/ProfileScreen/ProfileScreen';
import CartScreen from '../Screens/CartScreen/CartScreen';
import FavouriteScreen from '../Screens/FavouritesScreen/FavouriteScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AllColors from '../Constants/AllColors';
import SplashScreen from '../Screens/Auth/SplashScreen/SplashScreen';
import {ActivityIndicator} from 'react-native-paper';

const AuthinticationStack = createNativeStackNavigator();
const RootStack = createNativeStackNavigator();
const HomePageStack = createBottomTabNavigator();
const ProductStack = createNativeStackNavigator();

const HomePageNavigator = () => {
  return (
    <HomePageStack.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveBackgroundColor: AllColors.primary,
        tabBarInactiveBackgroundColor: AllColors.black,
        tabBarShowLabel: false,
      }}
      initialRouteName="HomeScreen">
      <HomePageStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',

          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="home"
              color={AllColors.white}
              size={26}
            />
          ),
        }}
      />

      <HomePageStack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarActiveBackgroundColor: AllColors.primary,
          tabBarInactiveBackgroundColor: AllColors.black,
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="account"
              color={AllColors.white}
              size={26}
            />
          ),
        }}
      />
      <HomePageStack.Screen
        name="Favourite"
        component={FavouriteScreen}
        options={{
          tabBarLabel: 'Favourite',
          tabBarActiveBackgroundColor: AllColors.primary,
          tabBarInactiveBackgroundColor: AllColors.black,
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="star"
              color={AllColors.white}
              size={26}
            />
          ),
        }}
      />
      <HomePageStack.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarLabel: 'Cart',
          tabBarActiveBackgroundColor: AllColors.primary,
          tabBarInactiveBackgroundColor: AllColors.black,
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="cart"
              color={AllColors.white}
              size={26}
            />
          ),
        }}
      />
    </HomePageStack.Navigator>
  );
};
const ProductNavigator = () => {
  return (
    <ProductStack.Navigator screenOptions={{headerShown: false}}>
      <ProductStack.Screen
        name="ProductsScreen1"
        component={CategoriesProducts}
      />
    </ProductStack.Navigator>
  );
};

const AuthinticationNavigator = () => {
  return (
    <AuthinticationStack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="SplashScreen">
      <AuthinticationStack.Screen
        name="SplashScreen"
        component={SplashScreen}
      />

      <AuthinticationStack.Screen name="LoginScreen" component={LoginScreen} />

      <AuthinticationStack.Screen
        name="SignUpScreen"
        component={SignUpScreen}
      />
      {/* <AuthinticationStack.Screen name="HomeScreen" component={HomeScreen} />
      <AuthinticationStack.Screen
        name="ProductsScreen"
        component={CategoriesProducts}
      /> */}
    </AuthinticationStack.Navigator>
  );
};

const Navigation = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [userToken, setUserToken] = React.useState(null);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);
  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size={'large'} />
      </View>
    );
  }
  return (
    <NavigationContainer style={styles.container}>
      <RootStack.Navigator screenOptions={{headerShown: false}}>
        <RootStack.Group>
          <RootStack.Screen name="Intro" component={AuthinticationNavigator} />
        </RootStack.Group>

        <RootStack.Group>
          <HomePageStack.Screen
            name="HomeStack"
            component={HomePageNavigator}
          />
        </RootStack.Group>
        <RootStack.Group>
          <ProductStack.Screen
            name="ProductsScreen"
            component={ProductNavigator}
          />
        </RootStack.Group>
      </RootStack.Navigator>
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
export default Navigation;
