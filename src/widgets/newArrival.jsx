import {FlatList, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import WidgetTitle from '../components/widgets/widgetTitle';
import {getRequest} from '../service/verb';
import {CATEGORY_URL} from '../service/urls';
import WidgetProductCart from '../components/widgets/productCart';

const NewArrival = () => {
  const [product, setProduct] = useState([]);

  const getNewArrivalProducts = () => {
    getRequest(CATEGORY_URL + "/men's clothing")
      .then(res => {
        setProduct(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(() => {
    getNewArrivalProducts();
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
