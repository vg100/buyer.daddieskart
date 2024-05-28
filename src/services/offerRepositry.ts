import { CategoriesActionTypes } from "../redux/categoryReducer";
import { OfferActionTypes } from "../redux/offerReducer";
import { ReviewsActionTypes } from "../redux/reviewReducer";
import { CategoriesApi, OfferApi, ReviewApi } from "./Api";

export class OfferRepositry {

    static createOffer(data) {
        return async (dispatch: any) => {
            try {
                dispatch({type:OfferActionTypes.CREATE_OFFER_REQUEST})
                await OfferApi.createOffer(data)
                dispatch({type:ReviewsActionTypes.CREATE_REVIEW_SUCCESS})
            } catch (e) {
                const parse=JSON.parse(e.response.data.message)
                dispatch({type:ReviewsActionTypes.CREATE_REVIEW_FAILURE,payload:parse})
                return Promise.reject(e);
            }
        };
    }

    static getoffer(data){
        return async (dispatch: any) => {
            try {
                dispatch({type:OfferActionTypes.FETCH_OFFER_REQUEST})
               const getOffer= await OfferApi.getOffer(data)
                 dispatch({type:OfferActionTypes.FETCH_OFFER_SUCCESS,payload:getOffer})
            } catch (e) {
                return Promise.reject(e);
            }
        };
    }

}