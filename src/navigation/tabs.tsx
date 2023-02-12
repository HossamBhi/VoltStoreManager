import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TabItem from './TabItem';
import {t} from 'i18next';
import Products from '../pages/Products';
import Orders from '../pages/Orders';
import Menu from '../pages/Menu';

const getAllTabItems = () => [
  {route: 'Orders', label: t('orders'), icon: 'home', component: Orders},
  {route: 'Products', label: t('products'), icon: 'box', component: Products},
  {route: 'Menu', label: t('menu'), icon: 'menu', component: Menu},
];
const Tab = createBottomTabNavigator();

const BottomTabs = () => (
  <Tab.Navigator
    initialRouteName="Orders"
    screenOptions={{
      headerShown: false,
      tabBarStyle: {
        borderTopWidth: 0,
      },
    }}>
    {getAllTabItems().map((item, index) => {
      return (
        <Tab.Screen
          key={index}
          name={item.route}
          component={item.component}
          options={{
            tabBarShowLabel: false,
            tabBarButton: props => <TabItem {...props} item={item} />,
          }}
        />
      );
    })}
  </Tab.Navigator>
);
export default BottomTabs;
