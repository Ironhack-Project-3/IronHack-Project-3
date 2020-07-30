import React, { Component } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { signup } from "../services/auth";
import {tower} from "../utils/imageUpload"

const arrayOfSkills = [
  { label: "I can translate in writing", name: "write" },
  { label: "I can accompany to an Amt", name: "walk" },
  { label: "I can translate on a phone call", name: "call" },
  { label: "I can be a tandem partner", name: "tandem" },
  { label: "I'd like to hang out", name: "hang" },
];

export default class Signup extends Component {
  state = {
    username: "",
    password: "",
    picture: "",
    name: "",
    email: "",
    age: null,
    address: "",
    skills: [],
    bio: "",
    write: "",
    hang: "",
    call: "",
    walk: "",
    tandem: "",
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  handleChangeChecked = (event, label) => {
    const { name, checked } = event.target;
    console.log(name, label);

    this.setState({
      [name]: label,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const {
      username,
      password,
      name,
      picture,
      email,
      age,
      address,
      bio,
      tandem,
      walk,
      call,
      write,
      hang,
    } = this.state;

    const skills = [tandem, walk, call, write, hang].filter((el) => el);
    // console.log(skills);
    console.log(picture, "This is the picture");
    signup(
      username,
      password,
      name,
      email,
      age,
      address,
      skills,
      bio,
      picture
    ).then((data) => {
      if (data.message) {
        this.setState({
          message: data.message,
          username: "",
          password: "",
          picture: "",
          age: null,
          name: "",
          email: "",
          address: "",
          skills: [],
          bio: "",
        });
      } else {
        this.props.setUser(data);
        this.props.history.push("/Home");
      }
    });
  };

  render() {
    return (
      <>
        <div className="signup-page">
          
          <div className="signup-form">
            <h2>Sign up</h2>

            <Form onSubmit={this.handleSubmit} className="signup-form-form">
              <Form.Group>
                <Form.Label htmlFor="username"></Form.Label>
                <Form.Control
                  type="text"
                  name="username"
                  value={this.state.username}
                  onChange={this.handleChange}
                  id="username"
                  placeholder="*Username: "
                />
              </Form.Group>
              <Form.Group>
                <Form.Label htmlFor="password"> </Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                  id="password"
                  placeholder="*Password: "
                />
              </Form.Group>

              <Form.Group>
                <Form.Label htmlFor="email"> </Form.Label>
                <Form.Control
                  type="text"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                  id="email"
                  placeholder="*Email: "
                />
              </Form.Group>

              <Form.Group>
                <Form.Label htmlFor="name"> </Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={this.state.name}
                  onChange={this.handleChange}
                  id="name"

                  placeholder="Name: "
                />
              </Form.Group>

              <Form.Group>
                <Form.Label htmlFor="picture">  </Form.Label>
                <Form.Control
                  type="text"
                  name="picture"
                  value={this.state.picture}
                  onChange={this.handleChange}
                  id="picture"

                  placeholder="Picture: "
                />
              </Form.Group>

              <Form.Group>
                <Form.Label htmlFor="address"> </Form.Label>
                <Form.Control
                  type="text"
                  name="address"
                  value={this.state.address}
                  onChange={this.handleChange}
                  id="address"

                  placeholder="*Address: "
                />
              </Form.Group>

              <Form.Group>
                <Form.Label htmlFor="age"> </Form.Label>
                <Form.Control
                  type="text"
                  name="age"
                  value={this.state.age}
                  onChange={this.handleChange}
                  id="age"

                  placeholder="Age: "
                />
              </Form.Group>

              <Form>
                {" "}
                {["checkbox"].map((type) => (
                  <div key={`inline-checkbox`} className="skills">
                    <p>Skills:</p>
                    {arrayOfSkills.map((skill) => (
                      <Form.Check
                        inline
                        label={skill.label}
                        value={this.state.skills}
                        type="checkbox"
                        onChange={(e) =>
                          this.handleChangeChecked(e, skill.label)
                        }
                        name={skill.name}
                        id={skill.name}

                  placeholder="Skills: "
                      />
                    ))}
                     
                  </div>
                ))}
              </Form>

              <Form.Group>
                <Form.Label htmlFor="bio"> </Form.Label>
                <Form.Control
                  type="text"
                  name="bio"
                  value={this.state.bio}
                  onChange={this.handleChange}
                  id="bio"

                  placeholder="Bio: "
                />
              </Form.Group>

              {this.state.message && (
                <Alert variant="danger">{this.state.message}</Alert>
              )}

              <div className="signup-buttons">
                <Button type="submit">Sign Up</Button>
                <Button href="/">Cancel</Button>
              </div>
            </Form>
          </div>

          <img src={tower} className="tower-icon"/>
        </div>
      </>
    );
  }
}
