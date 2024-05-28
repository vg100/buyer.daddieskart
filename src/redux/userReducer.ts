

import { BaseReducer } from "./BaseReducer";

export const UserActionTypes = {
  LOGIN_REQUEST: 'login',
  LOGIN_SUCCESS: 'login sucess',
  LOGIN_FAILURE: 'login fail',
  LOGOUT: 'login logout',

  ADDRESS_REQUEST:"ADDRESS_REQUEST",
  ADDRESS_SUCCESS:"ADDRESS_SUCCESS",
  ADDRESS_ERROR:"ADDRESS_ERROR",
  SELECT_ADDRESS:"SELECT_ADDRESS",
  RESET_SELECT_ADDRESS:"RESET_SELECT_ADDRESS"


};


export class userLoginReducer extends BaseReducer {
  initialState = {
    userInfo:null,
    selectaddres:null,
    loading:false
  };

  [UserActionTypes.LOGIN_REQUEST](state: any, action: any) {
    return { loading: true }
  }

  [UserActionTypes.LOGIN_SUCCESS](state: any, action: any) {
    return { loading: false, userInfo: action.payload }
  }
  [UserActionTypes.LOGIN_FAILURE](state: any, action: any) {
    return { loading: false, error: action.payload }
  }
  [UserActionTypes.LOGOUT](state: any, action: any) {
    return {}
  }

  [UserActionTypes.ADDRESS_REQUEST](state: any, action: any) {
    return { loading: true }
  }
  [UserActionTypes.ADDRESS_SUCCESS](state: any, action: any) {
    return { loading: false, address: action.payload }
  }
  [UserActionTypes.ADDRESS_ERROR](state: any, action: any) {
    return { loading: false, error: action.payload }
  }
  [UserActionTypes.SELECT_ADDRESS](state: any, action: any) {
    return {...state, selectaddres: action.payload }
  }
}

