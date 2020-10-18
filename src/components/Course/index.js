import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Course = (props) => {
  const [data, setData] = useState([]);
  let id = props.match.params.id;
  useEffect(() => {
    fetch(`http://localhost:3000/modules/courseID=${id}`)
      .then((res) => res.json())
      .then((data) => setData(data.data));
  }, []);
  return (
    <Container style={{ paddingTop: "50px" }}>
      <ul
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {data &&
          data.map((module) => {
            return (
              <Link
                style={{
                  width: "60%",
                  padding: "15px 200px",
                  marginBottom: "5px",
                  backgroundColor: "#28a745",
                  color: "white",
                  borderRadius: "5px",
                }}
                to={`/module/${module._id}`}
              >
                <li>
                  Module {module.index} : {module.content}
                </li>
              </Link>
            );
          })}
      </ul>
    </Container>
  );
};

export default Course;
