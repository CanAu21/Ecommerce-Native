import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {AddCircle, MinusCirlce} from 'iconsax-react-native';
import AppColors from '../../theme/colors';

const Counter = ({onChange}) => {
  const [count, setCount] = useState(0);

  const decrease = () => {
    if (count > 0) {
      setCount(count - 1);
      onChange(count - 1);
    }
  };

  const increase = () => {
    if (count > 0) {
      setCount(count + 1);
      onChange(count + 1);
    }
  };

  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: AppColors.SOFTGRAY,
        padding: 3,
        borderRadius: 100,
      }}>
      <TouchableOpacity
        onPress={decrease}
        style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <MinusCirlce size={40} variant="Outline" color={AppColors.BLACK} />
      </TouchableOpacity>
      <Text
        style={{fontSize: 20, fontWeight: '500', flex: 1, textAlign: 'center'}}>
        {count}
      </Text>
      <TouchableOpacity
        onPress={increase}
        style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <AddCircle size={40} variant="Bold" color={AppColors.BLACK} />
      </TouchableOpacity>
    </View>
  );
};

export default Counter;
