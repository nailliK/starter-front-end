// top level component, which renders a view based on react-router
import React from "react";
import {connect} from "react-redux";
import * as actions from "./actions";

class App extends React.Component {

    componentWillMount() {
        this.props.initializeApp();
    }

    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {};
}

export default connect(mapStateToProps, actions)(App);
