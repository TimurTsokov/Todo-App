import React from 'react';
import './sass/todo-list-item.sass'

const TodoListItem = ({label, important = false}) => {
    const Style = {
        color: important ? 'steelblue' : 'black',
        fontWeight: important ? 'bold' : 'normal'
    };
    return (
        <span className="todo-list-item">
            <span
                className="todo-list-item-label"
                style={Style}>
                {label}
              </span>
            <button type="button" className="btn btn-outline-success btn-sm">
                <i className="fa fa-exclamation"/>
            </button>
            <button type="button" className="btn btn-outline-danger btn-sm">
                <i className="fa fa-trash-o"/>
            </button>
        </span>
    )
};
export default TodoListItem;