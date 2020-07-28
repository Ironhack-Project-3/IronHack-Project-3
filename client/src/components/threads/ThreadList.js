import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import AddThread from './AddThread';
import Navbar from '../Navbar'

class ThreadList extends Component {
  constructor(props){
      super(props);
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
    
    console.log("threadList props", this.props)
    return(
      <>
        <Navbar/> 
          <div className="threads">
            <div className="threadlist">
              <div className="add-thread">
                <h2>Add a New Thread</h2>
                  <AddThread getData={() => this.getAllThreads()}/> {/* <== !!! */}
              </div>
              <div className="threadlist-results">
                { this.state.listOfThreads.map( thread => {
                  return ( 
                    <div className="threadlist-individual-result" key={thread._id}>
                      <Link to={`/threads/${thread._id}`}>
                        <h3>{thread.title}</h3>
                      </Link>
                      <p>{thread.description} </p>
                      <div className="threadlist-buttons">
                        <Link to={`/threads/${thread._id}`}>
                          <p>Go to Post</p>
                        </Link>
                        <Link to={`/threads/${thread._id}`}>
                          <p>Add to favourites</p>
                        </Link>
                      </div>
                    </div>
                  )})
                }
              </div>
            </div>
          </div>
      </>
    )
  }
}

export default ThreadList;
