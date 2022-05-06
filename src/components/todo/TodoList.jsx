import React from 'react';
import Item from './Item';
import { useDispatch } from 'react-redux';
import { toggleItems } from '../../actions/todo';

function TodoList(props) {
    const { todoList, toggleCompleted } = props;
    const dispatch = useDispatch();
    
    const handleToggleItems = () => {
        const action = toggleItems();
        dispatch(action);
    }

    return (
        <section className="main" >
            <input id="toggle-all" name="toggle-all" className="toggle-all" type="checkbox" onChange={handleToggleItems} checked={toggleCompleted}/>
            <label htmlFor="toggle-all">Mark all as complete</label>
            <ul className="todo-list">
                {
                    todoList.map((data, key) => <Item key={key} data={data} />)
                }
            </ul>
        </section>
    );
}

export default TodoList;
