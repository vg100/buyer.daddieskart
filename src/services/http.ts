import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { getEnvVariable } from '../environment';
import { LocalStorageService } from './LocalStorage';

 class Http {
  private axiosInstance: AxiosInstance;
  private isRefreshing = false;
  private refreshSubscribers: ((token: string) => void)[] = [];

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: getEnvVariable().base_api_url,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // Add request interceptor
    this.axiosInstance.interceptors.request.use(
      async (config: any) => {
        const token = await LocalStorageService.getUser();
        if (token) {
          config.headers.authorization = `${token?.token}`;
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    // Add response interceptor
    this.axiosInstance.interceptors.response.use(
      (response: AxiosResponse<any>) => {
        return response.data;
      },
      async (error) => {
        const originalRequest = error.config;
        if (error.response.status === 401 && !originalRequest._retry) {
          if (!this.isRefreshing) {
            this.isRefreshing = true;
            originalRequest._retry = true;

            try {
              const newToken = await this.refreshToken();
              this.isRefreshing = false;
              this.onRefreshed(newToken);
              return this.axiosInstance(originalRequest);
            } catch (refreshError) {
              this.isRefreshing = false;
              return Promise.reject(refreshError);
            }
          } else {
            return new Promise((resolve, reject) => {
              this.subscribeTokenRefresh((token: string) => {
                originalRequest.headers.authorization = `${token}`;
                resolve(this.axiosInstance(originalRequest));
              });
            });
          }
        }
        return Promise.reject(error);
      }
    );
  }

  private subscribeTokenRefresh(callback: (token: string) => void) {
    this.refreshSubscribers.push(callback);
  }

  private onRefreshed(token: string) {
    this.refreshSubscribers.map((callback) => callback(token));
    this.refreshSubscribers = [];
  }

  private async refreshToken(): Promise<string> {
    try {
      const refreshToken = await LocalStorageService.getUser();
      const response = await axios.post(`${getEnvVariable().base_api_url}/refresh-token`, { token: refreshToken });
      const newToken = response.data.token;
      await LocalStorageService.setUser({ token: newToken });
      return newToken;
    } catch (error) {
      console.error('Failed to refresh token:', error);
      throw error;
    }
  }

  async get(url: string, config?: AxiosRequestConfig) {
    try {
      const response = await this.axiosInstance.get(url, config);
      return response;
    } catch (error) {
      return this.handleErrors(error);
    }
  }

  async post(url: string, data?: any, config?: AxiosRequestConfig) {
    try {
      const response = await this.axiosInstance.post(url, data, config);
      return response;
    } catch (error) {
      return this.handleErrors(error);
    }
  }

  async put(url: string, data?: any, config?: AxiosRequestConfig) {
    try {
      const response = await this.axiosInstance.put(url, data, config);
      return response;
    } catch (error) {
      return this.handleErrors(error);
    }
  }

  async patch(url: string, data?: any, config?: AxiosRequestConfig) {
    try {
      const response = await this.axiosInstance.patch(url, data, config);
      return response;
    } catch (error) {
      return this.handleErrors(error);
    }
  }

  async delete(url: string, config?: AxiosRequestConfig) {
    try {
      const response = await this.axiosInstance.delete(url, config);
      return response;
    } catch (error) {
      return this.handleErrors(error);
    }
  }

  private async handleErrors(error: any) {
    if (error.response) {
      const { data, status } = error.response;
      alert(JSON.stringify(data.message));
      console.error(`Request failed with status ${status}:`, data);
    } else if (error.request) {
      console.error('Request made but no response received:', error.request);
    } else {
      alert(JSON.stringify(error.message));
      console.error('Error setting up request:', error.message);
    }
    return Promise.reject(error);
  }
}


export default new Http();
