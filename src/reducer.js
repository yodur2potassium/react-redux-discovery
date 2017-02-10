import {Map} from 'immutable';

function setState(state, newState) {
    return state.merge(newState);
}

function findItemIndex(state, itemId) {
    return state.get('todos').findIndex(
        (item) => item.get('id') === itemId
    );
}

function toggleComplete(state, itemId) {
    const itemIndex = findItemIndex(state, itemId);
    const updatedItem = state.get('todos')
        .get(itemIndex)
        .update('status', status => status === 'active' ? 'completed' : 'active');

    return state.update('todos', todos => todos.set(itemIndex, updatedItem));
}

function changeFilter(state, filter) {
    return state.set('filter', filter);
}

function editItem(state, itemId) {
    const itemIndex = findItemIndex(state, itemId);
    const updatedItem = state.get('todos')
        .get(itemIndex)
        .set('editing', true);

    return state.update('todos', todos => todos.set(itemIndex, updatedItem));
}

function showDescription(state, itemId) {
    const itemIndex = findItemIndex(state, itemId);
    const updatedItem = state.get('todos')
        .get(itemIndex)
        .update('isVisible', visibility => visibility === 'hidden' ? 'visible' : 'hidden');
    return state.update('todos',todos => todos.set(itemIndex, updatedItem));
}

function cancelEditing(state, itemId) {
    const itemIndex = findItemIndex(state, itemId);
    const updatedItem = state.get('todos')
        .get(itemIndex)
        .set('editing', false);

    return state.update('todos', todos => todos.set(itemIndex, updatedItem));
}

function doneEditing(state, itemId, newText) {
    const itemIndex = findItemIndex(state, itemId);
    const updatedItem = state.get('todos')
        .get(itemIndex)
        .set('editing', false)
        .set('text', newText);

    return state.update('todos', todos => todos.set(itemIndex, updatedItem));
}

function doneDescEditing(state, itemId, newText) {
    console.log(newText);
    const itemIndex = findItemIndex(state, itemId);
    const updatedItem = state.get('todos')
        .get(itemIndex)
        .set('description', newText);

    return state.update('todos', todos => todos.set(itemIndex, updatedItem));
}

function clearCompleted(state) {
    return state.update('todos',
        (todos) => todos.filterNot(
            (item) => item.get('status') === 'completed'
        )
    );
}

function addItem(state, text) {
    const itemId = state.get('todos').reduce((maxId, item) => Math.max(maxId,item.get('id')), 0) + 1;
    const newItem = Map({id: itemId, text: text, status: 'active', description: '', isVisible: 'hidden'});
    return state.update('todos', (todos) => todos.push(newItem));
}

function deleteItem(state, itemId) {
    return state.update('todos',
        (todos) => todos.filterNot(
            (item) => item.get('id') === itemId
        )
    );
}

function attachFile(state, itemId, file) {
    const itemIndex = findItemIndex(state, itemId);
    const updatedItem = state.get('todos')
        .get(itemIndex)
        .set('file', file.preview);


    return state.update('todos', todos => todos.set(itemIndex, updatedItem));
}

export default function(state = Map(), action) {
    switch (action.type) {
        case 'SET_STATE':
            return setState(state, action.state);
        case 'TOGGLE_COMPLETE':
            return toggleComplete(state, action.itemId);
        case 'CHANGE_FILTER':
            return changeFilter(state, action.filter);
        case 'EDIT_ITEM':
            return editItem(state, action.itemId);
        case 'CANCEL_EDITING':
            return cancelEditing(state, action.itemId);
        case 'DONE_EDITING':
            return doneEditing(state, action.itemId, action.newText);
        case 'DONE_DESC_EDITING':
            return doneDescEditing(state, action.itemId, action.newText);
        case 'CLEAR_COMPLETED':
            return clearCompleted(state);
        case 'ADD_ITEM':
            return addItem(state, action.text);
        case 'DELETE_ITEM':
            return deleteItem(state, action.itemId);
        case 'SHOW_DESCRIPTION':
            return showDescription(state, action.itemId);
        case 'ATTACH_FILE':
            return attachFile(state, action.itemId, action.file);
    }
    return state;
}