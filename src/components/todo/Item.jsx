import React from 'react';
import { useDispatch } from 'react-redux';
import { editItemStatus, deleteItem, editItem, editDone, editDestroy } from '../../actions/todo';

const Item = (props) => {
    const dispatch = useDispatch();
    const item = props.data;

    const handleChangeStatus = (item) => {
        const action = editItemStatus(item);
        dispatch(action);
    }

    const handleRemoveItem = (item) => {
        const action = deleteItem(item);
        dispatch(action);
    }

    const handleStartEditItem = (item) => {
        const action = editItem(item);
        dispatch(action);
    }
 
    const handleEditDone = (e) => {
        if (e.keyCode === 13) {
            let newItem = {
                id: item.id,
                title: e.target.value,
            }
            
            const action = editDone(newItem);
            dispatch(action);
        } 
        if (e.key === 'Escape') {
            const action = editDestroy();
            dispatch(action);
        }
    }

    const getClassItem = (item) => {
        let itemClass = '';
        if (item.completed) {
            itemClass += 'completed ';
        }
        if (item.editing !== undefined && item.editing) {
            itemClass += ' editing';
        }
        
        return itemClass;
    }

    return (
        <li id={item.id} className={getClassItem(item)}>
            <div className="view">
                <input className="toggle" type="checkbox" checked={item.completed} onChange={() => handleChangeStatus(item)}/>
                <label onDoubleClick={() => handleStartEditItem(item)}>{item.title}</label>
                <button className="destroy" onClick={() => handleRemoveItem(item)}></button>
            </div>
            <input 
                className="edit" 
                onKeyDown={handleEditDone}
                defaultValue={item.previousTitle}
            />
        </li>
    );
}

export default Item;
