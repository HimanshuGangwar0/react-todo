import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Todo from './Todo';
import AddTodo from './AddTodo'

class App extends Component {
  state = {
    todos: [
      {id: 1, content: "Buy Milk"},
      {id: 2, content: "Buy Books"}
    ],
  }

  // Delete Todo From List
  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => todo.id !== id);
    this.setState({
      todos: todos
    })
  }

  // ADD new Todo to list
  addTodo = (item) => {
    item.id = Math.random();
    let todos = [...this.state.todos, item];
    this.setState({
      todos: todos,
    })
  }

  render() {
    return (
      <div className="todo-app container" style={ mainStyle }>
        <h1 className="center blue-text">TODO'S</h1>
        <Todo todos={ this.state.todos } deleteTodo={ this.deleteTodo } />
        <AddTodo addTodo={ this.addTodo } />
      </div>
    );
  }
}
// Style App 
const mainStyle = {
  border: "0px",
  boxShadow: "0px 0px 20px 0px black",
  padding: "5px 100px",
  margin: "30px auto",
  minHeight: "90vh",
}

 export default App


