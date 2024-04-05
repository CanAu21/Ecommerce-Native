import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Cart from '../screens/cart';
import {CART, PRODUCTDETAIL, PRODUCTLIST, TAB} from '../utils/routes';
import TabNavigator from './tabNavigator';
import AppColors from '../theme/colors';
import ProductList from '../screens/product.jsx/productList';
import ProductDetail from '../screens/product.jsx/productDetail';
import HeaderTabRight from '../components/router/headerTabRight';

const Stack = createNativeStackNavigator();

function stackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
        headerTintColor: AppColors.BLACK,
      }}>
      <Stack.Screen
        options={{headerShown: false}}
        name={TAB}
        component={TabNavigator}
      />
      <Stack.Screen name={CART} component={Cart} />
      <Stack.Screen
        options={({route}) => ({
          headerRight: () => <HeaderTabRight />,
        })}
        name={PRODUCTLIST}
        component={ProductList}
      />
      <Stack.Screen
        options={({route}) => ({
          headerRight: () => <HeaderTabRight />,
        })}
        name={PRODUCTDETAIL}
        component={ProductDetail}
      />
    </Stack.Navigator>
  );
}

export default stackNavigator;
