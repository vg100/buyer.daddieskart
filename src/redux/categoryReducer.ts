import { BaseReducer } from "./BaseReducer";

export const CategoriesActionTypes = {
    FETCH_CATEGORY_REQUEST: 'FETCH_CATEGORY_REQUEST',
    FETCH_CATEGORY_SUCCESS: 'FETCH_CATEGORY_SUCCESS',
    FETCH_CATEGORY_FAILURE: 'FETCH_CATEGORY_FAILURE',
};


export class CategoriesReducer extends BaseReducer {
    initialState = {};

    [CategoriesActionTypes.FETCH_CATEGORY_REQUEST](state: any, action: any) {
        return { loading: true }
    }

    [CategoriesActionTypes.FETCH_CATEGORY_SUCCESS](state: any, action: any) {
        return { loading: false, categories: action.payload }
    }
    [CategoriesActionTypes.FETCH_CATEGORY_FAILURE](state: any, action: any) {
        return { loading: false, error: action.payload }
    }
}

