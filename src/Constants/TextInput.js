import React from 'react';
import {View, TextInput} from 'react-native';
import AllColors from './AllColors';
import styles from '../Screens/Auth/AuthStyle';
const UselessTextInput = props => {
  return (
    <View>
      <TextInput
        {...props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
        editable
        maxLength={40}
        color={AllColors.white}
      />
    </View>
  );
};

const UselessTextInputMultiline = () => {
  const [userName, onChangeText1] = React.useState('Username');
  const [fullName, onChangeText2] = React.useState('Full Name');
  const [phoneNumber, onChangeText3] = React.useState('Phone Number');
  const [password, onChangeText4] = React.useState('Password');
  // If you type something in the text box that is a color, the background will change to that
  // color.
  return (
    <View style={styles.topCenter}>
      <View
        style={{
          backgroundColor: userName,
          borderBottomColor: AllColors.white,
          borderBottomWidth: 3,
          width: 200,
        }}>
        <UselessTextInput
          multiline
          numberOfLines={1}
          onChangeText={text => onChangeText1(text)}
          value={userName}
          style={{padding: 10}}
        />
      </View>
      <View
        style={{
          backgroundColor: fullName,
          borderBottomColor: AllColors.white,
          borderBottomWidth: 3,
          width: 200,
        }}>
        <UselessTextInput
          multiline
          numberOfLines={1}
          onChangeText={text => onChangeText2(text)}
          value={fullName}
          style={{padding: 10}}
        />
      </View>
      <View
        style={{
          backgroundColor: phoneNumber,
          borderBottomColor: AllColors.white,
          borderBottomWidth: 3,
          width: 200,
        }}>
        <UselessTextInput
          multiline
          numberOfLines={1}
          onChangeText={text => onChangeText3(text)}
          value={phoneNumber}
          style={{padding: 10}}
        />
      </View>
      <View
        style={{
          backgroundColor: password,
          borderBottomColor: AllColors.white,
          borderBottomWidth: 3,
          width: 200,
        }}>
        <UselessTextInput
          multiline
          numberOfLines={1}
          onChangeText={text => onChangeText4(text)}
          value={password}
          style={{padding: 10}}
        />
      </View>
    </View>
  );
};

export default UselessTextInputMultiline;
