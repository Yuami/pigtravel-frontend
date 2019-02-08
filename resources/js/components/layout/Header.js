import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import ReactDOM from 'react-dom';
import {LocaleContext} from "../../LocaleContext";
import PropTypes from 'prop-types';
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarToggler,
    Collapse,
    UncontrolledDropdown
} from 'reactstrap';
import Col from "reactstrap/es/Col";
import LanguagePicker from "../LanguagePicker";
import Translate from "../../lang/Translate";


class Header extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
    }


    state= {
        isOpen: false
    };

    toggle(){
        this.setState({isOpen: !this.state.isOpen});
    }

    render() {
        return (
            <Navbar className="justify-content-center shadow-lg" sticky="top" expand="md" color="white" light>
                <NavbarBrand href="/" className="navbar-brand d-flex w-50 mr-auto">
                    <img src="img/clipboard.png" alt="logo" className="header-logo"/>
                </NavbarBrand>

                <NavbarToggler onClick={this.toggle}/>

                <Collapse isOpen={this.state.isOpen} className="w-100" navbar>
                    <Nav className="w-100 justify-content-center">
                        <NavItem active>
                            <h1 className="header-title"><Link to={'/'}>Pig Travel</Link></h1>
                        </NavItem>
                    </Nav>
                    <Nav className="ml-auto w-100 justify-content-end" navbar>
                        <NavItem className="header-content">
                            <NavLink href="/login"><Translate string={'login'} type={'header'}/></NavLink>
                        </NavItem>
                        <NavItem className="header-content">
                            <NavLink href="/register"><Translate string={'register'} type={'header'}/></NavLink>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar>
                                <LanguagePicker changeLanguage={this.props.changeLanguage}/>
                        </UncontrolledDropdown>
                    </Nav>
                </Collapse>
            </Navbar>
        );
    }
}

export default Header;
