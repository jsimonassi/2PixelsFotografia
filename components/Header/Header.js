import React, { useState } from 'react';
import Link from 'next/link';
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
  NavbarText
} from 'reactstrap';

const Header = () => {

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);


  return (
    <div>
    <Navbar color="dark" light expand="md">
      <a><img src="images/icon.jpg" style={{maxHeight:"150px"}}></img></a>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink href="/galery">Ensaios</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/contact">Contatos</NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  </div>
  );
}

export default Header;

// const style = {
//   navbarContainer: {
//     backgroundColor: 'black',
//     width: '100%',
//     height: 'auto'
//   },
//   img: {
//     width: '150px',
//     height: '150px'
//   },
//   text: {
//     color: 'white',
//     fontFamily: 'Roboto'
//   }
// }