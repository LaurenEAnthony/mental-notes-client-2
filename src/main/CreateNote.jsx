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
  const [type, setType] = useState("Event");
  const [details, setDetails] = useState("test details");
  const [thoughts, setThoughts] = useState("test thoughts");
  const [emotion1, setEmotion1] = useState("Sad");
  const [emotion2, setEmotion2] = useState("Sad");
  const [emotion3, setEmotion3] = useState("Sad");
  const [timing1, setTiming1] = useState("before");
  const [timing2, setTiming2] = useState("during");
  const [timing3, setTiming3] = useState("after");
  const [intensity1, setIntensity1] = useState(5);
  const [intensity2, setIntensity2] = useState(4);
  const [intensity3, setIntensity3] = useState(2);
  const [skillType, setSkillType] = useState("Exercise");
  const [skillDetail, setSkillDetail] = useState("Skill Detail");
  const [skillHelful, setSkillHelful] = useState(1);
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
          // date: date + "T" + time,
          details: details,
          thoughts: thoughts,
          emotion1: emotion1,
          timing1: timing1,
          intensity1: intensity1,
          emotion2: emotion2,
          timing2: timing2,
          intensity2: intensity2,
          emotion3: emotion3,
          timing3: timing3,
          intensity3: intensity3,
          skillType: skillType,
          skillDetail: skillDetail,
          skillHelpful: skillHelful,
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
        setTiming1("");
        setIntensity1("");
        setEmotion2("");
        setTiming2("");
        setIntensity2("");
        setEmotion3("");
        setTiming3("");
        setIntensity3("");
        setSkillType("");
        setSkillDetail("");
        setSkillHelful("");
        setActive(true);
        props.fetchNotes();
      });
  };

  return (
    <div>
      <Button onClick={toggle}>Create a Note</Button>
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
                <Label htmlFor="emotion1">
                  <Input
                    type="checkbox"
                    value={timing1}
                    onChange={(e) => setTiming1("before")}
                  />
                  Before:
                </Label>
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
                <Label htmlFor="emotion2">
                  <Input
                    type="checkbox"
                    value={timing2}
                    onChange={(e) => setTiming2(e.target.value)}
                  />
                  During:
                </Label>
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
                <Label htmlFor="emotion3">
                  <Input
                    type="checkbox"
                    value={timing3}
                    onChange={(e) => setTiming3(e.target.value)}
                  />
                  After:
                </Label>
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
                      name="skillHelful"
                      value={skillHelful}
                      type="checkbox"
                      onChange={(e) => setSkillHelful(e.target.value)}
                    />
                    Helpful?
                  </Label>
                </FormGroup>
              </FormGroup>
            </FormGroup>
            <Button type="submit">Create Note</Button>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default CreateNote;
