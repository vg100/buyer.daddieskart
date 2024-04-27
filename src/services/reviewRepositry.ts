import { CategoriesActionTypes } from "../redux/categoryReducer";
import { ReviewsActionTypes } from "../redux/reviewReducer";
import { CategoriesApi, ReviewApi } from "./Api";

export class ReviewRepositry {

    static postReview(data) {
        return async (dispatch: any) => {
            try {
                dispatch({type:ReviewsActionTypes.CREATE_REVIEW_REQUEST})
                await ReviewApi.postReview(data)
                dispatch({type:ReviewsActionTypes.CREATE_REVIEW_SUCCESS})
            } catch (e) {
                const parse=JSON.parse(e.response.data.message)
                dispatch({type:ReviewsActionTypes.CREATE_REVIEW_FAILURE,payload:parse})
                return Promise.reject(e);
            }
        };
    }

    static getReviewById(pid,page){
        return async (dispatch: any) => {
            try {
                dispatch({type:ReviewsActionTypes.FETCH_REVIEW_REQUEST})
                const postReview= await ReviewApi.getReviewById(pid,page)

                console.log(postReview,'ggg')
                 dispatch({type:ReviewsActionTypes.FETCH_REVIEW_SUCCESS,payload:postReview})
            } catch (e) {
                return Promise.reject(e);
            }
        };
    }

}