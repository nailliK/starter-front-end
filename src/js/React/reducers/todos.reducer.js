import {
  ASYNC_TODOS_LOADED,
  TOGGLE_COMPLETED,
  ADD_NEW_TODO
} from '../actions/types';

const INITIAL_STATE = {
  todos: []
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {

    case ASYNC_TODOS_LOADED: {
      return Object.assign({}, state, {
        todos: action.payload
      });
    }

    case TOGGLE_COMPLETED: {
      let todos = state.todos.slice(0);
      let updatedTodos = todos.map(function(todo) {
        if (todo.id === action.payload.id) {
          return Object.assign({}, todo, {
            completed: action.payload.completed
          });
        }
        return todo;
      });

      return Object.assign({}, state, {
        todos: updatedTodos
      });
    }

    case ADD_NEW_TODO: {
      let date = new Date();
      let todos = state.todos.slice(0);
      let newTodo = {
        id: state.todos.length,
        task: action.payload,
        completed: false,
        date_created: date.toISOString()
      };

      return Object.assign({}, state, {
        todos: [...todos, newTodo]
      });
    }
    
    default:
      return state;
    }
}