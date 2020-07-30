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
    picture: "",
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
        picture: this.state.picture,
        email: this.state.email,
        age: this.state.age,
        address: this.state.address,
        skilss: this.state.skills,
        bio: this.state.bio,
      })
      .then((response) => {
        this.setState({
          name: response.data.name,
          picture: response.data.picture,
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
    console.log(id, "ID");
    axios
      .get(`/api/users/${id}`)
      .then((response) => {
        console.log(response.data);
        this.setState({
          user: response.data,
          name: response.data.name,
          picture: response.data.picture,
          email: response.data.email,
          age: response.data.age,
          skills: response.data.skills,
          address: response.data.address,
          bio: response.data.bio,
        });
      })
      .catch((err) => {
        console.log(err);
        // handle err.response depending on err.response.status
        if (err.response.status === 404) {
          this.setState({ error: "Not found" });
        }
      });
  };
  componentDidMount() {
    if (this.props.match.params.id) {
      this.getData();
    } else {
      this.setState({
        user: this.props.user,
      });
    }
  }
  componentDidUpdate(prevProp) {
    if (prevProp !== this.props) {
      this.setState({
        user: this.props.user,
      });
    }
  }

  render() {
    console.log(this.props.user);
    if (!this.state.user) return <div>Loading..</div>;
    return (
      <>
        <Navbar user={this.state.user} setUser={this.setUser} />
        <div className="profile-page">
          <div className="profile-info">
            <ul>
              <h1>Welcome to your profile, {this.state.user.username}!</h1>
              <img src={this.state.user.picture} alt="Your face"></img>
              <li>Username: {this.state.user.username}</li>
              <li>Picture: {this.state.user.picture}</li>
              <li>Email: {this.state.user.email}</li>
              <li>Name: {this.state.user.name}</li>
              <li>Age: {this.state.user.age}</li>
              <li>Address: {this.state.user.address}</li>
              <li>
                Skills:{" "}
                {this.state.user.skills.map((el) => (
                  <p>{el}</p>
                ))}
              </li>
              <li>Bio: {this.state.user.bio}</li>
              {/* /////////
              <h1>Welcome to your profile, {this.props.user.username}!</h1>
            <li><strong>Username:</strong> {this.props.user.username}</li>
              <li><strong>Email: </strong>{this.props.user.email}</li>
              <li><strong>Name: </strong>{this.props.user.name}</li>
              <li><strong>Age: </strong>{this.props.user.age}</li>
              <li><strong>Address: </strong>{this.props.user.address}</li>
              <li>
              <strong>Skills: </strong>{" "}
                {this.props.user.skills.map(el => (
                  <>              
                  <li>{el}</li>                     
                  </>
                ))}
              </li>
              <li><strong>Bio: </strong>{this.props.user.bio}</li>

////////// */}
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
