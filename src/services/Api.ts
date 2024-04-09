
import {Http} from './http';

export class Api {
  static login(data: any) {
    return Http.post('/users/login', data);
  }
  static register(data: any) {
    return Http.post('/users/register', data);
  }
  static verify(data: any) {
    return Http.patch('/users/verify', data);
  }

}

export class ProductApi {
  static getTopProducts() {
    return Http.get('/products/topdeals');
  }
  static getAllProducts(url) {
    return Http.get(`/products${url}`);
  }
}

export class CategoriesApi {
  static getCategories() {
    return Http.get('/categories');
  }
}

export class StoreApi {
  static getStores() {
    return Http.get('/stores');
  }
}
