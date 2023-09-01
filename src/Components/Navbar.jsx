import React, { useState } from 'react';
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBIcon,
    MDBCollapse
} from 'mdb-react-ui-kit';

export default function Navbar() {
    const [showNavSecond, setShowNavSecond] = useState(false);

    return (
        <MDBNavbar expand='lg' light bgColor='light'>
            <MDBContainer fluid>
                <MDBNavbarBrand href='#'>Quantum</MDBNavbarBrand>
                <MDBNavbarToggler
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                    onClick={() => setShowNavSecond(!showNavSecond)}
                >
                    <MDBIcon icon='bars' fas />
                </MDBNavbarToggler>
                <MDBCollapse navbar show={showNavSecond}>
                    <MDBNavbarNav>
                        <MDBNavbarLink href='/'>
                            Home
                        </MDBNavbarLink>
                        <MDBNavbarLink href='/login'>Login</MDBNavbarLink>
                        <MDBNavbarLink href='/signup'>Register</MDBNavbarLink>
                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBContainer>
        </MDBNavbar>
    );
}