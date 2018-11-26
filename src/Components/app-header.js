import React from 'react';
import './sass/app-header.sass'

const AppHeader = ({toDo, done}) => {
    return (
        <div className="App-header">
            <h1>My TODO list</h1>
            <h2>{toDo} more to do, {done} done</h2>
        </div>

    )
};
export default AppHeader;