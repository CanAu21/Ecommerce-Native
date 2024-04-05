import {View, Text, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import {getRequest} from '../../service/verb';
import {PRODUCTS_URL} from '../../service/urls';
import ProductCart from '../../components/product/productCart';
import screenStyle from '../../styles/screenStyle';
import Spinner from '../../components/uı/spinner';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const getAllProducts = () => {
    setLoading(true);
    getRequest(PRODUCTS_URL)
      .then(res => {
        setProducts(res.data);
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <View style={screenStyle.container}>
      {loading ? (
        <Spinner />
      ) : (
        <FlatList
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom: 50}}
          numColumns={2}
          data={products}
          renderItem={({item}) => (
            <Text>
              <ProductCart item={item} />
            </Text>
          )}
        />
      )}
    </View>
  );
};

export default ProductList;
