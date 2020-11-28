import {SET_CART, ADD_TO_CART, DELETE_FROM_CART} from '../actions/types'
const initialState = {
    foods: []
}

export default function (state=initialState, action) {
    switch (action.type) {
        case SET_CART:
            return {
                ...state,
                foods: action.payload
            }
        case ADD_TO_CART:
            return {
                ...state,
                foods: [...state.foods, action.payload]
            }
        case DELETE_FROM_CART:
            return {
                ...state,
                foods: deleteById(action.payload, state.foods)
            }
        default:
            return state
    }
}

function deleteById(id, arr) {
    for(let i=arr.length-1;i>=0;i--){
        if(arr[i].id===id){
            arr.splice(i, 1);
            return arr;
        }
    }
}