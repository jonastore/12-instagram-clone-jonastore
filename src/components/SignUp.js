import React, { Component } from 'react';
import axios from 'axios';
import { Router, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';

class SignUp extends Component{
  constructor(props) {
    super(props);
    
    this.state = {
      name:'',
      email:'',
      password:''
    };

    this.signUp = this.signUp.bind(this);
    this.nameChange = this.nameChange.bind(this);
    this.emailChange = this.emailChange.bind(this);
    this.passwordChange = this.passwordChange.bind(this);

  }

  nameChange(e){
    this.setState({name:e.target.value})
  }

  emailChange(e){
    this.setState({email:e.target.value})
  }

  passwordChange(e){
    this.setState({password:e.target.value})
  }

  signUp(e){
    e.preventDefault();

    axios.post('http://localhost:3001/auth/register', {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password   
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }


  render() {
    return (
      <div>
        <h3>Register</h3>
        <form>
          <form onSubmit={this.signUp}>
          <input type="name" onChange={this.nameChange} placeholder="Name" required autofocus />
          <input type="email" onChange={this.emailChange} id="inputEmail" placeholder="Email" required autofocus />
          <input type="password" onChange={this.passwordChange} placeholder="Password" required />
          <button type="submit">Sign up</button>
          </form>
        </form>
      </div>
      
    )
}
}

export default SignUp;
