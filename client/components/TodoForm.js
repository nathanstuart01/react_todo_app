import React from 'react';

const TodoForm = ({ addTodo }) => {
  let todo;

  return (
    <form
    onSubmit={ e => {
      e.preventDefault();
      addTodo(todo.value)
      todo.value = null;
    }}
    >
      <input placeholder="Add a todo" ref={ (n) => todo = n } />
    </form>
  )
}

export default TodoForm;
