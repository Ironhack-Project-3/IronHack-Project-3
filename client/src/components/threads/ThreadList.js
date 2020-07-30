import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import AddThread from "./AddThread";
import Profile from "../Profile";
import {people} from "../../utils/imageUpload"

class ThreadList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listOfThreads: [],
      listOfUsers: [],
    };
  }

  getAllThreads = () => {
    axios.get(`/api/threads`).then((responseFromApi) => {
      this.setState({
        listOfThreads: responseFromApi.data,
      });
    });
  };

  getAllUsers = () => {
    axios.get("/api/users").then((response) => {
      this.setState({
        listOfUsers: response.data,
      });
    });
  };

  componentDidMount() {
    this.getAllThreads();
    this.getAllUsers();
  }

  render() {
    console.log("this is the list of threads", this.state.listOfThreads);
    console.log("these are the users", this.state.listOfUsers);
    // console.log("threadList props", this.props)
    return (
      <>
        {/* <Navbar /> */}
        <div className="threads">
          <div className="threadlist">
            <div className="add-thread"> 
            <img src={people} className="people-icon"/> 
              <h2>Add a New Thread</h2>
                <AddThread
                getData={() => this.getAllThreads()}
                user={this.props.user}
              />{" "}
              {/* <== !!! */}
            </div>
            <div className="threadlist-results">
              {this.state.listOfThreads.map((thread) => {
                let name = "";
                let id = "";

                thread.user ? (name = thread.user.username) : (name = "");
                thread.user ? (id = thread.user._id) : (id = "");

                {
                  /* let tests = this.state.listOfUsers.find(
                  (el) => el._id === thread.user
                ); */
                }

                {
                  /* let usernameTest = this.state.listOfUsers.find(
                  (user) => console.log(user) || user._id === thread.user
                ); */
                }

                return (
                  <div
                    className="threadlist-individual-result"
                    key={thread._id}
                  >
                    <Link to={`/threads/${thread._id}`}>
                      <h3>{thread.title}</h3>
                    </Link>

                    <Link to={`/profile/${id}`}>
                      <h5>{name}</h5>
                    </Link>

                    <p>{thread.description} </p>
                    <div className="threadlist-buttons">
                      <Link to={`/threads/${thread._id}`}>
                        <p>Go to Post</p>
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ThreadList;
