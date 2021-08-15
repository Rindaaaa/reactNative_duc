import { SEARCH_PRODUCT } from './../actionTypes';
import { GET_PRODUCT } from '../actionTypes';
import { Dispatch } from '@reduxjs/toolkit';
import { EndPoint } from '../../config';

export const getProduct = () => async (dispatch: Dispatch) => {
    try {
        const result = await fetch(`${EndPoint}/products`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
            },
        });
        const res = await result.json();
        if(res){
            dispatch({
                type: GET_PRODUCT,
                payload: res
            });
        }
    } catch (error) {
        console.log(error);
    }
};

export const searchProduct = (textToSearch: string) => async (dispatch: Dispatch) => {
    dispatch({
        type: SEARCH_PRODUCT,
        payload: {textToSearch},
    })
  }