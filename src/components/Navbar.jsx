import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { FaPizzaSlice, FaLock, FaSignOutAlt, FaSignInAlt, FaUserPlus, FaShoppingCart } from 'react-icons/fa';

const NavigationBar = () => {
    const total = 25000;
    const token = false;
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand href="#home">
                <FaPizzaSlice /> Pizzería
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link href="#home">
                        <FaPizzaSlice /> Home
                    </Nav.Link>

                    {token ? (
                        <>
                            <Nav.Link href="#profile">
                                <FaLock /> Profile
                            </Nav.Link>
                            <Nav.Link href="#logout">
                                <FaSignOutAlt /> Logout
                            </Nav.Link>
                        </>
                    ) : (
                        <>
                            <Nav.Link href="#login">
                                <FaSignInAlt /> Login
                            </Nav.Link>
                            <Nav.Link href="#register">
                                <FaUserPlus /> Register
                            </Nav.Link>
                        </>
                    )}

                    <Nav.Link href="#total">
                        <FaShoppingCart /> Total: ${total.toLocaleString()} 
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavigationBar;
