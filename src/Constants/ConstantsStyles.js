import {StyleSheet, Dimensions} from 'react-native';
import AllColors from './AllColors';
const {wp, hp} = Dimensions.get('window');
export default StyleSheet.create({
  rooot: {
    flexDirection: 'column',
    width: wp,
    height: hp,
  },
  root: {
    flexDirection: 'column',
    bottom: 20,
    height: 200,
    width: 150,
  },
  CardImage: {
    width: 150,
    height: 165,
  },
  font: {
    fontSize: 12,
  },
  smallfont: {
    fontSize: 10,
  },
  board: {
    width: 150,
    height: 44,
  },
  boardStyle: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    left: 10,
  },
  price: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    right: 10,
    bottom: 10,
  },
  fav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  priceFont: {
    color: AllColors.red,
    fontSize: 12,
  },
  rootBar: {
    flexDirection: 'row',
    backgroundColor: 'black',
  },
  appBar: {
    height: 70,
  },
  right: {
    right: '400%',
    top: '75%',
  },
  left: {
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
  },
  logo2: {
    width: 72,
    height: 68,
    position: 'absolute',
    zIndex: 1,
    // backgroundColor: 'white',
  },
  favCart: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
  },
  cart: {
    margin: 10,
    backgroundColor: AllColors.white,
    flexDirection: 'row',
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
  },
});
