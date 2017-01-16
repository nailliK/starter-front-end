import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Link } from 'react-router';

class UploadCreativeContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div>Hello world from Foo</div>
      </div>
    );
  }
}

// this maps the reducer's state to props that we can pass down to components
function mapStateToProps(state) {
  return {

  };
}

// connect to redux store
export default connect(mapStateToProps, actions)(UploadCreativeContainer);