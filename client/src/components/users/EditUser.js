import React, { Component } from 'react'
import UserDetails from './UserDetails'
import Profile from '../Profile'
import { Form, Button } from 'react-bootstrap';
import axios from 'axios'; 


export default class extends Component {


  state = { 
    username: this.props.user.username,
    name: this.props.user.name,
    email: this.props.user.email,
    age: this.props.user.age,
    address: this.props.user.address,
    skills: this.props.user.skills,
    bio: this.props.user.bio,
  }
  
  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };


  handleSubmit = event => {
    event.preventDefault();
    const id = this.props.user._id; 
    axios
      .put(`/api/user/${id}`, {

    username: this.props.user.username,
        name: this.state.name,
        email: this.state.email,
        age: this.state.age,
        address: this.state.address,
        skills: this.state.skills,
        bio:this.state.bio,
      })
      .then(response => {
        this.props.setUser({
          username: this.props.user.username,
          name: this.state.name,
          email: this.state.email,
        age: this.state.age,
        address: this.state.address,
        skills: this.state.skills,
        bio:this.state.bio,
        });
        this.props.toggleEditUser();
        this.props.history.push(`/profile`);
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() { 
 
    return (
      <div className="edit-user">
        <Form onSubmit={this.handleSubmit}>
          <Form.Group> 
          <Form.Label>Name:</Form.Label>
            <Form.Control
              type='text'
              name='name'
              value={this.state.name}
              onChange={this.handleChange}
            />
          </Form.Group>

          <Form.Group> 
          <Form.Label>Email:</Form.Label>
            <Form.Control
              type='text'  
              name='email'
              value={this.state.email}
              onChange={this.handleChange}
            />
          </Form.Group>

          <Form.Group> 
          <Form.Label>Age:</Form.Label>
            <Form.Control
              type='textarea'  
              name='age'
              value={this.state.age}
              onChange={this.handleChange}
            />
          </Form.Group>

          {/* <Form.Group> 
            <Form.Control
              type='textarea'  
              name='skills'
              value={this.props.skills}
              onChange={this.props.handleChange}
            />
          </Form.Group> */}

          <Form.Group> 
          <Form.Label>Address:</Form.Label>
            <Form.Control
              type='text'  
              name='address'
              value={this.state.address}
              onChange={this.handleChange}
            />
          </Form.Group>

          <Form.Group> 
          <Form.Label>Skills:</Form.Label>
            <Form.Control
              type='text'  
              name='skills'
              value={this.state.skills}
              onChange={this.handleChange}
            />
          </Form.Group>

          <Form.Group> 
          <Form.Label>Bio:</Form.Label>
            <Form.Control
              type='textarea'  
              name='bio'
              value={this.state.bio}
              onChange={this.handleChange}
            />
          </Form.Group>


     
          
      <div className="edit-user-buttons"> 
          <button type='submit'>Submit Changes</button>
          <button href="/profile" >Cancel</button> 
          </div>
        </Form>
      </div>
    );
  }
}
