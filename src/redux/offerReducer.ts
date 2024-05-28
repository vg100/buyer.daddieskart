import { BaseReducer } from "./BaseReducer";

export const OfferActionTypes = {

    CREATE_OFFER_REQUEST: 'CREATE_OFFER_REQUEST',
    CREATE_OFFER_SUCCESS: 'CREATE_OFFER_SUCCESS',
    CREATE_OFFER_FAILURE: 'CREATE_OFFER_FAILURE',

    FETCH_OFFER_REQUEST: 'FETCH_OFFER_REQUEST',
    FETCH_OFFER_SUCCESS: 'FETCH_OFFER_SUCCESS',
    FETCH_OFFER_FAILURE: 'FETCH_OFFER_FAILURE',
};


export class offerReducer extends BaseReducer {
    initialState = {
        offerList:[],
        loading: false,
        error: null,
        reload: false
    };

    [OfferActionTypes.CREATE_OFFER_REQUEST](state, action) {
        return { ...state, loading: true, };
    }

    [OfferActionTypes.CREATE_OFFER_SUCCESS](state, action) {
        return { ...state, loading: false,};
    }

    [OfferActionTypes.CREATE_OFFER_FAILURE](state, action) {
        return { ...state, loading: false, error: action.payload };
    }

    [OfferActionTypes.FETCH_OFFER_REQUEST](state, action) {
        return { ...state, loading: true, reload: true };
    }

    [OfferActionTypes.FETCH_OFFER_SUCCESS](state, action) {
        return { ...state, loading: false, offerList: action.payload };
    }

    [OfferActionTypes.FETCH_OFFER_FAILURE](state, action) {
        return { ...state, loading: false, reload: false, error: action.payload };
    }
}

