import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import CreateNote from "./CreateNote";
import APIURL from "../helpers/environment";
import DisplayDefault from "./DisplayDefault";
import Resources from "../resources/Resources";

const NotesIndex = (props) => {
  const [notes, setNotes] = useState([]);
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

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <div>
      <Switch>
        <Route exact path="/notes/display/default">
          <CreateNote fetchNotes={fetchNotes} token={props.token} />
          <DisplayDefault
            notes={notes}
            fetchNotes={fetchNotes}
            editUpdateNote={editUpdateNote}
            noteToUpdate={noteToUpdate}
            token={props.token}
          />
        </Route>
        <Route exact path="/resources">
          <Resources />
        </Route>
      </Switch>
    </div>
  );
};

export default NotesIndex;
