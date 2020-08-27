import React, { useState, useEffect } from "react";
import {
  Card,
  Button,
  Col,
  Row,
  CardFooter,
  CardBody,
  CardTitle,
  CardText,
} from "reactstrap";
import CreateNote from "./CreateNote";

const NotesIndex = (props) => {
  const [notes, setNotes] = useState([]);
  const fetchNotes = () => {
    fetch("http://localhost:3000/notes/display/default", {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: props.token,
      }),
    })
      .then((res) => res.json())
      .then((noteData) => {
        setNotes(noteData);
      });
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <div>
      <CreateNote />
      <div>
        <Row>
          <Col md="4" sm="6">
            <Card>
              <CardBody>
                <CardTitle>Type of Note</CardTitle>
                <CardText>This is where the text snippet will go...</CardText>
                <Button>View Details</Button>
              </CardBody>
              <CardFooter className="text-muted">Date & Time Info</CardFooter>
            </Card>
          </Col>
          <Col md="4" sm="6">
            <Card>
              <CardBody>
                <CardTitle>Type of Note</CardTitle>
                <CardText>This is where the text snippet will go...</CardText>
                <Button>View Details</Button>
                <Button>Archive</Button>
              </CardBody>
              <CardFooter className="text-muted">Date & Time Info</CardFooter>
            </Card>
          </Col>
          <Col md="4" sm="6">
            <Card>
              <CardBody>
                <CardTitle>Type of Note</CardTitle>
                <CardText>This is where the text snippet will go...</CardText>
                <Button>View Details</Button>
              </CardBody>
              <CardFooter className="text-muted">Date & Time Info</CardFooter>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default NotesIndex;
