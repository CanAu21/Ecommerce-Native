import {FlatList, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import WidgetTitle from '../components/widgets/widgetTitle';
import {getRequest} from '../service/verb';
import {PRODUCTS_URL} from '../service/urls';
import WidgetProductCart from '../components/widgets/productCart';

const NewArrival = () => {
  const [product, setProduct] = useState([]);

  const getAllProducts = () => {
    getRequest(PRODUCTS_URL)
      .then(res => {
        setProduct(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <View>
      <WidgetTitle title={'New Arrival'} />
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

export default NewArrival;
