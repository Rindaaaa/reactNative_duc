import { ADD_TO_CARD } from '../actionTypes';
import { GET_PRODUCT_CART } from '../actionTypes';
import { Dispatch } from '@reduxjs/toolkit';

export const addToCard = (product: any) => async (dispatch: Dispatch) => {
    try {
        dispatch ({
            type: ADD_TO_CARD,
            payload: {
                product: product,
            }
        });
    } catch (error) {
        
    }
}   

export const getProductCard = (product: any) => async (dispatch:Dispatch) => {
    try {
        dispatch({
            type: GET_PRODUCT_CART,
            payload: {
                product: product
            }
        });
    } catch (error) {
        
    }
}

