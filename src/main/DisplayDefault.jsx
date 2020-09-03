import React from "react";
import {
  Card,
  Col,
  Row,
  CardFooter,
  CardBody,
  CardTitle,
  CardText,
} from "reactstrap";
import { classNames } from "classnames";
import EditNote from "./EditNote";

const DisplayDefault = (props) => {
  const noteCardMapping = () => {
    return props.notes.map((note) => {
      return (
        <Col md="4" sm="6">
          <Card>
            <CardBody>
              <CardTitle>{note.type}</CardTitle>
              <CardText>{note.details}</CardText>
              <EditNote
                noteToUpdate={note}
                editUpdateNote={props.editUpdateNote}
                fetchNotes={props.fetchNotes}
                token={props.token}
              />
            </CardBody>
            <CardFooter className="text-muted">
              {note.date} at {note.time}
            </CardFooter>
          </Card>
        </Col>
      );
    });
  };

  return (
    <div>
      <Row>{noteCardMapping()}</Row>
    </div>
  );
};

export default DisplayDefault;
