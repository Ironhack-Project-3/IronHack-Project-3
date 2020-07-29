import React, { Component } from 'react';
import axios from 'axios';
 
class AddUser extends Component {
  constructor(props){
      super(props);
      this.state = { name: "", email: "" };
  }
   
  handleFormSubmit = (event) => {
    event.preventDefault();
    const name = this.state.name;
    const email = this.state.email;
    // console.log("HERE", name, email)
    axios.post("/api/users/new", { name, email })
    .then( (newUser) => {

         this.props.getData();
        this.setState({name: "", email: ""});
    })
    .catch( error => console.log(error) )
  }
 
  handleChange = (event) => {  
      const {name, value} = event.target;
      this.setState({[name]: value});
  }
 
  render(){
    return(
      <div>
        {/* <Navbar />  */}
        <form onSubmit={this.handleFormSubmit}>
          <label>name:</label>
          <input type="text" name="name" value={this.state.name} onChange={ e => this.handleChange(e)}/>
          <label>email:</label>
          <textarea name="email" value={this.state.email} onChange={ e => this.handleChange(e)} />
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}
 
export default AddUser;