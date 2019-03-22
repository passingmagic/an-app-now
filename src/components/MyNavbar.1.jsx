import React, { Component } from 'react'
import { Navbar, Nav, NavItem, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './MyNavbar.css'

class MyNavbar extends Component {
    render() {
        return (
            <Navbar collapseOnSelect sticky='top'>
                <Navbar.Brand>
                    <Link to='/'>onTap</Link>
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Container>
                        <Nav className='justify-content-end'>
                            <Nav.Link as={Link} eventKey='home' to='/'>Home</Nav.Link>
                            <Nav.Link as={Link} eventKey='how' to='/how'>Our MO</Nav.Link>
                            <Nav.Link as={Link} eventKey='about' to='/about'>About Us</Nav.Link>
                            <Nav.Link as={Link} eventKey='contact' to='/contact'>Contact Us</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default MyNavbar