
export const setInitialData = (todo) => {
    return {
        type: 'INITIAL_TODO',
        payload: todo,
    }
}

export const addNewTodo = (todo) => {
    return {
        type: 'ADD_TODO',
        payload: todo,
    }
}

export const setDoneTodo = (todo) => {
    return {
        type: 'SET_DONE_TODO',
        payload: todo,
    }
}

export const editItemStatus = (item) => {
    return {
        type: 'EDIT_ITEM_STATUS',
        payload: item,
    }
}

export const deleteItem = (item) => {
    return {
        type: 'DELETE_ITEM',
        payload: item,
    }
}

export const filterByParam = (param) => {
    return {
        type: 'FILTER_ITEMS',
        payload: param,
    }
}

export const removeCompleted = () => {
    return {
        type: 'REMOVE_COMPLETED',
        payload: null,
    }
}

export const changeInput = (title) => {
    return {
        type: 'CHANGE_INPUT_VALUE',
        payload: title,
    }
}

export const toggleItems = () => {
    return {
        type: 'TOGGLE_ITEMS_COMPLETED',
        payload: null,
    }
}

export const editItem = (item) => {
    return {
        type: 'EDIT_ITEM',
        payload: item,
    }
}

export const editDone = (item) => {
    return {
        type: 'EDIT_ITEM_DONE',
        payload: item,
    }
}

export const editDestroy = () => {
    return {
        type: 'EDIT_DESTROY',
        payload: null,
    }
}
