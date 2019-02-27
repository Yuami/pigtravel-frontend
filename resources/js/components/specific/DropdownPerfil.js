import React, {Component} from 'react'
import {DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown} from "reactstrap";
import Translate from "../../lang/Translate";
import axios from "axios";

class DropdownPerfil extends Component {
    constructor(props) {
        super(props);
        this.state = {
            foto: null
        };
    }

    componentWillMount() {
        axios.get('/api/persona/9/img').
        then((response) => {
                this.setState({foto: response.data.back+response.data.foto.path});
                console.log(response.data);
            }
        )
    }

    render() {
        return (
            <>
                <DropdownToggle className="p-0" nav caret>
                    <img src={this.state.foto} height="50px" className="userImg"/>
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