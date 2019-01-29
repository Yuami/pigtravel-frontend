import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarToggler,
    Col,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Dropdown,
    Collapse,
    UncontrolledDropdown
} from 'reactstrap';

export default class Main extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            dropdownOpen: false
        };
    }

    toggle() {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }));
    }

    render() {
        return (
            <>
                <Navbar expand="md" className="header">
                    <NavbarBrand className="header-logo" href="/"><img src="img/clipboard.png" height="50"></img></NavbarBrand>
                    <NavbarToggler onClick={this.toggle}/>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <h1 className="header-title">Pig Travel</h1>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="/">Registrate</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/">Inicia Sesion</NavLink>
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
            </>
        );
    }
}

if (document.getElementById('app')) {
    ReactDOM.render(<Main/>, document.getElementById('app'));
}
