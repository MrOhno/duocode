import React, { Component } from "react";

import { withFirebase } from "../Firebase";
import { Form, Button, Container } from "react-bootstrap";

const INITIAL_STATE = {
  passwordOne: "",
  passwordTwo: "",
  error: null,
};

class PasswordChangeForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const { passwordOne } = this.state;

    this.props.firebase
      .doPasswordUpdate(passwordOne)
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
    const { passwordOne, passwordTwo, error } = this.state;

    const isInvalid = passwordOne !== passwordTwo || passwordOne === "";

    return (
      <Container>
        <Form onSubmit={this.onSubmit}>
          {error && <h2 color="danger">{error.message}</h2>}
          <Form.Group controlId="formBasicEmail">
            <Form.Control
              name="passwordOne"
              onChange={this.onChange}
              type="text"
              value={passwordOne}
              placeholder="New Password"
            />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Control
              name="passwordTwo"
              onChange={this.onChange}
              type="text"
              value={passwordTwo}
              placeholder="Confirm New Password"
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

export default withFirebase(PasswordChangeForm);
