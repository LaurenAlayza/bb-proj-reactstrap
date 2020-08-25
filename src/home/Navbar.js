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

import { Route, Link, Switch } from "react-router-dom";

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
    <header>
      <Navbar style={navstyle} light expand="md">
        <NavbarBrand href="/" style={font}>
          Polis Post
        </NavbarBrand>
        <div className="sitebar-list-styling">
          <ul className="sitebar-list list-unstyled">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
          </ul>
        </div>

        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <Button onClick={props.clearToken}>Logout</Button>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </header>
  );
};

export default Sitebar;
