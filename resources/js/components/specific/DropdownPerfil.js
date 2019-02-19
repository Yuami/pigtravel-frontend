import React, {Component} from 'react'

import {DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown} from "reactstrap";
import Translate from "../../lang/Translate";

class DropdownPerfil extends Component {


    render() {
        return (
            <>
                <DropdownToggle className="p-0" nav caret>
                    <img src="/img/user.jpg" height="50px" className="userImg"></img>
                </DropdownToggle>
                <DropdownMenu right>
                    <a>
                        <DropdownItem>
                            <i className="fas fa-envelope"></i> <Translate type={'userDropdown'} string={'inbox'}/>
                        </DropdownItem>
                        <DropdownItem>
                            <i className="fas fa-suitcase"></i> <Translate type={'userDropdown'} string={'bookings'}/>
                        </DropdownItem>
                        <DropdownItem>
                            <i className="fas fa-user"></i> <Translate type={'userDropdown'} string={'profile'}/>
                        </DropdownItem>
                        <DropdownItem>
                            <i className="fas fa-cog"></i> <Translate type={'userDropdown'} string={'account'}/>
                    </DropdownItem>
                        <DropdownItem>
                            <i className="fas fa-sign-out-alt"></i> <Translate type={'userDropdown'} string={'exit'}/>
                        </DropdownItem>
                    </a>
                </DropdownMenu>
            </>
        )
    }
}

export default DropdownPerfil;