import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Todo from '../components/todo/todo.component.jsx';

class TodosContainer extends React.Component {
  constructor(props) {
    super(props);

    // initial new todo input state
    this.state = {
      newTodo: ''
    };
  }

  toggleCompleted(id, bool) {
    // send completed state to reducer (passed up from todo.component)
    this.props.toggleCompleted(id, bool);
  }

  onChangeNewTodo(e) {
    // update new todo input state
    this.setState({
      newTodo: e.target.value
    });
  }

  addNewTodo() {
    if (this.state.newTodo) {
      // send todo info back to reducer
      this.props.addNewTodo(this.state.newTodo);

      // clear new todo input
      this.setState({
        newTodo: ''
      });
    }
  }

  render() {

    return (
      <main>
        <form>
          <input type="text" placeholder="Add a new todo" value={this.state.newTodo} onChange={this.onChangeNewTodo.bind(this)} />
          <button type="submit" onClick={this.addNewTodo.bind(this)} disabled={!this.state.newTodo}>Add</button>
        </form>
        <ol>
          {this.props.todos.map(function(todo) {
            return <Todo key={`todo__${todo.id}`} todo={todo} toggleCompleted={this.toggleCompleted.bind(this)} />
          }.bind(this))}
        </ol>
      </main>
    );
  }
}

// get state properties from redux store
function mapStateToProps(state) {
  return {
    todos: state.todos['todos']
  };
}

export default connect(mapStateToProps, actions)(TodosContainer);