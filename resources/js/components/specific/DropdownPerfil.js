import React, {Component} from 'react'

import {DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown} from "reactstrap";
import Translate from "../../lang/Translate";

class DropdownPerfil extends Component {


    render() {
        return (
            <>
                <DropdownToggle className="p-0" nav caret>
                    <img src="/img/user.jpg" height="50px" className="userImg"/>
                </DropdownToggle>
                <DropdownMenu right>
                    <a>
                        <DropdownItem>
                            <i className="fas fa-envelope"/> <Translate type={'userDropdown'} string={'inbox'}/>
                        </DropdownItem>
                        <DropdownItem>
                            <i className="fas fa-suitcase"/> <Translate type={'userDropdown'} string={'bookings'}/>
                        </DropdownItem>
                        <DropdownItem>
                            <i className="fas fa-user"/> <Translate type={'userDropdown'} string={'profile'}/>
                        </DropdownItem>
                        <DropdownItem>
                            <i className="fas fa-cog"/> <Translate type={'userDropdown'} string={'account'}/>
                    </DropdownItem>
                        <DropdownItem>
                            <i className="fas fa-sign-out-alt"/> <Translate type={'userDropdown'} string={'exit'}/>
                        </DropdownItem>
                    </a>
                </DropdownMenu>
            </>
        )
    }
}

export default DropdownPerfil;