

import { BaseReducer } from "./BaseReducer";

export const UserActionTypes = {
  LOGIN_REQUEST: 'login',
  LOGIN_SUCCESS: 'login sucess',
  LOGIN_FAILURE: 'login fail',
  LOGOUT: 'login logout',

};


export class userLoginReducer extends BaseReducer {
  initialState = {};

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
}

