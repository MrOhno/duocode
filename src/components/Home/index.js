import React from "react";
import { compose } from "recompose";

import { Link, withRouter } from "react-router-dom";
import { withFirebase } from "../Firebase";
import "./Home.css";

import { withAuthorization } from "../Session";
import { Button, Container, Card, CardDeck } from "react-bootstrap";
import Axios from "axios";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
      data: [],
    };
  }
  componentDidMount() {
    Axios("http://localhost:8082/courseses").then((res) => console.log(res));
  }
  render() {
    return (
      <Container style={{paddingTop: '20px'}}>
        <CardDeck>
          <Card>
            <Card.Img variant="top" src="https://pbs.twimg.com/profile_images/554798224154701824/mWd3laxO.png" />
            <Card.Body>
              <Card.Title>Golang</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src="https://cdn.dribbble.com/users/1103017/screenshots/4307976/ad-01-.jpg" />
            <Card.Body>
              <Card.Title>Python</Card.Title>
              <Card.Text>
                This card has supporting text below as a natural lead-in to
                additional content.{" "}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ9AfP4_f7VQQ_cyJTggNqOMTNlTHuHITp5pw&usqp=CAU" />
            <Card.Body>
              <Card.Title>Rust</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
        </CardDeck>
      </Container>
    );
  }
}

const condition = (authUser) => !!authUser;

export default withAuthorization(condition)(HomePage);
