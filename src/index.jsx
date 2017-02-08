import React from 'react';
import ReactDOM from 'react-dom';
import {List, Map} from 'immutable';

import TodoApp from './components/TodoApp';

const todos = List.of(
    Map({id: 1, text: 'Faire du café', status: 'active', editing: false}),
    Map({id: 2, text: 'Faire le plein du Faucon Millenium', status: 'active', editing: false}),
    Map({id: 3, text: 'Retrouver Chubaka', status: 'completed', editing: false})
);

const filter = 'all';

require('../node_modules/todomvc-app-css/index.css');

ReactDOM.render(
    <TodoApp todos={todos} filter= {filter}/>,
    document.getElementById('app')
);