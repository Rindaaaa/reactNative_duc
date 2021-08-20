import { LOGOUT } from './../actionTypes';
import { LOGIN } from '../actionTypes';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Dispatch } from '@reduxjs/toolkit';
import { EndPoint } from '../../config';
import { Alert } from 'react-native';

export const logIn = (email: string, pass: string) => async (dispatch: Dispatch) => {
  try {
    await AsyncStorage.setItem('@user_data', JSON.stringify({ email, pass }));
    try {
      const result = await fetch(`${EndPoint}/user`, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
        },
      });
      const res = await result.json();
      const userInfo = res.find((user: { email: string }) => user.email === email);
      if (userInfo === undefined) {
        Alert.alert('Wrong email!');
      } else {
        if (userInfo.password !== pass) {
          Alert.alert('Wrong password!');
        } else {
          dispatch({
            type: LOGIN,
            payload: {
              email,
              pass,
            },
          });
        }
      }
    } catch (error) {}
  } catch (error) {}
};

export const logOut = () => async (dispatch: Dispatch) => {
  dispatch({
    type: LOGOUT,
    payload: {},
  })
};
