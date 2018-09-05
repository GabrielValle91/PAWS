import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userSignup } from '../actions/UserAuthentication';

class SignUp extends Component {
  constructor(){
    super();
    this.state = {
      username: '',
      password: '',
      email: ''
    }
  }

  handleChange = event => {
    const {name, value} = event.target;
    this.setState({
      [name]: value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.userSignup(this.state);
  }

  render(){
    return(
      <div>
        Signup Form
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="username">Username: </label>
          <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
          <br />
          <label htmlFor="email">Email: </label>
          <input type="text" name="email" value={this.state.email} onChange={this.handleChange} />
          <br />
          <label htmlFor="password">Password: </label>
          <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
          <br />
          <button type="submit">Login</button>
        </form>
      </div>
    )
  }
}

export default connect(null, {userSignup})(SignUp);