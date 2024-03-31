import _axios, {AxiosRequestConfig} from 'axios';

import { LocalStorageService } from './LocalStorage';


export class Http {
  static getToken = async () => {
    const user = await LocalStorageService.getUser();
    return user ? user.token : null;
  };
  private static axios = _axios.create({
    baseURL: "http://localhost:8000/api/v1",
    headers: {
      'Content-Type': 'application/json',
    },
  });
  static async get(url: any, config?: AxiosRequestConfig) {
    try {
      const token = await Http.getToken();

      const response = await Http.axios.get(url, config);
      if (response) {
        return response.data;
      }
    } catch (e) {
      Http.handleErrors(e);
      return Promise.reject(e);
    }
  }
  static async post(url: any, body?: object, config?: AxiosRequestConfig) {
    try {
   
      const token = await Http.getToken();
      const response = await Http.axios.post(url, body, config);
      if (response) {
        return response.data;
      }
    } catch (e) {
      Http.handleErrors(e);
      return Promise.reject(e);
    }
  }
  static async patch(url: any, body?: object, config?: AxiosRequestConfig) {
    try {
      const token = await Http.getToken();

      const response = await Http.axios.patch(url, body, config);
      if (response) {
        return response.data;
      }
    } catch (e) {
      Http.handleErrors(e);
      return Promise.reject(e);
    }
  }
  static async delete(url: any, config?: AxiosRequestConfig) {
    try {
      const token = await Http.getToken();

      const response = await Http.axios.delete(url, config);
      if (response) {
        return response.data;
      }
    } catch (e) {
      Http.handleErrors(e);
      return Promise.reject(e);
    }
  }
  private static async handleErrors(error: any) {
    if (error.response) {
      const message = error.response.data.message;
      const errorMessage = message
        ? message
        : 'Something Went Wrong. Please Try Again';
        alert(JSON.stringify(errorMessage))
        
         //creating log using socket.io
        //  await Http.axios.post(`${getEnvVariable().base_api_url}/log`,errorMessage);
    
      } else {
      console.log("Something Went Wrong.Please Try Again")
    }
  }
}
