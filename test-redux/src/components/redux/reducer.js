import { CHANGE_SEARCH_FIELD, REQUEST_SEARCH_PENDDING, REQUEST_SEARCH_SUCCESS, REQUEST_SEARCH_FAILED } from './constants';


// setSearchAction
const intialStateSearch = {
    searchField: ''
}

export const searchReducer = (state=intialStateSearch, action={}) => {
    switch(action.type) {
        case CHANGE_SEARCH_FIELD :
            return Object.assign({}, state, { searchField: action.payload })
        default:
            return state
    }
}

// fetchDataAction
const intialStateFetch = {
    isPendding: false,
    robots: [],
    error: ''
}

export const fetchReducer = (state=intialStateFetch, action={}) => {
    switch(action.type) {
        case REQUEST_SEARCH_PENDDING :
            return Object.assign({}, state, { isPendding: true })
        case REQUEST_SEARCH_SUCCESS:
            return Object.assign({}, state, { robots: action.payload, isPendding: false })
        case REQUEST_SEARCH_FAILED :
            return Object.assign({}, state, { error: action.payload, isPendding: false })
        default:
            return state
    }
}