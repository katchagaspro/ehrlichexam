import Image from "next/image";

import {Container, Navbar, Nav} from 'react-bootstrap';

function SubNavBar() {
  return (
    <Nav fill defaultActiveKey="/home" className="sub-nav-bar">

      <Nav.Item>
        <Nav.Link>
          <span>
            <img
              src="/subnavbar/crown.svg"
              width="30"
              height="30"
              alt=""
              className="d-inline-block"
            />
          </span>
          <span>Exclusive Deals For VIP 2 and up!</span>
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link eventKey="new-arrivals">
          <span>
            <img
              src="/subnavbar/star.svg"
              width="30"
              height="30"
              alt=""
              className="d-inline-block"
            />
          </span>
          <span>Weekly New Arrivals</span>
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link eventKey="free-shipping">
          <span>
            <img
              src="/subnavbar/truck.svg"
              width="30"
              height="30"
              alt=""
              className="d-inline-block"
            />
          </span>
          <span>Free Shipping On Orders Over $100</span>
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link eventKey="track-order">
          <span>
            <img
              src="/subnavbar/pin.svg"
              width="30"
              height="30"
              alt=""
              className="d-inline-block"
            />
          </span>
          <span>Track Your Order</span>
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link eventKey="discount">
          <span>
            <img
              src="/subnavbar/tag.svg"
              width="30"
              height="30"
              alt=""
              className="d-inline-block"
            />
          </span>
          <span>10% Off On Your First Order!</span>
        </Nav.Link>
      </Nav.Item>

    </Nav>

  )
}

export default SubNavBar