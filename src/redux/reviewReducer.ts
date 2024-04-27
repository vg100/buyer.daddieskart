import { BaseReducer } from "./BaseReducer";

export const ReviewsActionTypes = {

    CREATE_REVIEW_REQUEST: 'CREATE_REVIEW_REQUEST',
    CREATE_REVIEW_SUCCESS: 'CREATE_REVIEW_SUCCESS',
    CREATE_REVIEW_FAILURE: 'CREATE_REVIEW_FAILURE',

    FETCH_REVIEW_REQUEST: 'FETCH_REVIEW_REQUEST',
    FETCH_REVIEW_SUCCESS: 'FETCH_REVIEW_SUCCESS',
    FETCH_REVIEW_FAILURE: 'FETCH_REVIEW_FAILURE',
};


export class ReviewsReducer extends BaseReducer {
    initialState = {
        reviewslist: {},
        loading: false,
        actionType:null,
        error: null,
        reload:false
    };

    [ReviewsActionTypes.FETCH_REVIEW_REQUEST](state, action) {
        return { ...state, loading: true,};
    }

    [ReviewsActionTypes.FETCH_REVIEW_SUCCESS](state, action) {
        return { ...state, loading: false, reviewslist: action.payload};
    }

    [ReviewsActionTypes.FETCH_REVIEW_FAILURE](state, action) {
        return { ...state, loading: false, error: action.payload };
    }

    [ReviewsActionTypes.CREATE_REVIEW_REQUEST](state, action) {
        return { ...state, loading: true,reload:true };
    }

    [ReviewsActionTypes.CREATE_REVIEW_SUCCESS](state, action) {
        return { ...state, loading: false,reload:false, };
    }

    [ReviewsActionTypes.CREATE_REVIEW_FAILURE](state, action) {
        return { ...state, loading: false,reload:false,error: action.payload };
    }
}

