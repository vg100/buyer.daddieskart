
import { SearchActionTypes } from "../redux/searchReducer";
import { ProductApi, StoreApi } from "./Api";

export class SearchRepositry {

    static search(query){
        return async (dispatch: any) => {
            try {

                const res = await ProductApi.search(query)
               dispatch({ type: SearchActionTypes.SEARCH_PRODUCT, payload: res})
            } catch (e) {
                return Promise.reject(e);
            }
        };
    }

}