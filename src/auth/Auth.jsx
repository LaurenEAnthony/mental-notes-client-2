import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import APIURL from "../helpers/environment";

const Auth = (props) => {
  const [isLogin, setIsLogin] = useState(true);
  const title = isLogin ? "Login" : "Sign Up!";
  const toggleButton = isLogin ? "Create Account" : "Login";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let handleSubmit = (event) => {
    event.preventDefault();
    console.log(email, password);
    if (isLogin === true) {
      fetch(`${APIURL}/user/login`, {
        method: "POST",
        body: JSON.stringify({ user: { email: email, password: password } }),
        headers: new Headers({
          "Content-Type": "application/json",
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          props.updateToken(data.sessionToken);
          console.log(data.sessionToken);
        });
    } else {
      fetch(`${APIURL}/user/create`, {
        method: "POST",
        body: JSON.stringify({ user: { email: email, password: password } }),
        headers: new Headers({
          "Content-Type": "application/json",
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          props.updateToken(data.sessionToken);
        });
    }
  };

  function toggle(e) {
    e.preventDefault();
    isLogin ? setIsLogin(false) : setIsLogin(true);
  }

  return (
    <Container className="auth-container">
      <Row>
        <Col xs={{ size: 10, offset: 1 }} md={{ size: 4, offset: 4 }}>
          <h2>{title}</h2>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label htmlFor="email">Email</Label>
              <Input
                onChange={(e) => setEmail(e.target.value)}
                name="email"
                type="email"
                value={email}
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="password">Password</Label>
              <Input
                onChange={(e) => setPassword(e.target.value)}
                name="password"
                type="password"
                minLength="5"
                value={password}
              />
            </FormGroup>
            <Button type="submit">Submit</Button>
          </Form>
          <br />
          <h6>OR</h6>
          <br />
          <Button onClick={(e) => toggle(e)}>{toggleButton}</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Auth;
