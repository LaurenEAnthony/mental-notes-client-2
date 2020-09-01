import React, { useState, useEffect } from "react";
// import { Button, Col, Row } from "reactstrap";
import { Route, Switch } from "react-router-dom";
import CreateNote from "./CreateNote";
import APIURL from "../helpers/environment";
import DisplayAll from "./DisplayAll";
import DisplayDefault from "./DisplayDefault";
import Navigation from "../home/Navbar";

const NotesIndex = (props) => {
  const [notes, setNotes] = useState([]);
  const [updateActive, setUpdateActive] = useState(false);
  const [noteToUpdate, setNoteToUpdate] = useState({});

  const fetchNotes = () => {
    fetch(`${APIURL}/notes/display/default`, {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: props.token,
      }),
    })
      .then((res) => res.json())
      .then((noteData) => {
        setNotes(noteData);
        console.log(noteData);
      });
  };

  const editUpdateNote = (note) => {
    setNoteToUpdate(note);
    console.log(note);
  };

  const updateOn = () => {
    setUpdateActive(true);
  };

  const updateOff = () => {
    setUpdateActive(false);
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <div>
      <Navigation clearToken={props.clearToken} />
      <CreateNote fetchNotes={fetchNotes} token={props.token} />
      <div>
        {/* <Switch>
          <Route exact path="/notes/display/default"> */}
        <DisplayDefault
          notes={notes}
          fetchNotes={fetchNotes}
          editUpdateNote={editUpdateNote}
          updateOn={updateOn}
          token={props.token}
        />
        {/* </Route> */}
        {/* <Route exact path="/notes/display/all"> */}
        {/* <DisplayAll notes={notes} fetchNotes={fetchNotes} token={props.token} /> */}
        {/* </Route> */}
        {/* </Switch> */}
      </div>
    </div>
  );
};

export default NotesIndex;
