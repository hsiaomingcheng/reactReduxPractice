import { combineReducers } from 'redux';
import {
    // eslint-disable-next-line max-len
    ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER, SET_VISIBILITY_FILTER_SUCCEEDED, VisibilityFilters,
} from './actions';

const { SHOW_ALL } = VisibilityFilters;

function visibilityFilter(state = SHOW_ALL, action) {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter;
        default:
            return state;
    }
}

function visibilityFilterSucceeded(state = null, action) {
    switch (action.type) {
        case SET_VISIBILITY_FILTER_SUCCEEDED:
            return action.response.data;
        default:
            return state;
    }
}

function todos(state = [], action) {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    text: action.text,
                    completed: false,
                },
            ];
        case TOGGLE_TODO:
            return state.map((todo, index) => {
                if (index === action.index) {
                    return { ...todo, completed: !todo.completed };
                    //   return Object.assign({}, todo, { completed: !todo.completed });
                }
                return todo;
            });
        default:
            return state;
    }
}

const reducer = combineReducers({
    visibilityFilter,
    visibilityFilterSucceeded,
    todos,
});

export default reducer;
