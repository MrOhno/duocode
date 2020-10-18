import React, { useEffect, useState } from "react";
import { compose } from "recompose";

import { Link, withRouter } from "react-router-dom";
import { withFirebase } from "../Firebase";
import "./Home.css";

import { withAuthorization } from "../Session";
import { Button, Container, Card, CardDeck } from "react-bootstrap";
import Axios from "axios";

const HomePage = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/courses")
      .then((res) => res.json())
      .then((data) => setData(data.data));
  }, []);
  if (!data) {
    return (
      <div>
        <h2>Loading...</h2>
      </div>
    );
  }
  return (
    <Container style={{ paddingTop: "20px" }}>
      <CardDeck>
        {data
          ? data.map((course) => {
              return (
                <Card>
                  <Card.Img variant="top" src={course.image} />
                  <Card.Body>
                    <Card.Title>{course.name}</Card.Title>
                    <Card.Text>{course.description}</Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <Link to={`/course/${course._id}`}>
                      <Button>Vào học</Button>
                    </Link>
                  </Card.Footer>
                </Card>
              );
            })
          : "Loading"}
      </CardDeck>
    </Container>
  );
};

const condition = (authUser) => !!authUser;

export default withAuthorization(condition)(HomePage);
