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
const TemplateEdit = (props) => {
  const [editSubjLine, setEditSubjLine] = useState(
    props.templateToUpdate.subjLine
  );
  const [editMsgBody, setEditMsgBody] = useState(
    props.templateToUpdate.definition
  );
  const [editKeys, setEditKeys] = useState(props.templateToUpdate.result);
  const templateUpdate = (event, template) => {
    event.preventDefault();
    fetch(`http://localhost:3000/polis/temp/${props.templateToUpdate.id}`, {
      method: "PUT",
      body: JSON.stringify({
        temp: {
          template: editSubjLine,
          subjLine: editMsgBody,
          keys: editKeys,
        },
      }),
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: props.token,
      }),
    }).then((res) => {
      props.fetchTemplates();
      props.updateOff();
    });
  };
  return (
    <Modal isOpen={true}>
      <ModalHeader>Make a Template</ModalHeader>
      <ModalBody>
        <Form onSubmit={templateUpdate}>
          <FormGroup>
            <Label htmlFor="result">Edit Subject Line</Label>
            <Input
              name="subjLine"
              value={editSubjLine}
              onChange={(e) => setEditSubjLine(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="MsgBody">Edit Message Body:</Label>
            <Input
              name="msgBody"
              value={editMsgBody}
              onChange={(e) => setEditMsgBody(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="keys">Edit Keywords:</Label>
            <Input
              type="search"
              name="keys"
              value={editKeys}
              onChange={(e) => setEditKeys(e.target.value)}
            />
          </FormGroup>
          <Button type="submit">Update the template!</Button>
        </Form>
      </ModalBody>
    </Modal>
  );
};
export default TemplateEdit;
