import { BaseReducer } from "./BaseReducer";

export const StoreActionTypes = {
    FETCH_STORE_REQUEST: 'FETCH_STORE_REQUEST',
    FETCH_STORE_SUCCESS: 'FETCH_STORE_SUCCESS',
    FETCH_STORE_FAILURE: 'FETCH_STORE_FAILURE',
};


export class StoreReducer extends BaseReducer {
    initialState = {};

    [StoreActionTypes.FETCH_STORE_REQUEST](state: any, action: any) {
        return { loading: true }
    }

    [StoreActionTypes.FETCH_STORE_SUCCESS](state: any, action: any) {
        return { loading: false, stores: action.payload }
    }
    [StoreActionTypes.FETCH_STORE_FAILURE](state: any, action: any) {
        return { loading: false, error: action.payload }
    }
}

