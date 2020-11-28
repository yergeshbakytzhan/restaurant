import {ADD_TO_COMMENT, SET_COMMENT} from "../actions/types";
const initialState = {
    comments: [],
}

export default function (state=initialState, action) {

    switch (action.type) {
        case SET_COMMENT:
            return {
                ...state,
                comments: action.payload
            }
        case ADD_TO_COMMENT:
            return {
                ...state,
                comments: [...state.comments, action.payload]
            }
        default:
            return state
    }
}
