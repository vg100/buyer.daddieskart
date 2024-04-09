import { CategoriesActionTypes } from "../redux/categoryReducer";
import { CategoriesApi } from "./Api";

export class CategoryRepositry {

    static getCategories() {
        return async (dispatch: any) => {
            try {
                dispatch({type:CategoriesActionTypes.FETCH_CATEGORY_REQUEST})
                const getcategories= await CategoriesApi.getCategories()
                dispatch({type:CategoriesActionTypes.FETCH_CATEGORY_SUCCESS,payload:getcategories})
            } catch (e) {
                return Promise.reject(e);
            }
        };
    }

}