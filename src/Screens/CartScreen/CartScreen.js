import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from '../../Constants/ConstantsStyles';
import AppBar2 from '../../components/AppBar/AppBar2';
import AllColors from '../../Constants/AllColors';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';

const CartScreen = () => {
  const [isFav, setIsFav] = useState({
    fav: false,
  });

  const updateCheckFav = () => {
    setIsFav({
      ...isFav,
      fav: !isFav.fav,
    });
  };
  return (
    <View style={styles.rooot}>
      <View>
        <AppBar2 />
        <View
          style={{
            margin: 10,
            backgroundColor: AllColors.white,
            flexDirection: 'row',
          }}>
          <Image
            source={require('../../Assets/Active.jpg')}
            style={styles.CardImage}
          />

          <View>
            <Text>Name</Text>
            <Text>Discreption</Text>
          </View>
          <View style={styles.favCart}>
            <TouchableOpacity onPress={updateCheckFav}>
              {isFav.fav ? (
                <Icon name="star-outline" size={30} color={AllColors.primary} />
              ) : (
                <Icon name="star" size={20} color={AllColors.primary} />
              )}
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            margin: 10,
            backgroundColor: AllColors.white,
            flexDirection: 'row',
          }}>
          <Image
            source={require('../../Assets/Active.jpg')}
            style={styles.CardImage}
          />

          <View>
            <Text>Name</Text>
            <Text>Discreption</Text>
          </View>
          <View style={styles.favCart}>
            <TouchableOpacity onPress={updateCheckFav}>
              {isFav.fav ? (
                <Icon name="star-outline" size={30} color={AllColors.primary} />
              ) : (
                <Icon name="star" size={20} color={AllColors.primary} />
              )}
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            margin: 10,
            backgroundColor: AllColors.white,
            flexDirection: 'row',
          }}>
          <Image
            source={require('../../Assets/Active.jpg')}
            style={styles.CardImage}
          />

          <View>
            <Text>Name</Text>
            <Text>Discreption</Text>
          </View>
          <View style={styles.favCart}>
            <TouchableOpacity onPress={updateCheckFav}>
              {isFav.fav ? (
                <Icon name="star-outline" size={30} color={AllColors.primary} />
              ) : (
                <Icon name="star" size={20} color={AllColors.primary} />
              )}
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CartScreen;
