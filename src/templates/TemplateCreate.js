import React, { useState, useEffect } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

const TemplateCreate = (props) => {
  const [subjLine, setSubjLine] = useState("");
  const [msgBody, setMsgBody] = useState("");
  const [keys, setKeys] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/polis/temp/create", {
      method: "POST",
      body: JSON.stringify({
        temp: {
          subjLine: subjLine,
          msgBody: msgBody,
          keys: keys,
        },
      }),
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: props.token,
      }),
    })
      .then((res) => res.json())
      .then((tempData) => {
        console.log(tempData);
        setSubjLine("");
        setMsgBody("");
        setKeys("");
        props.fetchTemplates();
      });
  };

  return (
    <>
      <h3>Make a Template</h3>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="subjLine" />
          <Input
            type="text"
            name="subjLine"
            value={subjLine}
            onChange={(e) => setSubjLine(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="msgBody" />
          <Input
            type="text"
            size="3000"
            style={{height:"120px", width: "200px"}}
            name="msgBody"
            value={msgBody}
            onChange={(e) => setMsgBody(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="keys" />
          <Input
            type="text"
            name="keys"
            value={keys}
            onChange={(e) => setKeys(e.target.value)}
          />
        </FormGroup>
        <Button type="submit">Click to Submit</Button>
      </Form>
    </>
  );
};

export default TemplateCreate;
