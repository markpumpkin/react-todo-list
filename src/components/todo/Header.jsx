import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNewTodo, changeInput } from '../../actions/todo';

const ramdomId = () => {
    var now = new Date();
    var timestamp = now.getMonth().toString() + now.getDate().toString() + now.getUTCMilliseconds();
    return timestamp + Math.trunc(Math.random() * 9000);
}

const Header = () => {
    const dispatch = useDispatch();
    const newId = ramdomId();
    const crTextWriting = useSelector(state => state.todo.crTextWriting);
    
    const handleAddTodo = (e) => {
        if (e.keyCode === 13) {
            const newItem = {
                id: newId,
                title: crTextWriting,
                completed: false,
                editing: false,
                previousTitle: '',
            }

            const action = addNewTodo(newItem);
            dispatch(action);
        }
    }

    const handleChangeInput = (e) => {
        let title = e.target.value;

        const action = changeInput(title);
        dispatch(action);
    }

    return (
      <header className="header">
        <h1>Todos</h1>
        <input 
          className="new-todo" 
          placeholder="What needs to be done?" 
          onKeyDown={handleAddTodo}
          value={crTextWriting}
          onChange={handleChangeInput}
        />
      </header>
    );
}

export default Header;
