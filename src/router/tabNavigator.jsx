import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HOME, CATEGORIES, FAVORITES, PROFILE} from '../utils/routes';
import Home from '../screens/home';
import Categories from '../screens/categories';
import Favorites from '../screens/favorites';
import Profile from '../screens/profile';
import AppColors from '../theme/colors';
import TabIcon from '../components/router/tabIcon';
import HeaderTabRight from '../components/router/headerTabRight';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => (
          <TabIcon
            focused={focused}
            route={route}
            size={size}
            color={color}
            name={route?.name}
          />
        ),
        headerRight: () => <HeaderTabRight />,
        tabBarActiveTintColor: AppColors.PRIMARY,
        tabBarInactiveTintColor: AppColors.GRAY,
      })}>
      <Tab.Screen name={HOME} component={Home} />
      <Tab.Screen name={CATEGORIES} component={Categories} />
      <Tab.Screen name={FAVORITES} component={Favorites} />
      <Tab.Screen name={PROFILE} component={Profile} />
    </Tab.Navigator>
  );
}
