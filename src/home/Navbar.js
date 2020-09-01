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
  color: "white",
  backgroundColor: "#d8975a",
  padding: "10px",
  fontFamily: "Arial",
};

const logoutstyle = {
  color: "white",
  backgroundColor: "#272456",
  padding: "10px",
  fontFamily: "Arial",
};

const font = {
  color: "white",
};

const ulstyle = {
  display: "inline",
  fontFamily: "Arial",
  color: "#474973",
  padding: "8px"
}

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
          <ul className="sitebar-list list-unstyled" style={ulstyle}>
            <li style={ulstyle}>
              <Link to="/">Home</Link>
            </li>
            <li style={ulstyle}>
              <Link to="/about">About</Link>
            </li>
            <li style={ulstyle}>
              <Link to="/blog">Blog</Link>
            </li>
          </ul>
        </div>

        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <Button style={logoutstyle}onClick={props.clearToken}>Logout</Button>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </header>
  );
};

export default Sitebar;
