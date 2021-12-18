import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Card from '../../components/Cards/Card';
import AppBar2 from '../../components/AppBar/AppBar2';
import styles from '../../Constants/ConstantsStyles';
const FavouriteScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View>
          <AppBar2 />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={styles.blackFonts}>Favoutrite</Text>
          <Text style={styles.smallBlackFonts}>Sort BY</Text>
        </View>
        <View style={{flexDirection: 'column'}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginLeft: 20,
              marginRight: 20,
              marginTop: 20,
            }}>
            <Card />
            <Card />
          </View>
          <View style={styles.card}>
            <Card />
            <Card />
          </View>
          <View style={styles.card}>
            <Card />
            <Card />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default FavouriteScreen;
