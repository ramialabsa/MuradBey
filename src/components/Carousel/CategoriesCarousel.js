import {useNavigation} from '@react-navigation/native';
import React, {Component} from 'react';
import {
  AppRegistry,
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  ImageBackground,
} from 'react-native';
import FitImage from 'react-native-fit-image';

import Slick from 'react-native-slick';
import AllColors from '../../Constants/AllColors';
const {maxWidth, maxHeight} = Dimensions.get('window');
var styles = StyleSheet.create({
  wrapper: {display: 'flex', justifyContent: 'center', alignItems: 'center'},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  img: {
    width: '100%',
    height: '100%',
  },
});

const CategoriesCarousel = () => {
  const navigation = useNavigation();
  return (
    <Slick
      style={styles.wrapper}
      showsButtons={false}
      dotColor={AllColors.white}
      activeDotColor={AllColors.black}
      activeDot={
        <View
          style={{
            backgroundColor: AllColors.black,
            width: 8,
            height: 8,
            borderRadius: 4,
            marginLeft: 3,
            marginRight: 3,
            marginTop: 3,
            marginBottom: 3,
          }}
        />
      }>
      <View style={styles.slide1}>
        <ImageBackground
          source={require('../../Assets/Header.jpg')}
          style={styles.img}>
          <Text
            style={styles.text}
            onPress={() => {
              navigation.navigate('ProductsScreen');
            }}>
            Tesssetur
          </Text>
        </ImageBackground>
      </View>
      <View style={styles.slide2}>
        <ImageBackground
          source={require('../../Assets/Header.jpg')}
          style={styles.img}>
          <Text style={styles.text}>Casual</Text>
        </ImageBackground>
      </View>
      <View style={styles.slide3}>
        <Text style={styles.text}>Active</Text>
      </View>
      <View style={styles.slide1}>
        <Text style={styles.text}>Scarf</Text>
      </View>
      <View style={styles.slide2}>
        <Text style={styles.text}>Jeans</Text>
      </View>
      <View style={styles.slide3}>
        <Text style={styles.text}>Kids</Text>
      </View>
      <View style={styles.slide2}>
        <Text style={styles.text}>Dress</Text>
      </View>
      <View style={styles.slide3}>
        <Text style={styles.text}>HomeWear</Text>
      </View>
    </Slick>
  );
};

export default CategoriesCarousel;
