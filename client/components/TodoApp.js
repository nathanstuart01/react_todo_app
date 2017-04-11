import React from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import Filter from './Filter';

class TodoApp extends React.Component {
  state = { todos : [], filter: 'All' }

  componentDidMount() {
    $.ajax({
      url: '/api/items',
      type: 'GET'
    }).done( todos => {
      this.setState({ todos })
    });
  }

  addTodo = (name) => {
    $.ajax({
      url: '/api/items',
      type: 'POST',
      data: { item: { name, complete: false }}
    }).done( todo => {
      this.setState({ todos: [todo, ...this.state.todos]});
    });

  }

  updateTodo = (id) => {
    //make a call to our server
    $.ajax({
      url: `/api/items/${id}`,
      type: 'PUT'
    }).done( todo => {
      let todos = this.state.todos.map( t => {
        if (t.id === todo.id)
          return todo
        return t
    });
    this.setState({ todos })
  });
  }

  deleteTodo = (id) => {
    $.ajax({
      url: `/api/items/${id}`,
      type: 'DELETE'
    }).done( () => {
      let todos = this.state.todos.filter( todo => todo.id !== id )
      this.setState({ todos});
    });
  }

  filteredTodos = () => {
    switch(this.state.filter) {
      case 'All':
        return this.state.todos;
      case 'Active':
        return this.state.todos.filter( t => !t.complete )
      case 'Complete':
        return this.state.todos.filter( t => t.complete )
    }
  }

  setFilter = (filter) => {
    this.setState({ filter });
  }

  render() {
    return (
      <div>
        <TodoForm addTodo={this.addTodo} />
        <TodoList
        todos={this.filteredTodos()}
        deleteTodo={this.deleteTodo}
        updateTodo={this.updateTodo} /> {/*these are things being passed down to todo list */}
        <Filter filter={this.state.filter} setFilter={this.setFilter} />
      </div>
    )
  }

}

export default TodoApp;
