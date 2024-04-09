import { BaseReducer } from "./BaseReducer";

export const ProductsActionTypes = {
    FETCH_PRODUCT_REQUEST: 'FETCH_PRODUCT_REQUEST',
    FETCH_PRODUCT_SUCCESS: 'FETCH_PRODUCT_SUCCESS',
    FETCH_PRODUCT_FAILURE: 'FETCH_PRODUCT_FAILURE',
    SELECT_PRODUCT:"SELECT_PRODUCT"
};


export class ProductsReducer extends BaseReducer {
    initialState = {
        products:{},
        selectedProduct:{}
    };

    [ProductsActionTypes.FETCH_PRODUCT_REQUEST](state: any, action: any) {
        return { loading: true }
    }

    [ProductsActionTypes.FETCH_PRODUCT_SUCCESS](state: any, action: any) {
        return { loading: false, products: action.payload }
    }
    [ProductsActionTypes.FETCH_PRODUCT_FAILURE](state: any, action: any) {
        return { loading: false, error: action.payload }
    }
    [ProductsActionTypes.SELECT_PRODUCT](state: any, action: any) {
        return { selectedProduct: action.payload }
    }
}

