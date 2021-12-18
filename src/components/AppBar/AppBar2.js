import * as React from 'react';
import {Appbar, Button} from 'react-native-paper';
import {
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import AllColors from '../../Constants/AllColors';
import {useNavigation} from '@react-navigation/native';
const {wp, hp} = Dimensions.get('window');
const MyComponent = () => {
  const navigation = useNavigation();
  return (
    <Appbar style={styles.bottom}>
      <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}}>
        <Appbar.Action
          icon="arrow-left-bold-hexagon-outline"
          color={AllColors.white}
          onPress={() => navigation.navigate('HomeScreen')}
        />
        <Text style={styles.font}> Back</Text>
      </TouchableOpacity>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Appbar.Action
          icon="cart"
          color={AllColors.white}
          onPress={() => console.log('Pressed archive')}
        />
        <Text style={styles.font}>0.00</Text>
      </View>
    </Appbar>
  );
};

export default MyComponent;

const styles = StyleSheet.create({
  bottom: {
    width: wp,
    height: 70,
    backgroundColor: AllColors.black,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  right: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    // backgroundColor: 'red',
  },
  font: {
    fontSize: 14,
    color: AllColors.white,
  },
});
