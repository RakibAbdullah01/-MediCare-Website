import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './Header.css'
import logo from '../../../images/logol.png'
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const {user,logOut} = useAuth();
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand className="no-border" as={HashLink} to="/home">
                        <img src={logo} alt="" height="70px" width="200px"/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link className="mx-2" as={HashLink} to="/home">Home</Nav.Link>
                        <Nav.Link className="mx-2" as={HashLink} to="/service">Service</Nav.Link>
                        <Nav.Link className="mx-2" as={HashLink} to="/doctor">Doctors</Nav.Link>
                        <Nav.Link className="mx-2" as={HashLink} to="/appoinment">Appoinment</Nav.Link>
                        <Nav.Link className="mx-2" as={HashLink} to="/about">About</Nav.Link>
                        <Nav.Link className="mx-2" as={HashLink} to="/contact">Contact</Nav.Link>
                        {
                            (user.email)?(<button onClick={logOut} className="btn btn-info text-white rounded-pill btn-sm" >Log Out</button>
                            ):(<Nav.Link className="mx-2" as={HashLink} to="/login">Login</Nav.Link>)
                        }
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;