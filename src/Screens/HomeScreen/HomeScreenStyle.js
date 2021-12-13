import {StyleSheet, Dimensions} from 'react-native';
export const {maxWidth, maxHeight} = Dimensions.get('screen');
import AllColors from '../../Constants/AllColors';

export default StyleSheet.create({
  img: {
    width: maxWidth,
    height: maxHeight,
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  Authimg: {
    width: maxWidth,
    height: maxHeight,
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  button: {
    backgroundColor: AllColors.primary,
    width: 200,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
  },
  logo: {
    width: 252,
    height: 238,
    position: 'absolute',
    zIndex: 1,
    // backgroundColor: 'white',
  },
  logo1: {
    width: 185,
    height: 174,
    position: 'absolute',
    zIndex: 1,
    // backgroundColor: 'white',
  },
  font: {
    fontSize: 13,
    color: AllColors.white,
  },
  center: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    top: 100,
  },
  topCenter: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 50,
  },
  bigFonts: {
    fontSize: 24,
    color: AllColors.white,
    borderBottomWidth: 1,
  },
  endCenter: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    top: 50,
  },
});
