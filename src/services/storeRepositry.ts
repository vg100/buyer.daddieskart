
import { StoreActionTypes } from "../redux/storeReducer";
import { StoreApi } from "./Api";

export class StoreRepositry {

    static getStores() {
        return async (dispatch: any) => {
            try {
                dispatch({type:StoreActionTypes.FETCH_STORE_REQUEST})
                const stores= await StoreApi.getStores()
                dispatch({type:StoreActionTypes.FETCH_STORE_SUCCESS,payload:stores})
            } catch (e) {
                return Promise.reject(e);
            }
        };
    }

}