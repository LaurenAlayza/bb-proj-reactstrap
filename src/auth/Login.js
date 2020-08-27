import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import APIURL from '../helpers/environment';

const spanStyles = {
  color: "#474973",
};

const button = {
  backgroundColor: "#474973",
};

const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`${APIURL}/polis/user/login`, {
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
      <h1 style={spanStyles}>Login</h1>
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
        <Button type="submit" style={button}>
          Login
        </Button>
      </Form>
    </div>
  );
};

export default Login;
