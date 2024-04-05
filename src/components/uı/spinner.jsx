import {ActivityIndicator} from 'react-native';
import React from 'react';
import AppColors from '../../theme/colors';

const Spinner = () => {
  return (
    <ActivityIndicator
      style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
      size={'large'}
      color={AppColors.GRAY}
    />
  );
};

export default Spinner;
