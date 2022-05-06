const initialState = {
    list: [],
    crList: [],
    crFilter: 'all',
    crTextWriting: '',
    toggleCompleted: false,
}

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TODO': {
            const newList = [...state.list];
            newList.push(action.payload);
            let newCRList = curretFilter(newList, state.crFilter);

            localStorage.setItem('nb-todos', JSON.stringify(newList));
            localStorage.setItem('nb-filter-todos', JSON.stringify(newCRList));

            return {
                ...state,
                list: newList,
                crList: newCRList,
                crTextWriting: '',
            };
        }

        case 'INITIAL_TODO': {
            let todos = localStorage.getItem('nb-todos')
            ? JSON.parse(localStorage.getItem('nb-todos'))
            : [];

            let filterTodos = localStorage.getItem('nb-filter-todos')
            ? JSON.parse(localStorage.getItem('nb-filter-todos'))
            : [];

            let isFilter = state.crFilter;
            if (todos.length === filterTodos.length) {
                isFilter = 'all';
            } else {
                isFilter = filterTodos[0].completed ? 'completed' : 'active';
            }

            const itemsCompleted = todos.filter(item => item.completed === true);
            let toggleCompleted = state.toggleCompleted;
            if (todos.length === itemsCompleted.length) {
                toggleCompleted = true;
            }

            return {
                ...state,
                list: todos,
                crList: filterTodos,
                crFilter: isFilter,
                toggleCompleted: toggleCompleted,
            };
        }
        
        case 'EDIT_ITEM': {
            let newCRList = [...state.crList];
            newCRList.forEach(item => {
                item.editing = false;
                if (item.id === action.payload.id) {
                    item.editing = true;
                    item.previousTitle = action.payload.title;
                }
            });

            localStorage.setItem('nb-filter-todos', JSON.stringify(newCRList));

            return {
                ...state,
                crList: newCRList,
            };
        }
        
        case 'EDIT_ITEM_DONE': {
            let newList = [...state.list];

            if (action.payload.title === '') {
                newList = newList.filter(item => item.id !== action.payload.id);
            } else {
                newList.forEach(item => {
                    if (item.id === action.payload.id) {
                        item.title = action.payload.title;
                        item.editing = false;
                        item.previousTitle = '';
                    }   
                });
            }
            
            let newCRList = curretFilter(newList, state.crFilter);

            localStorage.setItem('nb-todos', JSON.stringify(newList));
            localStorage.setItem('nb-filter-todos', JSON.stringify(newCRList));

            return {
                ...state,
                list: newList,
                crList: newCRList,
            };
        }
        
        case 'EDIT_ITEM_STATUS': {
            let newList = [...state.list];
            newList.forEach(element => {
                if (element.id === action.payload.id) {
                    element.completed = !element.completed;
                }
            });
            let newCRList = curretFilter(newList, state.crFilter);
            let toggleCompleted = checkToggleCompleted(newList);

            localStorage.setItem('nb-todos', JSON.stringify(newList));
            localStorage.setItem('nb-filter-todos', JSON.stringify(newCRList));
            
            return {
                ...state,
                list: newList,
                crList: newCRList,
                toggleCompleted: toggleCompleted,
            };
        }

        case 'EDIT_DESTROY': {
            let newList = [...state.list];
            newList.forEach(item => {item.editing = false; item.previousTitle = ''; });

            let newCRList = curretFilter(newList, state.crFilter);

            localStorage.setItem('nb-todos', JSON.stringify(newList));
            localStorage.setItem('nb-filter-todos', JSON.stringify(newCRList));

            return {
                ...state,
                list: newList,
                crList: newCRList,
            };
        }
        
        case 'DELETE_ITEM': {
            let newList = [...state.list];
            newList = newList.filter(item => item.id !== action.payload.id);
            let newCRList = curretFilter(newList, state.crFilter);

            localStorage.setItem('nb-todos', JSON.stringify(newList));
            localStorage.setItem('nb-filter-todos', JSON.stringify(newCRList));

            return {
                ...state,
                list: newList,
                crList: newCRList,
            };
        }
        
        case 'REMOVE_COMPLETED': {
            let newList = [...state.list];
            newList = newList.filter(item => item.completed !== true);
            let newCRList = curretFilter(newList, state.crFilter);

            localStorage.setItem('nb-todos', JSON.stringify(newList));
            localStorage.setItem('nb-filter-todos', JSON.stringify(newCRList));

            return {
                ...state,
                list: newList,
                crList: newCRList,
            };
        }
        
        case 'FILTER_ITEMS': {
            let newCRList = curretFilter([...state.list], action.payload);
            
            localStorage.setItem('nb-filter-todos', JSON.stringify(newCRList));
            
            return {
                ...state,
                crList: newCRList,
                crFilter: action.payload,
            };
        }
        
        case 'CHANGE_INPUT_VALUE': {
            let text = action.payload;
            
            return {
                ...state,
                crTextWriting: text,
            };
        }
        
        case 'TOGGLE_ITEMS_COMPLETED': {
            let newList = [...state.list];
            let toggleCompleted = checkToggleCompleted(newList);
            newList.forEach(item => item.editing = false);
            
            if (toggleCompleted) {
                newList.forEach(item => item.completed = false);
            } else {
                newList.forEach(item => item.completed = true);
            }

            let newCRList = curretFilter(newList, state.crFilter);

            localStorage.setItem('nb-todos', JSON.stringify(newList));
            localStorage.setItem('nb-filter-todos', JSON.stringify(newCRList));
            
            return {
                ...state,
                list: newList,
                crList: newCRList,
                crFilter: 'all',
                toggleCompleted: !toggleCompleted,
            };
        }

        default: 
            return state;
    }
}

const isFilter = (param) => {
    let completed = null;
    switch (param) {
        case 'completed':
            completed = true;
            break;
        case 'active':
            completed = false
            break;
        default:
            completed = null;
            break;
    }
    return completed;
}

const curretFilter = (todos, crFilter) => {
    let newCRList = todos;
    let completed = isFilter(crFilter);

    if (completed !== null) {
        newCRList = newCRList.filter(item => item.completed === completed);
    }
    
    return newCRList;
}

const checkToggleCompleted = (todos, toggleCompleted = false) => {
    let newList = todos;
    let itemsCompleted = newList.filter(item => item.completed === true);
    if (newList.length === itemsCompleted.length) {
        toggleCompleted = true;
    }

    return toggleCompleted;
}

export default todoReducer;
