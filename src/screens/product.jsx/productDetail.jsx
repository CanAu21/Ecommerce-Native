import {View, Text, StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import screenStyle from '../../styles/screenStyle';
import {height, width} from '../../utils/constants';
import Button from '../../components/uı/button';
import AppColors from '../../theme/colors';
import Counter from '../../components/uı/counter';

const ProductDetail = ({route}) => {
  const {item} = route?.params;
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={screenStyle.container}>
        <ScrollView>
          <Text>body</Text>
        </ScrollView>
      </View>
      <Text>{item.title}</Text>
      <View style={styles.textContainer}>
        <View style={{flex: 1}}>
          <Counter onChange={value => console.warn(value)} />
        </View>
        <View style={{flex: 2, justifyContent: 'center'}}>
          <Button title={'Add to Cart'} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({
  textContainer: {
    position: 'absolute',
    bottom: 0,
    paddingBottom: 20,
    paddingHorizontal: 10,
    height: height * 0.1,
    width: width,
    backgroundColor: AppColors.WHITE,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
