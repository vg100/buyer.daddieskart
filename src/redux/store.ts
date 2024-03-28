import { createStore, combineReducers, applyMiddleware } from 'redux'

import { composeWithDevTools } from 'redux-devtools-extension'
import { userLoginReducer } from './userReducer'
import { thunk } from 'redux-thunk'


const reducer = combineReducers({
    user: userLoginReducer
})


const initialState:any = {
    cart: {},

}

const middleware:any = [thunk]

const store = createStore(
    reducer,
    initialState,
    applyMiddleware(...middleware)
)

export default store
