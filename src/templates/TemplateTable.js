import React from "react";
import { Table, Button } from "reactstrap";
import APIURL from '../helpers/environment';

const updatestyle = {
  color: "white",
  backgroundColor: "#272456",
  padding: "10px",
  fontFamily: "Arial",
};
const deletestyle = {
  color: "#white",
  backgroundColor: "#d8975a",
  padding: "10px",
  fontFamily: "Arial",
};

const fonts = {
  color: "white"
}
const fonts2 = {
  color: '#d8975a'
}
const fonts3 = {
  color: '#272456'
}

const TemplateTable = (props) => {
  const deleteTemplate = (template) => {
    fetch(`${APIURL}/polis/temp/${template.id}`, {
      method: "DELETE",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: props.token,
      }),
    }).then(() => props.fetchTemplates());
  };

  const templateMapper = () => {
    return props.templates.map((template, index) => {
      return (
        <tr key={index}>
          <th scope="row">{template.id}</th>
          <td>{template.subjLine}</td>
          <td>{template.msgBody}</td>
          <td>{template.keys}</td>
          <td>
            <Button
              style={updatestyle}
              // color="warning"
              onClick={() => {
                props.editUpdateTemplate(template);
                props.updateOn();
              }}
            >
              Update
            </Button>
            <Button
              style={deletestyle}
              // color="danger"
              onClick={() => {
                deleteTemplate(template);
              }}
            >
              Delete
            </Button>
          </td>
        </tr>
      );
    });
  };

  return (
    <>
    <div style={fonts3}>
      <h3>Template History</h3>
      <hr />
      <Table striped>
        <thead>
          <tr>
            <th style={fonts2}>Temp ID#</th>
            <th style={fonts2}>Subject Line</th>
            <th style={fonts2}>Message Body</th>
            <th style={fonts2}>Keywords</th>
          </tr>
        </thead>
        <tbody style={fonts}>{templateMapper()}</tbody>
      </Table>
      </div>
    </>
  );
};

export default TemplateTable;
