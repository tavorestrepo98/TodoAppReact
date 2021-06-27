import React from 'react';
import PropTypes from 'prop-types';

import TodoListItem from './TodoListItem';

const TodoList = ({ todos, handleToggle, handleDelete }) => {
    return (
        <>
            <ul className="list-group list-group-flush">
            {
                todos.map((todo, i) => (
                    <TodoListItem
                        todo={todo}
                        i={i}
                        handleToggle={handleToggle}
                        handleDelete={handleDelete}    
                    />
                ))
            }
            </ul>
        </>
    )
};

TodoList.propTypes = {
    todos: PropTypes.array,
    handleToggle: PropTypes.func,
    handleDelete: PropTypes.func
}

export default TodoList;




