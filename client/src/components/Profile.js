import React from "react";
import axios from "axios";
//import User from '../../../models/User';
import Navbar from "./Navbar";
import EditUser from "./users/EditUser";

export default class Profile extends React.Component {

  state = {
    user: this.props.user,
    editUser: false,
    error: null,
    name: "",
    email: "",
    age: null,
    address: "",
    skills: [],
    bio: "",
  };
  setUser = (user) => {
    this.setState({
      user: user,
    });
  };



  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const id = this.props.match.params.id;
    axios
      .put(`/user:id`, {
        name: this.state.name,
        email: this.state.email,
        age: this.state.age,
        address: this.state.address,
        skilss: this.state.skills,
        bio: this.state.bio,
      })
      .then((response) => {
        this.setState({
          user: response.data,
          username: response.data.username,
          name: response.data.name,
          email: response.data.email,
          age: response.data.age,
          address: response.data.address,
          skills: response.data.skills,
          bio: response.data.bio,
          editForm: false,
        });
        this.props.history.push(`/profile`);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  toggleEditUser = () => {
    this.setState({
      editUser: !this.state.editUser,
    });
  };

  getData = () => {
    const id = this.props.match.params.id;
    axios
      .get(`/api/user/${id}`)
      .then((response) => {
        console.log(response.data);
        this.setState({
          user: response.data,
          username: response.data.username,
          name: response.data.name,
          email: response.data.email,
          age: response.data.age,
          skilss: response.data.skills,
          address: response.data.address,
          bio: response.data.bio,
        });
      })
      .catch((err) => {
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
    return (
      <>
        <Navbar user={this.state.user} setUser={this.setUser} />

        <div className="profile-page">
          <div className="profile-info">
            <ul>
              <h1>Welcome to your profile, {this.props.user.username}!</h1>
              <li>Username: {this.props.user.username}</li>
              <li>Email: {this.props.user.email}</li>
              <li>Name: {this.props.user.name}</li>
              <li>Age: {this.props.user.age}</li>
              <li>Address: {this.props.user.address}</li>
              <li>
                Skills:{" "}
                {this.props.user.skills.map((el) => (
                  <p>{el}</p>
                ))}
              </li>
              <li>Bio: {this.props.user.bio}</li>
            </ul>
            <div className="user-details-edit-delete-buttons">
              <button onClick={this.toggleEditUser}>Edit User</button>
            </div>
            <div className="edit-user-form">
              {this.state.editUser && (
                <EditUser
                  {...this.state}
                  {...this.props}
                  setUser={this.props.setUser}
                  handleChange={this.handleChange}
                  handleSubmit={this.handleSubmit}
                  toggleEditUser={this.toggleEditUser}
                />
              )}
            </div>
          </div>
        </div>
      </>
    );
  }
}

