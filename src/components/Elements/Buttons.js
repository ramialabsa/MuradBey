import React from 'react';
import {Button} from 'react-native-elements';
import AllColors from '../../Constants/AllColors';
import {useNavigation} from '@react-navigation/native';
const Buttons = () => {
  const navigation = useNavigation();
  return (
    <Button
      title="Login"
      buttonStyle={{
        backgroundColor: AllColors.primary,
        borderRadius: 100,
        width: 225,
        height: 40,
      }}
      onPress={() => {
        navigation.navigate('LoginScreen');
      }}
    />
  );
};
export const SignupButton = () => {
  return (
    <Button
      title="Next"
      buttonStyle={{
        backgroundColor: AllColors.primary,
        borderRadius: 100,
        width: 100,
        height: 40,
      }}
    />
  );
};

export default Buttons;
