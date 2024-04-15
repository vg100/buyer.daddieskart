import { BaseReducer } from "./BaseReducer";

export const SearchActionTypes = {

    SEARCH_PRODUCT:"SEARCH_PRODUCT"
};


export class SearchReducer extends BaseReducer {
    initialState = {
        search:[]
    };

  
    [SearchActionTypes.SEARCH_PRODUCT](state: any, action: any) {
        return { loading:false,search: action.payload }
    }
}

