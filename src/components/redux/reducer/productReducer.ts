import { GET_PRODUCT } from "../actionTypes";

const initialValues = {
    name: '',
    price: 0,
    img: '',
  };

  export default function productReducer(state = initialValues, action: any) {
    switch (action.type) {
      case GET_PRODUCT:
        return {
          name: action.payload.res,
          price: action.payload.res,
          img: action.payload.res,
        };
      default:
        return state;
    }
  }