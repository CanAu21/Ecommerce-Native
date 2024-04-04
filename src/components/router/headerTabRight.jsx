import {View, TouchableOpacity, StyleSheet, Text} from 'react-native';
import React, {useState} from 'react';
import {SearchNormal, ShoppingCart} from 'iconsax-react-native';
import AppColors from '../../theme/colors';
import {useNavigation} from '@react-navigation/native';
import {CART} from '../../utils/routes';

const HeaderTabRight = () => {
  // Navigation
  const navigation = useNavigation();
  // State for Shopping Cart
  const [count, setCount] = useState(1);

  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <SearchNormal size={28} color={AppColors.BLACK} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate(CART)}
        style={styles.iconContainer}>
        {count > 0 && (
          <View style={styles.cardNumber}>
            <Text
              style={{color: AppColors.WHITE, fontSize: 13, fontWeight: '500'}}>
              {count}
            </Text>
          </View>
        )}
        <ShoppingCart size={28} color={AppColors.BLACK} />
      </TouchableOpacity>
    </View>
  );
};

export default HeaderTabRight;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  iconContainer: {
    marginHorizontal: 11,
  },
  cardNumber: {
    width: 21,
    height: 21,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: AppColors.PRIMARY,
    borderRadius: 100,
    position: 'absolute',
    zIndex: 99,
    right: -9,
    top: -8,
  },
});
