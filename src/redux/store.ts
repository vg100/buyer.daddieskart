import { createStore, combineReducers, applyMiddleware } from 'redux'

import { composeWithDevTools } from 'redux-devtools-extension'
import { userLoginReducer } from './userReducer'


const reducer = combineReducers({
    user: userLoginReducer
})


const initialState:any = {
    cart: {},

}

const middleware:any = []

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store
