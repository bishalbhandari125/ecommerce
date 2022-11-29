import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
// import { Container, Row, Col } from 'react-bootstrap'
import {Navbar,Nav, Container} from 'react-bootstrap'

const Header = () => {
  return (
    <header>
       <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect>
      <Container>
        <LinkContainer to ='/'>
          <Navbar.Brand href="/">ProShop</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ml-auto"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <LinkContainer to ='/cart'>
              <Nav.Link><i className="fas fa-shopping-cart"></i>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to ='/cart'>
              <Nav.Link><i className="fas fa-user"></i>Sign In</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>
  )
}

export default Header

