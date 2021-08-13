import { LOGIN } from "../actionTypes";

const initialValues = {
  name: '',
  pass: '',
};

export default function userReducer(state = initialValues, action: any) {
  switch (action.type) {
    case LOGIN:
      return {
        name: action.payload.name,
        pass: action.payload.pass,
      };
    default:
      return state;
  }
}