import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

const Header = () => {

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar style={{ padding: "10px", width: '100%', backgroundColor: 'rgba(77,77,77,0.6)'}} dark expand="md" fixed="top">
        <a><img src="images/icon.png" style={{ maxHeight: "60px" }} alt="icon-2pixels"></img></a>
        <NavbarToggler onClick={toggle} />
        <Collapse style={{ justifyContent: "center" }} isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink style={{ color: 'white', fontFamily: 'Sans-serif', fontWeight: 'bold'}} href="/">HOME</NavLink>
            </NavItem>
            <NavItem>
              <NavLink style={{ color: 'white', fontFamily: 'Sans-serif',  fontWeight: 'bold' }} href="/galery">GALERIA</NavLink>
            </NavItem>
            <NavItem>
              <NavLink style={{ color: 'white', fontFamily: 'Sans-serif',  fontWeight: 'bold'}} href="/contact">CONTATOS</NavLink>
            </NavItem>
            <NavItem>
              <a href='https://www.instagram.com/2pixelsfotografia/'><img src="images/ig.png" style={{ maxHeight: "35px", padding: "3px", marginLeft: '5px' }} alt="icon-2pixels"></img></a>
            </NavItem>
            <NavItem>
              <a href="https://www.facebook.com/2pixelsfotografia"><img src="images/fb.png" style={{ maxHeight: "35px", padding: "3px", marginLeft: '5px' }} alt="icon-2pixels"></img></a>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;