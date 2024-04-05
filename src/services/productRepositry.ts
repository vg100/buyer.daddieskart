import { ProductApi } from "./Api";

export class ProductRepositry {
    static getTopProducts() {
        return async (dispatch: any) => {
            try {
                // const res = await ProductApi.getTopProducts()
                // console.log(res, 'dataat')
                return true
            } catch (e) {
                return Promise.reject(e);
            }
        };
    }

}