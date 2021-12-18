import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import styles from '../../Constants/ConstantsStyles';
import AllColors from '../../Constants/AllColors';
const Card = image => {
  const [isFav, setIsFav] = useState({
    fav: false,
  });
  const CheckFav = () => {
    setIsFav({
      ...isFav,
      fav: !isFav.fav,
    });
  };
  const updateCheckFav = () => {
    setIsFav({
      ...isFav,
      fav: !isFav.fav,
    });
  };
  return (
    <View style={styles.root}>
      <View>
        <Image
          style={styles.CardImage}
          source={require('../../Assets/Active.jpg')}
        />
        <View style={styles.board}>
          <View style={styles.boardStyle}>
            <Text style={styles.font}>Name</Text>
            <Text style={styles.smallfont}>Details</Text>
          </View>
          <View style={styles.fav}>
            <TouchableOpacity onPress={updateCheckFav}>
              {isFav.fav ? (
                <Icon name="star-outline" size={20} color={AllColors.primary} />
              ) : (
                <Icon name="star" size={20} color={AllColors.primary} />
              )}
            </TouchableOpacity>

            <Text style={styles.priceFont}>15.7</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Card;
