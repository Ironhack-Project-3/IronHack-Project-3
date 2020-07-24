
import React, { Component } from 'react';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';
import ThreadList from './ThreadList'

class ThreadDetails extends Component {
 
    state = {
    thread: []
    }

    componentDidMount = () => {
      axios.get("/api/threads/" + this.props.match.params.id)
      .then(threadObject => {
        console.log(threadObject)
        this.setState({
          thread: threadObject.data
        }) 
      })
    }

  render(){
 
    console.log(this.props)
    
    if (this.state.thread) {
        return <div>

    <h3>{this.state.thread.title}</h3>
    <p>{this.state.thread.description}</p>
        </div>
    }
  }
}

export default ThreadDetails;
 