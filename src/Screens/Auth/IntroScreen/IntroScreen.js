import React, {Component} from 'react';
import {
  ImageBackground,
  Image,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import styles from '../AuthStyle';
import Images from '../../../Constants/Images';
import Buttons from '../../../Constants/Buttons';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../LoginScreen/LoginScreen';
const IntroScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.img}>
      <ImageBackground
        style={styles.img}
        source={require('../../../Assets/IntroImage.jpg')}>
        <Image style={styles.logo} source={Images.logo} />

        <View style={{marginTop: 360}}>
          <Buttons style={styles.button} />
        </View>
        <View style={styles.center}>
          <Text style={styles.font}>Don't have an account!?</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('SignUpScreen');
            }}>
            <Text style={styles.font}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default IntroScreen;
