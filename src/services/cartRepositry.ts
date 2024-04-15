import { CartActionTypes } from "../redux/CartReducer";


export class CartRepositry {

    static addItemsToCart(id,quantity) {
        return async (dispatch: any, getState: any) => {
            try {
                const { getProductDetail } = getState().products
                const newGet={...getProductDetail,quantity}
                dispatch({ type: CartActionTypes.CART_ADD_ITEM, payload: newGet })
                localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
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
                localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
            } catch (e) {
                return Promise.reject(e);
            }
        };
    }

    static upadteCart(id,data) {
        return async (dispatch: any, getState: any) => {
            try {
                dispatch({ type: CartActionTypes.UPDATE_QUANTITY, payload: { id: id, quantity: data }})
                localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
            } catch (e) {
                return Promise.reject(e);
            }
        };
    }
    
    

}