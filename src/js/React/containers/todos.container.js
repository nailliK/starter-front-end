import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Todo from '../components/todo/todo.component.jsx';

class TodosContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ul>
        <Todo />
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps, actions)(TodosContainer);