import { Api } from './Api';
import { LocalStorageService } from './LocalStorage';


export class AuthRepo {

  static register(data: any) {
    return async (dispatch: any) => {
      try {
        dispatch({ type: 'showLoader' });
        const registerRes = await Api.register(data)
        return registerRes?.status
      } catch (e) {
        return Promise.reject(e);
      }
    };
  }

  static login(data: any) {
    return async (dispatch: any) => {
      try {
        dispatch({ type: 'login' });
        const loginRes = await Api.login(data)
        dispatch({
          type: "login sucess",
          payload: loginRes,
        })
        LocalStorageService.setUser(loginRes)
      } catch (e) {
        return Promise.reject(e);
      }
    };
  }
  static updateUser(user: any) {
    return async (dispatch: any) => {
      try {
        // dispatch({type: AuthActionTypes.USER_UPDATE, payload: user});
        return;
      } catch (e) {
        return Promise.reject(e);
      }
    };
  }

  static logout() {
    return async (dispatch: any) => {
      await LocalStorageService.clearUser();
      dispatch({ type: "login logout" });
      return;
    };
  }

  static verify({ mobile, otp,type }: any) {
    return async (dispatch: any) => {
      try {
        const res = await Api.verify({
          mobile: mobile,
          verification_token: otp,
          type
        })
        dispatch({
          type: "login sucess",
          payload: res,
        })
        LocalStorageService.setUser(res)
      return true
      } catch (e) {
        return Promise.reject(e);
      }
    };
  }

}
