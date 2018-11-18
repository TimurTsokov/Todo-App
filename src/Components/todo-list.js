import React from 'react';
import TodoListItem from './todo-list-item'
import './sass/todo-list.sass'

const TodoList = ({todos}) => {

    const elements = todos.map((item) => {
        const {id, ...itemProps} = item;
        return (
            // <li>
            //     <TodoListItem
            //     label={item.label}
            //     important={item.important}/>
            // </li>
            <li key={id} className="list-group-item">
                <TodoListItem {...itemProps}/>
            </li>
        )
    });

    return (
        <ul className="list-group todo-list">
            {elements}
        </ul>
    )
}
export default TodoList;