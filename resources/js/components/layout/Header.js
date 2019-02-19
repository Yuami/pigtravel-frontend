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
import Dropdown from "reactstrap/es/Dropdown";
import DropdownToggle from "react-bootstrap/es/DropdownToggle";
import DropdownMenu from "react-bootstrap/es/DropdownMenu";
import DropdownItem from "react-bootstrap/es/DropdownItem";
import DropListLangs from "../DropListLangs";
import DropdownPerfil from "../specific/DropdownPerfil";


class Header extends Component {
    constructor(props) {
        super(props);
        this.state= {
            isOpen: true,
            isLog: true,
            dropdownOpen: false
        };
        this.toggle = this.toggle.bind(this);
        this.toggleDrop=this.toggleDrop.bind(this);
    }

    toggle(){
        this.setState({isOpen: !this.state.isOpen});
    }
    toggleDrop() {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }));
    }

    renderCollapse(){
      if(this.state.isLog) {
          return (
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
          )
      } else{
          return (
              <>
              <Collapse isOpen={this.state.isOpen} className="w-100" navbar>
                  <Nav className="w-100 justify-content-center">
                      <NavItem active>
                          <h1 className="header-title"><Link to={'/'}>Pig Travel</Link></h1>
                      </NavItem>
                  </Nav>
                  <Nav className="ml-auto w-100 justify-content-end" navbar>
                      <NavItem className="header-content">
                          <NavLink href="/register">Anuncie su propiedad</NavLink>
                      </NavItem>

                      <UncontrolledDropdown className="visible-lg visible-md header-content visible-sm" nav inNavbar>
                          <DropdownPerfil/>
                      </UncontrolledDropdown>
                      <NavItem className="visible-xs">
                          <i className="fas fa-envelope"></i> <Translate type={'userDropdown'} string={'inbox'}/>
                      </NavItem>
                      <NavItem className="visible-xs">

                              <i className="fas fa-suitcase"></i> <Translate type={'userDropdown'} string={'bookings'}/>
                      </NavItem>
                      <NavItem className="visible-xs">
                              <i className="fas fa-user"></i> <Translate type={'userDropdown'} string={'profile'}/>
                      </NavItem>
                      <NavItem className="visible-xs">
                              <i className="fas fa-cog"></i> <Translate type={'userDropdown'} string={'account'}/>
                      </NavItem>
                      <NavItem className="visible-xs">
                              <i className="fas fa-sign-out-alt"></i> <Translate type={'userDropdown'} string={'exit'}/>
                      </NavItem>
                  </Nav>
              </Collapse>
                  </>
          )
          }
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
