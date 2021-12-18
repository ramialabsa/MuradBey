import * as React from 'react';
import {Appbar} from 'react-native-paper';
import {Image, StyleSheet, Text, View, Dimensions} from 'react-native';
import Images from '../../Constants/Images';
import AllColors from '../../Constants/AllColors';
const {wp, hp} = Dimensions.get('window');
const MyComponent = () => (
  <Appbar style={styles.bottom}>
    <View style={styles.right}>
      <Appbar.Action
        icon="cart"
        color={AllColors.white}
        onPress={() => console.log('Pressed archive')}
      />
      <Text style={styles.font}>0.00</Text>
    </View>
  </Appbar>
);

export default MyComponent;

const styles = StyleSheet.create({
  bottom: {
    width: wp,
    height: 70,
    backgroundColor: AllColors.black,
    flexDirection: 'row-reverse',
  },

  right: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexDirection: 'row',
    // backgroundColor: 'red',
  },
  font: {
    fontSize: 14,
    color: AllColors.white,
  },
});
