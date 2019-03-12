import React, {Component} from 'react'
import {DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown} from "reactstrap";
import Translate from "../../lang/Translate";
import axios from "axios";
import {AuthContext} from "../../AuthContext";
import ProfileImg from "../general/ProfileImg";

class DropdownPerfil extends Component {
    constructor(props) {
        super(props);
        this.state = {
            foto: null
        };
    }

    static contextType = AuthContext;

    render() {
        return (
            <>
                <DropdownToggle className="p-0" nav caret>
                   <ProfileImg idPersona={this.context[1]} className="userImg mt-2"/>
                </DropdownToggle>
                <DropdownMenu right>
                    <DropdownItem tag="a" href="/inbox">
                        <i className="fas fa-envelope"/> <Translate type={'userDropdown'} string={'inbox'}/>
                    </DropdownItem>
                    <DropdownItem tag="a" href="/bookings">
                        <i className="fas fa-suitcase"/> <Translate type={'userDropdown'} string={'bookings'}/>
                    </DropdownItem>
                    <DropdownItem tag="a" href={"/profile/" + this.context[1] + "/personal"}>
                        <i className="fas fa-user"/> <Translate type={'userDropdown'} string={'profile'}/>
                    </DropdownItem>
                    <DropdownItem tag="a" href="/logout">
                        <i className="fas fa-sign-out-alt"/> <Translate type={'userDropdown'} string={'exit'}/>
                    </DropdownItem>
                </DropdownMenu>
            </>
        )
    }
}

export default DropdownPerfil;