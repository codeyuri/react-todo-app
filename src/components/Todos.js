import React, { Component } from 'react';

const Todos = ({todos, deleteTodo}) => {
    const deleteBtn = {float:'right',color:'red',cursor:'pointer'}
    const todoList = todos.length ? (
        todos.map(todo => {
            return (
                <div className="collection-item" key={todo.id}>
                    <span className="">{todo.content}</span><span onClick={() => {deleteTodo(todo.id)}} style={deleteBtn}>Delete</span>
                </div>
            )
        })
    ) : (
        <p className="center">You don't have any todo(s) left</p>
    )
    return (
        <div className="todos collection">
            {todoList}
        </div>
    )
}

export default Todos;