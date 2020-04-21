import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { createStore } from 'redux';
import {
    addTodo, toggleTodo, setVisibilityFilter, VisibilityFilters,
} from './actions';
import todoApp from './reducers';
import './App.css';

const store = createStore(todoApp);

class App extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        // 記錄初始 state
        // eslint-disable-next-line no-console
        console.log('store.getState()', store.getState());

        // 每次 state 變更，就記錄它
        // 記得 subscribe() 會回傳一個用來撤銷 listener 的 function
        // eslint-disable-next-line no-console
        const unsubscribe = store.subscribe(() => console.log('subscribe', store.getState()));

        // Dispatch 一些 action
        store.dispatch(addTodo('Learn about actions'));
        store.dispatch(addTodo('Learn about reducers'));
        store.dispatch(addTodo('Learn about store'));
        store.dispatch(toggleTodo(0));
        store.dispatch(toggleTodo(1));
        store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED));

        // 停止監聽 state 的更新
        unsubscribe();

        return (
            <div className="App">
                <h1>Hello, World!</h1>
            </div>
        );
    }
}

export default hot(module)(App);
