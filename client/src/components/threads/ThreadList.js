import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import AddThread from './AddThread'; // <== !!!

class ThreadList extends Component {
  constructor(){
      super();
      this.state = { listOfThreads: [] };
  }

  getAllThreads = () =>{
    axios.get(`/api/threads`)
    .then(responseFromApi => {
      this.setState({
        listOfThreads: responseFromApi.data
      })
    })
  }

  componentDidMount() {
    this.getAllThreads();
  }

  render(){
    return(
      <div>
        <div style={{width: '60%', float:"left"}}>
          { this.state.listOfThreads.map( thread => {
            return (
              <div key={thread._id}>
                <Link to={`/threads/${thread._id}`}>
                  <h3>{thread.title}</h3>
                </Link>
                <p style={{maxWidth: '400px'}} >{thread.description} </p>
              </div>
            )})
          }
        </div>
        <div style={{width: '40%', float:"right"}}>
            <AddThread getData={() => this.getAllThreads()}/> {/* <== !!! */}
        </div>
      </div>
    )
  }
}

export default ThreadList;
