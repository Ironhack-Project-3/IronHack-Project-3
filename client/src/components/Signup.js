import React, { Component } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { signup } from '../services/auth';

import { MDBInput, MDBFormInline } from 'mdbreact';

export default class Signup extends Component {
  state = {
    username: '',
    password: '',
    name: '',
    address: '',
    competence: [],
  };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    const { username, password, name, email, address, competence } = this.state;

    signup(username, password, name, email, address, competence).then(data => {
      if (data.message) {
        this.setState({
          message: data.message,
          username: '',
          password: '',
          name: '',
          email: '',
          address: '',
         competence: [],
        });
      } else {
        this.props.setUser(data);
        this.props.history.push('/Home');
      }
    });
  };

  render() {
    return (
      <>
      <div className="signup-page">
      <div className="signup-text">
      <p>This is required to sign up</p>
      <p>Tell us more about yourself, including your skills and location </p>
      </div>
      <div className="signup-form">


        <h2>Signup as Local</h2>
        
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Label htmlFor='username'>Username: </Form.Label>
            <Form.Control
              type='text'
              name='username'
              value={this.state.username}
              onChange={this.handleChange}
              id='username'
            />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor='password'>Password: </Form.Label>
            <Form.Control
              type='password'
              name='password'
              value={this.state.password}
              onChange={this.handleChange}
              id='password'
            />
          </Form.Group>



          <Form.Group>
            <Form.Label htmlFor='name'>Email: </Form.Label>
            <Form.Control
              type='email'
              name='email'
              value={this.state.email}
              onChange={this.handleChange}
              id='email'
            />
          </Form.Group>

          <Form.Group>
            <Form.Label htmlFor='name'>Name: </Form.Label>
            <Form.Control
              type='name'
              name='name'
              value={this.state.name}
              onChange={this.handleChange}
              id='name'
            />
          </Form.Group>

          <Form.Group>
            <Form.Label htmlFor='address'>Address: </Form.Label>
            <Form.Control
              type='address'
              name='address'
              value={this.state.address}
              onChange={this.handleChange}
              id='address'
            />
          </Form.Group>

        
          {this.state.message && (
            <Alert variant='danger'>{this.state.message}</Alert>
          )}

<div> 
      <MDBFormInline>
        <MDBInput
          label='Writing'
          type='checkbox'
          id='writing'
          containerClass='mr-5'
        />
        <MDBInput
          label='Speaking'
          type='checkbox'
          id='speaking'
          containerClass='mr-5'
        />
        {/* <MDBInput
          type="checkbox"
          value={label}
          checked={isChecked}
          onChange={this.toggleCheckboxChange}
        /> */}
      </MDBFormInline>
    </div>

          
          <div className="signup-buttons">
          <Button type='submit'>Sign Up</Button>    
          <Button href="/">Cancel</Button>
        </div>
        </Form>
         
     
        </div>
        </div>
      </>
    );
  }
}