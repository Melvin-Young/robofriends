import { CHANGE_SEARCH_FIELD,
        REQUEST_ROBOTS_ERROR,
        REQUEST_ROBOTS_PENDING,
        REQUEST_ROBOTS_SUCCESS } from './constants.js';

const initialStateSearch = {
    searchField: ''
}

export const searchRobots = (state = initialStateSearch, action={}) => {
    debugger;
    switch(action.type) {
        case CHANGE_SEARCH_FIELD:
            return {...state, searchField: action.payload};
        default: 
            return state;
    }
}

const initialStateRobots = {
    robots: [],
    pending: false,
    error: ''
}

export const requestRobots = (state = initialStateRobots, action={}) => {
    switch(action.type) {
        case REQUEST_ROBOTS_PENDING:
            return {...state, pending: true}
        case REQUEST_ROBOTS_SUCCESS:
            return {...state, pending: false, robots: action.payload }
        case REQUEST_ROBOTS_ERROR:
            return {...state, pending: false, error: action.payload }
        default:
            return state;
    }
}