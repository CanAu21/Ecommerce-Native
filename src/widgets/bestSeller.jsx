import {FlatList, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import WidgetTitle from '../components/widgets/widgetTitle';
import {getRequest} from '../service/verb';
import WidgetProductCart from '../components/widgets/productCart';
import {CATEGORY_URL} from '../service/urls';
import CategorySelect from '../components/widgets/categorySelect';

const BestSeller = () => {
  const [product, setProduct] = useState([]);

  const getBestSellerProducts = (category = "women's clothing") => {
    getRequest(CATEGORY_URL + `/${category}`)
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
      <CategorySelect onSelect={value => getBestSellerProducts(value)} />
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
