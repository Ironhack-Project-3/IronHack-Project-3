import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import AddUser from './AddUser'; // <== !!!

class UserList extends Component {
  constructor(){
      super();
      this.state = { listOfUsers: [] };
  }

  getAllUsers = () =>{
    axios.get(`/api/users`)
    .then(responseFromApi => {
      console.log(responseFromApi)
      this.setState({
        listOfUsers: responseFromApi.data
      })
    })
  }

  componentDidMount() {
    this.getAllUsers();
  }

  render(){
    return(
      <div>
        <div style={{width: '60%', float:"left"}}>
          { this.state.listOfUsers.map( user => {
            return (
              <div key={user._id}>
                <Link to={`/users/${user._id}`}>
                  <h3>{user.name}</h3>
                </Link>
                <p style={{maxWidth: '400px'}} >{user.email} </p>
              </div>
            )})
          }
        </div>
        <div style={{width: '40%', float:"right"}}>
            <AddUser getData={() => this.getAllUsers()}/> {/* <== !!! */}
        </div>
      </div>
    )
  }
}

export default UserList;
