import React, { Component } from 'react'
import ThreadDetails from './ThreadDetails'
import { Form, Button } from 'react-bootstrap';


export default class extends Component {
  render() {
    return (
      <div>
        <h2>Edit Thread: </h2>
        <Form onSubmit={this.props.handleSubmit}>
          <Form.Group>
            <Form.Label>Title:</Form.Label>
            <Form.Control
              type='text'
              name='title'
              value={this.props.title}
              onChange={this.props.handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Description:</Form.Label>
            <Form.Control
              type='text'
              name='description'
              value={this.props.description}
              onChange={this.props.handleChange}
            />
          </Form.Group>

          <button type='submit'>Submit Changes</button>
        </Form>
      </div>
    );
  }
}
