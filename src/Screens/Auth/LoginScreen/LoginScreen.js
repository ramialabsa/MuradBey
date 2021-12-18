import React, {useState} from 'react';
import {
  ImageBackground,
  Image,
  View,
  Text,
  Pressable,
  TextInput,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import * as Animatable from 'react-native-animatable';

import AllColors from '../../../Constants/AllColors';
import {useNavigation} from '@react-navigation/native';
import {styles} from '../AuthStyle';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [data, setData] = React.useState({
    userName: '',
    password: '',
    check_TextInputChange: false,
    secureTextEntry: true,
  });

  const handlePasswordChange = value => {
    if (value.length != 0) {
      setData({
        ...data,
        password: value,
      });
    }
  };
  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };
  const textInputChange = value => {
    if (value.length != 0) {
      setData({
        ...data,
        userName: value,
        check_TextInputChange: true,
      });
    } else {
      setData({
        ...data,
        userName: value,
        check_TextInputChange: false,
      });
    }
  };
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={AllColors.primary} barStyle="light-content" />

      <View style={styles.header}>
        <ImageBackground
          source={require('../../../Assets/IntroImage.jpg')}
          style={styles.img}
          blurRadius={10}>
          <Animatable.Image
            animation="bounceIn"
            duraton="1500"
            source={require('../../../Assets/Logo.png')}
            style={styles.logo}
            resizeMode="stretch"
          />
        </ImageBackground>
      </View>
      <Animatable.View style={styles.footer} animation={'fadeInUpBig'}>
        <Text style={styles.text_footer}>User Name</Text>
        <View style={styles.action}>
          <MaterialCommunityIcons
            name="account"
            color={AllColors.primary}
            size={20}
          />

          <TextInput
            placeholder="Your Username"
            style={styles.textInput}
            onChangeText={value => textInputChange(value)}
          />

          {data.check_TextInputChange ? (
            <Animatable.View animation={'bounceIn'}>
              <Feather name="check-circle" color={'green'} size={20} />
            </Animatable.View>
          ) : null}
        </View>
        <Text style={[styles.text_footer, {marginTop: 35}]}>Password</Text>

        <View style={styles.action}>
          <MaterialCommunityIcons
            name="lock"
            color={AllColors.primary}
            size={20}
          />

          <TextInput
            placeholder="Your Password"
            secureTextEntry={data.secureTextEntry ? true : false}
            style={styles.textInput}
            onChangeText={value => handlePasswordChange(value)}
          />
          <TouchableOpacity onPress={updateSecureTextEntry}>
            {data.secureTextEntry ? (
              <Feather name="eye-off" color={'grey'} size={20} />
            ) : (
              <Feather name="eye" color={AllColors.primary} size={20} />
            )}
          </TouchableOpacity>
        </View>
        <View style={styles.button}>
          <TouchableOpacity
            style={styles.signIn}
            onPress={() => {
              navigation.navigate('HomeStack');
            }}>
            <LinearGradient
              colors={[AllColors.primary, AllColors.white]}
              style={styles.signIn}>
              <Text
                style={[styles.textSign, {color: AllColors.white}]}
                onPress={() => {}}>
                Sign in
              </Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.signIn,
              {
                borderColor: AllColors.bronze,
                borderWidth: 1,
                marginTop: 15,
              },
            ]}
            onPress={() => {
              navigation.navigate('SignUpScreen');
            }}>
            <Text style={[styles.textSign, {color: AllColors.primary}]}>
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
};

export default LoginScreen;
