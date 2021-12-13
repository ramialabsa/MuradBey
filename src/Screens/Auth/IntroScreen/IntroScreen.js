import React from 'react';
import {ImageBackground, Image, View, Text} from 'react-native';
import styles from '../AuthStyle';
import Images from '../../../Constants/Images';
import Buttons from '../../../Constants/Buttons';
import AllColors from '../../../Constants/AllColors';
const IntroScreen = () => {
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
          <Text style={styles.font}>Sign up</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default IntroScreen;
