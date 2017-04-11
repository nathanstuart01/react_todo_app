import React from 'react';


const Todo = ({ id, name, complete, updateTodo, deleteTodo }) => (
  <li>
  <span
    onClick={() => updateTodo(id)} 
    style={ complete ? { textDecoration: 'line-through', color: 'grey' } : {} }
    >
    {name}
    </span>
    <button onClick={ () => deleteTodo(id) }>Delete</button>
  </li>
)

export default Todo;
