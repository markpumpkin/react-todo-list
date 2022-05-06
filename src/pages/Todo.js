import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setInitialData } from "../actions/todo";
import Header from "../components/todo/Header";
import TodoList from "../components/todo/TodoList";
import Footer from "../components/todo/Footer";

const Todo = () => {
    const todos = useSelector((state) => state.todo.list);
    const crTodos = useSelector((state) => state.todo.crList);
    const toggleCompleted = useSelector((state) => state.todo.toggleCompleted);
    const dispatch = useDispatch();

    useEffect(() => {
        const action = setInitialData();
        dispatch(action);
    }, [dispatch]);

    return (
        <div className="todoapp">
            <Header />
            {todos.length ? <TodoList todoList={crTodos} toggleCompleted={toggleCompleted} /> : ""}
            {todos.length ? <Footer /> : ""}
        </div>
    );
};

export default Todo;
