import React, { Component } from "react";
import { Link } from "react-router-dom";

import { withFirebase } from "../Firebase";
import * as ROUTES from "../../constants/routes";
import { Form, Button, Container, Card } from "react-bootstrap";

const PasswordForgetPage = () => (
  <Container style={{ display: "flex", justifyContent: "center" }}>
    <PasswordForgetForm />
  </Container>
);

const INITIAL_STATE = {
  email: "",
  error: null,
};

class PasswordForgetFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const { email } = this.state;

    this.props.firebase
      .doPasswordReset(email)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
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
    const { email, error } = this.state;

    const isInvalid = email === "";

    return (
      <Container>
        <Form onSubmit={this.onSubmit}>
          {error && <h2 color="danger">{error.message}</h2>}
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              name="email"
              onChange={this.onChange}
              type="text"
              value={this.state.email}
              placeholder="Email Address"
            />
          </Form.Group>

          <Button disabled={isInvalid} variant="primary" type="submit">
            Reset My Password
          </Button>
        </Form>
      </Container>
    );
  }
}

const PasswordForgetLink = () => (
  <p>
    <Link to={ROUTES.PASSWORD_FORGET}>Forgot Password?</Link>
  </p>
);

export default PasswordForgetPage;

const PasswordForgetForm = withFirebase(PasswordForgetFormBase);

export { PasswordForgetForm, PasswordForgetLink };
