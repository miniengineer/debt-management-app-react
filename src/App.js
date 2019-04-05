import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      message: 'My Todo List',
      newTodo: '',
      todos: [{
        title: 'buy coffee',
        done: false
      }, {
        title: 'learn react',
        done: false
      }]
    };
  }

  formSubmitted(event) {
    event.preventDefault();

    this.setState({
      newTodo: '',
      todos: [...this.state.todos, {
        title: this.state.newTodo,
        done: false
      }]
    });
  }

  newTodoChanged(event) {
    this.setState({
      newTodo: event.target.value
    });
  }


  render() {
    return (
      <div className="App">
      <h3>{this.state.message}</h3>
      <form onSubmit={(event) => this.formSubmitted(event)}>
      <label htmlFor='newTodo'>New ToDo</label>
      <input onChange={(event) => this.newTodoChanged(event)} id='newTodo' name='newTodo' value={this.state.newTodo} />
      <button type='submit'>Add Todo</button>
      </form>
      <ul>
      {this.state.todos.map(todo => {
        return (<li key={todo.title}>
          <input type='checkbox' />{todo.title}</li>)
      })}
      </ul>
      </div>
    );
  }
}

export default App;
