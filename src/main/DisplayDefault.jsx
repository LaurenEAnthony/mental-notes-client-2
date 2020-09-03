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
  var arr = props.notes;
  const computeClass = (val) => {
    return classNames({
      note1: val === 0 || val % 4 === 1,
      note2: val === 1 || val % 4 === 2,
      note3: val === 2 || val % 4 === 3,
      note4: val === 3 || val % 4 === 0,
    });
  };

  const noteClass = arr.forEach((index) => {
    var val = index;
    computeClass(val);
  });

  const noteCardMapping = () => {
    return props.notes.map((note) => {
      return (
        <Col md="4" sm="6">
          <Card>
            <CardBody className={noteClass}>
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
