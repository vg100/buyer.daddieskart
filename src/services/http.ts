import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { getEnvVariable } from '../environment';

export class Http {
  private static axiosInstance: AxiosInstance;

  static initialize() {
    Http.axiosInstance = axios.create({
      baseURL: getEnvVariable().base_api_url,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // Add request interceptor
    Http.axiosInstance.interceptors.request.use(
      (config: any) => {
        const token = localStorage.getItem('token');
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    // Add response interceptor
    Http.axiosInstance.interceptors.response.use(
      (response: AxiosResponse<any>) => {
        return response.data;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
  }

  static async get(url: string, config?: AxiosRequestConfig) {
    try {
      const response = await Http.axiosInstance.get(url, config);
      return response;
    } catch (error) {
      return Http.handleErrors(error);
    }
  }

  static async post(url: string, data?: any, config?: AxiosRequestConfig) {
    try {
      const response = await Http.axiosInstance.post(url, data, config);
      return response;
    } catch (error) {
      return Http.handleErrors(error);
    }
  }

  static async put(url: string, data?: any, config?: AxiosRequestConfig) {
    try {
      const response = await Http.axiosInstance.put(url, data, config);
      return response;
    } catch (error) {
      return Http.handleErrors(error);
    }
  }

  static async patch(url: string, data?: any, config?: AxiosRequestConfig) {
    try {
      const response = await Http.axiosInstance.patch(url, data, config);
      return response;
    } catch (error) {
      return Http.handleErrors(error);
    }
  }

  static async delete(url: string, config?: AxiosRequestConfig) {
    try {
      const response = await Http.axiosInstance.delete(url, config);
      return response;
    } catch (error) {
      return Http.handleErrors(error);
    }
  }

  private static async handleErrors(error: any) {
    if (error.response) {
      // Handle server errors
      const { data, status } = error.response;
      // Log or display error message
      console.error(`Request failed with status ${status}:`, data);
    } else if (error.request) {
      // Handle client errors
      // Log or display error message
      console.error('Request made but no response received:', error.request);
    } else {
      // Handle other errors
      // Log or display error message
      console.error('Error setting up request:', error.message);
    }
    // Return a rejected promise with the error
    return Promise.reject(error);
  }
}

// Initialize the Http when the application starts
Http.initialize();

