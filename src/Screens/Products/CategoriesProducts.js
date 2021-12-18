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
import AppBar2 from '../../components/AppBar/AppBar2';
import Card from '../../components/Cards/Card';
import styles from '../HomeScreen/HomeScreenStyle';

const {wp, hp} = Dimensions.get('window');

const CategoriesProducts = () => {
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
          <Text style={styles.blackFonts}>Dress Collection</Text>
          <Text style={styles.smallBlackFonts}>Sort BY</Text>
        </View>
        <View style={{flexDirection: 'column'}}>
          <View style={styles.card}>
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

export default CategoriesProducts;
