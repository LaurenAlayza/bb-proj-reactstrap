import React, { useState } from "react";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Button,
} from "reactstrap";

const navstyle = {
  color: "#474973",
  backgroundColor: "#a69cac",
  padding: "10px",
  fontFamily: "Arial",
};

const logoutstyle = {
  color: "#474973",
  backgroundColor: "#a69cac",
  padding: "10px",
  fontFamily: "Arial",
};

const font = {
  color: "#474973",
};


const Sitebar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    let newIsOpen = !isOpen;
    setIsOpen(newIsOpen);
  };

  return (
    <Navbar style={navstyle} light expand="md">
      <NavbarBrand href="/" style={font}>Polis Post</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <Button style={logoutstyle} onClick={props.clickLogout}>
              Logout
            </Button>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Sitebar;
