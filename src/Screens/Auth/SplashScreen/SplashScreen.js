import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  StatusBar,
  Image,
  ImageBackground,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useTheme} from '@react-navigation/native';
import AllColors from '../../../Constants/AllColors';
import {Button} from 'react-native-elements';
const {height} = Dimensions.get('screen');
const height_logo = height * 0.28;

const SplashScreen = ({navigation}) => {
  const {colors} = useTheme();

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={AllColors.primary} barStyle="light-content" />
      <View style={styles.header}>
        <ImageBackground
          source={require('../../../Assets/IntroImage.jpg')}
          style={[styles.img]}>
          <Animatable.Image
            animation="bounceIn"
            duraton="1500"
            source={require('../../../Assets/Logo.png')}
            style={styles.logo}
            resizeMode="stretch"
          />
        </ImageBackground>
      </View>
      <Animatable.View style={[styles.footer]} animation="fadeInUpBig">
        <Text
          style={[
            styles.title,
            {
              color: colors.text,
            },
          ]}>
          Shop Wholesale Now
        </Text>
        <Text style={styles.text}>Sign in with account</Text>

        <TouchableOpacity>
          <Button
            title="Next"
            buttonStyle={{
              backgroundColor: AllColors.primary,
              borderRadius: 100,
              width: 100,
              height: 40,
            }}
            onPress={() => navigation.navigate('LoginScreen')}
          />
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F5F6',
  },
  header: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    flex: 1,
    backgroundColor: AllColors.white,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: height_logo,
    height: height_logo,
  },
  title: {
    color: '#05375a',
    fontSize: 30,
    fontWeight: 'bold',
  },
  text: {
    color: AllColors.black,
    marginTop: 5,
  },
  button: {
    alignItems: 'flex-end',
    marginTop: 30,
  },
  signIn: {
    width: 150,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    flexDirection: 'row',
  },
  textSign: {
    color: 'white',
    fontWeight: 'bold',
  },
  img: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
});
export default SplashScreen;
