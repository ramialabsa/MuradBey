import {Flex} from 'native-base';
import {
  StyleSheet,
  Dimensions,
  SafeAreaView,
  ScrollView,
  StatusBar,
} from 'react-native';
export const {maxWidth, maxHeight} = Dimensions.get('screen');
import AllColors from '../../Constants/AllColors';

export default StyleSheet.create({
  container: {
    flexDirection: 'column',
    // paddingTop: StatusBar.currentHeight,
  },
  scrollView: {},
  img: {
    width: maxWidth,
    height: maxHeight,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },

  font: {
    fontSize: 13,
    color: AllColors.white,
  },

  searchbar: {
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 20,
  },
  Carousel: {
    height: 200,
    width: maxWidth,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  fonts: {fontSize: 24},
  smallFonts: {fontSize: 18},
  Categories: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
  },
  blackFonts: {
    fontSize: 24,
    color: AllColors.black,
    fontWeight: 'bold',
    margin: 10,
  },
  smallBlackFonts: {
    fontSize: 15,
    color: AllColors.black,
    margin: 10,
  },
});
