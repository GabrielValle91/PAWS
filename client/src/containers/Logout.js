import React, { Component } from 'react';
import { connect } from 'react-redux';
import { clearUserDetails } from '../actions/UserAuthentication';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class Logout extends Component {
  clearDetail = () => {
    <Router>
      {this.props.clearUserDetails()}
      <Route exact path="/login" />
    </Router>
  }
  render(){
    return(
      <div>
        {this.clearDetail()}
      </div>
    )
  }
}

export default connect(null, {clearUserDetails})(Logout);