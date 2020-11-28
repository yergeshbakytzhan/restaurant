import {combineReducers} from 'redux'
import authReducers from "./authReducers";
import cartReducers from "./cartReducers";
import commentReducer from "./commentReducer";
export default combineReducers({
    auth: authReducers,
    cart: cartReducers,
    comment: commentReducer
})