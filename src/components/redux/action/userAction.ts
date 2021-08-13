import {LOGIN} from '../actionTypes';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Dispatch } from '@reduxjs/toolkit';

export const login = (name: string, pass: string) => async (dispatch: Dispatch) => {
  try {
    await AsyncStorage.setItem('@user_data', JSON.stringify({name, pass}));
    dispatch ({
      type: LOGIN,
      payload: {
        name,
        pass,
      },
    });
  } catch (error) {
    
  }
};