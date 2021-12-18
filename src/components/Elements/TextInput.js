import React from 'react';
import {View, TextInput} from 'react-native';
import AllColors from '../../Constants/AllColors';
const UselessTextInput = props => {
  return (
    <View>
      <TextInput
        {...props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
        editable
        maxLength={40}
        color={AllColors.white}
        placeholder=""
      />
    </View>
  );
};

const UselessTextInputMultiline = () => {
  const [userName, onChangeText1] = React.useState('UserName');
  const [fullName, onChangeText2] = React.useState('Full Name');
  const [phoneNumber, onChangeText3] = React.useState('Phone Number');
  const [password, onChangeText4] = React.useState('Password');
  // If you type something in the text box that is a color, the background will change to that
  // color.
  return (
    <View>
      <View
        style={{
          backgroundColor: userName,
          borderBottomColor: AllColors.white,
          borderBottomWidth: 3,
          width: 200,
          placeholder: '',
        }}>
        <TextInput
          multiline
          numberOfLines={1}
          onChangeText={text => onChangeText1(text)}
          style={{padding: 10}}
          placeholder="UserName"
          placeholderTextColor={AllColors.white}
          color={AllColors.white}
        />
      </View>
      <View
        style={{
          backgroundColor: fullName,
          borderBottomColor: AllColors.white,
          borderBottomWidth: 3,
          width: 200,
        }}>
        <TextInput
          multiline
          numberOfLines={1}
          onChangeText={text => onChangeText2(text)}
          // value={fullName}
          style={{padding: 10}}
          placeholder="Full Name"
          placeholderTextColor={AllColors.white}
          color={AllColors.white}
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
          style={{padding: 10}}
          placeholder="Phone Number"
          placeholderTextColor={AllColors.white}
          color={AllColors.white}
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
          style={{padding: 10}}
          placeholder="Password"
          placeholderTextColor={AllColors.white}
          color={AllColors.white}
        />
      </View>
    </View>
  );
};

export default UselessTextInputMultiline;
