import { ProductsActionTypes } from "../redux/productReducer";
import { ProductApi } from "./Api";

export class ProductRepositry {
    static getTopProducts() {
        return async (dispatch: any) => {
            try {

            } catch (e) {
                return Promise.reject(e);
            }
        };
    }
    static getProductsByCategotyId(id) {
        return async (dispatch: any) => {
            try {

            } catch (e) {
                return Promise.reject(e);
            }
        };
    }
    static getProducts(keyword="",category = "", price = [0, 200000], ratings = 0, currentPage = 1,store) {
        return async (dispatch: any) => {
            try {
                dispatch({ type: ProductsActionTypes.FETCH_PRODUCT_REQUEST })

                // let url = `?keyword=${keyword}&page=${currentPage}`;
                // if (category) {
                //     url += `&category=${category}`;
                // }
                // if (ratings > 0) {
                //     url += `&rating=${ratings}`;
                // }
                // if (store) {
                //     url += `&seller=${store}`;
                // }

                const queryParams = {
                    keyword,
                    page: currentPage,
                    ...(category && { category }),
                    ...(ratings > 0 && { rating: ratings }),
                    ...(store && { seller: store })
                  };
              
                  const url = `?${Object.entries(queryParams)
                    .filter(([_, value]) => value !== "")
                    .map(([key, value]) => `${key}=${value}`)
                    .join("&")}`;


                const res = await ProductApi.getAllProducts(url)
                dispatch({ type: ProductsActionTypes.FETCH_PRODUCT_SUCCESS, payload: res })
            } catch (e) {
                return Promise.reject(e);
            }
        };
    }

    static selectedPoduct(product) {
        return async (dispatch: any) => {
            try {
                dispatch({ type: ProductsActionTypes.SELECT_PRODUCT, payload: product })
            } catch (e) {
                return Promise.reject(e);
            }
        };
    }
}