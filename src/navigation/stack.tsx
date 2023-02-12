import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {RootStackParamList} from './types';
import Login from '../pages/loginModule/Login';
// import Products from '../pages/Products';
import ProductDetails from '../pages/ProductDetails';
import BottomTabs from './tabs';
import {useSelector} from 'react-redux';
import {RootState} from '../redux/store';

const Stack = createStackNavigator<RootStackParamList>();

export const MainStack = () => {
  const {logedUser} = useSelector((state: RootState) => state.user);
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={logedUser ? 'BottomTabs' : 'Login'}>
      {/* <Stack.Screen name="BottomTabs" component={BottomTabs} /> */}
      {/* <Stack.Screen name="Login" component={Login} /> */}
      <Stack.Screen name="ProductDetails" component={ProductDetails} />
    </Stack.Navigator>
  );
};
