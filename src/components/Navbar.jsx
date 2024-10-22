import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { FaPizzaSlice, FaLock, FaSignOutAlt, FaSignInAlt, FaUserPlus, FaShoppingCart } from 'react-icons/fa';
import { Link } from "react-router-dom";

const NavigationBar = () => {
    const total = 25000;
    const token = false;
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand >
                <FaPizzaSlice /> Pizzería Mamma Mía
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link as={Link} to="/">
                        Home
                    </Nav.Link>
                    <Nav.Link as={Link} to="/registerPage">
                        <FaUserPlus /> Register
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
                            <Nav.Link as={Link} to="/login">
                                <FaSignInAlt /> Login
                            </Nav.Link>


                        </>
                    )}

                    <Nav.Link as={Link} to="/cart">
                        <FaShoppingCart /> Total: ${total.toLocaleString()}
                    </Nav.Link>

                    <Nav.Link as={Link} to="/Profile">
                        <FaUserPlus /> Profile
                    </Nav.Link>

                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavigationBar;
