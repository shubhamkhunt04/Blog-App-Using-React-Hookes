import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div className="mb-5 font-weight-normal">
      <Navbar color="danger" light expand="md">
        <NavbarBrand
          className="text-white mx-2 font-weight-bold"
          href="/authors"
        >
          M.S.K.
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink className="text-white" href="/mostlikedposts">
                MostLikedPost
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="text-white" href="/mostcommentedpost">
                MostLikedComments
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
