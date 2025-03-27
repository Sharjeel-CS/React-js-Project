import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';



const NavBar = () => {

  const cartProducts=useSelector(state=>state.cart);

  return (
    <>
      <Navbar bg="light" expand="lg" fixed="top" >
        <Container fluid>
          <Navbar.Brand href="#">Redux Toolkit</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav>
              <Navbar.Toggle />
              <Link to="/" className="me-3">Products</Link> {/* Added margin */}
            </Nav>

            <Nav className="ms-auto">
              <span>
                <Link to="/cart">My Bag {cartProducts.length}</Link>
              </span>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
