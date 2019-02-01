import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarToggler,
    Collapse,
    UncontrolledDropdown,
    DropdownMenu,
    DropdownToggle,
    DropdownItem
} from 'reactstrap';

export default class Main extends Component {
    render() {
        return (
            <Navbar className="navbar-light navbar-expand-md bg-white justify-content-center">
                <NavbarBrand href="/" className="navbar-brand d-flex w-50 mr-auto">
                    <img src="img/clipboard.png" alt="logo" className="header-logo"></img>
                </NavbarBrand>
                <NavbarToggler  data-toggle="collapse" data-target="#collapsingNavbar3">
                    <span className="navbar-toggler-icon"></span>
                </NavbarToggler>
                <Collapse className="navbar-collapse w-100" id="collapsingNavbar3">
                    <Nav className="navbar-nav w-100 justify-content-center">
                        <NavItem className="active">
                            <h1 className="header-title">Pig Travel</h1>
                        </NavItem>
                    </Nav>
                    <Nav className="navbar-nav ml-auto w-100 justify-content-end">
                        <NavItem className="header-content">
                            <NavLink href="#">Inicia Sesion</NavLink>
                        </NavItem>
                        <NavItem className="header-content">
                            <NavLink href="#">Registrate</NavLink>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                <img src="img/spain-flag.png" height="20"></img>
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                    <img src="img/spain-flag.png" height="20"></img> Español
                                </DropdownItem>
                                <DropdownItem>
                                    <img src="img/united-kingdom-flag.png" height="20"></img> English
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                </Collapse>
            </Navbar>
        );
    }
}

if (document.getElementById("header")) {
    ReactDOM.render(<Main/>, document.getElementById("header"));
}
