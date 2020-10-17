import React from "react";
import {Button} from 'react-bootstrap'
import { withFirebase } from "../Firebase";
import 'bootstrap/dist/css/bootstrap.min.css';

const SignOutButton = ({ firebase }) => (
  <Button variant="danger" size="sm" type="button" onClick={firebase.doSignOut}>
    Sign Out
  </Button>
);

export default withFirebase(SignOutButton);
