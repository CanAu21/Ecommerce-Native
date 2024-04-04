import {FlatList, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import WidgetTitle from '../components/widgets/widgetTitle';
import {getRequest} from '../service/verb';
import WidgetProductCart from '../components/widgets/productCart';
import {CATEGORY_URL} from '../service/urls';

const BestSeller = () => {
  const [product, setProduct] = useState([]);

  const getBestSellerProducts = () => {
    getRequest(CATEGORY_URL + "/women's clothing")
      .then(res => {
        setProduct(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(() => {
    getBestSellerProducts();
  }, []);

  return (
    <View>
      <WidgetTitle title={'Best Seller'} />
      <FlatList
        data={product}
        renderItem={({item}) => (
          <Text>
            <WidgetProductCart item={item} />
          </Text>
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default BestSeller;
