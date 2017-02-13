import React from "react";

class Todo extends React.Component {

    constructor(props) {
        super(props);

        this.state = {};
    }

    handleChange(e) {
        // send completed state back to reducer
        this.props.toggleCompleted(this.props.todo.id, e.target.checked);
    }

    render() {
        return (
            <li>
                <label>
                    <input type="checkbox" value={this.props.todo.completed} onChange={this.handleChange.bind(this)}/>
                    {this.props.todo.task}
                </label>
            </li>
        );
    }
}
;

export default Todo;
