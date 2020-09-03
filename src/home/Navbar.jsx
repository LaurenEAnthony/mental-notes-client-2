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
    <div>
      <Navbar light expand="md">
        <NavbarBrand href="/">Mental Notes</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml auto" horizontal="right" navbar>
            {/* <NavItem>
              <NavLink>
                <Link to="/">Active Notes</Link>
              </NavLink>
            </NavItem> */}
            <NavItem>
              <NavLink>
                <Link to="/resources">Resources</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <Button className="logout-btn" onClick={props.clearToken}>
                Logout
              </Button>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;
