import React, {Component} from 'react';
import './app.sass';

import AppHeader from './Components/app-header'
import SearchPanel from './Components/search-panel'
import TodoList from './Components/todo-list'

class App extends Component {
    render() {
        const todoData = [
            {label: 'Drink vodka', important: false, id: 1},
            {label: 'Kill people', important: true, id: 2},
            {label: 'Have a nice day', important: false, id: 3}
        ];
        return (
            <div className="todo-app">
                <AppHeader/>
                <SearchPanel/>
                <TodoList todos={todoData}/>
            </div>
        );
    }
}

export default App;

