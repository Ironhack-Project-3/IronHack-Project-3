import React, { Component } from 'react'
import ThreadDetails from './ThreadDetails'
import { Form, Button } from 'react-bootstrap';


export default class extends Component {
  render() {
    return (
      
      <div className="edit-thread">
        <Form onSubmit={this.props.handleSubmit}>
          <Form.Group> 
            <Form.Control
              type='text'
              name='title'
              value={this.props.title}
              onChange={this.props.handleChange}
            />
          </Form.Group>
          <Form.Group> 
            <Form.Control
              type='textarea'  
              name='description'
              value={this.props.description}
              onChange={this.props.handleChange}
            />
          </Form.Group>
      <div className="edit-thread-buttons"> 
          <button type='submit'>Submit Changes</button>
          <button href={`/threads/${this.props._id}`} >Cancel</button>
          </div>
        </Form>
      </div>
    );
  }
}
