import { SEARCH_PRODUCT } from './../actionTypes';
import { GET_PRODUCT } from "../actionTypes";

const initialValues = {
   data: [],
   data_filter: []
  };

  export default function productReducer(state = initialValues, action: any) {
    switch (action.type) {
      case GET_PRODUCT:
        return {
          data: action.payload,
          data_filter: action.payload,
        };
      case SEARCH_PRODUCT:
        return {
          ...state,
          data_filter: state.data.filter(product => product.name.toLowerCase().includes(action.payload.textToSearch.toLowerCase()))
        }
      default:
        return state;
    }
  }
