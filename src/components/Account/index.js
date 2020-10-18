import React from "react";

import { AuthUserContext, withAuthorization } from "../Session";
import { PasswordForgetForm } from "../PasswordForget";
import PasswordChangeForm from "../PasswordChange";
import { Container, Card } from "react-bootstrap";

const AccountPage = () => (
  <AuthUserContext.Consumer>
    {(authUser) => (
      <Container style={{ display: "flex", justifyContent: "center" }}>
        <Card
          style={{
            padding: "50px",
            marginTop: "10px",
            marginBottom: "40px",
            width: "60%",
          }}
        >
          <h1 style={{ textAlign: "center" }}>Account: {authUser.email}</h1>
          <br />
          <h3 style={{ textAlign: "left" }}>Password Forget</h3>
          <PasswordForgetForm />
          <br />
          <h3 style={{ textAlign: "left" }}>Change Password</h3>
          <PasswordChangeForm />
        </Card>
      </Container>
    )}
  </AuthUserContext.Consumer>
);

const condition = (authUser) => !!authUser;

export default withAuthorization(condition)(AccountPage);
