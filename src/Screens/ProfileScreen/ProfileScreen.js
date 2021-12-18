import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import AppBar2 from '../../components/AppBar/AppBar2';
import Card from '../../components/Cards/Card';
import AllColors from '../../Constants/AllColors';

export const {maxWidth, maxHeight} = Dimensions.get('screen');

const ProfileScreen = () => {
  return (
    <ScrollView
      style={{flexDirection: 'column', width: maxWidth, height: maxHeight}}>
      <SafeAreaView
        style={{
          width: maxWidth,
          height: maxHeight,
        }}>
        <AppBar2 />
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
          }}>
          <Image
            source={require('../../Assets/Active.jpg')}
            style={{borderRadius: 100, width: 200, height: 200}}
          />
        </View>
        <View
          style={{
            marginTop: 20,
          }}>
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <Text style={{fontSize: 15, fontWeight: 'bold'}}>
              UserName:{'  '}
            </Text>
            <Text style={{fontSize: 15}}>Rami Al-Absa</Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <Text style={{fontSize: 15, fontWeight: 'bold'}}>
              Phone Number:{'  '}
            </Text>
            <Text style={{fontSize: 15}}>+963933755497</Text>
          </View>
          <View style={{alignItems: 'center'}}>
            <Text
              style={{
                fontSize: 15,
                fontWeight: 'bold',
                marginTop: 20,
                color: AllColors.primary,
              }}>
              {' '}
              Purchase History
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              margin: 40,
            }}>
            <Card />
            <Card />
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default ProfileScreen;
