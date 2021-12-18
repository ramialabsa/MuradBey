import React from 'react';
import {View, Text} from 'react-native';
import {Button} from 'react-native-elements';
import AllColors from '../../Constants/AllColors';

const Buttonn = () => {
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

export default Buttonn;
