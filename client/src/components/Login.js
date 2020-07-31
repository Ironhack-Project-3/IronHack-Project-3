import React, { Component } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { login } from '../services/auth';
import {bear} from '../utils/imageUpload'

export default class Login extends Component {
  state = {
    username: '',
    password: '',
  };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    const { username, password } = this.state;

    login(username, password).then(data => {
      if (data.message) {
        this.setState({
          message: data.message,
          username: '',
          password: ''
        });
      } else {
        // successfully logged in
        // update the state for the parent component
        this.props.setUser(data);
        this.props.history.push('/Home');
      }
    });
  };

  render() {
    return (
      <>  

<div className="menu-bar">
          <p>GLB</p> 
        </div>
      <div className="login-page">

        <div className="login-form">
        <h2>Log In</h2>
        <Form onSubmit={this.handleSubmit} className="login-form-form">
          <Form.Group>
            <Form.Label htmlFor='username'></Form.Label>
            <Form.Control
              type='text'
              name='username'
              value={this.state.username}
              onChange={this.handleChange}
              id='username'
              placeholder="Username"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor='password'></Form.Label>
            <Form.Control
              type='password'
              name='password'
              value={this.state.password}
              onChange={this.handleChange}
              id='password'
              placeholder="Password"
            />
          </Form.Group>
          {this.state.message && (
            <Alert variant='danger'>{this.state.message}</Alert>
          )}
          <div class="login-buttons">
          <Button type='submit'>Login</Button>
          <Button href="/">Cancel</Button>
          </div>
        </Form>
        </div>

      <img src={bear} className="bear-icon"/>
        </div>
      </>
    );
  }
}