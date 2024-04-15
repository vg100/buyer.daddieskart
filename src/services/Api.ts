
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
  static getProductDetail(id) {
    return Http.get(`/products/${id}`);
  }
  static getProductCategoryl(category) {
    return Http.get(`/products/category=${category}`);
  }
  static search(query) {
    return Http.get(`/products/search?query=${query}`);
  }
  

}

export class CategoriesApi {
  static getCategories() {
    return Http.get('/categories');
  }
}

export class StoreApi {
  static getStores() {
    return Http.get('/seller');
  }
}
