import React, { Component } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { signup } from '../services/auth';
 

export default class Signup extends Component {
  state = {
    username: '',
    password: '',
    name: '',
    email: '',
    age: null,
    address: '',
    skills: [],
    bio: '',
  };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    const { username, password, name, email, age, address, skills, bio } = this.state;

    signup( username, password, name, email, age, address, skills, bio ).then(data => {
      if (data.message) {
        this.setState({ 
          message: data.message,
          username: '',
          password: '',
          age: null,
          name: '',
          email: '',
          address: '',
          skills: [],
         bio: '',
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
            <Form.Label htmlFor='email'>Email: </Form.Label>
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

          <Form.Group>
            <Form.Label htmlFor='age'>Age: </Form.Label>
            <Form.Control
              type='age'
              name='age'
              value={this.state.age}
              onChange={this.handleChange}
              id='age'
            />
          </Form.Group>

          <Form> {['checkbox'].map((type) => (
     <div key={`inline-checkbox`} className="skills">
       <p>Skills:</p>
      <Form.Check inline label="I can translate in writing" type="checkbox"  value={this.state.skills} onChange={this.handleChange} id="write" />
      <Form.Check inline label="I can accompany to an Amt" type="checkbox"  value={this.state.skills} onChange={this.handleChange} id="walk" />
      <Form.Check inline label="I can translate on a phone call" type="checkbox"  value={this.state.skills} onChange={this.handleChange} id="call" />
      <Form.Check inline label="I can be a tandem partner" type="checkbox"  value={this.state.skills} onChange={this.handleChange} id="tandem" />
      <Form.Check inline label="I'd like to hang out" type="checkbox"  value={this.state.skills} onChange={this.handleChange} id="hang" />

       </div>
      ))}
      </Form>

          <Form.Group>
            <Form.Label htmlFor='bio'>Bio: </Form.Label>
            <Form.Control
              type='bio'
              name='bio'
              value={this.state.bio}
              onChange={this.handleChange}
              id='bio'
            />
          </Form.Group>

        
          {this.state.message && (
            <Alert variant='danger'>{this.state.message}</Alert>
          )}
          
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