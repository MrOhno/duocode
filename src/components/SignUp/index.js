import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { withFirebase } from "../Firebase";
import { FirebaseContext } from "../Firebase";
import { compose } from "recompose";
import { Form, Button, Container, Card } from "react-bootstrap";

import * as ROUTES from "../../constants/routes";

const SignUpPage = () => (
  <Container style={{ display: "flex", justifyContent: "center" }}>
    <Card
      style={{
        padding: "50px",
        marginTop: "10px",
        marginBottom: "40px",
        width: "60%",
      }}
    >
      <h1 style={{ textAlign: "center" }}>Sign Up</h1>
      <SignUpForm />
    </Card>
  </Container>
);
const INITIAL_STATE = {
  username: "",
  email: "",
  passwordOne: "",
  passwordTwo: "",
  error: null,
};

class SignUpFormBase extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const { username, email, passwordOne } = this.state;

    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then((authUser) => {
        // Create a user in your Firebase realtime database
        console.log(authUser.user.uid);
        return this.props.firebase.user(authUser.user.uid).set({
          username,
          email,
          checkpoint: 1,
          course: 1,
          match: false,
        });
      })
      .then((authUser) => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.HOME);
      })
      .catch((error) => {
        this.setState({ error });
      });

    event.preventDefault();
  };

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { username, email, passwordOne, passwordTwo, error } = this.state;
    //validation
    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === "" ||
      email === "" ||
      username === "";

    return (
      <Container>
        <Form onSubmit={this.onSubmit}>
          {error && <h2 color="danger">{error.message}</h2>}
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control
              name="username"
              onChange={this.onChange}
              type="text"
              value={username}
              placeholder="Enter username"
            />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              name="email"
              onChange={this.onChange}
              type="email"
              value={email}
              placeholder="Enter email"
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              name="passwordOne"
              onChange={this.onChange}
              type="password"
              value={passwordOne}
              placeholder="Password"
            />
          </Form.Group>
          <Form.Group controlId="formBasicPasswordTwo">
            <Form.Label>Password</Form.Label>
            <Form.Control
              name="passwordTwo"
              onChange={this.onChange}
              type="password"
              value={passwordTwo}
              placeholder="Re-Password"
            />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button disabled={isInvalid} variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    );
  }
}

const SignUpLink = () => (
  <p>
    Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
  </p>
);

const SignUpForm = compose(withRouter, withFirebase)(SignUpFormBase);
export default SignUpPage;

export { SignUpForm, SignUpLink };
