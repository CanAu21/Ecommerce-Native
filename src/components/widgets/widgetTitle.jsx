import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import AppColors from '../../theme/colors';

const WidgetTitle = ({title}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity>
        <Text style={styles.rightTitle}>See All</Text>
      </TouchableOpacity>
    </View>
  );
};

export default WidgetTitle;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: AppColors.BLACK,
  },
  rightTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: AppColors.GRAY,
  },
});
