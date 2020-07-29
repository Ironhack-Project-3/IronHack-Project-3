import React, { Component } from 'react'
import UserDetails from './UserDetails'
import Profile from '../Profile'
import { Form, Button } from 'react-bootstrap';


export default class extends Component {
  render() {
 

// console.log("hello");
    return (
      <div className="edit-user">
        <Form onSubmit={this.props.handleSubmit}>
          <Form.Group> 
          <Form.Label>Name:</Form.Label>
            <Form.Control
              type='text'
              name='name'
              value={this.props.name}
              onChange={this.props.handleChange}
            />
          </Form.Group>

          <Form.Group> 
          <Form.Label>Email:</Form.Label>
            <Form.Control
              type='text'  
              name='email'
              value={this.props.email}
              onChange={this.props.handleChange}
            />
          </Form.Group>

          {/* <Form.Group> 
            <Form.Control
              type='textarea'  
              name='age'
              value={this.props.age}
              onChange={this.props.handleChange}
            />
          </Form.Group>

          <Form.Group> 
            <Form.Control
              type='textarea'  
              name='skills'
              value={this.props.skills}
              onChange={this.props.handleChange}
            />
          </Form.Group>

          <Form.Group> 
            <Form.Control
              type='textarea'  
              name='bio'
              value={this.props.bio}
              onChange={this.props.handleChange}
            />
          </Form.Group> */}

          
      <div className="edit-user-buttons"> 
          <button type='submit'>Submit Changes</button>
          <button href="profile" >Cancel</button>
          </div>
        </Form>
      </div>
    );
  }
}
