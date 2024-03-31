import {Api} from './Api';
import { LocalStorageService } from './LocalStorage';


export class AuthRepositry {

  static register(data: any) {
    return async (dispatch: any) => {
      try {
        dispatch({type: 'showLoader'});
        const user = await Api.register(data);

      } catch (e) {
        return Promise.reject(e);
      }
    };
  }

  static login(data: any) {
    return async (dispatch: any) => {
      try {
        
      
      } catch (e) {

        return Promise.reject(e);
      }
    };
  }
  static updateUser(user: any) {
    return async (dispatch: any) => {
      try {
        dispatch({type: AuthActionTypes.USER_UPDATE, payload: user});
        return;
      } catch (e) {
        return Promise.reject(e);
      }
    };
  }

  static logout() {
    return async (dispatch: any) => {
      await LocalStorageService.clearUser();
      dispatch({type: AuthActionTypes.USER_LOGOUT});
      return;
    };
  }

}
