import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import APIURL from '../helpers/environment';
// inline styling
const spanStyles = {
  color: "#474973",
};
// inline styling
const button = {
  backgroundColor: "#474973",
};

const Signup = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [accounttype, setAccounttype] = useState("maker");

  let handleSubmit = (event) => {
    event.preventDefault();
    fetch(`${APIURL}/polis/user`, {
      method: "POST",
      body: JSON.stringify({
        user: {
          username: username,
          passwordhash: password,
          accounttype: accounttype,
        },
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
      <h1 style={spanStyles}>Sign Up</h1>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="username">Username</Label>
          <Input
            onChange={(e) => setUsername(e.target.value)}
            name="username"
            value={username}
            type="email"
            required
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
        <Button type="submit" style={button}>
          Sign Up
        </Button>
        <br />
        <br />
        <label for="usertype">Please choose a user type: </label>
        <select id="usertype">
          <optgroup label="Are you a Template Maker or User?">
            <option value="maker">Template Maker</option>
            <option value="maker">Template User</option>
          </optgroup>
        </select>
      </Form>
    </div>
  );
};

export default Signup;

//also need to add choose accounttype
//option set or checkmark change usestate, if checked usestate maker check,  cant be both.
//html functions - knows only 1 selection with option set.
