import { BaseReducer } from "./BaseReducer";

export const CartActionTypes = {
    CART_ADD_ITEM: 'CART_ADD_ITEM',
    REMOVE_FROM_CART: 'REMOVE_FROM_CART',
    CART_CLEAR_ITEMS: 'CART_CLEAR_ITEMS',
    UPDATE_QUANTITY: 'UPDATE_QUANTITY', 
};


export class CartReducer extends BaseReducer {
    initialState = {
        cartItems: []
    };

    [CartActionTypes.CART_ADD_ITEM](state: any, action: any) {
        const item = action.payload
        const existItem = state.cartItems.find((x) => x.product === item.product)
        if (existItem) {
          return {
            ...state,
            cartItems: state.cartItems.map((x) =>
              x.product === existItem.product ? item : x
            ),
          }
        } else {
          return {
            ...state,
            cartItems: [...state.cartItems, item],
          }
        }
    }

    [CartActionTypes.REMOVE_FROM_CART](state: any, action: any) {
        return {
            ...state,
            cartItems: state.cartItems.filter((x) => x._id !== action.payload),
          }
    }
    [CartActionTypes.CART_CLEAR_ITEMS](state: any, action: any) {
        return {
            ...state,
            cartItems: [],
          }
    }
    [CartActionTypes.UPDATE_QUANTITY](state: any, action: any) {
      const { id, quantity } = action.payload;
      return {
          ...state,
          cartItems: state.cartItems.map(item =>
              item._id === id ? { ...item, quantity: quantity } : item
          ),
      };
  }
}

