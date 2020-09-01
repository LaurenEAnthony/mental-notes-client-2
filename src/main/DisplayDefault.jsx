import React from "react";
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
              <EditNote noteToUpdate={note} />
            </CardBody>
            <CardFooter className="text-muted">
              {note.date !== undefined ? note.date.split("T")[0] : <></>}
            </CardFooter>
          </Card>
        </Col>
      );
    });
  };

  return (
    <div>
      <Row>
        {noteCardMapping()}

        {/* <Col md="4" sm="6">
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
        </Col> */}
      </Row>
    </div>
  );
};

export default DisplayDefault;
