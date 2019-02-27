import React, {Component} from 'react';
import {Link} from 'react-router-dom';
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
import LanguagePicker from "../LanguagePicker";
import Translate from "../../lang/Translate";
import DropdownPerfil from "../specific/DropdownPerfil";
import {AuthContext} from "../../AuthContext";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            dropdownOpen: false
        };
        this.toggle = this.toggle.bind(this);
        this.toggleDrop = this.toggleDrop.bind(this);
    }

    toggle() {
        this.setState({isOpen: !this.state.isOpen});
    }

    toggleDrop() {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }));
    }

    renderCollapse() {
        const logged = (<Collapse isOpen={this.state.isOpen} className="w-100" navbar>
            <Nav className="w-100 justify-content-center">
                <NavItem active>
                    <h1 className="header-title"><Link to={'/'}>Pig Travel</Link></h1>
                </NavItem>
            </Nav>
            <Nav className="ml-auto w-100 justify-content-end" navbar>
                <NavItem className="header-content">
                    <NavLink href="/logout">
                        <Translate string={'logout'} type={'header'}/>
                    </NavLink>
                </NavItem>
                <NavItem className="header-content">
                    <NavLink href="/register">Anuncie su propiedad</NavLink>
                </NavItem>

                <UncontrolledDropdown className="visible-lg visible-md header-content visible-sm" nav
                                      inNavbar>
                    <DropdownPerfil/>
                </UncontrolledDropdown>
                <NavItem className="visible-xs">
                    <i className="fas fa-envelope"/> <Translate type={'userDropdown'} string={'inbox'}/>
                </NavItem>
                <NavItem className="visible-xs">
                    <i className="fas fa-suitcase"/> <Translate type={'userDropdown'} string={'bookings'}/>
                </NavItem>
                <NavItem className="visible-xs">
                    <i className="fas fa-user"/> <Translate type={'userDropdown'} string={'profile'}/>
                </NavItem>
                <NavItem className="visible-xs">
                    <i className="fas fa-cog"/> <Translate type={'userDropdown'} string={'account'}/>
                </NavItem>
                <NavItem className="visible-xs">
                    <i className="fas fa-sign-out-alt"/> <Translate type={'userDropdown'} string={'exit'}/>
                </NavItem>
            </Nav>
        </Collapse>);
        const unlogged = (
            <Collapse isOpen={this.state.isOpen} className="w-100" navbar>
            <Nav className="w-100 justify-content-center">
                <NavItem active>
                    <h1 className="header-title"><Link to={'/'}>Pig Travel</Link></h1>
                </NavItem>
            </Nav>
            <Nav className="ml-auto w-100 justify-content-end" navbar>
                <NavItem className="header-content">
                    <NavLink href="/logout">
                        <Translate string={'logout'} type={'header'}/>
                    </NavLink>
                </NavItem>
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
        </Collapse>);
        return (
            <AuthContext.Consumer>{
                isAuth => {
                    return isAuth ? logged : unlogged
                }}</AuthContext.Consumer>
        )
    }

    render() {
        const log = this.renderCollapse();
        return (
            <Navbar className="justify-content-center shadow-sm" sticky="top" expand="md" color="white" light>
                <NavbarBrand href="/" className="navbar-brand d-flex w-50 mr-auto">
                    <img src="/img/clipboard.png" alt="logo" className="header-logo"/>
                </NavbarBrand>

                <NavbarToggler onClick={this.toggle}/>
                {log}
            </Navbar>
        );
    }
}

export default Header;
