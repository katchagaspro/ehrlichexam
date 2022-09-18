import Image from "next/image";

import {Container, Navbar, Nav} from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';

function NavBar() {
  return (
    <Navbar className="main-navbar">
      
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#women">Women</Nav.Link>
            <Nav.Link href="#plus">Plus</Nav.Link>
            <Nav.Link href="#men">Men</Nav.Link>
            <Nav.Link href="#accessorie">Accessories</Nav.Link>
          </Nav>
        </Navbar.Collapse>

        <Navbar.Brand href="#home">
          <Image src="/navbar/Logo.svg" alt="Logo" width="192.51px" height="16px" />
        </Navbar.Brand>

        <Navbar.Toggle />

        <Navbar.Collapse className="justify-content-end">

            <Nav.Item>
              <Nav.Link eventKey="user">
                <span><Image src="/navbar/bx_bx-user.svg" width="20px" height="20px" alt="" className="d-inline-block" /></span>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link eventKey="shopping-bag">
                <span><Image src="/navbar/bx_bx-shopping-bag.svg" width="20px" height="20px" alt="" className="d-inline-block" /></span>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link eventKey="heart">
                <span><Image src="/navbar/bx_bx-heart.svg" width="20px" height="20px" alt="" className="d-inline-block" /></span>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link eventKey="support">
                <span><Image src="/navbar/bx_bx-support.svg" width="20px" height="20px" alt="" className="d-inline-block" /></span>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link eventKey="search">
                <span><Image src="/navbar/bx_bx-search.svg" width="20px" height="20px" alt="" className="d-inline-block" /></span>
              </Nav.Link>
            </Nav.Item>

            <Dropdown>
              <Dropdown.Toggle variant="outline-light" id="dropdown-basic">
                USD $
              </Dropdown.Toggle>
            </Dropdown>

        </Navbar.Collapse>

    </Navbar>

  )
}

export default NavBar