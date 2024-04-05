import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import React from 'react';
import {width} from '../../utils/constants';
import AppColors from '../../theme/colors';
import {Heart} from 'iconsax-react-native';
import {useNavigation} from '@react-navigation/native';
import {PRODUCTDETAIL} from '../../utils/routes';

const ProductCart = ({item}) => {
  // UseNavigation used for Product Detail
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => navigation.navigate(PRODUCTDETAIL)}
      style={styles.container}>
      <Image style={styles.image} source={{uri: item.image}} />
      <View style={styles.contain}>
        <Text numberOfLines={2} style={styles.title}>
          {item.title}
        </Text>
        <View style={styles.textsAndIconContainer}>
          <View>
            <Text style={styles.category}>{item.category}</Text>
            <Text style={styles.price}>${item.price}</Text>
          </View>
          <View style={styles.iconContainer}>
            <TouchableOpacity>
              <Heart size={20} color={AppColors.RED} variant="Bold" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default ProductCart;

const styles = StyleSheet.create({
  container: {
    width: width / 2,
    margin: 6,
    marginVertical: 20,
  },
  contain: {
    flex: 1,
    justifyContent: 'space-between',
  },
  image: {
    flex: 1,
    width: width * 0.4,
    height: width * 0.3,
    resizeMode: 'contain',
  },
  title: {
    fontWeight: '700',
    fontSize: 14,
    marginVertical: 5,
    color: AppColors.BLACK,
  },
  textsAndIconContainer: {
    flexDirection: 'row',
  },
  category: {
    fontWeight: '700',
    fontSize: 12,
    color: AppColors.GRAY,
    marginVertical: 5,
  },
  iconContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
