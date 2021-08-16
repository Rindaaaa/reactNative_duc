import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  SafeAreaView,
  TextInput,
  Image,
  Text,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
  Pressable,
} from 'react-native';
import {createStackNavigator, HeaderTitle} from '@react-navigation/stack';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {getProduct, searchProduct} from '../redux/action/productActions';
import {useAppDispatch, useAppSelector} from '../../../hooks';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './HomeScreen';
import DetailScreen from './DetailScreen';
import CartScreen from './CartScreen';

const MainStack = createStackNavigator();

const MainScreen = () => {
  return (
    <MainStack.Navigator headerMode='none'>
        <MainStack.Screen name ={"Home"} component={HomeScreen}/>
        <MainStack.Screen name ={"DetailScreen"} component={DetailScreen}/>
        {/* <MainStack.Screen name ={"CartScreen"} component={CartScreen}/> */}
    </MainStack.Navigator>
  );
};

export default MainScreen;