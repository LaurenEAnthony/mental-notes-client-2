import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavLink,
  NavItem,
  Button,
} from "reactstrap";

const Navigation = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    let newIsOpen = !isOpen;
    setIsOpen(newIsOpen);
  };

  return (
    <>
      <Navbar dark expand="md">
        <NavbarBrand href="/notes/display/default">Mental Notes</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml auto" navbar>
            <NavItem>
              <NavLink>
                <Link to="/notes/display/default">Active Notes</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link to="/resources">Resources</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <Button onClick={props.clearToken}>Logout</Button>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </>
  );
};

export default Navigation;
