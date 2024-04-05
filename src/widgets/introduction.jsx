import {View, Image, StyleSheet, TouchableOpacity, Text} from 'react-native';
import React from 'react';
import {height, width} from '../utils/constants';
import AppColors from '../theme/colors';
import {useNavigation} from '@react-navigation/native';
import {PRODUCTLIST} from '../utils/routes';

const Introduction = () => {
  // For the ProductList navigation
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../assets/images/int1.png')}
      />
      <TouchableOpacity
        onPress={() => navigation.navigate(PRODUCTLIST)}
        style={styles.button}>
        <Text style={styles.buttonText}>Shop Now</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Introduction;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 20,
  },
  image: {
    width: width - 30,
    height: height / 4,
    resizeMode: 'cover',
  },
  button: {
    width: width * 0.4,
    height: height * 0.04,
    position: 'absolute',
    bottom: 46,
    right: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: AppColors.PRIMARY,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '500',
    color: AppColors.WHITE,
  },
});
