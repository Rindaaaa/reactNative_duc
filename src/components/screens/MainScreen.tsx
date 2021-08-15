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
import HomeStackScreen from './HomeStackScreen';
import DetailScreen from './DetailScreen';

const MainStack = createStackNavigator();

const MainStackScreen = () => {
  return (
    <MainStack.Navigator headerMode='none'>
        <MainStack.Screen name ={"Home"} component={HomeStackScreen}/>
        <MainStack.Screen name ={"DetailScreen"} component={DetailScreen}/>
    </MainStack.Navigator>
  );
};

export default MainStackScreen;