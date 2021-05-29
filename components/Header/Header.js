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
    <Navbar style={{padding: "10px", position: 'fixed', top: '0px', width: '100%'}} dark expand="md">
      <a><img src="images/icon.png" style={{maxHeight:"60px"}} alt = "icon-2pixels"></img></a>
      <NavbarToggler onClick={toggle} />
      <Collapse style={{justifyContent: "center"}} isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar>
        <NavItem>
            <NavLink style={{color: 'white', fontFamily: 'sans-serif', fontWeight: 'bold'}} href="/">INÍCIO</NavLink>
          </NavItem>
          <NavItem>
            <NavLink style={{color: 'white', fontFamily: 'sans-serif', fontWeight: 'bold'}}   href="/galery">ENSAIOS</NavLink>
          </NavItem>
          <NavItem>
            <NavLink style={{color: 'white', fontFamily: 'sans-serif', fontWeight: 'bold'}}   href="/contact">CONTATOS</NavLink>
          </NavItem>
          <NavItem>
            <a href='https://www.instagram.com/2pixelsfotografia/'><img src="images/ig.png" style={{maxHeight:"35px", padding: "3px", marginLeft: '5px'}} alt = "icon-2pixels"></img></a>
          </NavItem>
          <NavItem>
            <a href="https://www.facebook.com/2pixelsfotografia"><img src="images/fb.png" style={{maxHeight:"35px", padding: "3px", marginLeft: '5px'}} alt = "icon-2pixels"></img></a>
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