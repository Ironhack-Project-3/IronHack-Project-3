import React, { Component } from 'react';
import axios from 'axios';
 
class AddThread extends Component {
  constructor(props){
      super(props);
      this.state = { title: "", description: "", user: ""};
  }

  
  handleFormSubmit = (event) => {
    event.preventDefault();
    const title = this.state.title;
    const description = this.state.description;
    const user = this.props.user.username;
    axios.post("/api/threads", { title, description, user })
    .then( () => {
         this.props.getData();
         this.setState({title: "", description: "" , user: this.props.user.username});
        //  console.log("post axios state", this.state)
    })
    .catch( error => console.log(error) )
  }
 
  handleChange = (event) => {  
      const {name, value} = event.target;
      this.setState({[name]: value});
  }
 
  render(){
    console.log("out of the props", this.props.user.username)
   
    return(
      <div>
        <form className="thread-form" onSubmit={this.handleFormSubmit}>
          <label></label>
          <input type="text" name="title" placeholder="Enter title" value={this.state.title} onChange={ e => this.handleChange(e)}/>
          <br/>
          <label></label>
          <textarea name="description" placeholder="Enter description" value={this.state.description} onChange={ e => this.handleChange(e)} />
          <br/>
          <input type="submit" value="Submit" className="thread-form-button"/>
        </form>
      </div>
    )
  }
}
 
export default AddThread;
