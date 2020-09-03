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

const CreateNote = (props) => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [type, setType] = useState("");
  const [details, setDetails] = useState("");
  const [thoughts, setThoughts] = useState("");
  const [emotion1, setEmotion1] = useState("");
  const [emotion2, setEmotion2] = useState("");
  const [emotion3, setEmotion3] = useState("");
  const [intensity1, setIntensity1] = useState(null);
  const [intensity2, setIntensity2] = useState(null);
  const [intensity3, setIntensity3] = useState(null);
  const [skillType, setSkillType] = useState("");
  const [skillDetail, setSkillDetail] = useState("");
  const [skillHelpful, setSkillHelpful] = useState(true);
  const [active, setActive] = useState(true);
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`${APIURL}/notes/create`, {
      method: "POST",
      body: JSON.stringify({
        note: {
          type: type,
          date: date,
          time: time,
          details: details,
          thoughts: thoughts,
          emotion1: emotion1,
          intensity1: intensity1,
          emotion2: emotion2,
          intensity2: intensity2,
          emotion3: emotion3,
          intensity3: intensity3,
          skillType: skillType,
          skillDetail: skillDetail,
          skillHelpful: skillHelpful,
          active: active,
        },
      }),
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: props.token,
      }),
    })
      .then((res) => res.json())
      .then((noteData) => {
        console.log(noteData);
        setDate("");
        setTime("");
        setType("");
        setDetails("");
        setThoughts("");
        setEmotion1("");
        setIntensity1(null);
        setEmotion2("");
        setIntensity2(null);
        setEmotion3("");
        setIntensity3(null);
        setSkillType("");
        setSkillDetail("");
        setSkillHelpful("");
        setActive(true);
        props.fetchNotes();
      });
  };

  return (
    <div>
      <Button className="create-btn" onClick={toggle}>
        Create a Note
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader>New Note</ModalHeader>
        <ModalBody>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label htmlFor="date">Date & Time: </Label>
              <Input
                name="date"
                value={date}
                type="date"
                onChange={(e) => setDate(e.target.value)}
              />
              <Input
                name="time"
                value={time}
                type="time"
                onChange={(e) => setTime(e.target.value)}
              ></Input>
            </FormGroup>
            <FormGroup>
              <Label htmlFor="type">Type: </Label>
              <Input
                name="type"
                value={type}
                type="select"
                onChange={(e) => setType(e.target.value)}
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
                value={details}
                type="textarea"
                placeholder="Describe what happened..."
                onChange={(e) => setDetails(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="thoughts">Thoughts Triggered: </Label>
              <Input
                name="thoughts"
                value={thoughts}
                type="text"
                placeholder="Describe in a sentence or two"
                onChange={(e) => setThoughts(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label>Emotional State:</Label>
              <FormGroup check>
                <Label htmlFor="emotion1">Before:</Label>
                <Input
                  name="emotion1"
                  value={emotion1}
                  type="select"
                  onChange={(e) => setEmotion1(e.target.value)}
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
                  value={intensity1}
                  type="range"
                  min="0"
                  max="10"
                  onChange={(e) => setIntensity1(e.target.value)}
                ></Input>
                <Label htmlFor="emotion2">During:</Label>
                <Input
                  name="emotion2"
                  value={emotion2}
                  type="select"
                  onChange={(e) => setEmotion2(e.target.value)}
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
                  value={intensity2}
                  type="range"
                  min="0"
                  max="10"
                  onChange={(e) => setIntensity2(e.target.value)}
                ></Input>
                <Label htmlFor="emotion3">After:</Label>
                <Input
                  name="emotion3"
                  value={emotion3}
                  type="select"
                  onChange={(e) => setEmotion3(e.target.value)}
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
                  value={intensity3}
                  type="range"
                  min="0"
                  max="10"
                  onChange={(e) => setIntensity3(e.target.value)}
                ></Input>
              </FormGroup>
            </FormGroup>
            <FormGroup>
              <Label htmlFor="skills">Coping Skills: </Label>
              <FormGroup>
                <Input
                  name="skills"
                  value={skillType}
                  type="select"
                  onChange={(e) => setSkillType(e.target.value)}
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
                  value={skillDetail}
                  type="textarea"
                  placeholder="Optional details"
                  onChange={(e) => setSkillDetail(e.target.value)}
                />
                <FormGroup check>
                  <Label>
                    <Input
                      name="skillHelpful"
                      value={skillHelpful}
                      type="checkbox"
                      onChange={(e) => setSkillHelpful(e.target.value)}
                    />
                    Helpful?
                  </Label>
                </FormGroup>
              </FormGroup>
            </FormGroup>
            <Button type="submit" onClick={toggle}>
              Create Note
            </Button>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default CreateNote;
