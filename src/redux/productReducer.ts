import { BaseReducer } from "./BaseReducer";

export const ProductsActionTypes = {
    FETCH_PRODUCT_REQUEST: 'FETCH_PRODUCT_REQUEST',
    FETCH_PRODUCT_SUCCESS: 'FETCH_PRODUCT_SUCCESS',
    FETCH_PRODUCT_FAILURE: 'FETCH_PRODUCT_FAILURE',
    GET_PRODUCT_DETAIL:"GET_PRODUCT_DETAIL",
    SEARCH_PRODUCT:"SEARCH_PRODUCT"
};


export class ProductsReducer extends BaseReducer {
    initialState = {
        products:{},
        getProductDetail:{},
        search:[]
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
    [ProductsActionTypes.GET_PRODUCT_DETAIL](state: any, action: any) {
        return { loading:false,getProductDetail: action.payload }
    }
    [ProductsActionTypes.SEARCH_PRODUCT](state: any, action: any) {
        return { loading:false,search: action.payload }
    }
}

