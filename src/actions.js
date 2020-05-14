/*
 * action type
 */

export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
export const SET_VISIBILITY_FILTER_SUCCEEDED = 'SET_VISIBILITY_FILTER_SUCCEEDED';
export const SET_VISIBILITY_FILTER_FAILED = 'SET_VISIBILITY_FILTER_FAILED';

/*
 * 其他常數
 */

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE',
};

/*
 * action creator
 */

export function addTodo(text) {
    return { type: ADD_TODO, text };
}

export function toggleTodo(index) {
    return { type: TOGGLE_TODO, index };
}

export function setVisibilityFilter(filter) {
    return { type: SET_VISIBILITY_FILTER, filter };
}

export function setVisibilityFilterSucceeded(data) {
    return { type: SET_VISIBILITY_FILTER_SUCCEEDED, data };
}

export function setVisibilityFilterFailed() {
    return { type: SET_VISIBILITY_FILTER_FAILED };
}
