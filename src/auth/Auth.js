import React from "react";
import { Container, Row, Col } from "reactstrap";
import Signup from "./Signup";
import Login from "./Login";
import Purple from "../assets/Purple.PNG";

const Auth = (props) => {
  return (
    <div
    class="bg_image"
    style={{
      backgroundImage: 'url('+Purple+')',
      height: '100vh'
    }}>
    <Container className="auth-container">
      <Row>
        <Col md="6">
          <Signup updateToken={props.updateToken} />
        </Col>
        <Col md="6" className="login-col">
          <Login updateToken={props.updateToken} />
        </Col>
      </Row>
    </Container>
    </div>
  );
};

export default Auth;
