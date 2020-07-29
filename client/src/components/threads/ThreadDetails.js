
import React, { Component } from 'react';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';
import ThreadList from './ThreadList'
import { Button } from 'react-bootstrap'
import EditThread from './EditThread'
import Navbar from '../Navbar'

class ThreadDetails extends Component {

  state = {
    thread: [],
    editForm: false,
    error: null,
    title: '',
    description: ''
  }

  componentDidMount = () => {
    axios.get("/api/threads/" + this.props.match.params.id)
      .then(threadObject => {
        // console.log(threadObject)
        this.setState({
          thread: threadObject.data
        })
      })
  }

  deleteThread = () => {
    const id = this.props.match.params.id;
    axios.delete(`/api/threads/${id}`).then(() => {
      this.props.history.push("/threads");
    });
  };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const id = this.props.match.params.id;
    axios
      .put(`/api/threads/${id}`, {
        title: this.state.title,
        description: this.state.description
      })
      .then(response => {
        this.setState({
          thread: response.data,
          title: response.data.title,
          description: response.data.description,
          editForm: false
        });
        this.props.history.push(`/threads/`);
      })
      .catch(err => {
        console.log(err);
      });
  };

  toggleEditForm = () => {
    this.setState({
      editForm: !this.state.editForm
    })
  }

  getData = () => {
    const id = this.props.match.params.id;
    axios
      .get(`/api/threads/${id}`)
      .then(response => {
        console.log(response.data);
        this.setState({
          thread: response.data, 
          title: response.data.title,
          description: response.data.description
          
        });
      })
      .catch(err => {
        console.log(err.response);
        // handle err.response depending on err.response.status
        if (err.response.status === 404) {
          this.setState({ error: "Not found" });
        }
      });
  };

  componentDidMount = () => {
    this.getData();
  };



  render() {
 

    if (this.state.thread) {
      return   (
      <>
      <Navbar/> 
       <div className="thread-details">

        <div className="thread-details-text">

          <h3>{this.state.thread.title}</h3>
          <p>{this.state.thread.description}</p>
          <div className="thread-details-buttons">
            
            <Link to={`/threads/${this.state.thread._id}`}><p>Contact me</p></Link>
            <Link to={`/threads/${this.state.thread._id}`}><p>Add to favourites</p></Link>

            </div>

            <div className="thread-details-edit-delete-buttons">
           
                <button onClick={this.toggleEditForm}>Edit Thread</button>
                <button onClick={this.deleteThread}>Delete Thread</button>
                </div>
                {this.state.editForm && (
                  <EditThread {...this.state}
                  handleChange={this.handleChange}
                  handleSubmit={this.handleSubmit} />
                )}
          
        </div>
      </div>
      </>
      )
    }
  }
}

export default ThreadDetails;
