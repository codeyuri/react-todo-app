import React, { Component } from 'react';
import Todos from './Todos';
import AddTodo from './AddTodo';

class App extends Component {
    state = {
        todos: [
            { id: 1, content: 'learn react' },
            { id: 2, content: 'create boilerplate' },
            { id: 3, content: 'create todo app' }
        ]
    }
    deleteTodo = (id) => {
        const todos = this.state.todos.filter(todo => {
            return todo.id !== id
        });
        this.setState({
            todos
        })
    }
    addTodo = (todo) => {
        todo.id = Math.random();
        let todos = [...this.state.todos, todo];
        this.setState({
            todos
        })
    }
    render() { 
        return (
            <div className="todo-app container">
                <h4 className="center blue-text" style={{padding:'30px 10px'}}>Dan's Simple Todo App</h4>
                <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
                <AddTodo addTodo={this.addTodo} />
            </div>
        );
    }
}
 
export default App;