import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import screenStyle from '../../styles/screenStyle';
import {height, width} from '../../utils/constants';
import Button from '../../components/uı/button';
import AppColors from '../../theme/colors';
import Counter from '../../components/uı/counter';
import {getRequest} from '../../service/verb';
import {PRODUCTS_URL} from '../../service/urls';
import Spinner from '../../components/uı/spinner';
import {Image} from 'react-native-svg';
import {Heart, Star} from 'iconsax-react-native';

const ProductDetail = ({route}) => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  const {item} = route?.params;

  const getProductDetail = () => {
    setLoading(true);
    getRequest(PRODUCTS_URL + `/${item.id}`)
      .then(res => {
        setProduct(res.data);
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    getProductDetail();
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={screenStyle.container}>
        {loading ? (
          <Spinner />
        ) : (
          <ScrollView>
            <View>
              <Image style={styles.image} source={{uri: product?.image}} />
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <View style={{flex: 3, marginVertical: 20}}>
                  <Text
                    numberOfLines={2}
                    style={{fontWeight: '700', fontSize: 20}}>
                    {product?.title}
                  </Text>
                  <Text
                    numberOfLines={2}
                    style={{
                      fontWeight: '500',
                      fontSize: 14,
                      marginVertical: 15,
                      color: AppColors.GRAY,
                    }}>
                    {product?.category.toUpperCase()}
                  </Text>
                  <Text
                    numberOfLines={2}
                    style={{
                      fontWeight: '700',
                      fontSize: 20,
                      marginVertical: 5,
                    }}>
                    ${product?.price}
                  </Text>
                  <View
                    style={{
                      marginVertical: 10,
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <Star color={AppColors.PRIMARY} variant="Bold" size={25} />
                    <Text
                      numberOfLines={2}
                      style={{
                        fontWeight: '700',
                        fontSize: 18,
                        margin: 5,
                      }}>
                      {product?.rating?.rate} / {product?.rating?.count}
                    </Text>
                  </View>
                </View>

                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'flex-end',
                    padding: 5,
                  }}>
                  <TouchableOpacity
                    style={{
                      backgroundColor: AppColors.SOFTGRAY,
                      padding: 5,
                      borderRadius: 1000,
                    }}>
                    <Heart size={28} color={AppColors.RED} variant="Bold" />
                  </TouchableOpacity>
                </View>
              </View>
              <View>
                <Text
                  style={{
                    fontSize: 16,
                    marginVertical: 5,
                    color: AppColors.BLACK,
                  }}>
                  {product?.description}
                </Text>
              </View>
            </View>
          </ScrollView>
        )}
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
    borderTopWidth: 1,
    borderColor: AppColors.GRAY,
  },
  image: {
    width: width,
    height: width * 0.55,
    resizeMode: 'contain',
  },
});
