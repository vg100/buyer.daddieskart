import { CartActionTypes } from "../redux/CartReducer";
import { WishlistActionTypes } from "../redux/wishlistReducer";
import { ProductApi } from "./Api";


export class WishlistRepositry {

    static addToWishlist(id) {
        return async (dispatch: any, getState: any) => {
            try {
                // const { getProductDetail } = getState().products
                const getProductDetail = await ProductApi.getProductDetail(id)
                const newGet={...getProductDetail}
                dispatch({ type: WishlistActionTypes.ADD_TO_WISHLIST, payload: newGet })
                localStorage.setItem('wishlistItems', JSON.stringify(getState().wishlist.wishlistItems))
            } catch (e) {
                return Promise.reject(e);
            }
        };
    }
    static removeFromWishlist(id) {
        return async (dispatch: any, getState: any) => {
            try {
                dispatch({ type: WishlistActionTypes.REMOVE_FROM_WISHLIST, payload: id})
                localStorage.setItem('wishlistItems', JSON.stringify(getState().wishlist.wishlistItems))
            } catch (e) {
                return Promise.reject(e);
            }
        };
    }

  
    
    

}