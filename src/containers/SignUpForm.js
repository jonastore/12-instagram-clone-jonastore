import React, { Component } from 'react';
import { signUp } from '../actions/SignUp';
import { connect } from 'react-redux';

class SignUpForm extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      password: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: [e.target.value]
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.dispatch(signUp(this.state)); 
  }

  render() {
    return (
        <div>
          <h4>Sign up</h4>
          <form method="POST" onSubmit={this.handleSubmit.bind(this)}>
            <input type="text" name="name" placeholder="Name" onChange={this.handleChange} />
            <input type="text" name="email" placeholder="Email" onChange={this.handleChange} />
            <input type="password" name="password" placeholder="Password" onChange={this.handleChange} />
            <button type="submit">Sign up</button>
          </form>
        </div>
    );
  }
}

export default SignUpForm;
