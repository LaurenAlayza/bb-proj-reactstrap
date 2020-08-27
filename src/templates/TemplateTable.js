import React from "react";
import { Table, Button } from "reactstrap";
import APIURL from '../helpers/environment';

const updatestyle = {
  color: "#474973",
  backgroundColor: "#a69cac",
  padding: "10px",
  fontFamily: "Arial",
};
const deletestyle = {
  color: "#white",
  backgroundColor: "#474973",
  padding: "10px",
  fontFamily: "Arial",
};

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
      <h3>Template History</h3>
      <hr />
      <Table striped>
        <thead>
          <tr>
            <th>Temp ID#</th>
            <th>Subject Line</th>
            <th>Message Body</th>
            <th>Keywords</th>
          </tr>
        </thead>
        <tbody>{templateMapper()}</tbody>
      </Table>
    </>
  );
};

export default TemplateTable;
