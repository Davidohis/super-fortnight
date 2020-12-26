import { CHANGE_SEARCH_FIELD } from './constants';


export const setSearchAction = (text) => ({
    type: CHANGE_SEARCH_FIELD,
    payload: text
})