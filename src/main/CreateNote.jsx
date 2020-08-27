import React, { useState, useEffect } from "react";
import { Button, CustomInput, Form, FormGroup, Label, Input } from "reactstrap";

const CreateNote = (props) => {
  const [date, setDate] = useState("");
  const [type, setType] = useState("");
  const [details, setDetails] = useState("");
  const [thoughts, setThoughts] = useState("");
  const [emotion1, setEmotion1] = useState("");
  const [emotion2, setEmotion2] = useState("");
  const [emotion3, setEmotion3] = useState("");
  const [timing1, setTiming1] = useState("");
  const [timing2, setTiming2] = useState("");
  const [timing3, setTiming3] = useState("");
  const [intensity1, setIntensity1] = useState("");
  const [intensity2, setIntensity2] = useState("");
  const [intensity3, setIntensity3] = useState("");
  const [skillType, setSkillType] = useState("");
  const [skillDetail, setSkillDetail] = useState("");
  const [skillHelful, setSkillHelful] = useState("");

  return (
    <Form>
      <FormGroup>
        <Label htmlFor="date">Date: </Label>
        <Input name="date" value={date} type="datetime-local" />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="type">Type: </Label>
        <Input name="type" value={type} type="select">
          <option value="Event">Event</option>
          <option value="Insight">Insight</option>
          <option value="Behavior">Behavior</option>
        </Input>
      </FormGroup>
      <FormGroup>
        <Label htmlFor="details">Details: </Label>
        <Input name="details" value={details} type="textarea" />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="thoughts">Thoughts: </Label>
        <Input name="thoughts" value={thoughts} type="textarea" />
      </FormGroup>
      <FormGroup>
        <Label>Emotional State:</Label>
        <FormGroup>
          <Label htmlFor="emotion1">
            <Input type="checkbox" value={timing1} />
            Before:
          </Label>
          <Input name="emotion1" value={emotion1} type="select">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
          </Input>
          <Label htmlFor="intensity1">Intensity: </Label>
          <Input name="intensity1" value={intensity1} type="range"></Input>
          <Label htmlFor="emotion2">
            <Input type="checkbox" value={timing2} />
            During:
          </Label>
          <Input name="emotion2" value={emotion2} type="range">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
          </Input>
          <Label htmlFor="intensity2">Intensity: </Label>
          <Input name="intensity2" value={intensity2} type="range"></Input>

          <Label htmlFor="emotion3">
            <Input type="checkbox" value={timing3} />
            After:
          </Label>
          <Input name="emotion3" value={emotion3} type="range">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
          </Input>
          <Label htmlFor="intensity3">Intensity: </Label>
          <Input name="intensity3" value={intensity3} type="range"></Input>
        </FormGroup>
      </FormGroup>
      <FormGroup>
        <Label htmlFor="skills">Coping Skills: </Label>
        <FormGroup>
          <Input name="skills" value={skillType} type="select" multiple>
            <CustomInput type="checkbox" label="Mindfulness" />
            <CustomInput type="checkbox" label="Distractions" />
            <CustomInput type="checkbox" label="Thought Mapping" />
          </Input>
          <Input name="skillDetail" value={skillDetail} type="textarea" />
          <Input
            name="skillHelful"
            value={skillHelful}
            type="switch"
            label="Helpful?"
          />
        </FormGroup>
      </FormGroup>
    </Form>
  );
};

export default CreateNote;
