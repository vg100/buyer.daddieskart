import { createStore, combineReducers, applyMiddleware } from 'redux'

import { userLoginReducer } from './userReducer'
import { thunk } from 'redux-thunk'
import { CategoriesReducer } from './categoryReducer';
import { ProductsReducer } from './productReducer';
import { CartReducer } from './CartReducer';
import { StoreReducer } from './storeReducer';
import { SearchReducer } from './searchReducer';
import { WishlistReducer } from './wishlistReducer';


const reducer = combineReducers({
    user:  new userLoginReducer().reducer,
    categories:  new CategoriesReducer().reducer,
    products:  new ProductsReducer().reducer,
    cart: new CartReducer().reducer,
    store: new StoreReducer().reducer,
    search: new SearchReducer().reducer,
    wishlist: new WishlistReducer().reducer,
})

const userInfoFromStorage = localStorage.getItem('user')
  ? JSON.parse(localStorage.getItem('user')!)
  : null;

  const cartItemsFromStorage = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems')!)
  : []


  const wishlistItemsFromStorage = localStorage.getItem('wishlistItems')
  ? JSON.parse(localStorage.getItem('wishlistItems')!)
  : []

const initialState:any = {
    user: { userInfo: userInfoFromStorage },
    cart:{cartItems:cartItemsFromStorage},
    wishlist:{wishlistItems:wishlistItemsFromStorage}
}

const middleware:any = [thunk]

const store = createStore(
    reducer,
    initialState,
    applyMiddleware(...middleware)
)

export default store
