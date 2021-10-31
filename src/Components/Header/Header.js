import React from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, NavLink, NavItem } from 'reactstrap';

import './Header.css';
import Logo from '../../assets/logo.png';

const Header = () => {
    return (
        <div className='Navigation'>
            <Navbar dark expand='md' style={{
                backgroundColor: '#D70F64',
                height: '65px'
            }}>
                <NavbarBrand href='/' className='mr-auto ml-md-5 Brand'>
                    <img src={Logo} width='70px' height='70px' alt='Logo' />
                </NavbarBrand>
                <NavbarToggler></NavbarToggler>
                {/* <Collapse> */}
                <Nav className='mr-md-5'>
                    <NavItem>
                        <NavLink className='NavLink' href='/'>Name</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='NavLink' href='/'>Name</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='NavLink' href='/'>Name</NavLink>
                    </NavItem>
                </Nav>
                {/* </Collapse> */}
            </Navbar>
        </div>
    )
}

export default Header;
