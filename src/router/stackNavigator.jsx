import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Cart from '../screens/cart';
import {CART, TAB} from '../utils/routes';
import TabNavigator from './tabNavigator';
import AppColors from '../theme/colors';

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
    </Stack.Navigator>
  );
}

export default stackNavigator;
