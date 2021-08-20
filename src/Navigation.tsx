import React, {FC} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import TabView from './components/screens/TabView';
import SignScreen from './components/screens/SignScreen';
import { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LOGIN } from './components/redux/actionTypes';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'react-native';
import { useAppDispatch, useAppSelector } from '../hooks';

const Stack = createStackNavigator();

const Navigation: FC = () => {
  const dispatch = useAppDispatch();  
  const user = useAppSelector(state => state?.userReducer)

  useEffect(() => {
    getUserCache();
  }, []);
  
  const getUserCache = async () => {
    try {
      const value = await AsyncStorage.getItem('@user_data');
      if(value) {
        const userData = JSON.parse(value);
        dispatch ({
          type: LOGIN,
          payload: {
            name: userData.name,
            pass: userData.pass,
          },
        });
      }
    } catch (error) {
    }
  };

  return (
    <NavigationContainer>
      <StatusBar backgroundColor={"white"} barStyle="dark-content" />
      {user.isLogIn == true ? (
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="Home" component={TabView} />
        </Stack.Navigator>
      ) : (
        <SignScreen />
      )}
    </NavigationContainer>
  );
};

export default Navigation;
