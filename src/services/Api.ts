
import Http from './http';

export class Api {
  static login(data: any) {
    return Http.post('/users/login', data);
  }
  static register(data: any) {
    return Http.post('/users/register', data);
  }
  static verify(data: any) {
    return Http.post('/users/verifyotp', data);
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
  static checkpin(query) {
    return Http.get(`/products/check-pin/${query.pid}/${query.pincode}`);
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

export class ReviewApi {
  static postReview(data) {
    return Http.post('/reviews',data,{
      headers:{
        'Content-Type': 'multipart/form-data'
      }
    });
  }
  static getReviewById(id,page) {
    return Http.get(`/reviews/${id}/${page}`);
  }
}

export class OfferApi {
  static createOffer(data) {
    return Http.post(`/offer/${data.id}`,{offer:data.offer});
  }
  static getOffer(data) {
    return Http.post(`/offer/`,data);
  }
}

export class AddressApi {
  static addAndEditAddress(data,type) {
    return Http.post(`/users/${type}-address`,data);
  }
  static getAddress() {
    return Http.get(`/users/get-address`);
  }
}
