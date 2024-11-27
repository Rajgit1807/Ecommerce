import {applyMiddleware, legacy_createStore, combineReducers} from "redux"
import { authReducer } from "./Auth/Reducer"
import {thunk} from 'redux-thunk'
import { customerProductReducer } from "./Product/Reducer"
import { cartReducer } from "./Cart/Reducer"
import {orderReducer} from "./Order/Reducer"
import { adminOrderReducer } from "./Admin/Orders/Reducer"
import { addressesReducer } from "./Address/Reducer"

const rootReducers= combineReducers({
    auth:authReducer,
    products:customerProductReducer,
    cart:cartReducer,
    order:orderReducer,
    adminOrder: adminOrderReducer,
    addressGetter:addressesReducer
})

export const store = legacy_createStore(rootReducers,applyMiddleware(thunk))