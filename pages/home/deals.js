import {Button, Container, Navbar, Nav} from 'react-bootstrap';

function Deals() {
  return (

    <Nav fill defaultActiveKey="/home" className="home-deals">

      <Nav.Item>
        <div>
            <span className="amount">$5</span>
            <span className="off">Off</span>
        </div>
        <span className="description">On orders above $50</span>
      </Nav.Item>

      <Nav.Item>
        <div>
            <span className="amount">$15</span>
            <span className="off">Off</span>
        </div>
        <span className="description">On orders above $75</span>
      </Nav.Item>

      <Nav.Item>
        <div>
            <span className="amount">$20</span>
            <span className="off">Off</span>
        </div>
        <span className="description">On orders above $150</span>
      </Nav.Item>

      <Nav.Item>
        <div>
            <span className="amount">$30</span>
            <span className="off">Off</span>
        </div>
        <span className="description">On orders above $200</span>
      </Nav.Item>

      <Nav.Item className="deals-button-container">
        <Button variant="dark">Check out all site-wide deals</Button>
      </Nav.Item>

    </Nav>

  )
}

export default Deals