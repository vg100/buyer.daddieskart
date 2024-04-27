import { ProductsActionTypes } from "../redux/productReducer";
import { SearchActionTypes } from "../redux/searchReducer";
import { ProductApi } from "./Api";

export class ProductRepositry {
    static getProducts(queryParams):any {
        return async (dispatch: any) => {
            try {
                dispatch({ type: ProductsActionTypes.FETCH_PRODUCT_REQUEST })

                  const url = `?${Object.entries(queryParams)
                    .map(([key, value]) => `${key}=${value}`)
                    .join("&")}`;
                    
                  const res = await ProductApi.getAllProducts(url);
                dispatch({ type: ProductsActionTypes.FETCH_PRODUCT_SUCCESS, payload: res })
            } catch (e) {
                return Promise.reject(e);
            }
        };
    }

    static getProductById(id) {
        return async (dispatch: any) => {
            try {
                dispatch({ type: ProductsActionTypes.FETCH_PRODUCT_REQUEST })
                const res = await ProductApi.getProductDetail(id)
                dispatch({ type: ProductsActionTypes.GET_PRODUCT_DETAIL, payload: res })
            } catch (e) {
                return Promise.reject(e);
            }
        };
    }

    static getSimilerProduct() {
        return async (dispatch: any) => {
            try {
                dispatch({ type: ProductsActionTypes.FETCH_PRODUCT_REQUEST })
                const res = await ProductApi.getProductDetail(id)
                dispatch({ type: ProductsActionTypes.GET_PRODUCT_DETAIL, payload: res })
            } catch (e) {
                return Promise.reject(e);
            }
        };
    }

   static checkpincode(data){
    return async (dispatch: any) => {
        try {

            const res = await ProductApi.checkpin(data)
return res;
          

        } catch (e) {
            return Promise.reject(e);
        }
    };
   }

}