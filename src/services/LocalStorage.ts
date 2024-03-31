
export class LocalStorageService {
  private static readonly USER = 'user';

  static setUser(data: object) {
    return localStorage.setItem(LocalStorageService.USER, JSON.stringify(data));
  }
  static async getUser() {
    try {
      const response: any = await localStorage.getItem(
        LocalStorageService.USER,
      );
      return JSON.parse(response);
    } catch (e) {
      console.log(e, 'error');
      return Promise.reject(e);
    }
  }
  static clearUser() {
    return localStorage.removeItem(LocalStorageService.USER);
  }
}
