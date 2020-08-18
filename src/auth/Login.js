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

const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [accounttype, setAccounttype] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("http://localhost:3000/api/login/", {
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
        console.log(data);
        props.updateToken(data.sessionToken);
      });
  };
  return (
    <div>
      <h1>Login</h1>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlfor="username">Username</Label>
          <Input
            onChange={(e) => setUsername(e.target.value)}
            name="username"
            value={username}
            type="email"
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlfor="password">Password</Label>
          <Input
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            value={password}
            minlength="5"
          />
        </FormGroup>
        <Button type="submit">Login</Button>
      </Form>
    </div>
  );
};

export default Login;
