import {View, TouchableOpacity} from 'react-native';
import React from 'react';
import {SearchNormal, ShoppingCart} from 'iconsax-react-native';
import AppColors from '../../theme/colors';

const HeaderTabRight = () => {
  return (
    <View style={{flex: 1, flexDirection: 'row'}}>
      <TouchableOpacity style={{marginHorizontal: 12}}>
        <SearchNormal size={28} color={AppColors.BLACK} />
      </TouchableOpacity>
      <TouchableOpacity style={{marginHorizontal: 12}}>
        <ShoppingCart size={28} color={AppColors.BLACK} />
      </TouchableOpacity>
    </View>
  );
};

export default HeaderTabRight;
