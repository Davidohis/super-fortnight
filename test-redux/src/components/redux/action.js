import { CHANGE_SEARCH_FIELD, REQUEST_SEARCH_PENDDING, REQUEST_SEARCH_SUCCESS, REQUEST_SEARCH_FAILED } from './constants';


export const setSearchAction = (text) => ({
    type: CHANGE_SEARCH_FIELD,
    payload: text
})

export const fetchDataAction = () => async (dispatch) => {
    dispatch({ type: REQUEST_SEARCH_PENDDING })
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((data) => dispatch({ type: REQUEST_SEARCH_SUCCESS, payload: data }))
    .catch((error) => dispatch({ type: REQUEST_SEARCH_FAILED, payload: error }))
}

export const shopDataAction = () => async (dispatch) => {
    dispatch({ type: REQUEST_SEARCH_PENDDING })
    fetch(`https://jsonplaceholder.typicode.com/users/${match.params.id}`)
    .then((response) => response.json())
    .then((data) => dispatch({ type: REQUEST_SEARCH_SUCCESS, payload: data }))
    .catch((error) => dispatch({ type: REQUEST_SEARCH_FAILED, payload: error }))
}