import { createStore, combineReducers, applyMiddleware } from 'redux'

import { userLoginReducer } from './userReducer'
import { thunk } from 'redux-thunk'


const reducer = combineReducers({
    user: userLoginReducer
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
