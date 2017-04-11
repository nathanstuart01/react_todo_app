import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos, updateTodo, deleteTodo }) => (
  <ul>
      { todos.map( todo => {
        return(<Todo key={todo.id} {...todo} deleteTodo={deleteTodo} updateTodo={updateTodo}/>)
      })
    }
  </ul>
)

export default TodoList;
