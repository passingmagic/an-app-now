import React, { Component } from 'react'
import { Navbar, Nav, NavItem, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './MyNavbar.css'
import ontaplogo from '../images/ontap.jpg'

class MyNavbar extends Component {
    render() {
        return (
            <Navbar collapseOnSelect>
                <Navbar.Brand as={Link} to="/">
                    <img
                        alt=""
                        src={ontaplogo}
                        width="100"
                        height="30"
                    />
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Container>
                        <Nav className='justify-content-end'>
                            <Nav.Link as={Link} eventKey='home' to='/'>Home</Nav.Link>
                            <Nav.Link as={Link} eventKey='how' to='/how'>Our Model</Nav.Link>
                            <Nav.Link as={Link} eventKey='about' to='/about'>About Us</Nav.Link>
                            <Nav.Link as={Link} eventKey='contact' to='/contact'>Contact Us</Nav.Link>
                            <Nav.Link as={Link} eventKey='login' to='/login'>Client Login</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar.Collapse>
            </Navbar>
        )
    }

}


export default MyNavbar