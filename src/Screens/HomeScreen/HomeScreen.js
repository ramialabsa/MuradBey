import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import AppBar from '../../components/AppBar/AppBar';
import Card from '../../components/Cards/Card';
import Carousel from '../../components/Carousel/Carousel';
import CategoriesCarousel from '../../components/Carousel/CategoriesCarousel';
import Searchbars from '../../components/SearchBar/SearchBar';
import styles from '../HomeScreen/HomeScreenStyle';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <AppBar />
        <Carousel />
        <View style={styles.searchbar}>
          <Searchbars />
        </View>
        <View style={styles.Categories}>
          <View style={{alignSelf: 'flex-start'}}>
            <Text style={styles.fonts}>Categories</Text>
          </View>
          <View
            style={{
              alignSelf: 'flex-end',
            }}>
            <TouchableOpacity>
              <Text style={styles.smallFonts}> View All</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.Carousel}>
          <CategoriesCarousel />
        </View>
        <View style={styles.Categories}>
          <View style={{alignSelf: 'flex-start'}}>
            <Text style={styles.fonts}>Products</Text>
          </View>
          <View
            style={{
              alignSelf: 'flex-end',
            }}>
            <TouchableOpacity>
              <Text style={styles.smallFonts}> View All</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.card}>
          <Card />
          <Card />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
