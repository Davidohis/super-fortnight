import { CHANGE_SEARCH_FIELD } from './constants';


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