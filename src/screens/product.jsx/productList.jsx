import {View, Text, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import {getRequest} from '../../service/verb';
import {PRODUCTS_URL} from '../../service/urls';
import ProductCart from '../../components/product/productCart';
import screenStyle from '../../styles/screenStyle';
import Spinner from '../../components/uı/spinner';
import CategorySelect from '../../components/widgets/categorySelect';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const getAllProducts = category => {
    const url = category
      ? PRODUCTS_URL + `/category/${category}`
      : PRODUCTS_URL;
    setLoading(true);
    getRequest(url)
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
      <CategorySelect onSelect={value => getAllProducts(value)} />
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
