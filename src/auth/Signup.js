import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import {
  AvForm,
  AvField,
  AvGroup,
  AvInput,
  AvFeedback,
  AvCheckboxGroup,
  AvCheckbox,
} from "availity-reactstrap-validation";

const spanStyles = {
  color: "#474973"
};

const button = {
  backgroundColor: "#474973"
};



const Signup = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  let handleSubmit = (event) => {
    event.preventDefault();
    fetch("http://localhost:3000/api/user/", {
      method: "POST",
      body: JSON.stringify({
        user: { username: username, passwordhash: password },
      }),
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        props.updateToken(data.sessionToken);
      });
  };
  return (
    <div>
      <h1 style={spanStyles} >Sign Up</h1>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="username">Username</Label>
          <Input
            onChange={(e) => setUsername(e.target.value)}
            name="username"
            value={username}
            type="email" required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Password</Label>
          <Input
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            value={password}
            minlength="5"
          />
        </FormGroup>
        <Button type="submit" style={button}>Sign Up</Button>
      </Form>
    </div>
  );
};

export default Signup;

