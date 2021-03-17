import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import {NavLink as NavLinkRouter} from 'react-router-dom';

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
	  <NavLinkRouter to="/" exact >
        <NavbarBrand>MokaPot</NavbarBrand>
	  </NavLinkRouter>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="">GitHub</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Option 1
                </DropdownItem>
                <DropdownItem>
                  Option 2
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
	  <NavLink>
	  <NavLinkRouter to="/login">Login</NavLinkRouter>
	  </NavLink>
	  <NavLink>
	  <NavLinkRouter to="/join">Join</NavLinkRouter>
	  </NavLink>
	  </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;

