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
import APIURL from '../helpers/environment';

const updatestyle = {
  color: "#white",
  backgroundColor: "#272456",
  padding: "10px",
  fontFamily: "Arial",
};
const TemplateEdit = (props) => {
  const [editSubjLine, setEditSubjLine] = useState(
    props.templateToUpdate.subjLine 
  );
  const [editMsgBody, setEditMsgBody] = useState(
    props.templateToUpdate.msgBody
  );
  const [editKeys, setEditKeys] = useState(props.templateToUpdate.keys);
  const templateUpdate = (event, template) => {
    event.preventDefault();
    fetch(`${APIURL}/polis/temp/${props.templateToUpdate.id}`, {
      method: "PUT",
      body: JSON.stringify({
        temp: {
          subjLine: editSubjLine,
          msgBody: editMsgBody,
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
            <Label htmlFor="subjLine">Edit Subject Line</Label>
            <Input
              name="subjLine"
              value={editSubjLine}
              onChange={(e) => setEditSubjLine(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="msgBody">Edit Message Body:</Label>
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
          <Button style={updatestyle} type="submit">Update the template!</Button>
        </Form>
      </ModalBody>
    </Modal>
  );
};
export default TemplateEdit;
