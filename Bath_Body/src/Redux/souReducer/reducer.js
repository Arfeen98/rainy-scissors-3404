import {
  GET_DATA,
  CART_DATA,
  Delete_DATA,
  EDIT_DATA,
  ADD_CART,
} from "./action";
import { ERROR_DATA } from "./action";
import { REQUEST_DATA } from "./action";

const initState = {
  data: [],
  isLoading: false,
  isError: false,
  products: [],
  cartProducts: [],
  totalPrice: 0,
};

export const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case GET_DATA:
      return {
        ...state,
        products: payload,
      };
    case ERROR_DATA:
      return {
        ...state,
        isError: true,
        products: [],
      };
    case REQUEST_DATA:
      return {
        ...state,
        isLoading: true,
        products: [],
      };
    case CART_DATA:
      return {
        ...state,
        cartProducts: payload,
        totalPrice: payload.reduce((accumulator, currentValue) => {
          return accumulator + currentValue.Price * currentValue.quantity;
        }, 0),
      };
    case Delete_DATA:
      return {
        ...state,
        cartProducts: payload,
        totalPrice: payload.reduce((accumulator, currentValue) => {
          return accumulator + currentValue.Price * currentValue.quantity;
        }, 0),
      };
    case EDIT_DATA:
      return {
        ...state,
        totalPrice: payload.reduce((accumulator, currentValue) => {
          return accumulator + currentValue.Price * currentValue.quantity;
        }, 0),
      };
    case ADD_CART:
      return {
        ...state,
        cartProducts: payload,
      };

    default:
      return state;
  }
};