import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import TemplateCreate from "./TemplateCreate";
import TemplateTable from "./TemplateTable";
import TemplateEdit from "./TemplateEdit";
import APIURL from "../helpers/environment";
import Purple from "../assets/Purple.PNG";



const TemplateIndex = (props) => {
  const [templates, setTemplates] = useState([]);
  const [updateActive, setUpdateActive] = useState(false);
  const [templateToUpdate, setTemplateToUpdate] = useState({});
  useEffect(() => {
    console.log(templateToUpdate);
  }, [templateToUpdate]);

  const fetchTemplates = () => {
    fetch(`${APIURL}/polis/temp`, {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: props.token,
      }),
    })
      .then((res) => res.json())
      .then((tempData) => {
        setTemplates(tempData);
      });
  };
  const editUpdateTemplate = (template) => {
    setTemplateToUpdate(template);
    console.log(template);
  };
  const updateOn = () => {
    setUpdateActive(true);
  };
  const updateOff = () => {
    setUpdateActive(false);
  };
  useEffect(() => {
    fetchTemplates();
  }, []);

  return (
    <div
    class="bg_image"
    style={{
      backgroundImage: 'url('+Purple+')',
      height: '100vh'
    }}>
    <Container>
      <Row>
        <Col md="3">
          <TemplateCreate fetchTemplates={fetchTemplates} token={props.token} />
        </Col>
        <Col md="9">
          <TemplateTable
            templates={templates}
            editUpdateTemplate={editUpdateTemplate}
            updateOn={updateOn}
            fetchTemplates={fetchTemplates}
            token={props.token}
          />
        </Col>
        <Col>
          {updateActive ? (
            <TemplateEdit
              templateToUpdate={templateToUpdate}
              updateOff={updateOff}
              token={props.token}
              fetchTemplates={fetchTemplates}
            />
          ) : (
            <></>
          )}
        </Col>
      </Row>
    </Container>
    </div>
  );
};
export default TemplateIndex;
