import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import AceEditor from "react-ace";

const index = () => {
  function onChange(newValue) {
    console.log("change", newValue);
  }
  return (
    <Container>
      <h1>Welcome to DuoCode!</h1>
      <Row>
        <Col>
          <img
            style={{ width: "500px" }} alt="helli"
            src="https://2.bp.blogspot.com/-m-DkBUUtO_Q/Wc9WmTlpAZI/AAAAAAAAAKs/cjg467rHbc01oeW3zOANgYwdLyqMuDOSwCLcBGAs/s1600/lmbs_pairprogramming_co.png"
          ></img>
        </Col>
        <Col>
          <AceEditor
            style={{boxShadow: "0 0 20px rgba(0, 0, 0, 0.5)" }}
            placeholder="Play with code !"
            mode="javascript"
            theme="monokai"
            fontSize={20}
            onChange={onChange}
            getLabel={function (date) {
              return date.slice(0, 4);
            }}
            name="UNIQUE_ID_OF_DIV"
            editorProps={{ $blockScrolling: true }}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default index;
