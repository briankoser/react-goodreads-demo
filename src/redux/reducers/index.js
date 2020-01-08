import { combineReducers } from 'redux';
import {ADD_BOOK, DELETE_BOOK} from '../actions'

export const books = (state = [], action) => {
    switch (action.type) {
        case ADD_BOOK:
            return [
                ...state, 
                {
                    title: action.title,
                    id: action.id
                }
            ];
        case DELETE_BOOK:
            return state.filter(book => book.id !== action.id);
        default:
            return state;
    }
};

export const reducers = combineReducers({
    books
});