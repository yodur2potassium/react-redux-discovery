export function toggleComplete(itemId) {
    return {
        type: 'TOGGLE_COMPLETE',
        itemId
    }
}

export function changeFilter(filter) {
    return {
        type: 'CHANGE_FILTER',
        filter
    }
}

export function editItem(itemId) {
    return {
        type: 'EDIT_ITEM',
        itemId
    }
}

export function showDescription(itemId){
    return {
        type: 'SHOW_DESCRIPTION',
        itemId
    }
}

export function cancelEditing(itemId) {
    return {
        type: 'CANCEL_EDITING',
        itemId
    }
}

export function doneEditing(itemId, newText) {
    return {
        type: 'DONE_EDITING',
        itemId,
        newText
    }
}

export function doneDescEditing(itemId, newText) {
    return {
        type: 'DONE_DESC_EDITING',
        itemId,
        newText
    }
}

export function clearCompleted() {
    return {
        type: 'CLEAR_COMPLETED'
    }
}

export function addItem(text) {
    return {
        type: 'ADD_ITEM',
        text
    }
}

export function deleteItem(itemId) {
    return {
        type: 'DELETE_ITEM',
        itemId
    }
}
export function attachFile(itemId, file) {
    return {
        type: 'ATTACH_FILE',
        itemId,
        file
    }
}