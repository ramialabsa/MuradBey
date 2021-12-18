import {Wrap} from 'native-base';
import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';
import Buttonn from '../../components/Elements/Buttonn';
import FitImage from 'react-native-fit-image';
import AllColors from '../../Constants/AllColors';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Carousel = () => {
  return (
    <ImageBackground style={styles.root}>
      <FitImage source={require('../../Assets/Header.jpg')} style={styles.img}>
        <Text
          style={{
            color: AllColors.white,
            fontSize: 28,
          }}>
          WINTER
        </Text>
        <Text
          style={{
            color: AllColors.white,
            fontSize: 28,
          }}>
          Collection
        </Text>
        <Buttonn />
      </FitImage>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  root: {
    width: windowWidth,
    flexDirection: 'row',
  },
  img: {
    height: 300,
    width: windowWidth,
    flexWrap: 'wrap',
  },
});
export default Carousel;
