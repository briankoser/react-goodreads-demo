import { combineReducers } from 'redux';

export const geod = (state = {}, action) => {
    switch (action.type) {
        case 'ACTIVATE_GEOD':
            return action.geod;
        case 'CLOSE_GEOD':
            return {};
        default:
            return state;
    }
};

export const books = (state = [], action) => {
    switch (action.type) {
        case 'ADD_BOOK':
            return [
                ...state, 
                {
                    title: action.title,
                    id: action.id
                }
            ];
        case 'DELETE_BOOK':
            return state.filter(book => book.id !== action.id);
        default:
            return state;
    }
};

export const reducers = combineReducers({
    geod,
    books
});