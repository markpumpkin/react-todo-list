import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filterByParam, removeCompleted } from '../../actions/todo';

const Footer = () => {
    const filter = useSelector(state => state.todo.crFilter);
    const todos = useSelector(state => state.todo.list);
    const dispatch = useDispatch();

    const handleClickFilter = (param) => {
        const action = filterByParam(param);
        dispatch(action);
    }
    
    const handleRemoveCompleted = () => {
        const action = removeCompleted();
        dispatch(action);
    }

    const itemLeft = (todos) => {
        return todos.filter(item => item.completed === false).length;
    }

    return (
        <footer className="footer">
            <span className="todo-count"> {itemLeft(todos)} {itemLeft(todos) === 1 ? 'item' : 'items'} left</span>
            <ul className="filters">
                <li>
                    <a href="#all" className={filter === 'all' ? 'selected' : ''} onClick={() => handleClickFilter('all')}>All</a>
                </li>
                <li>
                    <a href="#active" className={filter === 'active' ? 'selected' : ''} onClick={() => handleClickFilter('active')}>Active</a>
                </li>
                <li>
                    <a href="#completed" className={filter === 'completed' ? 'selected' : ''} onClick={() => handleClickFilter('completed')}>Completed</a>
                </li>
            </ul>
            <button className="clear-completed" onClick={handleRemoveCompleted}>Clear completed</button>
        </footer>
    );
}

export default Footer;
