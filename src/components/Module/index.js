import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import HorizontalTimeline from "react-horizontal-timeline";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";
import ReactMarkdown from "react-markdown";
import { Button } from "react-bootstrap";
import { withFirebase } from "../Firebase";
import { Link, withRouter } from "react-router-dom";
import { compose } from "recompose";

const Module = (props) => {
  const [data, setData] = useState([]);

  let id = props.match.params.id;
  useEffect(() => {
    fetch(`http://localhost:3000/checkpoints/moduleID=${id}`)
      .then((res) => res.json())
      .then((data) => setData(data.data));
    // props.firebase.pair.on("value", (snapshot) => {
    //   console.log(snapshot.val());
    // });
  }, []);
  const onChange = (newVal) => {
    console.log(newVal);
  };
  //state = { value: 0, previous: 0 };
  const [curIdx, setCurIdx] = useState(0);
  const [prevIdx, setPrevIdx] = useState(-1);

  // const prevStatus = prevIdx >= 0 ? data[prevIdx].question : "";
  if (!data) {
    return <div>Loading...</div>;
  }
  return (
    <Container fluid>
      {/* Bounding box for the Timeline */}
      <div
        style={{
          width: "60%",
          height: "100px",
          margin: "0 auto",
          marginTop: "20px",
          fontSize: "15px",
        }}
      >
        <HorizontalTimeline
          styles={{
            background: "#f8f8f8",
            foreground: "#1A79AD",
            outline: "#dfdfdf",
          }}
          getLabel={function (date) {
            return date;
          }}
          index={curIdx}
          indexClick={(index) => {
            setCurIdx(index);
            setPrevIdx(curIdx);
          }}
          values={data.map((checkpoint) => checkpoint.index)}
        />
      </div>
      <div
        style={{
          margin: "0 50px 30px 50px",
        }}
      >
        <ReactMarkdown>
          {data.length > 0 ? data[curIdx].question : ""}
        </ReactMarkdown>
      </div>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <div
          style={{
            marginRight: "20px",
            marginTop: "20%",
          }}
        >
          <h4>oke</h4>
          <p style={{ fontWeight: "bold", color: "green" }}>Đang làm bài</p>
          <Button variant="success">Nộp bài</Button>
        </div>
        <AceEditor
          style={{ width: "70%", boxShadow: "0 0 20px rgba(0, 0, 0, 0.5)" }}
          placeholder="Play with code !"
          value={data.length > 0 ? data[curIdx].content : ""}
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
        <div style={{ marginLeft: "20px", marginTop: "20%" }}>
          <h4>2ksoft</h4>
          <p style={{ fontWeight: "bold" }}>Đang đợi...</p>
          <Button variant="success">Nộp bài</Button>
        </div>
      </div>
    </Container>
  );
};

export default compose(withRouter, withFirebase)(Module);
