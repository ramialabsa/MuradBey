import React from 'react';
import {ImageBackground, Image, View, Text, Pressable} from 'react-native';
import styles from '../AuthStyle';
import Images from '../../../Constants/Images';
import AllColors from '../../../Constants/AllColors';
import UselessTextInputMultiline from '../../../Constants/TextInput';
import Buttons from '../../../Constants/Buttons';

const LoginScreen = () => {
  return (
    <ImageBackground
      blurRadius={12}
      style={styles.Authimg}
      source={require('../../../Assets/IntroImage.jpg')}>
      <View style={styles.center}>
        <Image style={styles.logo1} source={Images.logo} />
      </View>
      <View style={styles.center}>
        <Text style={styles.bigFonts}>Login</Text>
      </View>
      <View style={styles.center}>
        <UselessTextInputMultiline />
      </View>
      <View style={styles.center}>
        <Buttons />
      </View>
      <View style={styles.endCenter}>
        <View style={styles.center}>
          <Text style={styles.font}>Don't have an account!?</Text>
          <Text style={styles.font}>Sign up</Text>
        </View>
      </View>
    </ImageBackground>
  );
};

export default LoginScreen;
