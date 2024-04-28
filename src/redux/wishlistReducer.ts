import { BaseReducer } from "./BaseReducer";

export const WishlistActionTypes = {
    ADD_TO_WISHLIST: 'ADD_TO_WISHLIST',
    REMOVE_FROM_WISHLIST: 'REMOVE_FROM_WISHLIST',
};

export class WishlistReducer extends BaseReducer {
    initialState = {
        wishlistItems: []
    };

    [WishlistActionTypes.ADD_TO_WISHLIST](state: any, action: any) {
        const item = action.payload
        const existItem = state.wishlistItems.find((x) => x.product === item.product)
        if (existItem) {
          return {
            ...state,
            wishlistItems: state.wishlistItems.map((x) =>
              x.product === existItem.product ? item : x
            ),
          }
        } else {
          return {
            ...state,
            wishlistItems: [...state.wishlistItems, item],
          }
        }
    }

    [WishlistActionTypes.REMOVE_FROM_WISHLIST](state: any, action: any) {
        return {
            ...state,
            wishlistItems: state.wishlistItems.filter((x) => x._id !== action.payload),
          }
    }


}

