import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import AppColors from '../../theme/colors';

const Button = props => {
  const {title} = props;
  return (
    <TouchableOpacity
      {...props}
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: AppColors.PRIMARY,
        margin: 5,
        paddingVertical: 10,
        borderRadius: 10,
      }}>
      <Text
        style={{
          fontSize: 16,
          fontWeight: '500',
          color: AppColors.WHITE,
          borderRadius: 5,
        }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
