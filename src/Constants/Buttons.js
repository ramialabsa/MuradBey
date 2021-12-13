import React from 'react';
import {Pressable, Text, View, TouchableOpacity, Button} from 'react-native';
import styles from '../Screens/Auth/AuthStyle';
import AllColors from './AllColors';

const Buttons = navigation => {
  return (
    <Pressable style={styles.button}>
      <Text style={{color: AllColors.white, fontSize: 24}}>Login</Text>
    </Pressable>
  );
};
export const SignupButton = () => {
  return (
    <Pressable style={styles.button}>
      <Text style={{color: AllColors.white, fontSize: 24}}>Sign up</Text>
    </Pressable>
  );
};

export default Buttons;
