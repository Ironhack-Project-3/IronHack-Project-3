import React from 'react'
import axios from 'axios'; 
//import User from '../../../models/User';
import Navbar from './Navbar'
import EditUser from './users/EditUser'


export default class Profile extends React.Component {
 

  state = {
    user: this.props.user,
    editUser: false,
    error: null,
    name: '',
    email:'', 
  }
    setUser = user => {
    this.setState({
      user: user
    })
  }


/////////////////////////////////////////

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
      .put(`/user:id`, {
        name: this.state.name,
        email: this.state.email
      })
      .then(response => {
        this.setState({
          user: response.data,
          name: response.data.name,
          email: response.data.email,
          editForm: false
        });
        this.props.history.push(`/Profile`);
      })
      .catch(err => {
        console.log(err);
      });
  };

  toggleEditUser = () => {
    this.setState({
      editForm: !this.state.editUser
    })
  }

  getData = () => {
    const id = this.props.match.params.id;
    axios
    .get(`/api/user/${id}`)
      .then(response => {
        console.log(response.data);
        this.setState({
          thread: response.data, 
          title: response.data.name,
          description: response.data.email
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

///////////////////////////////////////////////////



 render(){
 
  
  return ( 
     <>
    <Navbar user={this.state.user} setUser={this.setUser}/>
     
  
    <div className="profile-page">  
    <div className="profile-info">
        <ul>

        <h1>Welcome to your profile, {this.props.user.username}!</h1>
          <li>Username: {this.props.user.username} </li>
          <li>Email: {this.props.user.email} </li>
          <li>Name: {this.props.user.name} </li>
          <li>Age: {this.props.user.age}</li>
          <li>Skills: {this.props.user.skills}</li>
          <li>Bio: {this.props.user.bio}</li>
        </ul>
        <div className="user-details-edit-delete-buttons">
           
           <button onClick={this.toggleEditUser}>Edit User</button> 
           </div>
        <div className="edit-user-form">
           {this.state.editForm && (
             <EditUser {...this.state}
             handleChange={this.handleChange}
             handleSubmit={this.handleSubmit} />
           )}
     </div>

        </div>
       
    </div>


    
    </>
  )
 }
  

}

 