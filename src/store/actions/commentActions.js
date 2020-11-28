import {ADD_TO_COMMENT, SET_COMMENT} from "./types";
import axios from 'axios'

export const addToComment = data => dispatch => {
    axios.post('/api/comments/', data)
        .then(res => {
            dispatch({
                type: ADD_TO_COMMENT,
                payload: res.data
            })
        })
        .catch(err => {
            console.log(err)
        })
}

export const getComment = id => dispatch => {
    axios.get(`/api/comments/${id}`)
        .then(res => {
            dispatch({
                type: SET_COMMENT,
                payload: res.data
            })
        })
        .catch(err => {
            console.log(err)
        })
}

