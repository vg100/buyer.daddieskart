import { CartActionTypes } from "../redux/CartReducer";


export class CartRepositry {

    static addItemsToCart(id, quantity = 1) {
        return async (dispatch: any, getState: any) => {
            try {
                const { selectedProduct } = getState().products

                console.log(selectedProduct,'selectedProduct')
                dispatch({ type: CartActionTypes.CART_ADD_ITEM, payload: selectedProduct })

            } catch (e) {
                return Promise.reject(e);
            }
        };
    }
    static removeCart(id) {
        return async (dispatch: any, getState: any) => {
            try {
                const { selectedProduct } = getState().products

            
                dispatch({ type: CartActionTypes.REMOVE_FROM_CART, payload: id})

            } catch (e) {
                return Promise.reject(e);
            }
        };
    }
    

}