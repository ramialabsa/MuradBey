import React from 'react';
import {ImageBackground, Image, View, Text, Pressable} from 'react-native';
import styles from '../AuthStyle';
import Images from '../../../Constants/Images';
import SignupButton from '../../../Constants/Buttons';
import AllColors from '../../../Constants/AllColors';
import UselessTextInputMultiline from '../../../Constants/TextInput';

const SignUpScreen = () => {
  return (
    <ImageBackground
      blurRadius={12}
      style={styles.Authimg}
      source={require('../../../Assets/IntroImage.jpg')}>
      <View style={styles.center}>
        <Image style={styles.logo1} source={Images.logo} />
      </View>
      <View style={styles.center}>
        <Text style={styles.bigFonts}>Sign up</Text>
      </View>
      <View style={styles.center}>
        <UselessTextInputMultiline />
      </View>
      <View style={styles.center}>
        <Pressable style={styles.button}>
          <Text style={{color: AllColors.white, fontSize: 24}}>Sign up</Text>
        </Pressable>
      </View>
      <View style={styles.endCenter}>
        <View style={styles.center}>
          <Text style={styles.font}>Already have an account!?</Text>
          <Text style={styles.font}>Login</Text>
        </View>
      </View>
    </ImageBackground>
  );
};

export default SignUpScreen;
