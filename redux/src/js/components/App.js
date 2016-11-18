/**
 * Created by Lam on 16/11/17.
 */
import React from 'react';
import AddTodo from './AddTodo.js';
import TodoList from './TodoList.js';
import Footer from './Footer.js';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <AddTodo
                    onAddClick={text =>
                        console.log('add todo', text)
                    } />
                <TodoList
                    todos={[{
                        text: 'Use Redux',
                        completed: true
                    }, {
                        text: 'Learn to connect it to React',
                        completed: false
                    }]}
                    onTodoClick={todo =>
                        console.log('todo clicked', todo)
                    } />
                <Footer
                    filter='SHOW_ALL'
                    onFilterChange={filter =>
                        console.log('filter change', filter)
                    } />
            </div>
        );
    }
}