import axios from "axios";
import {ASYNC_TODOS_LOADED, TOGGLE_COMPLETED, ADD_NEW_TODO} from "./types";

// triggered when top level app component initially renders
export function initializeApp() {

    // fade in the body
    const classes = document.querySelector('body').className;
    document.querySelector('body').className += (classes.length) ? ' body--loaded' : 'body--loaded';

    // get todos (async)
    return (dispatch, getStore) => {
        axios.get('../json/todos.json').then((results) => {
            dispatch({
                type: ASYNC_TODOS_LOADED,
                payload: results.data.todos
            });
        })
            .catch((err) => {
                throw (err);
            });
    };
}

// on change event for the 'completed' state of a todo
// could trigger an API POST/PATCH call here...
export function toggleCompleted(id, bool) {
    return {
        type: TOGGLE_COMPLETED,
        payload: {
            id: id,
            completed: bool
        }
    }
}

// add a new todo
// could trigger an API POST call here...
export function addNewTodo(todo) {
    return {
        type: ADD_NEW_TODO,
        payload: todo
    }
}
