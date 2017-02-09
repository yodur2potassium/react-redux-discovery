import React from 'react';
import ReactDOM from 'react-dom';
import {compose, createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducer';
import { loadState, saveStat } from './localStorage';
import throttle from 'lodash/throttle';

import {TodoAppContainer} from './components/TodoApp';

const persistedState = loadState();
const store = createStore(reducer);

store.dispatch({
    type: 'SET_STATE',
    state: persistedState
});

store.subscribe( throttle(() => {
    saveStat(store.getState());
}, 1000));

require('../node_modules/todomvc-app-css/index.css');

ReactDOM.render(
    <Provider store={store}>
        <TodoAppContainer />
    </Provider>,
    document.getElementById('app')
);