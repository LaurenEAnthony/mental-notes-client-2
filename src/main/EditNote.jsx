import React, { useState } from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
} from "reactstrap";
import APIURL from "../helpers/environment";

const EditNote = (props) => {
  const [editDate, setEditDate] = useState(props.noteToUpdate.date);
  const [editTime, setEditTime] = useState(props.noteToUpdate.time);
  const [editType, setEditType] = useState(props.noteToUpdate.type);
  const [editDetails, setEditDetails] = useState(props.noteToUpdate.details);
  const [editThoughts, setEditThoughts] = useState(props.noteToUpdate.thoughts);
  const [editEmotion1, setEditEmotion1] = useState(props.noteToUpdate.emotion1);
  const [editEmotion2, setEditEmotion2] = useState(props.noteToUpdate.emotion2);
  const [editEmotion3, setEditEmotion3] = useState(props.noteToUpdate.emotion3);
  const [editIntensity1, setEditIntensity1] = useState(
    props.noteToUpdate.intensity1
  );
  const [editIntensity2, setEditIntensity2] = useState(
    props.noteToUpdate.intensity2
  );
  const [editIntensity3, setEditIntensity3] = useState(
    props.noteToUpdate.intensity3
  );
  const [editSkillType, setEditSkillType] = useState(
    props.noteToUpdate.skillType
  );
  const [editSkillDetail, setEditSkillDetail] = useState(
    props.noteToUpdate.skillDetail
  );
  const [editSkillHelpful, setEditSkillHelpful] = useState(
    props.noteToUpdate.skillHelpful
  );
  const [editModal, setEditModal] = useState(false);

  const editToggle = () => setEditModal(!editModal);

  const noteUpdate = (event) => {
    event.preventDefault();
    fetch(`${APIURL}/notes/update/${props.noteToUpdate.id}`, {
      method: "PUT",
      body: JSON.stringify({
        note: {
          type: editType,
          date: editDate,
          time: editTime,
          details: editDetails,
          thoughts: editThoughts,
          emotion1: editEmotion1,
          intensity1: editIntensity1,
          emotion2: editEmotion2,
          intensity2: editIntensity2,
          emotion3: editEmotion3,
          intensity3: editIntensity3,
          skillType: editSkillType,
          skillDetail: editSkillDetail,
          skillHelpful: editSkillHelpful,
        },
      }),
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: props.token,
      }),
    }).then((res) => {
      props.fetchNotes();
    });
  };

  const deleteNote = () => {
    fetch(`${APIURL}/notes/delete/${props.noteToUpdate.id}`, {
      method: "DELETE",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: props.token,
      }),
    })
      .then(() => props.fetchNotes())
      .then({ editToggle });
  };

  return (
    <div>
      <Button onClick={editToggle}>View Details/Edit</Button>
      <Modal isOpen={editModal} toggle={editToggle}>
        <ModalHeader>Update Note</ModalHeader>
        <ModalBody>
          <Form onSubmit={noteUpdate}>
            <FormGroup>
              <Label htmlFor="date">Date & Time: </Label>
              <Input
                name="date"
                value={editDate}
                type="date"
                onChange={(e) => setEditDate(e.target.value)}
              />
              <Input
                name="time"
                value={editTime}
                type="time"
                onChange={(e) => setEditTime(e.target.value)}
              ></Input>
            </FormGroup>
            <FormGroup>
              <Label htmlFor="type">Type: </Label>
              <Input
                name="type"
                value={editType}
                type="select"
                onChange={(e) => setEditType(e.target.value)}
              >
                <option value="">Select One</option>
                <option value="Event">Event</option>
                <option value="Insight">Insight</option>
                <option value="Behavior">Behavior</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label htmlFor="details">Details: </Label>
              <Input
                name="details"
                value={editDetails}
                type="textarea"
                placeholder="Describe what happened..."
                onChange={(e) => setEditDetails(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="thoughts">Thoughts Triggered: </Label>
              <Input
                name="thoughts"
                value={editThoughts}
                type="text"
                placeholder="Describe in a sentence or two"
                onChange={(e) => setEditThoughts(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label>Emotional State:</Label>
              <FormGroup check>
                <Label htmlFor="emotion1">Before:</Label>
                <Input
                  name="emotion1"
                  value={editEmotion1}
                  type="select"
                  onChange={(e) => setEditEmotion1(e.target.value)}
                >
                  <option value="">Select One</option>
                  <option>Happy</option>
                  <option>Sad</option>
                  <option>Afraid</option>
                  <option>Angry</option>
                  <option>Surprised</option>
                  <option>Anxious/Nervous</option>
                  <option>Neutral</option>
                </Input>
                <Label htmlFor="intensity1">
                  Intensity: mild &rarr; extreme
                </Label>
                <Input
                  name="intensity1"
                  value={editIntensity1}
                  type="range"
                  min="0"
                  max="10"
                  onChange={(e) => setEditIntensity1(e.target.value)}
                ></Input>
                <Label htmlFor="emotion2">During:</Label>
                <Input
                  name="emotion2"
                  value={editEmotion2}
                  type="select"
                  onChange={(e) => setEditEmotion2(e.target.value)}
                >
                  <option value="">Select One</option>
                  <option>Happy</option>
                  <option>Sad</option>
                  <option>Afraid</option>
                  <option>Angry</option>
                  <option>Surprised</option>
                  <option>Anxious/Nervous</option>
                  <option>Neutral</option>
                </Input>
                <Label htmlFor="intensity2">
                  Intensity: mild &rarr; extreme
                </Label>
                <Input
                  name="intensity2"
                  value={editIntensity2}
                  type="range"
                  min="0"
                  max="10"
                  onChange={(e) => setEditIntensity2(e.target.value)}
                ></Input>
                <Label htmlFor="emotion3">After:</Label>
                <Input
                  name="emotion3"
                  value={editEmotion3}
                  type="select"
                  onChange={(e) => setEditEmotion3(e.target.value)}
                >
                  <option value="">Select One</option>
                  <option>Happy</option>
                  <option>Sad</option>
                  <option>Afraid</option>
                  <option>Angry</option>
                  <option>Surprised</option>
                  <option>Anxious/Nervous</option>
                  <option>Neutral</option>
                </Input>
                <Label htmlFor="intensity3">
                  Intensity: mild &rarr; extreme
                </Label>
                <Input
                  name="intensity3"
                  value={editIntensity3}
                  type="range"
                  min="0"
                  max="10"
                  onChange={(e) => setEditIntensity3(e.target.value)}
                ></Input>
              </FormGroup>
            </FormGroup>
            <FormGroup>
              <Label htmlFor="skills">Coping Skills: </Label>
              <FormGroup>
                <Input
                  name="skills"
                  value={editSkillType}
                  type="select"
                  onChange={(e) => setEditSkillType(e.target.value)}
                >
                  <option value="">Select One</option>
                  <option>Mindfulness</option>
                  <option>Thought Mapping</option>
                  <option>Distractions</option>
                  <option>Exercise</option>
                  <option>Journaling</option>
                </Input>
                <Input
                  name="skillDetail"
                  value={editSkillDetail}
                  type="textarea"
                  placeholder="Optional details"
                  onChange={(e) => setEditSkillDetail(e.target.value)}
                />
                <FormGroup check>
                  <Label>
                    <Input
                      name="skillHelpful"
                      value={editSkillHelpful}
                      type="checkbox"
                      onChange={(e) => setEditSkillHelpful(e.target.value)}
                    />
                    Helpful?
                  </Label>
                </FormGroup>
              </FormGroup>
            </FormGroup>
            <Button type="submit" onClick={editToggle}>
              Update Note
            </Button>
            <Button
              type="submit"
              color="danger"
              onClick={() => {
                deleteNote(props.noteToUpdate);
              }}
            >
              Delete Note
            </Button>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default EditNote;
