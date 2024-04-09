import { createStore, combineReducers, applyMiddleware } from 'redux'

import { userLoginReducer } from './userReducer'
import { thunk } from 'redux-thunk'
import { CategoriesReducer } from './categoryReducer';
import { ProductsReducer } from './productReducer';
import { CartReducer } from './CartReducer';
import { StoreReducer } from './storeReducer';


const reducer = combineReducers({
    user:  new userLoginReducer().reducer,
    categories:  new CategoriesReducer().reducer,
    products:  new ProductsReducer().reducer,
    cart: new CartReducer().reducer,
    store: new StoreReducer().reducer,
})

const userInfoFromStorage = localStorage.getItem('user')
  ? JSON.parse(localStorage.getItem('user')!)
  : null;

const initialState:any = {
    user: { userInfo: userInfoFromStorage },
}

const middleware:any = [thunk]

const store = createStore(
    reducer,
    initialState,
    applyMiddleware(...middleware)
)

export default store
