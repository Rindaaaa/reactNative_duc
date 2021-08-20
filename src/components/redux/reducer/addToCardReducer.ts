import { GET_PRODUCT_CART } from '../actionTypes';
import { ADD_TO_CARD } from "../actionTypes";

const initialValues = {
    product: [],
  };

export default function addToCardReducer(state = initialValues, action: any) {
    switch (action.type) {
        case ADD_TO_CARD:
              return {
                ...state,
                product: action.payload.product,
             };
        case GET_PRODUCT_CART:
            return{
                ...state,
                product: action.payload
            }
        default:
          return state;
      }
}