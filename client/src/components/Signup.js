import React, { Component } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { signup } from "../services/auth";

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

    signup(username, password, name, email, age, address, skills, bio).then(
      (data) => {
        if (data.message) {
          this.setState({
            message: data.message,
            username: "",
            password: "",
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
      }
    );
  };

  render() {
    console.log(this.state);
    return (
      <>
        <div className="signup-page">
          <div className="signup-text">
            <p>This is required to sign up</p>
            <p>
              Tell us more about yourself, including your skills and location{" "}
            </p>
          </div>
          <div className="signup-form">
            <h2>Signup as Local</h2>

            <Form onSubmit={this.handleSubmit}>
              <Form.Group>
                <Form.Label htmlFor="username">Username: </Form.Label>
                <Form.Control
                  type="text"
                  name="username"
                  value={this.state.username}
                  onChange={this.handleChange}
                  id="username"
                />
              </Form.Group>
              <Form.Group>
                <Form.Label htmlFor="password">Password: </Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                  id="password"
                />
              </Form.Group>

              <Form.Group>
                <Form.Label htmlFor="email">Email: </Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                  id="email"
                />
              </Form.Group>

              <Form.Group>
                <Form.Label htmlFor="name">Name: </Form.Label>
                <Form.Control
                  type="name"
                  name="name"
                  value={this.state.name}
                  onChange={this.handleChange}
                  id="name"
                />
              </Form.Group>

              <Form.Group>
                <Form.Label htmlFor="address">Address: </Form.Label>
                <Form.Control
                  type="address"
                  name="address"
                  value={this.state.address}
                  onChange={this.handleChange}
                  id="address"
                />
              </Form.Group>

              <Form.Group>
                <Form.Label htmlFor="age">Age: </Form.Label>
                <Form.Control
                  type="age"
                  name="age"
                  value={this.state.age}
                  onChange={this.handleChange}
                  id="age"
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
                      />
                    ))}
                    {/* <Form.Check
                      inline
                      label="I can translate in writing"
                      type="checkbox"
                      value={this.state.skills}
                      onChange={this.handleChangeChecked}
                      id="write"
                      name="write"
                    />
                    <Form.Check
                      inline
                      label="I can accompany to an Amt"
                      type="checkbox"
                      value={this.state.skills}
                      onChange={this.handleChangeChecked}
                      id="walk"
                      name="walk"
                      banana="Does this work?"
                    />
                    <Form.Check
                      inline
                      label="I can translate on a phone call"
                      type="checkbox"
                      value={this.state.skills}
                      onChange={this.handleChangeChecked}
                      id="call"
                      name="call"
                    />
                    <Form.Check
                      inline
                      label="I can be a tandem partner"
                      type="checkbox"
                      value={this.state.skills}
                      onChange={this.handleChangeChecked}
                      id="tandem"
                      name="tandem"
                    />
                    <Form.Check
                      inline
                      label="I'd like to hang out"
                      type="checkbox"
                      value={this.state.skills}
                      onChange={this.handleChangeChecked}
                      id="hang"
                      name="hang"
                    /> */}
                  </div>
                ))}
              </Form>

              <Form.Group>
                <Form.Label htmlFor="bio">Bio: </Form.Label>
                <Form.Control
                  type="bio"
                  name="bio"
                  value={this.state.bio}
                  onChange={this.handleChange}
                  id="bio"
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
        </div>
      </>
    );
  }
}
