import React, { Component } from 'react';
import axios from 'axios';
 
class AddThread extends Component {
  constructor(props){
      super(props);
      this.state = { title: "", description: "" };
  }
   
  handleFormSubmit = (event) => {
    event.preventDefault();
    const title = this.state.title;
    const description = this.state.description;
    axios.post("/api/threads", { title, description })
    .then( () => {
         this.props.getData();
        this.setState({title: "", description: ""});
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
        <form onSubmit={this.handleFormSubmit}>
          <label>title:</label>
          <input type="text" name="title" value={this.state.title} onChange={ e => this.handleChange(e)}/>
          <label>description:</label>
          <textarea name="description" value={this.state.description} onChange={ e => this.handleChange(e)} />
          
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}
 
export default AddThread;