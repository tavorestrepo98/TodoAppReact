import React, { useEffect, useReducer } from 'react';
import { todoReducer } from './todoReducer';

import TodoList from './TodoList';

import { useForm } from '../../hooks/useForm';

import './styles.css'


const init = () => {

    return JSON.parse(localStorage.getItem('todos')) || [];

    // return [{
    //     id: new Date().getTime(),
    //     desc: 'Aprender React',
    //     done: false
    // }];
}



export const TodoApp = () => {

    const [todos, dispatch] = useReducer(todoReducer, [], init);

    const [ { description }, handleInputChange, reset ] = useForm({
        description: ''
    });

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos]);

    const handleDelete  = (todoId) => {
        console.log(todoId);


        const action = {
            type: 'delete',
            payload: todoId
        }

        dispatch( action );

    }

    const handleToggle = (todoId) => {
        const action = {
            type: 'toggle',
            payload: todoId
        }

        dispatch( action );
    }


    const handleSubmit = (e) => {
        e.preventDefault();

        if(description.trim().length <= 1){
            return;
        }

        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        };

        reset();

        const action = {
            type: 'add',
            payload: newTodo
        };

        dispatch( action );

    }

    return (
        <>
            <h1>TodoApp ({todos.length})</h1>
            <hr/>

            <div className="row">
                <div className="col-7">
                    <TodoList todos={todos} handleToggle={handleToggle} handleDelete={handleDelete}/>
                </div>  

                <div className="col-5">
                    <h4>Agregar Todo</h4>
                    <hr/>

                    <form onSubmit={ handleSubmit }>
                        <input
                            type="text"
                            name="description"
                            className="form-control"
                            placeholder="Aprender ..."
                            autoComplete="off"
                            value={ description }
                            onChange={ handleInputChange }
                        />

                        <button
                            type="submit"
                            className="btn btn-primary mt-1 btn-block"
                        >
                            Agregar
                        </button>
                        
                    </form>
                </div>
            </div>
        </>
    )
}
