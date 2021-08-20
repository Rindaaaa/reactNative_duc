import { LOGOUT } from './../actionTypes';
import { LOGIN } from "../actionTypes";

const initialValues = {
  email: '',
  pass: '',
  isLogIn: false,
};

export default function userReducer(state = initialValues, action: any) {
  switch (action.type) {
    case LOGIN:
      return {
        email: action.payload.email,
        pass: action.payload.pass,
        isLogIn: true,
      };
    case LOGOUT:
      return {
        isLogIn: false,
      }
    default:
      return state;
  }
}